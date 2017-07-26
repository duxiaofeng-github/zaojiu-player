import {
  createElementByString, getTouchTarget, HAS_MOUSE_EVENT, IS_ANDROID, IS_IOS, IS_SUPPORT_MSE, isRtmp, parsePercent,
  secondToMMSS
} from "./utils";
import {BaseElement} from "./interface";
import {
  ControlsOption, PlayerEvent, PlayerEventType, FullScreenApi, Language, NetworkState, Option, ReadyState,
  SourceOption, VideoErrorType,
  VideoSourceChangeEventDetail
} from "./model";
import {ZaojiuPlayer} from "./player";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {VideoPlayer} from "./video";
const styles = require('./player.scss');

const bigPlayBtnTemplate = `
  <svg class="${styles.bigPlay}" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 30.006C0 46.582 13.44 60 30 60c16.56 0 30-13.43 30-30.006S46.56 0 30 0C13.44 0 0 13.43 0 30.006z" id="b"/><filter x="-6.2%" y="-6.2%" width="112.5%" height="112.5%" filterUnits="objectBoundingBox" id="a"><feMorphology radius=".75" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/><feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.563190901 0 0 0 0 0.563190901 0 0 0 0 0.563190901 0 0 0 1 0" in="shadowBlurOuter1"/></filter></defs><g fill="none" fill-rule="evenodd"><g transform="translate(3 3)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use stroke="#FFF" stroke-width="1.5" fill-opacity=".3" fill="#FFF" xlink:href="#b"/></g><path d="M29.257 20.7c-.215-.24-.526-.395-.872-.395-.25 0-.49.084-.682.215-.06.036-.108.084-.155.132-.287.287-.395.682-.323 1.052V44.32c-.072.37.036.765.323 1.052.454.454 1.195.454 1.65 0L44.18 33.855c.227-.227.347-.538.335-.85 0-.31-.108-.61-.335-.848L29.257 20.7z" fill="#FFF"/></g></svg>
`;

export class BigPlayBtnControl implements BaseElement {
  el: HTMLElement;
  private container: BaseElement;
  private video: VideoPlayer;
  private event$: Observable<PlayerEvent>;
  private eventSub: Subscription;
  private rendered: boolean;

  constructor(container: BaseElement, video: VideoPlayer, event$: Observable<PlayerEvent>) {
    this.container = container;
    this.video = video;
    const elements = createElementByString(bigPlayBtnTemplate);
    this.el = elements.item(0) as HTMLElement;
    this.event$ = event$;
    this.bindEvent();
  }

  private bindEvent() {
    this.eventSub = this.event$.subscribe(e => {
      if (e.type === 'play') {
        this.hide();
      } else if (e.type === 'reset') {
        this.hide();
      } else if (e.type === 'ready' || e.type === 'error') {
        this.show();
      }
    });

    this.el.addEventListener('click', () => {
      this.hide();
      if (this.video.el) this.video.el.play();
    });
  }

  private hide() {
    this.el.style.display = 'none';
  }

  private show() {
    this.el.style.display = 'block';
  }

  render() {
    if (this.rendered) throw new Error('big play btn control already rendered');

    this.container.el.appendChild(this.el);

    this.rendered = true;
  }

  destroy() {
    if (!this.rendered) throw new Error('big play btn control haven\'t render');

    this.el.remove();
    if (this.eventSub) this.eventSub.unsubscribe();

    this.rendered = false;
  }
}

const errorTemplate = `
  <div class="${styles.error}">
    <svg class="${styles.errorIcon}" viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg"><path d="M45.07 36.303L24.814 1.217C24.384.472 23.588.012 22.727.012c-.86 0-1.657.46-2.088 1.205L.342 36.372c-.43.746-.43 1.665 0 2.41.43.746 1.226 1.206 2.087 1.206h40.594c1.332 0 2.41-1.08 2.41-2.41 0-.47-.133-.906-.364-1.275zm-20.275-3.67c0 1.14-.926 2.067-2.068 2.067-1.14 0-2.067-.926-2.067-2.068v-.066c0-1.142.926-2.067 2.067-2.067 1.142 0 2.068.924 2.068 2.066v.066zm0-7.554c0 1.14-.926 2.066-2.068 2.066-1.14 0-2.067-.926-2.067-2.067V14.085c0-1.14.926-2.067 2.067-2.067 1.142 0 2.068.925 2.068 2.066v10.992z" fill-rule="nonzero" fill="#E1E1E1"/></svg>
    <div class="${styles.errorMessage}"></div>
  </div>
`;

const errorMessageTemplate = {
  [VideoErrorType.EnvError]: `Video type is not support by current browser`,
  [VideoErrorType.VideoSourceError]: `Fetch video data failed, please <a class="retry">retry play</a>`,
  [VideoErrorType.NetworkError]: `Network error, please check the network configuration and <a class="retry">retry play</a>`,
  [VideoErrorType.VideoDecodeError]: `Video decode error`,
  [VideoErrorType.CrossDomainError]: `Fetch video data failed`,
  [VideoErrorType.Others]: `Something goes wrong, please <a class="retry">retry play</a>`,
};

export class ErrorControl implements BaseElement {
  el: HTMLElement;
  private container: BaseElement;
  private video: VideoPlayer;
  private errorMessageEl: HTMLElement;
  private rendered: boolean;
  private lang: Language;
  private event$: Observable<PlayerEvent>;
  private eventSource: Subject<PlayerEvent>;
  private eventSub: Subscription;

  constructor(container: BaseElement, video: VideoPlayer, lang: Language, event$: Observable<PlayerEvent>, eventSource: Subject<PlayerEvent>) {
    this.container = container;
    const elements = createElementByString(errorTemplate);
    this.el = elements.item(0) as HTMLElement;
    this.errorMessageEl = this.el.childNodes.item(1) as HTMLElement;
    this.video = video;
    this.lang = lang;
    this.event$ = event$;
    this.eventSource = eventSource;
    this.hide();
    this.bindEvent();
  }

