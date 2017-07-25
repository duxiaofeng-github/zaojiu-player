import {SourceOption} from "./model";

declare const DocumentTouch: any;
declare const navigator: any;

const flashVersion = () => {
  let version = '0,0,0';
  try {
    version = new (<any>window).ActiveXObject('ShockwaveFlash.ShockwaveFlash')
      .GetVariable('$version')
      .replace(/\D+/g, ',')
      .match(/^,?(.+),?$/)[1];
  } catch (e) {
    try {
      if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
        version = (navigator.plugins['Shockwave Flash 2.0'] ||
        navigator.plugins['Shockwave Flash'])
          .description
          .replace(/\D+/g, ',')
          .match(/^,?(.+),?$/)[1];
      }
    } catch (err) {
    }
  }
  return version.split(',');
};

export const IS_IN_WECHAT = /micromessenger/i.test(navigator.userAgent);
export const IS_IOS = /iPhone|iPad/i.test(navigator.userAgent);
export const IS_ANDROID = /Android/i.test(navigator.userAgent);
export const IS_MOBILE = IS_IOS || IS_ANDROID;
export const HAS_MOUSE_EVENT = ('onmousedown' in document);
export const HAS_TOUCH_EVENT = ('ontouchstart' in document);
export const IS_CHROME = /Chrome/i.test(navigator.userAgent);
export const IS_WINDOWS_WECHAT = /WindowsWechat/i.test(navigator.userAgent);
export const IS_SUPPORT_MSE = 'MediaSource' in window;
export const IS_SUPPORT_FLASH = flashVersion()[0] >= '10';

export const createElementByString = (str: string): NodeList => {
  const tmpEle = document.createElement('div');
  str = str.replace(/[\s\n\r]*</g, '<').replace(/>[\s\n\r]*/g, '>');
  tmpEle.innerHTML = str;
  return tmpEle.childNodes;
};

export const secondToMMSS = (seconds: number) => {
  if (!seconds) return '00:00';
  const date = new Date(null);
  date.setSeconds(seconds); // specify value for SECONDS here
  return date.toISOString().substr(11, 8).replace(/^00:(.+:.+)$/, '$1');
};

export const parsePercent = (percent: number): number => {
  if (percent > 1) percent = 1;
  if (percent < 0) percent = 0;

  return parseFloat(percent.toFixed(2));
};

export const getTouchTarget = (e: TouchEvent): Touch => {
  if (!e || !(e.touches && e.targetTouches && e.changedTouches)) return null;

  if (e.touches && e.touches.length) {
    return e.touches.item(0);
  }

  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches.item(0);
  }

  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches.item(0);
  }

  return null;
};

export const rtmpRegexp = /^rtmp[set]?:\/\//i;

const extMimetypeMap = JSON.parse('{"3gp":["video/3gpp"],"3gpp":["video/3gpp","audio/3gpp"],"3g2":["video/3gpp2"],"h261":["video/h261"],"h263":["video/h263"],"h264":["video/h264"],"jpgv":["video/jpeg"],"jpm":["video/jpm"],"jpgm":["video/jpm"],"mj2":["video/mj2"],"mjp2":["video/mj2"],"ts":["video/mp2t"],"mp4":["video/mp4"],"mp4v":["video/mp4"],"mpg4":["video/mp4"],"mpeg":["video/mpeg"],"mpg":["video/mpeg"],"mpe":["video/mpeg"],"m1v":["video/mpeg"],"m2v":["video/mpeg"],"ogv":["video/ogg"],"qt":["video/quicktime"],"mov":["video/quicktime"],"uvh":["video/vnd.dece.hd"],"uvvh":["video/vnd.dece.hd"],"uvm":["video/vnd.dece.mobile"],"uvvm":["video/vnd.dece.mobile"],"uvp":["video/vnd.dece.pd"],"uvvp":["video/vnd.dece.pd"],"uvs":["video/vnd.dece.sd"],"uvvs":["video/vnd.dece.sd"],"uvv":["video/vnd.dece.video"],"uvvv":["video/vnd.dece.video"],"dvb":["video/vnd.dvb.file"],"fvt":["video/vnd.fvt"],"mxu":["video/vnd.mpegurl"],"m4u":["video/vnd.mpegurl"],"pyv":["video/vnd.ms-playready.media.pyv"],"uvu":["video/vnd.uvvu.mp4"],"uvvu":["video/vnd.uvvu.mp4"],"viv":["video/vnd.vivo"],"webm":["video/webm"],"f4v":["video/x-f4v"],"fli":["video/x-fli"],"flv":["video/x-flv"],"m4v":["video/x-m4v"],"mkv":["video/x-matroska"],"mk3d":["video/x-matroska"],"mks":["video/x-matroska"],"mng":["video/x-mng"],"asf":["video/x-ms-asf"],"asx":["video/x-ms-asf"],"vob":["video/x-ms-vob"],"wm":["video/x-ms-wm"],"wmv":["video/x-ms-wmv"],"wmx":["video/x-ms-wmx"],"wvx":["video/x-ms-wvx"],"avi":["video/x-msvideo"],"movie":["video/x-sgi-movie"],"smv":["video/x-smv"],"adp":["audio/adpcm"],"au":["audio/basic"],"snd":["audio/basic"],"mid":["audio/midi"],"midi":["audio/midi"],"kar":["audio/midi"],"rmi":["audio/midi"],"mp3":["audio/mp3","audio/mpeg"],"m4a":["audio/mp4","audio/x-m4a"],"mp4a":["audio/mp4"],"mpga":["audio/mpeg"],"mp2":["audio/mpeg"],"mp2a":["audio/mpeg"],"m2a":["audio/mpeg"],"m3a":["audio/mpeg"],"oga":["audio/ogg"],"ogg":["audio/ogg"],"spx":["audio/ogg"],"s3m":["audio/s3m"],"sil":["audio/silk"],"uva":["audio/vnd.dece.audio"],"uvva":["audio/vnd.dece.audio"],"eol":["audio/vnd.digital-winds"],"dra":["audio/vnd.dra"],"dts":["audio/vnd.dts"],"dtshd":["audio/vnd.dts.hd"],"lvp":["audio/vnd.lucent.voice"],"pya":["audio/vnd.ms-playready.media.pya"],"ecelp4800":["audio/vnd.nuera.ecelp4800"],"ecelp7470":["audio/vnd.nuera.ecelp7470"],"ecelp9600":["audio/vnd.nuera.ecelp9600"],"rip":["audio/vnd.rip"],"wav":["audio/wav","audio/wave","audio/x-wav"],"weba":["audio/webm"],"aac":["audio/x-aac"],"aif":["audio/x-aiff"],"aiff":["audio/x-aiff"],"aifc":["audio/x-aiff"],"caf":["audio/x-caf"],"flac":["audio/x-flac"],"mka":["audio/x-matroska"],"m3u":["audio/x-mpegurl"],"wax":["audio/x-ms-wax"],"wma":["audio/x-ms-wma"],"ram":["audio/x-pn-realaudio"],"ra":["audio/x-pn-realaudio","audio/x-realaudio"],"rmp":["audio/x-pn-realaudio-plugin"],"xm":["audio/xm"]}');

