import {parsePlayList} from "./utils";
import {i18nCN} from "./i18n";

export class FullScreenApi {
  requestFullscreen: () => void;
  exitFullscreen: () => void;
  fullscreenElement: HTMLElement;
  fullscreenEnabled: boolean;
}


export enum PlayerEventType {
  SourceChange = 'sourcechange',
  RetryPlay = 'retryplay',
}

export class PlayerEvent {
  type: PlayerEventType|string;
  detail: any;

  constructor(type: PlayerEventType|string, detail: any) {
    this.type = type;
    this.detail = detail;
  }
}

export class VideoSourceChangeEventDetail {
  srcArray: (SourceOption | MediaSource)[];
  currentIndex: number;

  constructor(srcArray: (SourceOption | MediaSource)[], currentIndex: number) {
    this.srcArray = srcArray;
    this.currentIndex = currentIndex;
  }
}

export class ControlsOption {
  showBigPlay = true;
  showPlayPause = true;
  showProgressBar = true;
  showVolume = true;
  showDuration = true;
  showFullScreen = true;
  showQuality = true;

  constructor(showBigPlay = true, showPlayPause = true, showProgressBar = true, showDuration = true, showVolume = true, showQuality = true, showFullScreen = true) {
    this.showBigPlay = showBigPlay;
    this.showPlayPause = showPlayPause;
    this.showProgressBar = showProgressBar;
    this.showVolume = showVolume;
    this.showDuration = showDuration;
    this.showFullScreen = showFullScreen;
    this.showQuality = showQuality;
  }

  get hasControls(): boolean {
    return this.showBigPlay ||
      this.showPlayPause ||
      this.showProgressBar ||
      this.showVolume ||
      this.showDuration ||
      this.showQuality ||
      this.showFullScreen;
  }

  get hasToolBarControls(): boolean {
    return this.showPlayPause ||
      this.showProgressBar ||
      this.showVolume ||
      this.showDuration ||
      this.showQuality ||
      this.showFullScreen;
  }
}

export class SourceOption {
  src: string;
  quality: string;
  minetype: string;

  constructor(src: string, quality: string, mimeType: string) {
    this.src = src;
    this.quality = quality;
    this.minetype = mimeType;
  }
}

export class Option {
  element: string | HTMLElement;
  playList: (SourceOption | MediaSource)[][] = [[]];
  autoplay = false;
  preload = 'metadata';
  loop = false;
  // playsinline = true;
  controls: boolean | ControlsOption = true;
  swf = `video-js.swf`;

  constructor(element: string | HTMLElement,
              playList: string | MediaSource | SourceOption |
                (string | MediaSource | SourceOption)[] |
                (string | SourceOption | MediaSource)[][],
              autoplay = false,
              preload = 'metadata',
              loop = false,
              // playsinline = true,
              controls: boolean | ControlsOption = true,
              swf = `video-js.swf`,
  ) {
    if (!element) throw new Error('Must specify an element id or pass a DOMElement');
    this.element = element;
    this.playList = parsePlayList(playList);
    this.autoplay = autoplay;
    this.loop = loop;
    // this.playsinline = playsinline;
    this.preload = preload;
    this.controls = controls;
  }
}

export const languageDict: { [key: string]: { [key: string]: string } } = {
  'default': i18nCN,
  'zh-CN': i18nCN,
};

export class Language {
  dict: {[key: string]: string } = languageDict['default'];

  constructor(lang: string, dict?: { [key: string]: string }) {
    this.use(lang, dict);
  }

  use(lang: string, dict?: { [key: string]: string }) {
    if (dict) languageDict[lang] = dict;
    this.dict = languageDict[lang] || languageDict['default'];
  }

  translate(string: string): string {
    let result = string;
    for (let key in this.dict) {
      result = result.replace(key, this.dict[key]);
    }
    return result;
  }
}

export enum ReadyState {
  HAVE_NOTHING = 0,
  HAVE_METADATA,
  HAVE_CURRENT_DATA,
  HAVE_FUTURE_DATA,
  HAVE_ENOUGH_DATA,
}

export enum NetworkState {
  NETWORK_EMPTY = 0,
  NETWORK_IDLE,
  NETWORK_LOADING,
  NETWORK_NO_SOURCE,
}

export class PlayerError {
  code: MediaErrorCode;

  constructor(code: MediaErrorCode) {
    this.code = code;
  }
}

export enum MediaErrorCode {
  MEDIA_ERR_ABORTED = 1,
  MEDIA_ERR_NETWORK,
  MEDIA_ERR_DECODE,
  MEDIA_ERR_SRC_NOT_SUPPORTED,
}

export enum VideoErrorType {
  EnvError = 1,
  VideoSourceError,
  NetworkError,
  VideoDecodeError,
  LiveFinish,
  CrossDomainError,
  Others,
}

export class FlashBuffer {
  start: number;
  end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

export class FlashTimeRanges {
  buffer: FlashBuffer[] = [];

  constructor(buffer: FlashBuffer|FlashBuffer[]) {
    if (buffer instanceof FlashBuffer) {
      this.buffer.push(buffer);
    } else {
      this.buffer.push(...buffer);
    }
  }

  get length(): number {
    return this.buffer.length;
  }

  start(index: number): number {
    if (index < 0 || index > this.buffer.length - 1) return 0;
    return this.buffer[index].start;
  }

  end(index: number): number {
    if (index < 0 || index > this.buffer.length - 1) return 0;
    return this.buffer[index].end;
  }
}