  private bindEvent() {
    this.eventSub = this.event$.subscribe((e) => {
      if (e.type === 'error') {
        this.errorMessageEl.innerHTML = '';
        let msgTemplate = '';

        switch (e.detail) {
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            msgTemplate = errorMessageTemplate[VideoErrorType.EnvError];

            if (this.video.el && this.video.el.networkState === NetworkState.NETWORK_NO_SOURCE) {
              msgTemplate = errorMessageTemplate[VideoErrorType.NetworkError];
            }
            break;
          case MediaError.MEDIA_ERR_ABORTED:
          case MediaError.MEDIA_ERR_NETWORK:
            msgTemplate = errorMessageTemplate[VideoErrorType.NetworkError];
            break;
          case MediaError.MEDIA_ERR_DECODE:
            msgTemplate = errorMessageTemplate[VideoErrorType.VideoDecodeError];
            break;
          default:
            msgTemplate = errorMessageTemplate[VideoErrorType.Others];
        }

        this.errorMessageEl.innerHTML = this.lang.translate(msgTemplate);
        this.el.style.display = 'flex';
      } else if (e.type === 'play') {
        this.hide();
      }
    });

    this.errorMessageEl.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.className === 'retry') {
        this.hide();
        this.eventSource.next(new PlayerEvent(PlayerEventType.RetryPlay, null));
        e.stopPropagation();
      }
    });
  }

  private hide() {
    this.el.style.display = 'none';
  }

  render() {
    if (this.rendered) throw new Error('error control already rendered');

    this.container.el.appendChild(this.el);

    this.rendered = true;
  }

  destroy() {
    if (!this.rendered) throw new Error('error control haven\'t render');

    this.el.remove();
    if (this.eventSub) this.eventSub.unsubscribe();

    this.rendered = false;
  }
}

const loadingTemplate = `<div class="${styles.loading}"></div>`;

export class LoadingControl implements BaseElement {
  el: HTMLElement;
  private video: VideoPlayer;
  private container: BaseElement;
  private rendered: boolean;
  private loadingMonitor: any;
  private event$: Observable<PlayerEvent>;
  private eventSource: Subject<PlayerEvent>;
  private eventSub: Subscription;
  private isPlayed: boolean;

  constructor(container: BaseElement, video: VideoPlayer, event$: Observable<PlayerEvent>, eventSource: Subject<PlayerEvent>) {
    this.container = container;
    const elements = createElementByString(loadingTemplate);
    this.el = elements.item(0) as HTMLElement;
    this.video = video;
    this.event$ = event$;
    this.eventSource = eventSource;
    this.bindEvent();
    this.setLoadingMonitor();
  }

  private bindEvent() {
    this.eventSub = this.event$.subscribe((e) => {
      switch (e.type) {
        case PlayerEventType.RetryPlay:
          this.setLoadingMonitor();
          break;
        case 'ended':
          this.isPlayed = false;
          break;
        case 'playing':
          this.isPlayed = true;
          break;
      }
    });
  }

  private setLoadingMonitor() {
    let lastPostion = -1;
    let lastStuckTime = -1;
    let mediaErrorFired = false;

    this.loadingMonitor = setInterval(() => {
      if (!this.video.el) return;

      const isPlaying = !this.video.el.paused && !this.video.el.ended;
      const currentTime = this.video.el.currentTime;
      const hasMediaError = !!this.video.el.error;
      const isStuck = this.isPlayed && lastPostion === currentTime;
      const isStuckTooLong = this.isPlayed && lastStuckTime !== -1 && lastStuckTime + 2 * 60 * 1000 < (new Date).getTime(); // 卡住时间超过2分钟默认网络出错
      const isNeedLoading = isStuck && !isStuckTooLong && !hasMediaError;

      if (isPlaying) {
        if (lastPostion !== currentTime) {
          lastStuckTime = -1;
        }

        if (lastPostion === -1 || lastPostion !== currentTime) {
          lastPostion = currentTime;
        }

        if (isStuck && lastStuckTime === -1) {
          lastStuckTime = (new Date).getTime();
        }
      } else {
        if (
          (this.video.el.readyState === ReadyState.HAVE_METADATA || this.video.el.readyState === ReadyState.HAVE_CURRENT_DATA) &&
          this.video.el.networkState === NetworkState.NETWORK_LOADING) {
          if (lastStuckTime === -1) lastStuckTime = (new Date).getTime();
        } else {
          lastStuckTime = -1;
        }
      }

      if (isNeedLoading) {
        this.el.style.display = 'block';
      } else {
        this.el.style.display = 'none';
      }

      if (hasMediaError && !mediaErrorFired) {
        this.eventSource.next(new PlayerEvent('error', this.video.el.error.code));
        this.video.el.pause();
        mediaErrorFired = true;
      }

      if (isStuckTooLong) {
        this.eventSource.next(new PlayerEvent('error', MediaError.MEDIA_ERR_NETWORK));
        this.video.el.pause();
      }
    }, 500);
  }

  render() {
    if (this.rendered) throw new Error('loading control already rendered');

    this.container.el.appendChild(this.el);

    this.rendered = true;
  }

  destroy() {
    if (!this.rendered) throw new Error('loading control haven\'t render');

    this.el.remove();
    if (this.eventSub) this.eventSub.unsubscribe();

    this.rendered = false;
  }
}

const playPauseBtnTemplate = `
  <div class="${styles.playPauseBtns} ${styles.toolBarBtns} ${styles.toolBarIcons}">
    <div class="${styles.playBtn} ${styles.toolBarBtn}"><svg viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg"><path d="M.55 19.954c-.248.135-.55-.044-.55-.326V.368C0 .09.304-.09.55.05l16.848 9.474c.51.286.503 1.018-.01 1.296L.55 19.954z" fill-rule="evenodd"/></svg></div>
    <div class="${styles.pauseBtn} ${styles.toolBarBtn}"><svg width="13" height="18" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h3v18H0V0zm10 0h3v18h-3V0z" fill-rule="evenodd"/></svg></div>
  </div>
`;

export class PlayPauseBtnControl implements BaseElement {
  el: HTMLElement;
  private video: VideoPlayer;
  private container: BaseElement;
  private playBtnEl: HTMLElement;
  private pauseBtnEl: HTMLElement;
  private rendered: boolean;
  private event$: Observable<PlayerEvent>;
  private eventSub: Subscription;

