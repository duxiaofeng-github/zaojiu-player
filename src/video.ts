import {BaseElement, VideoElement} from './interface';
import {PlayerEvent, PlayerEventType, Option, SourceOption, VideoSourceChangeEventDetail} from './model';
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/first';
import {createHTMLVideoElement} from "./html";
import {canPlayTypeByFlash, createElementByString, IS_SUPPORT_FLASH, isRtmp} from "./utils";
import {ZaojiuPlayer} from "./player";

const styles = require('./player.scss');

const videoEvents = ['ready', 'abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'encrypted', 'ended', 'interruptbegin', 'interruptend', 'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting'];

const VideoPlayerTemplate = `
  <div class="${styles.video}"></div>
`;

export class VideoPlayer {
  el: VideoElement;
  containerEl: HTMLElement;
  currentIndex: number;
  srcArray: (SourceOption | MediaSource)[] = [];
  private container: BaseElement;
  private opt: Option;
  private event$: Observable<PlayerEvent>;
  private eventSource: Subject<PlayerEvent>;
  private eventSub: Subscription;
  private eventHandler = (e: Event) => this.handleEvent(e);
  private rendered: boolean;

  constructor(container: BaseElement, opt: Option, eventSource: Subject<PlayerEvent>, event$: Observable<PlayerEvent>) {
    this.container = container;
    this.opt = opt;
    this.eventSource = eventSource;
    this.event$ = event$;
    this.containerEl = createElementByString(VideoPlayerTemplate).item(0) as HTMLElement;
    this.bindEvent();
  }

  setSrc(playList: (SourceOption | MediaSource)[][]) {
    if (!playList.length) return;

    const srcArray = playList[0];
    if (!srcArray.length) return;

    this.srcArray = [];
    for (let item of srcArray) {
      this.srcArray.push(item);
    }

    this.currentIndex = 0;
    const currentSrc = this.srcArray && this.srcArray.length ? this.srcArray[this.currentIndex] : null;
    const e = new PlayerEvent(PlayerEventType.SourceChange, new VideoSourceChangeEventDetail(this.srcArray, this.currentIndex));
    this.eventSource.next(e);
    this.setVideoSrc(currentSrc);
  }

  getSrc(): (SourceOption | MediaSource)[] {
    return this.srcArray;
  }

  switchSrc(index: number) {
    if (index < 0 || index > this.srcArray.length - 1) throw new Error('invalid source index');

    this.currentIndex = index;
    const currentSrc = this.srcArray[this.currentIndex];
    const e = new PlayerEvent(PlayerEventType.SourceChange, new VideoSourceChangeEventDetail(this.srcArray, this.currentIndex));
    this.eventSource.next(e);

    const currentTimeCache = this.el ? this.el.currentTime : 0;
    this.setVideoSrc(currentSrc);
    this.event$.filter(e => e.type === 'loadedmetadata').first().subscribe(e => {
      if (currentSrc instanceof SourceOption && !isRtmp(currentSrc)) this.el.currentTime = currentTimeCache;
      this.el.play();
    });
  }

  private bindEvent() {
    this.eventSub = this.event$.filter(e => e.type === PlayerEventType.RetryPlay).subscribe(e => {
      if (!this.el) return;

      const srcCache = this.el.src;
      const currentTime = this.el.currentTime;
      this.el.src = null;

      setTimeout(() => {
        this.el.src = srcCache;
        this.el.currentTime = currentTime;
        this.el.play();
      });
    });
  }

  private setVideoSrc(src: SourceOption | MediaSource) {
    if (!src) return;

    const customEvent = new PlayerEvent('reset', src);
    this.eventSource.next(customEvent);

    this.el = null;
    this.containerEl.innerHTML = '';

    if (src instanceof SourceOption) {
      if(document.createElement('video').canPlayType(src.minetype)) {
        this.el = createHTMLVideoElement();
        this.onVideoEvent();
        this.el.src = src.src;
      } else if (IS_SUPPORT_FLASH && canPlayTypeByFlash(src.minetype) && ZaojiuPlayer.FlashVideo) {
        this.el = new ZaojiuPlayer['FlashVideo'](this.opt);
        this.onVideoEvent();
        this.el.src = src;
      } else {
        const customEvent = new PlayerEvent('error', MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED);
        this.eventSource.next(customEvent);
        console.error(`can not play src: ${src.src}, mimetype: ${src.minetype}.`);
      }
    } else {
      this.el = createHTMLVideoElement();
      this.onVideoEvent();
      this.el.src = URL.createObjectURL(src);
    }

    if (this.el) {
      this.el.autoplay = this.opt.autoplay;
      this.el.preload = this.opt.preload;
      this.el.loop = this.opt.loop;

      if (this.el instanceof HTMLVideoElement) {
        this.containerEl.appendChild(this.el as HTMLElement);
        // html video has no ready
        const event = new CustomEvent('ready', null);
        (this.el as HTMLElement).dispatchEvent(event);
      } else {
        this.containerEl.appendChild((this.el as any).el);
      }
    }

    return;
  }

  private onVideoEvent() {
    videoEvents.forEach((eventKey) => {
      if (this.el) this.el.addEventListener(eventKey, this.eventHandler);
    });
  }

  private offVideoEvent() {
    videoEvents.forEach((eventKey) => {
      if (this.el) this.el.removeEventListener(eventKey, this.eventHandler);
    });
  }

  private handleEvent(e: Event) {
    const eventKey = e.type;
    if (eventKey !== 'error') {
      const detail = e instanceof PlayerEvent ? (e as PlayerEvent).detail : e;
      const customEvent = new PlayerEvent(eventKey, detail);
      this.eventSource.next(customEvent);
    } else if (this.el.error && this.el.error.code) {
      this.eventSource.next(new PlayerEvent(eventKey, this.el.error.code));
    }
  }

  render() {
    if (this.rendered) throw new Error('video already rendered');

    this.container.el.appendChild(this.containerEl);

    this.rendered = true;
  }

  destroy() {
    if (!this.rendered) throw new Error('video haven\'t render');

    this.containerEl.remove();

    if (this.eventSub) this.eventSub.unsubscribe();

    this.rendered = false;
  }
}
