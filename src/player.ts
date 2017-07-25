import {VideoPlayer} from "./video";
import {Language, Option, PlayerEvent} from "./model";
import {BaseElement} from "./interface";
import {createElementByString, IS_MOBILE} from "./utils";
import {Controls} from "./controls";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/filter';
import {Observable} from "rxjs/Observable";
const styles = require('./player.scss');

const ElementQueries = require('css-element-queries/src/ElementQueries');

const template = `
  <div class="${styles.player} ${IS_MOBILE ? styles.touchable : ''}"></div>
`;

export class ZaojiuPlayer implements BaseElement {
  el: HTMLElement;
  video: VideoPlayer;
  controls: Controls;
  eventSource = new Subject<PlayerEvent>();
  event$: Observable<PlayerEvent> = this.eventSource.asObservable();
  option: Option;
  language = new Language('zh-CN');
  private containerPositionCache = '';
  private elementQueries: any;

  static FlashVideo?: any;
  static use(plugin: any) {
    if (plugin.name === 'FlashVideo') {
      this.FlashVideo = plugin;
    }
  }

  constructor(option: Option|any) {
    if (!option) throw new Error('option cannot be empty');

    let optionParsed: Option;
    if (option instanceof Option) {
      optionParsed = option as Option;
    } else {
      optionParsed = new Option(option.element, option.playList,
        option.autoplay, option.preload, option.loop,
        option.controls, option.swf);
    }
    this.option = optionParsed;
    this.el = createElementByString(template).item(0) as HTMLElement;
    this.prepareVideo();
    this.prepareControls();
    this.perpareVideoSource();
    this.render();
  }

  private getTargetElement() {
    if (this.option.element instanceof HTMLElement) {
      return this.option.element;
    }

    return document.getElementById(this.option.element as string);
  }

  private prepareControls() {
    this.controls = new Controls(this, this.option, this.video, this, this.event$);
  }

  private prepareVideo() {
    this.video = new VideoPlayer(this, this.option, this.eventSource, this.event$);
  }

  private perpareVideoSource() {
    this.video.setSrc(this.option.playList);
  }

  render() {
    this.video.render();
    this.controls.render();

    const container = this.getTargetElement();
    if (container.style.position !== 'relative' && container.style.position !== 'absolute') {
      this.containerPositionCache = container.style.position;
      container.style.position = 'relative';
    }
    container.innerHTML = '';
    container.appendChild(this.el);

    this.elementQueries = new ElementQueries();
    this.elementQueries.init(true);
  }

  destroy() {
    this.video.destroy();
    this.controls.destroy();

    const container = this.getTargetElement();
    container.style.position = this.containerPositionCache;
    container.innerHTML = '';

    this.elementQueries.detach();
  }
}

if (!(<any>window).ZaojiuPlayer) (<any>window).ZaojiuPlayer = ZaojiuPlayer;