  constructor(container: BaseElement, video: VideoPlayer, event$: Observable<PlayerEvent>) {
    this.container = container;
    const elements = createElementByString(playPauseBtnTemplate);
    this.el = elements.item(0) as HTMLElement;
    this.event$ = event$;
    this.playBtnEl = this.el.childNodes.item(0) as HTMLElement;
    this.pauseBtnEl = this.el.childNodes.item(1) as HTMLElement;
    this.video = video;
    this.bindEvent();
  }

  private bindEvent() {
    this.el.addEventListener('click', () => {
      if (!this.video.el) return;
        this.resetBtn(!this.video.el.paused);
        this.toggle();
    });

    this.eventSub = this.event$.subscribe(e => {
      switch (e.type) {
        case 'ended':
        case 'pause':
          this.resetBtn(false);
          break;
        case 'playing':
          this.resetBtn(true);
          break;
      }
    });
  }

  toggle() {
    if (!this.video.el) return;

    if (this.video.el.paused) {
      this.video.el.play();
    } else {
      this.video.el.pause();
    }
  }

  private resetBtn(isPlaying: boolean) {
    if (isPlaying) {
      this.playBtnEl.style.display = 'none';
      this.pauseBtnEl.style.display = 'block';
    } else {
      this.pauseBtnEl.style.display = 'none';
      this.playBtnEl.style.display = 'block';
    }
  }

  render() {
    if (this.rendered) throw new Error('play btn already rendered');

    this.container.el.appendChild(this.el);

    this.rendered = true;
  }

  destroy() {
    if (!this.rendered) throw new Error('play btn haven\'t render');

    this.el.remove();
    if (this.eventSub) this.eventSub.unsubscribe();

    this.rendered = false;
  }
}

const progressBarTemplate = `
  <div class="${styles.progressBar}">
    <div class="${styles.progressBarBackground}">
      <div class="${styles.progressBarBuffered}"></div>
      <div class="${styles.progressBarFill}"></div>
      <div class="${styles.progressBarCursor}"></div>
    </div>
  </div>
`;

export class ProgressBarControl implements BaseElement {
  el: HTMLElement;
  private container: BaseElement;
  private video: VideoPlayer;
  private backgroundEl: HTMLElement;
  private bufferedEl: HTMLElement;
  private fillEl: HTMLElement;
  private cursorEl: HTMLElement;
  private rendered: boolean;
  private mouseDownOrigin = 0;
  private cursorOrigin = 0;
  private isMouseDown = false;
  private seeking = false;
  private seekingTimer: any;
  private event$: Observable<PlayerEvent>;
  private eventSub: Subscription;
  private progressBarMousemoveHandler = (e: TouchEvent | MouseEvent) => this.cursorMove(e);
  private progressBarMouseupHandler = (e: TouchEvent | MouseEvent) => this.cursorUp(e);

  constructor(container: BaseElement, video: VideoPlayer, event$: Observable<PlayerEvent>) {
    this.container = container;
    const elements = createElementByString(progressBarTemplate);
    this.el = elements.item(0) as HTMLElement;
    this.backgroundEl = this.el.childNodes.item(0) as HTMLElement;
    this.bufferedEl = this.backgroundEl.childNodes.item(0) as HTMLElement;
    this.fillEl = this.backgroundEl.childNodes.item(1) as HTMLElement;
    this.cursorEl = this.backgroundEl.childNodes.item(2) as HTMLElement;
    this.video = video;
    this.event$ = event$;
    this.bindEvent();
  }

  private bindEvent() {
    if (HAS_MOUSE_EVENT && !IS_IOS && !IS_ANDROID) {
      this.el.addEventListener('mousedown', (e) => {
        if (e.target === this.backgroundEl) {
          this.backgroundDown(e);
        } else if (e.target === this.cursorEl) {
          this.cursorDown(e);
        }
      });
    } else {
      this.el.addEventListener('touchstart', (e) => {
        this.backgroundDown(e);
        this.cursorDown(e);
      });

      this.el.addEventListener('touchmove', this.progressBarMousemoveHandler, false);
      this.el.addEventListener('touchend', this.progressBarMouseupHandler, false);
    }

    this.eventSub = this.event$.subscribe(e => {
      switch (e.type) {
        case 'progress':
          this.resetBuffered();
          break;
        case 'timeupdate':
          if (!this.seeking) {
            const currentTime = this.video.el ? this.video.el.currentTime : 0;
            const duration = this.video.el ? this.video.el.duration : 0;
            this.resetCursor(currentTime / duration);
          }
          break;
        case 'seeking':
          this.seeking = true;
          break;
        case 'seeked':
          clearTimeout(this.seekingTimer);
          if (IS_IOS) {
            this.seekingTimer = setTimeout(() => this.seeking = false, 2000); // prevent ios seeking delay
          } else {
            this.seeking = false;
          }
          break;
        case 'ended':
          this.resetCursor(0);
          break;
        case 'reset':
          this.resetProgressBar();
          break;
        case 'ready':
          const currentSrc = this.video.srcArray[this.video.currentIndex];

          if (currentSrc instanceof SourceOption && isRtmp(currentSrc)) {
            this.hide();
          } else {
            this.show();
          }
      }
    });
  }

  private show() {
    this.el.style.visibility = '';
  }

  private hide() {
    this.el.style.visibility = 'hidden';
  }

  private resetProgressBar() {
    this.resetCursor(0);
    this.bufferedEl.style.width = `0%`;
  }

  private resetBuffered() {
    if (!this.video.el) return;

    const lastBufferIndex = this.video.el.buffered.length - 1;
    const duration = this.video.el.duration;

    if (lastBufferIndex >= 0) {
      // const start = this.video.el.buffered.start(0);
      // this.bufferedEl.style.left = `${start / duration * 100}%`;

      const end = this.video.el.buffered.end(lastBufferIndex);
      this.bufferedEl.style.width = `${end / duration * 100}%`;
    }
  }

  private backgroundDown(e: TouchEvent | MouseEvent) {
    if (!this.video.el) return;

    let offsetX: number;
    if (e instanceof MouseEvent) {
      offsetX = (e as MouseEvent).offsetX;
    } else {
      const elRect = this.el.getBoundingClientRect();
      offsetX = (e as TouchEvent).targetTouches[0].pageX - elRect.left;
    }

    const percent = offsetX / this.el.getBoundingClientRect().width;

    this.resetCursor(percent);
    this.resetCurrentTime(percent);
  }

