import { PlayerError, NetworkState, SourceOption } from "./zaojiu-player";

interface FlashBuffer {
  start: number;
  end: number;
}
interface FlashTimeRanges {
  buffer: FlashBuffer[];
  readonly length: number;
  start(index: number): number;
  end(index: number): number;
}
interface FlashElement extends HTMLElement {
  vjs_getProperty: (prop: any) => any;
  vjs_setProperty: (prop: any, value: any) => void;
  vjs_play: () => void;
  vjs_pause: () => void;
  vjs_load: () => void;
  vjs_src: (src: string) => void;
  instance: FlashVideo;
}
export declare class FlashVideo {
  el: FlashElement;
  error: PlayerError;

  readonly seeking: boolean;
  readonly duration: number;
  readonly seekable: FlashTimeRanges;
  readonly buffered: FlashTimeRanges;
  readonly ended: boolean;
  readonly paused: boolean;
  readonly networkState: NetworkState;
  readonly readyState: ReadyState;
  src: SourceOption;
  currentTime: number;
  autoplay: boolean;
  preload: string;
  loop: boolean;
  volume: number;
  muted: boolean;
  defaultMuted: boolean;
  playbackRate: number;
  defaultPlaybackRate: number;
  poster: string;
  rtmpConnection: string;
  rtmpStream: string;

  load(): void;
  play(): void;
  pause(): void;
  canPlayType(type: string): string;
  addEventListener(type: string, listener?: any, useCapture?: boolean): void;
  removeEventListener(type: string, listener?: any, useCapture?: boolean): void;
  remove(): void;
}

export as namespace FlashVideo;

export default FlashVideo;
