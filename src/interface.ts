import {NetworkState, PlayerError, ReadyState, SourceOption} from "./model";

export interface BaseElement {
  el: HTMLElement;

  render(): void;
  destroy(): void;
}

export interface VideoElement {
  readonly networkState: NetworkState;
  readonly readyState: ReadyState;
  readonly paused: boolean;
  readonly ended: boolean;
  readonly error: PlayerError;
  readonly duration: number;
  readonly buffered: TimeRanges;
  autoplay: boolean;
  preload: string;
  loop: boolean;
  src: string|MediaSource|SourceOption;
  volume: number;
  currentTime: number;
  seeking: boolean;

  play(): void;
  pause(): void;
  remove(): void;
  canPlayType(minetype: string): string;
  addEventListener(type: string, listener?: any, useCapture?: boolean): void;
  removeEventListener(type: string, listener?: any, useCapture?: boolean): void;
}