  private cursorDown(e: TouchEvent | MouseEvent) {
    if (!this.video.el) return;

    const target = getTouchTarget(e as TouchEvent);
    this.mouseDownOrigin = (e instanceof MouseEvent) ? (e as MouseEvent).x : (target ? target.pageX : 0);
    this.cursorOrigin = this.cursorEl.offsetLeft;
    this.isMouseDown = true;
  }

  private cursorMove(e: TouchEvent | MouseEvent) {
    if (!this.video.el) return;

    const target = getTouchTarget(e as TouchEvent);
    if (this.isMouseDown) {
      const mouseX = (e instanceof MouseEvent) ? (e as MouseEvent).x : (target ? target.pageX : 0);
      const percent = this.caclulateOffsetX(mouseX);
      this.resetCursor(percent);
      this.seeking = true;
    }
  }

  private cursorUp(e: TouchEvent | MouseEvent) {
    const target = getTouchTarget(e as TouchEvent);
    if (this.isMouseDown) {
      const mouseX = (e instanceof MouseEvent) ? (e as MouseEvent).x : (target ? target.pageX : 0);
      const percent = this.caclulateOffsetX(mouseX);
      this.resetCurrentTime(percent);
      this.isMouseDown = false;
      this.seeking = false;
    }
  }

  private caclulateOffsetX(eventX: number): number {
    const progressBarWidth = this.el.getBoundingClientRect().width;
    let offsetX = eventX - this.mouseDownOrigin;
    offsetX += this.cursorOrigin;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > progressBarWidth) offsetX = progressBarWidth;
    return offsetX / progressBarWidth;
  }

  private resetCursor(percent: number) {
    percent = parsePercent(percent);

    this.fillEl.style.width = `${percent * 100}%`;
    this.cursorEl.style.left = `${percent * 100}%`;
  }

  private resetCurrentTime(percent: number) {
    percent = parsePercent(percent);

    if (this.video.el && this.video.el.duration) {
      this.video.el.currentTime = this.video.el.duration * percent;
    }
  }

  render() {
    if (this.rendered) throw new Error('progress bar already rendered');

    this.container.el.appendChild(this.el);
    if (HAS_MOUSE_EVENT && !IS_IOS && !IS_ANDROID) {
      window.addEventListener('mousemove', this.progressBarMousemoveHandler, false);
      window.addEventListener('mouseup', this.progressBarMouseupHandler, false);
    }

    this.rendered = true;
  }

  destroy() {
    if (!this.rendered) throw new Error('progress bar haven\'t render');

    this.el.remove();
    if (HAS_MOUSE_EVENT && !IS_IOS && !IS_ANDROID) {
      window.removeEventListener('mousemove', this.progressBarMousemoveHandler, false);
      window.removeEventListener('mouseup', this.progressBarMouseupHandler, false);
    }
    if (this.eventSub) this.eventSub.unsubscribe();

    this.rendered = false;
  }
}

const currentTimeTemplate = `
  <div class="${styles.currentTime} ${styles.toolBarBtns}">00:00</div>
`;

export class CurrentTimeControl implements BaseElement {
  el: HTMLElement;
  private container: BaseElement;
  private video: VideoPlayer;
  private event$: Observable<PlayerEvent>;
  private eventSub: Subscription;
  private rendered: boolean;
  private defaultWidth = 40;
  private currentTime = '';

  constructor(container: BaseElement, video: VideoPlayer, event$: Observable<PlayerEvent>) {
    this.container = container;
    this.video = video;
    this.event$ = event$;
    const elements = createElementByString(currentTimeTemplate);
    this.el = elements.item(0) as HTMLElement;
    this.bindEvent();
  }

  private bindEvent() {
    this.eventSub = this.event$.subscribe(e => {
      switch (e.type) {
        case 'timeupdate':
          this.resetCurrentTime(this.video.el ? this.video.el.currentTime : 0);
          break;
        case 'ended':
          this.video.el.currentTime = 0;
          break;
        case 'ready':
          const currentSrc = this.video.srcArray[this.video.currentIndex];

          if (currentSrc instanceof SourceOption && isRtmp(currentSrc)) {
            this.hide();
          } else {
            this.show();
          }

          this.resetCurrentTime(0);
          break;
      }
    });
  }

  private show() {
    this.el.style.visibility = '';
  }

  private hide() {
    this.el.style.visibility = 'hidden';
  }

  private resetCurrentTime(currentTime: number) {
    const time = secondToMMSS(currentTime);
    if (time !== this.currentTime) {
      this.currentTime = time;
      this.el.style.width = this.currentTime.length >= 8 ? `${(this.currentTime.length - 5) * 8 + this.defaultWidth}px` : '';
      this.el.innerText = `${this.currentTime}`;
    }
  }

  render() {
    if (this.rendered) throw new Error('current time already rendered');

    this.container.el.appendChild(this.el);

    this.rendered = true;
  }

  destroy() {
    if (!this.rendered) throw new Error('current time haven\'t render');

    this.el.remove();
    if (this.eventSub) this.eventSub.unsubscribe();

    this.rendered = false;
  }
}

const durationTemplate = `
  <div class="${styles.duration} ${styles.toolBarBtns}">00:00</div>
`;

export class DurationControl implements BaseElement {
  el: HTMLElement;
  private container: BaseElement;
  private video: VideoPlayer;
  private rendered: boolean;
  private defaultWidth = 40;
  private duration = '';
  private event$: Observable<PlayerEvent>;
  private eventSub: Subscription;

  constructor(container: BaseElement, video: VideoPlayer, event$: Observable<PlayerEvent>) {
    this.container = container;
    this.video = video;
    this.event$ = event$;
    const elements = createElementByString(durationTemplate);
    this.el = elements.item(0) as HTMLElement;
    this.bindEvent();
  }

  private bindEvent() {
    this.eventSub = this.event$.subscribe(e => {
      switch (e.type) {
        case 'loadedmetadata':
        case 'durationchange':
          this.resetDuration(this.video.el.duration);
          break;
        case 'ready':
          const currentSrc = this.video.srcArray[this.video.currentIndex];

          if (currentSrc instanceof SourceOption && isRtmp(currentSrc)) {
            this.hide();
          } else {
            this.show();
          }

          this.resetDuration(0);
          break;
      }
    });
  }