const getMimetypeFromUrl = (url: string): string => {
  if (rtmpRegexp.test(url)) return 'rtmp/mp4';

  for (const key in extMimetypeMap) {
    if (url.indexOf(`.${key}`) !== -1) return extMimetypeMap[key];
  }

  return '';
};

export const parsePlayList = (src: string | MediaSource | SourceOption | any |
  (string | MediaSource | SourceOption | any)[] |
  (string | SourceOption | MediaSource | any)[][]): (MediaSource | SourceOption)[][] => {
  if (!src) return [[]];

  const result: (MediaSource | SourceOption)[][] = [];

  if (typeof src === 'string') {
    result.push([new SourceOption(src, '', getMimetypeFromUrl(src))]);
  } else if ((IS_SUPPORT_MSE && src instanceof MediaSource) || src instanceof SourceOption) {
    result.push([src]);
  } else if (src.src && src.quality && src.mimetype) {
    result.push([new SourceOption(src.src, src.quality, src.mimetype)]);
  } else if (Array.isArray(src)) {
    let singleList: (MediaSource | SourceOption)[] = [];

    for (let item of src) {
      if (typeof item === 'string') {
        singleList.push(new SourceOption(item, '', getMimetypeFromUrl(item)));
      } else if ((IS_SUPPORT_MSE && item instanceof MediaSource) || item instanceof SourceOption) {
        singleList.push(item);
      } else if (item.src && item.quality && item.mimetype) {
        singleList.push(new SourceOption(item.src, item.quality, item.mimetype));
      }
    }

    if (singleList.length) {
      result.push(singleList);
    } else {
      for (let item of src) {
        if (Array.isArray(item)) {
          let multiList: (MediaSource | SourceOption)[] = [];

          for (let item2 of item) {
            if (typeof item2 === 'string') {
              multiList.push(new SourceOption(item2, '', getMimetypeFromUrl(item2)));
            } else if ((IS_SUPPORT_MSE && item2 instanceof MediaSource) || item2 instanceof SourceOption) {
              multiList.push(item2);
            } else if (item2.src && item2.quality && item2.mimetype) {
              multiList.push(new SourceOption(item2.src, item2.quality, item2.mimetype));
            }
          }

          result.push(multiList);
        }
      }
    }
  }

  return result;
};

export const getAbsoluteURL = (url: string): string => {
  // Check if absolute URL
  if (!url.match(/^https?:\/\//)) {
    // Convert to absolute URL. Flash hosted off-site needs an absolute URL.
    const div = document.createElement('div');

    div.innerHTML = `<a href="${url}">x</a>`;
    url = (div.firstChild as HTMLAnchorElement).href;
  }

  return url;
};

export const genRandomID = (): string => {
  return Math.random().toString(36).substr(2, 10);
};

export const canPlayFormat = {
  'video/flv': 'FLV',
  'video/x-flv': 'FLV',
  'video/flash': 'FLV',
};

export const canPlayRtmpFormat = {
  'rtmp/mp4': 'MP4',
  'rtmp/flv': 'FLV',
};

export const canPlayTypeByFlash = (type: string) => {
  if (type in Object.assign(canPlayFormat, canPlayRtmpFormat)) {
    return 'maybe';
  }

  return '';
};

export const isRtmp = (src: SourceOption): boolean => {
  return src.minetype in canPlayRtmpFormat || rtmpRegexp.test(src.src)
}

// export const isSupported = (() => {
//   const mediaSource = window.MediaSource = window.MediaSource || window.WebKitMediaSource;
//   const sourceBuffer = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
//   const isTypeSupported = mediaSource &&
//     typeof mediaSource.isTypeSupported === 'function' &&
//     mediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
//
//   // if SourceBuffer is exposed ensure its API is valid
//   // safari and old version of Chrome doe not expose SourceBuffer globally so checking SourceBuffer.prototype is impossible
//   const sourceBufferValidAPI = !sourceBuffer ||
//     (sourceBuffer.prototype &&
//     typeof sourceBuffer.prototype.appendBuffer === 'function' &&
//     typeof sourceBuffer.prototype.remove === 'function');
//   return isTypeSupported && sourceBufferValidAPI;
// })();