  private show() {
    this.el.style.visibility = '';
  }

  private hide() {
    this.el.style.visibility = 'hidden';
  }

  private resetDuration(duration: number) {
    this.duration = secondToMMSS(duration);
    this.el.style.width = this.duration.length >= 8 ? `${(this.duration.length - 5) * 8 + this.defaultWidth}px` : '';
    this.el.innerText = `${this.duration}`;
  }

  render() {
    if (this.rendered) throw new Error('duration already rendered');

    this.container.el.appendChild(this.el);

    this.rendered = true;
  }

  destroy() {
    if (!this.rendered) throw new Error('duration haven\'t render');

    this.el.remove();
    if (this.eventSub) this.eventSub.unsubscribe();

    this.rendered = false;
  }
}

const volumeTemplate = `
  <div class="${styles.volume} ${styles.toolBarBtns}">
    <div class="${styles.volumeBtns} ${styles.toolBarIcons}">
      <div class="${styles.volumeOnBtn} ${styles.toolBarBtn}"><svg viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg"><path d="M12.128.063c-.205-.102-.448-.08-.63.058l-6.7 5.058H1.054C.474 5.178 0 5.65 0 6.233v5.458c0 .583.473 1.056 1.054 1.056h3.744l6.7 5.057c.107.08.234.12.362.12.09 0 .183-.02.268-.062.203-.1.332-.31.332-.536V.6c0-.227-.13-.435-.332-.537zm-1.288 15.46L5.433 11.44c-.096-.07-.212-.11-.33-.11H1.62V6.594h3.482c.12 0 .235-.04.33-.11L10.84 2.4v13.12zm4.106-9.6c-.386 0-.7.27-.7.6V11.4c0 .33.314.6.7.6.387 0 .7-.27.7-.6V6.524c0-.332-.313-.6-.7-.6zm2.925-2.398c-.386 0-.7.268-.7.6V13.8c0 .33.314.6.7.6.387 0 .7-.27.7-.6V4.124c0-.332-.313-.6-.7-.6z" fill-rule="nonzero"/></svg></div>
      <div class="${styles.volumeOffBtn} ${styles.toolBarBtn}"><svg viewBox="0 0 23 18" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M12.215.1c-.204-.1-.448-.078-.63.06l-6.7 5.056H1.142C.56 5.216.087 5.69.087 6.27v5.46c0 .58.473 1.054 1.055 1.054h3.743l6.7 5.057c.107.08.234.122.362.122.092 0 .183-.02.268-.063.203-.103.332-.31.332-.538V.638c0-.227-.13-.435-.332-.537zm-1.288 15.46L5.52 11.48c-.095-.073-.212-.112-.33-.112H1.706V6.632H5.19c.12 0 .235-.04.33-.11l5.407-4.082v13.12z" fill-rule="nonzero"/><path d="M15.224 5.224c.268-.27.672-.3.903-.07l6.72 6.72c.23.23.198.634-.07.902-.27.27-.673.3-.903.07l-6.72-6.72c-.23-.23-.2-.634.07-.902z"/><path d="M22.776 5.224c-.268-.27-.672-.3-.903-.07l-6.72 6.72c-.23.23-.198.634.07.902.27.27.673.3.903.07l6.72-6.72c.23-.23.2-.634-.07-.902z"/></g></svg></div>
    </div>
    <div class="${styles.volumeConditioner} ${styles.volumeConditionerShown} ${styles.volumeConditionerHidden}">
      <div class="${styles.volumeBackground}"></div>
      <div class="${styles.volumeFill}"></div>
      <div class="${styles.volumeCursor}"></div>
    </div>
  </div>
`;

export class VolumeControl implements BaseElement {
  el: HTMLElement;
  private volumeOnBtnEl: HTMLElement;
  private volumeOffBtnEl: HTMLElement;
  private volumeBackgroundEl: HTMLElement;
  private volumeFillEl: HTMLElement;
  private volumeCursorEl: HTMLElement;
  private container: BaseElement;
  private video: VideoPlayer;
  private rendered: boolean;
  private volumeCache = 1;
  private volumeConditionerOffset = 12;
  private volumeConditionerHeight = 75;
  private isVolumeConditionerCursorDown = false;
  private mouseDownOrigin = 0;
  private cursorOrigin = 0;
  private event$: Observable<PlayerEvent>;
  private eventSub: Subscription;
  private volumeMousemoveHandler = (e: MouseEvent) => this.cursorMove(e);
  private volumeMouseupHandler = (e: MouseEvent) => this.cursorUp(e);

  constructor(container: BaseElement, video: VideoPlayer, event$: Observable<PlayerEvent>) {
    this.container = container;
    this.video = video;
    this.event$ = event$;
    const elements = createElementByString(volumeTemplate);
    this.el = elements.item(0) as HTMLElement;

    this.volumeOnBtnEl = this.el.childNodes.item(0).childNodes.item(0) as HTMLElement;
    this.volumeOffBtnEl = this.el.childNodes.item(0).childNodes.item(1) as HTMLElement;
    this.volumeBackgroundEl = this.el.childNodes.item(1).childNodes.item(0) as HTMLElement;
    this.volumeFillEl = this.el.childNodes.item(1).childNodes.item(1) as HTMLElement;
    this.volumeCursorEl = this.el.childNodes.item(1).childNodes.item(2) as HTMLElement;

    this.bindEvent();
  }

  private bindEvent() {
    this.eventSub = this.event$.subscribe(e => {
      if (e.type === 'volumechange') {
        this.setConditioner(this.video.el.volume);
        this.setVolumeIcon(this.video.el.volume);
      } else if (e.type === 'ready') {
        this.initVolumeControls();
      }
    });

    this.volumeOnBtnEl.addEventListener('click', () => this.toggle());
    this.volumeOffBtnEl.addEventListener('click', () => this.toggle());
    this.volumeBackgroundEl.addEventListener('mousedown', (e) => this.BackgoundClick(e));
    this.volumeCursorEl.addEventListener('mousedown', (e) => this.cursorDown(e));
  }

  private initVolumeControls() {
    this.volumeCache = this.video.el.volume;
    this.setConditioner(this.video.el.volume);
    this.setVolumeIcon(this.video.el.volume);
  }

  private BackgoundClick(e: MouseEvent) {
    if (!this.video.el) return;

    const percent = (this.volumeConditionerHeight - e.offsetY) / this.volumeConditionerHeight;
    this.setConditioner(percent);
    this.setVolume(percent)
  }

  private cursorDown(e: MouseEvent) {
    if (!this.video.el) return;

    this.mouseDownOrigin = e.y;
    this.cursorOrigin = this.volumeCursorEl.offsetTop;
    this.isVolumeConditionerCursorDown = true;
    this.volumeCursorEl.style.transition = 'none';
    this.volumeFillEl.style.transition = 'none';
  }

  private cursorMove(e: MouseEvent) {
    if (!this.video.el) return;

    if (this.isVolumeConditionerCursorDown) {
      let offset = e.y - this.mouseDownOrigin;
      offset += this.cursorOrigin;
      if (offset < this.volumeConditionerOffset) offset = this.volumeConditionerOffset;
      if (offset > this.volumeConditionerOffset + this.volumeConditionerHeight) offset = this.volumeConditionerOffset + this.volumeConditionerHeight;
      const percent = (this.volumeConditionerHeight - (offset - this.volumeConditionerOffset)) / this.volumeConditionerHeight;
      this.setConditioner(percent);
      this.setVolume(percent);
    }
  }

  private cursorUp(e: MouseEvent) {
    this.isVolumeConditionerCursorDown = false;
    this.volumeCursorEl.style.transition = '';
    this.volumeFillEl.style.transition = '';
  }

  private toggle() {
    if (!this.video.el) return;

    if (this.video.el.volume) {
      this.volumeCache = this.video.el.volume;
      this.setVolume(0);
    } else {
      this.setVolume(this.volumeCache);
    }
  }

  private setVolumeIcon(percent: number) {
    percent = parsePercent(percent);

    if (percent) {
      this.volumeOnBtnEl.style.display = 'block';
      this.volumeOffBtnEl.style.display = 'none';
    } else {
      this.volumeOnBtnEl.style.display = 'none';
      this.volumeOffBtnEl.style.display = 'block';
    }
  }

  private setConditioner(percent: number) {
    percent = parsePercent(percent);

    this.volumeCursorEl.style.top = `${this.volumeConditionerOffset + this.volumeConditionerHeight * (1 - percent)}px`;
    this.volumeFillEl.style.height = `${this.volumeConditionerHeight * percent}px`;
  }

  private setVolume(percent: number) {
    percent = parsePercent(percent);

    this.video.el.volume = percent;
  }

  render() {
    if (this.rendered) throw new Error('volume already rendered');

    this.container.el.appendChild(this.el);
    document.addEventListener('mousemove', this.volumeMousemoveHandler, false);
    document.addEventListener('mouseup', this.volumeMouseupHandler, false);

    this.rendered = true;
  }

  destroy() {
    if (this.rendered) throw new Error('volume haven\'t render');

    this.el.remove();
    document.removeEventListener('mousemove', this.volumeMousemoveHandler, false);
    document.removeEventListener('mouseup', this.volumeMouseupHandler, false);
    if (this.eventSub) this.eventSub.unsubscribe();

    this.rendered = false;
  }
}

const qualityTemplate = `
  <div class="${styles.quality} ${styles.toolBarBtns}">
    <div class="${styles.qualityBtns} ${styles.toolBarIcons}"></div>
    <div class="${styles.qualityConditioner}"></div>
  </div>
`;

const qualityRowTemplate = `
  <div class="${styles.qualityRow}"></div>
`;

export class QualityControl implements BaseElement {
  el: HTMLElement;
  private qualityBtnEl: HTMLElement;
  private qualityConditionerEl: HTMLElement;
  private container: BaseElement;
  private opt: Option;
  private video: VideoPlayer;
  private lang: Language;
  private rendered: boolean;
  private event$: Observable<PlayerEvent>;
  private eventSub: Subscription;

  constructor(container: BaseElement, opt: Option, video: VideoPlayer, lang: Language, event$: Observable<PlayerEvent>) {
    this.container = container;
    this.video = video;
    this.opt = opt;
    const elements = createElementByString(qualityTemplate);
    this.el = elements.item(0) as HTMLElement;
    this.qualityBtnEl = this.el.children.item(0) as HTMLElement;
    this.qualityConditionerEl = this.el.children.item(1) as HTMLElement;
    this.lang = lang;
    this.event$ = event$;

    this.resetQualityControl(this.video.srcArray, this.video.currentIndex);
    this.bindEvent();
  }

  private resetQualityControl(srcArray: (SourceOption | MediaSource)[], currentIndex: number) {
    const currentSrc = srcArray[currentIndex];
    if (IS_SUPPORT_MSE && currentSrc instanceof MediaSource) {
      this.qualityBtnEl.innerText = this.lang.translate('unknown quality');
    } else if (currentSrc instanceof SourceOption) {
      this.qualityBtnEl.innerText = currentSrc.quality;
    }

    this.qualityConditionerEl.innerHTML = '';
    for (let index in srcArray) {
      const item = srcArray[index];
      const rowTemplate = createElementByString(qualityRowTemplate).item(0) as HTMLElement;
      const row = rowTemplate.cloneNode() as HTMLElement;
      if (IS_SUPPORT_MSE && item instanceof MediaSource) {
        row.innerText = this.lang.translate('unknown quality');
      } else if (item instanceof SourceOption) {
        row.innerText = item.quality;
      }
      if (+index === currentIndex) row.className += ' activate';
      this.qualityConditionerEl.appendChild(row);
    }
  }

  private bindEvent() {
    // bind source change
    this.eventSub = this.event$.subscribe((e: PlayerEvent) => {
      if (e.type === PlayerEventType.SourceChange) {
        const data = e.detail as VideoSourceChangeEventDetail;
        this.resetQualityControl(data.srcArray, data.currentIndex);
      }
    });
    this.qualityConditionerEl.addEventListener('click', (e) => {
      const index = (<any>Array).prototype.slice.call(this.qualityConditionerEl.childNodes).indexOf(e.target);
      this.video.switchSrc(index);
    }, false);
  }

  render() {
    if (this.rendered) throw new Error('quality already rendered');

    this.container.el.appendChild(this.el);

    this.rendered = true;
  }

  destroy() {
    if (this.rendered) throw new Error('quality haven\'t render');

    this.el.remove();
    if (this.eventSub) this.eventSub.unsubscribe();

    this.rendered = false;
  }
}

const fullScreenTemplate = `
  <div class="${styles.fullScreenBtns} ${styles.toolBarBtns} ${styles.toolBarIcons}">
    <div class="${styles.enterFullscreenBtn} ${styles.toolBarBtn}"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.462 9.828l-4.277 4.277h3.412v1.825H.07V9.403h1.825v3.412l4.277-4.277 1.29 1.29zm1.94-7.933h3.413L8.537 6.172l1.29 1.29 4.278-4.277v3.412h1.825V.07H9.403v1.825z" fill-rule="nonzero"/></svg></div>
    <div class="${styles.exitFullscreenBtn} ${styles.toolBarBtn}"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M.07 14.64l4.278-4.278H.936V8.538h6.526v6.526H5.638v-3.412L1.36 15.93.07 14.64zm14.994-9.002h-3.412L15.93 1.36 14.64.07l-4.278 4.278V.936H8.537v6.527h6.527V5.638z" fill-rule="nonzero"/></svg></div>
  </div>
`;

export class FullScreenControl implements BaseElement {
  el: HTMLElement;
  fullScreenApi: FullScreenApi;
  private container: BaseElement;
  private enterFullscreenBtnEl: HTMLElement;
  private exitFullscreenBtnEl: HTMLElement;
  private video: VideoPlayer;
  private player: ZaojiuPlayer;
  private rendered: boolean;
  private event$: Observable<PlayerEvent>;
  private eventSub: Subscription;

  constructor(container: BaseElement, video: VideoPlayer, player: ZaojiuPlayer, event$: Observable<PlayerEvent>) {
    this.video = video;
    this.container = container;
    this.player = player;
    this.event$ = event$;
    const elements = createElementByString(fullScreenTemplate);
    this.el = elements.item(0) as HTMLElement;
    this.enterFullscreenBtnEl = this.el.childNodes.item(0) as HTMLElement;
    this.exitFullscreenBtnEl = this.el.childNodes.item(1) as HTMLElement;
    this.bindEvent();
  }

  private prepareFullScreenApi() {
    const fullScreenApiList = [
      ['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'],
      ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'],
      ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'],
      ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'],
      ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError'],
      ['webkitEnterFullscreen', 'webkitExitFullscreen', 'webkitDisplayingFullscreen', 'webkitSupportsFullscreen', 'webkitbeginfullscreen', 'webkitfullscreenerror'],
      ['webkitEnterFullScreen', 'webkitExitFullScreen', 'webkitDisplayingFullscreen', 'webkitSupportsFullscreen', 'webkitbeginfullscreen', 'webkitfullscreenerror'],
    ];

    for (let item of fullScreenApiList) {
      const requestFullscreen = item[0];
      const exitFullscreen = item[1];
      const fullscreenElement = item[2];
      const fullscreenEnabled = item[3];
      const fullscreenchange = item[4];

      if (
        requestFullscreen in this.player.el &&
        exitFullscreen in document &&
        fullscreenElement in document &&
        fullscreenEnabled in document &&
        `on${fullscreenchange}` in document
      ) {
        this.fullScreenApi = new FullScreenApi;
        this.fullScreenApi.requestFullscreen = () => {
          (<any>this.player.el)[requestFullscreen]();
        };
        this.fullScreenApi.exitFullscreen = () => {
          (<any>document)[exitFullscreen]();
        };
        this.fullScreenApi.fullscreenEnabled = (<any>document)[fullscreenEnabled];
        document.addEventListener(fullscreenchange, (e) => {
          this.fullScreenApi.fullscreenElement = (<any>document)[fullscreenElement];
          this.resetBtn();
        });
        break;
      } else if (
        requestFullscreen in this.video.el &&
        exitFullscreen in this.video.el &&
        fullscreenElement in this.video.el &&
        fullscreenEnabled in this.video.el
      ) {
        const fullScreenListener = () => {
          this.fullScreenApi.fullscreenElement = (<any>this.video.el)[fullscreenElement];
          this.resetBtn();
        };
        this.fullScreenApi = new FullScreenApi;
        this.fullScreenApi.requestFullscreen = () => {
          (<any>this.video.el)[requestFullscreen]();
        };
        this.fullScreenApi.exitFullscreen = () => {
          (<any>this.video.el)[exitFullscreen]();
        };
        this.fullScreenApi.fullscreenEnabled = (<any>this.video.el)[fullscreenEnabled];
        this.video.el.addEventListener('webkitbeginfullscreen', fullScreenListener);
        this.video.el.addEventListener('webkitendfullscreen', fullScreenListener);
        break;
      }
    }
  }

  private resetBtn() {
    if (this.fullScreenApi.fullscreenElement) {
      this.enterFullscreenBtnEl.style.display = 'none';
      this.exitFullscreenBtnEl.style.display = 'block';
    } else {
      this.enterFullscreenBtnEl.style.display = 'block';
      this.exitFullscreenBtnEl.style.display = 'none';
    }
  }

  private bindEvent() {
    this.el.addEventListener('click', () => this.toggle());
    this.eventSub = this.event$.filter(e => e.type === 'ready').subscribe(e => {
      this.prepareFullScreenApi();
    });
  }

  toggle() {
    if (!this.fullScreenApi) return;

    if (!this.fullScreenApi.fullscreenElement) {
      this.fullScreenApi.requestFullscreen();
    } else {
      this.fullScreenApi.exitFullscreen();
    }
  }

  render() {
    if (this.rendered) throw new Error('fullScreen already rendered');

    this.container.el.appendChild(this.el);
    this.rendered = true;
  }

  destroy() {
    if (!this.rendered) throw new Error('fullScreen haven\'t render');

    this.el.remove();
    if (this.eventSub) this.eventSub.unsubscribe();
    this.rendered = false;
  }
}

const toolBarTemplate = `
  <div class="${styles.toolBar}">
    <div class="${styles.topProgressBar}">
      <div class="${styles.topProgressBarFill}"></div>
    </div>
  </div>
`;

export class ToolBarControl implements BaseElement {
  el: HTMLElement;
  playPauseBtn: PlayPauseBtnControl;
  progressBar: ProgressBarControl;
  volume: VolumeControl;
  quality: QualityControl;
  duration: DurationControl;
  currentTime: CurrentTimeControl;
  fullScreen: FullScreenControl;

  private container: BaseElement;
  private topProgressBarEl: HTMLElement;
  private topProgressBarFillEl: HTMLElement;
  private video: VideoPlayer;
  private rendered: boolean;
  private option: Option;
  private event$: Observable<PlayerEvent>;
  private eventSub: Subscription;

  constructor(container: BaseElement, option: Option, video: VideoPlayer, player: ZaojiuPlayer) {
    this.container = container;
    this.video = video;
    this.event$ = player.event$;
    const elements = createElementByString(toolBarTemplate);
    this.el = elements.item(0) as HTMLElement;
    this.topProgressBarEl = this.el.childNodes.item(0) as HTMLElement;
    this.topProgressBarFillEl = this.topProgressBarEl.childNodes.item(0) as HTMLElement;
    this.bindEvent();

    this.playPauseBtn = new PlayPauseBtnControl(this, video, this.event$);
    this.currentTime = new CurrentTimeControl(this, video, this.event$);
    this.progressBar = new ProgressBarControl(this, video, this.event$);
    this.duration = new DurationControl(this, video, this.event$);
    this.quality = new QualityControl(this, option, video, player.language, this.event$);
    this.volume = new VolumeControl(this, video, this.event$);
    this.fullScreen = new FullScreenControl(this, video, player, this.event$);
    this.option = option;
  }

  private bindEvent() {
    this.eventSub = this.event$.subscribe(e => {
      if (e.type === 'timeupdate') {
        const currentTime = this.video.el ? this.video.el.currentTime : 0;
        const duration = this.video.el ? this.video.el.duration : 0;
        this.resetProgress(currentTime / duration);
      } else if (e.type === 'reset') {
        this.slideDown();
      }
    });
  }

  private resetProgress(percent: number) {
    percent = parsePercent(percent);

    this.topProgressBarFillEl.style.width = `${percent * 100}%`;
  }

  slideUp() {
    this.el.style.transform = 'translateY(0)';
    this.topProgressBarEl.style.transition = 'none';
    this.topProgressBarEl.style.opacity = '0';
  }

  slideDown() {
    this.el.style.transform = 'translateY(100%)';
    this.topProgressBarEl.style.transition = 'opacity .2s .4s';
    this.topProgressBarEl.style.opacity = '1';
  }

  render() {
    if (this.rendered) throw new Error('toolbar already rendered');

    if (this.option.controls === true || (this.option.controls instanceof ControlsOption && (this.option.controls as ControlsOption).hasToolBarControls)) {
      this.playPauseBtn.render();
      this.currentTime.render();
      this.progressBar.render();
      this.duration.render();
      this.quality.render();
      this.volume.render();
      this.fullScreen.render();
      this.container.el.appendChild(this.el);
      this.rendered = true;
    }
  }

  destroy() {
    if (!this.rendered) throw new Error('toolbar haven\'t render');

    if (this.option.controls === true || (this.option.controls instanceof ControlsOption && (this.option.controls as ControlsOption).hasToolBarControls)) {
      this.playPauseBtn.destroy();
      this.currentTime.destroy();
      this.progressBar.destroy();
      this.duration.destroy();
      this.quality.destroy();
      this.volume.destroy();
      this.fullScreen.destroy();
      this.el.remove();
      this.rendered = false;
    }
  }
}

const controlsTemplate = `
  <div class="${styles.controls}"></div>
`;

export class Controls implements BaseElement {
  el: HTMLElement;
  bigPlayBtn: BigPlayBtnControl;
  loading: LoadingControl;
  error: ErrorControl;
  toolBar: ToolBarControl;
  private mouseMoveTimer: any;
  private event$: Observable<PlayerEvent>;
  private eventSub: Subscription;

  private container: BaseElement;
  private rendered: boolean;

  constructor(container: BaseElement, option: Option, video: VideoPlayer, player: ZaojiuPlayer, event$: Observable<PlayerEvent>) {
    this.container = container;
    this.event$ = event$;

    const elements = createElementByString(controlsTemplate);
    this.el = elements.item(0) as HTMLElement;

    this.bigPlayBtn = new BigPlayBtnControl(this, video, player.event$);
    this.loading = new LoadingControl(this, video, player.event$, player.eventSource);
    this.error = new ErrorControl(this, video, player.language, player.event$, player.eventSource);
    this.toolBar = new ToolBarControl(this, option, video, player);

    this.bindEvent();
  }

  private bindEvent() {
    this.el.addEventListener('click', (e) => {
      if (e.target === this.el) this.toolBar.playPauseBtn.toggle();
    });
    this.el.addEventListener('dblclick', (e) => {
      if (e.target === this.el) this.toolBar.fullScreen.toggle();
    });

    this.eventSub = this.event$.subscribe(e => {
      if (e.type === 'reset') {
        this.el.style.pointerEvents = 'none';
      } else if (e.type === 'ready' || e.type === 'error') {
        this.el.style.pointerEvents = 'auto';
      }
    });

    this.el.addEventListener('mouseover', () => {
      this.toolBar.slideUp();
      this.resetMouseMoveTimer();
    });
    this.el.addEventListener('touchstart', () => {
      this.toolBar.slideUp();
      this.resetMouseMoveTimer();
    });
  }

  private resetMouseMoveTimer() {
    clearTimeout(this.mouseMoveTimer);
    this.mouseMoveTimer = setTimeout(() => {
      this.toolBar.slideDown();
    }, 2 * 1000);
  }

  render() {
    if (this.rendered) throw new Error('controls already rendered');

    this.bigPlayBtn.render();
    this.loading.render();
    this.error.render();
    this.toolBar.render();
    this.container.el.appendChild(this.el);

    this.rendered = true;
  }

  destroy() {
    if (!this.rendered) throw new Error('controls haven\'t render');

    this.bigPlayBtn.destroy();
    this.loading.destroy();
    this.error.destroy();
    this.toolBar.destroy();
    this.el.remove();

    this.rendered = false;
  }
}
