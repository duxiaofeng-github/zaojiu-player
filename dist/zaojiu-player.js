/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(1);
var i18n_1 = __webpack_require__(4);
var FullScreenApi = (function () {
    function FullScreenApi() {
    }
    return FullScreenApi;
}());
exports.FullScreenApi = FullScreenApi;
var PlayerEventType;
(function (PlayerEventType) {
    PlayerEventType["SourceChange"] = "sourcechange";
    PlayerEventType["RetryPlay"] = "retryplay";
})(PlayerEventType = exports.PlayerEventType || (exports.PlayerEventType = {}));
var PlayerEvent = (function () {
    function PlayerEvent(type, detail) {
        this.type = type;
        this.detail = detail;
    }
    return PlayerEvent;
}());
exports.PlayerEvent = PlayerEvent;
var VideoSourceChangeEventDetail = (function () {
    function VideoSourceChangeEventDetail(srcArray, currentIndex) {
        this.srcArray = srcArray;
        this.currentIndex = currentIndex;
    }
    return VideoSourceChangeEventDetail;
}());
exports.VideoSourceChangeEventDetail = VideoSourceChangeEventDetail;
var ControlsOption = (function () {
    function ControlsOption(showBigPlay, showPlayPause, showProgressBar, showDuration, showVolume, showQuality, showFullScreen) {
        if (showBigPlay === void 0) { showBigPlay = true; }
        if (showPlayPause === void 0) { showPlayPause = true; }
        if (showProgressBar === void 0) { showProgressBar = true; }
        if (showDuration === void 0) { showDuration = true; }
        if (showVolume === void 0) { showVolume = true; }
        if (showQuality === void 0) { showQuality = true; }
        if (showFullScreen === void 0) { showFullScreen = true; }
        this.showBigPlay = true;
        this.showPlayPause = true;
        this.showProgressBar = true;
        this.showVolume = true;
        this.showDuration = true;
        this.showFullScreen = true;
        this.showQuality = true;
        this.showBigPlay = showBigPlay;
        this.showPlayPause = showPlayPause;
        this.showProgressBar = showProgressBar;
        this.showVolume = showVolume;
        this.showDuration = showDuration;
        this.showFullScreen = showFullScreen;
        this.showQuality = showQuality;
    }
    Object.defineProperty(ControlsOption.prototype, "hasControls", {
        get: function () {
            return this.showBigPlay ||
                this.showPlayPause ||
                this.showProgressBar ||
                this.showVolume ||
                this.showDuration ||
                this.showQuality ||
                this.showFullScreen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlsOption.prototype, "hasToolBarControls", {
        get: function () {
            return this.showPlayPause ||
                this.showProgressBar ||
                this.showVolume ||
                this.showDuration ||
                this.showQuality ||
                this.showFullScreen;
        },
        enumerable: true,
        configurable: true
    });
    return ControlsOption;
}());
exports.ControlsOption = ControlsOption;
var SourceOption = (function () {
    function SourceOption(src, quality, mimeType) {
        this.src = src;
        this.quality = quality;
        this.minetype = mimeType;
    }
    return SourceOption;
}());
exports.SourceOption = SourceOption;
var Option = (function () {
    function Option(element, playList, autoplay, preload, loop, 
        // playsinline = true,
        controls, swf) {
        if (autoplay === void 0) { autoplay = false; }
        if (preload === void 0) { preload = 'metadata'; }
        if (loop === void 0) { loop = false; }
        // playsinline = true,
        if (controls === void 0) { controls = true; }
        if (swf === void 0) { swf = "video-js.swf"; }
        this.playList = [[]];
        this.autoplay = false;
        this.preload = 'metadata';
        this.loop = false;
        // playsinline = true;
        this.controls = true;
        this.swf = "video-js.swf";
        if (!element)
            throw new Error('Must specify an element id or pass a DOMElement');
        this.element = element;
        this.playList = utils_1.parsePlayList(playList);
        this.autoplay = autoplay;
        this.loop = loop;
        // this.playsinline = playsinline;
        this.preload = preload;
        this.controls = controls;
    }
    return Option;
}());
exports.Option = Option;
exports.languageDict = {
    'default': i18n_1.i18nCN,
    'zh-CN': i18n_1.i18nCN,
};
var Language = (function () {
    function Language(lang, dict) {
        this.dict = exports.languageDict['default'];
        this.use(lang, dict);
    }
    Language.prototype.use = function (lang, dict) {
        if (dict)
            exports.languageDict[lang] = dict;
        this.dict = exports.languageDict[lang] || exports.languageDict['default'];
    };
    Language.prototype.translate = function (string) {
        var result = string;
        for (var key in this.dict) {
            result = result.replace(key, this.dict[key]);
        }
        return result;
    };
    return Language;
}());
exports.Language = Language;
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["HAVE_NOTHING"] = 0] = "HAVE_NOTHING";
    ReadyState[ReadyState["HAVE_METADATA"] = 1] = "HAVE_METADATA";
    ReadyState[ReadyState["HAVE_CURRENT_DATA"] = 2] = "HAVE_CURRENT_DATA";
    ReadyState[ReadyState["HAVE_FUTURE_DATA"] = 3] = "HAVE_FUTURE_DATA";
    ReadyState[ReadyState["HAVE_ENOUGH_DATA"] = 4] = "HAVE_ENOUGH_DATA";
})(ReadyState = exports.ReadyState || (exports.ReadyState = {}));
var NetworkState;
(function (NetworkState) {
    NetworkState[NetworkState["NETWORK_EMPTY"] = 0] = "NETWORK_EMPTY";
    NetworkState[NetworkState["NETWORK_IDLE"] = 1] = "NETWORK_IDLE";
    NetworkState[NetworkState["NETWORK_LOADING"] = 2] = "NETWORK_LOADING";
    NetworkState[NetworkState["NETWORK_NO_SOURCE"] = 3] = "NETWORK_NO_SOURCE";
})(NetworkState = exports.NetworkState || (exports.NetworkState = {}));
var PlayerError = (function () {
    function PlayerError(code) {
        this.code = code;
    }
    return PlayerError;
}());
exports.PlayerError = PlayerError;
var MediaErrorCode;
(function (MediaErrorCode) {
    MediaErrorCode[MediaErrorCode["MEDIA_ERR_ABORTED"] = 1] = "MEDIA_ERR_ABORTED";
    MediaErrorCode[MediaErrorCode["MEDIA_ERR_NETWORK"] = 2] = "MEDIA_ERR_NETWORK";
    MediaErrorCode[MediaErrorCode["MEDIA_ERR_DECODE"] = 3] = "MEDIA_ERR_DECODE";
    MediaErrorCode[MediaErrorCode["MEDIA_ERR_SRC_NOT_SUPPORTED"] = 4] = "MEDIA_ERR_SRC_NOT_SUPPORTED";
})(MediaErrorCode = exports.MediaErrorCode || (exports.MediaErrorCode = {}));
var VideoErrorType;
(function (VideoErrorType) {
    VideoErrorType[VideoErrorType["EnvError"] = 1] = "EnvError";
    VideoErrorType[VideoErrorType["VideoSourceError"] = 2] = "VideoSourceError";
    VideoErrorType[VideoErrorType["NetworkError"] = 3] = "NetworkError";
    VideoErrorType[VideoErrorType["VideoDecodeError"] = 4] = "VideoDecodeError";
    VideoErrorType[VideoErrorType["LiveFinish"] = 5] = "LiveFinish";
    VideoErrorType[VideoErrorType["CrossDomainError"] = 6] = "CrossDomainError";
    VideoErrorType[VideoErrorType["Others"] = 7] = "Others";
})(VideoErrorType = exports.VideoErrorType || (exports.VideoErrorType = {}));
var FlashBuffer = (function () {
    function FlashBuffer(start, end) {
        this.start = start;
        this.end = end;
    }
    return FlashBuffer;
}());
exports.FlashBuffer = FlashBuffer;
var FlashTimeRanges = (function () {
    function FlashTimeRanges(buffer) {
        this.buffer = [];
        if (buffer instanceof FlashBuffer) {
            this.buffer.push(buffer);
        }
        else {
            (_a = this.buffer).push.apply(_a, buffer);
        }
        var _a;
    }
    Object.defineProperty(FlashTimeRanges.prototype, "length", {
        get: function () {
            return this.buffer.length;
        },
        enumerable: true,
        configurable: true
    });
    FlashTimeRanges.prototype.start = function (index) {
        if (index < 0 || index > this.buffer.length - 1)
            return 0;
        return this.buffer[index].start;
    };
    FlashTimeRanges.prototype.end = function (index) {
        if (index < 0 || index > this.buffer.length - 1)
            return 0;
        return this.buffer[index].end;
    };
    return FlashTimeRanges;
}());
exports.FlashTimeRanges = FlashTimeRanges;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var flashVersion = function () {
    var version = '0,0,0';
    try {
        version = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash')
            .GetVariable('$version')
            .replace(/\D+/g, ',')
            .match(/^,?(.+),?$/)[1];
    }
    catch (e) {
        try {
            if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
                version = (navigator.plugins['Shockwave Flash 2.0'] ||
                    navigator.plugins['Shockwave Flash'])
                    .description
                    .replace(/\D+/g, ',')
                    .match(/^,?(.+),?$/)[1];
            }
        }
        catch (err) {
        }
    }
    return version.split(',');
};
exports.IS_IN_WECHAT = /micromessenger/i.test(navigator.userAgent);
exports.IS_IOS = /iPhone|iPad/i.test(navigator.userAgent);
exports.IS_ANDROID = /Android/i.test(navigator.userAgent);
exports.IS_MOBILE = exports.IS_IOS || exports.IS_ANDROID;
exports.HAS_MOUSE_EVENT = ('onmousedown' in document);
exports.HAS_TOUCH_EVENT = ('ontouchstart' in document);
exports.IS_CHROME = /Chrome/i.test(navigator.userAgent);
exports.IS_WINDOWS_WECHAT = /WindowsWechat/i.test(navigator.userAgent);
exports.IS_SUPPORT_MSE = 'MediaSource' in window;
exports.IS_SUPPORT_FLASH = flashVersion()[0] >= '10';
exports.createElementByString = function (str) {
    var tmpEle = document.createElement('div');
    str = str.replace(/[\s\n\r]*</g, '<').replace(/>[\s\n\r]*/g, '>');
    tmpEle.innerHTML = str;
    return tmpEle.childNodes;
};
exports.secondToMMSS = function (seconds) {
    if (!seconds)
        return '00:00';
    var date = new Date(null);
    date.setSeconds(seconds); // specify value for SECONDS here
    return date.toISOString().substr(11, 8).replace(/^00:(.+:.+)$/, '$1');
};
exports.parsePercent = function (percent) {
    if (percent > 1)
        percent = 1;
    if (percent < 0)
        percent = 0;
    return parseFloat(percent.toFixed(2));
};
exports.getTouchTarget = function (e) {
    if (!e || !(e.touches && e.targetTouches && e.changedTouches))
        return null;
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
exports.rtmpRegexp = /^rtmp[set]?:\/\//i;
var extMimetypeMap = JSON.parse('{"3gp":["video/3gpp"],"3gpp":["video/3gpp","audio/3gpp"],"3g2":["video/3gpp2"],"h261":["video/h261"],"h263":["video/h263"],"h264":["video/h264"],"jpgv":["video/jpeg"],"jpm":["video/jpm"],"jpgm":["video/jpm"],"mj2":["video/mj2"],"mjp2":["video/mj2"],"ts":["video/mp2t"],"mp4":["video/mp4"],"mp4v":["video/mp4"],"mpg4":["video/mp4"],"mpeg":["video/mpeg"],"mpg":["video/mpeg"],"mpe":["video/mpeg"],"m1v":["video/mpeg"],"m2v":["video/mpeg"],"ogv":["video/ogg"],"qt":["video/quicktime"],"mov":["video/quicktime"],"uvh":["video/vnd.dece.hd"],"uvvh":["video/vnd.dece.hd"],"uvm":["video/vnd.dece.mobile"],"uvvm":["video/vnd.dece.mobile"],"uvp":["video/vnd.dece.pd"],"uvvp":["video/vnd.dece.pd"],"uvs":["video/vnd.dece.sd"],"uvvs":["video/vnd.dece.sd"],"uvv":["video/vnd.dece.video"],"uvvv":["video/vnd.dece.video"],"dvb":["video/vnd.dvb.file"],"fvt":["video/vnd.fvt"],"mxu":["video/vnd.mpegurl"],"m4u":["video/vnd.mpegurl"],"pyv":["video/vnd.ms-playready.media.pyv"],"uvu":["video/vnd.uvvu.mp4"],"uvvu":["video/vnd.uvvu.mp4"],"viv":["video/vnd.vivo"],"webm":["video/webm"],"f4v":["video/x-f4v"],"fli":["video/x-fli"],"flv":["video/x-flv"],"m4v":["video/x-m4v"],"mkv":["video/x-matroska"],"mk3d":["video/x-matroska"],"mks":["video/x-matroska"],"mng":["video/x-mng"],"asf":["video/x-ms-asf"],"asx":["video/x-ms-asf"],"vob":["video/x-ms-vob"],"wm":["video/x-ms-wm"],"wmv":["video/x-ms-wmv"],"wmx":["video/x-ms-wmx"],"wvx":["video/x-ms-wvx"],"avi":["video/x-msvideo"],"movie":["video/x-sgi-movie"],"smv":["video/x-smv"],"adp":["audio/adpcm"],"au":["audio/basic"],"snd":["audio/basic"],"mid":["audio/midi"],"midi":["audio/midi"],"kar":["audio/midi"],"rmi":["audio/midi"],"mp3":["audio/mp3","audio/mpeg"],"m4a":["audio/mp4","audio/x-m4a"],"mp4a":["audio/mp4"],"mpga":["audio/mpeg"],"mp2":["audio/mpeg"],"mp2a":["audio/mpeg"],"m2a":["audio/mpeg"],"m3a":["audio/mpeg"],"oga":["audio/ogg"],"ogg":["audio/ogg"],"spx":["audio/ogg"],"s3m":["audio/s3m"],"sil":["audio/silk"],"uva":["audio/vnd.dece.audio"],"uvva":["audio/vnd.dece.audio"],"eol":["audio/vnd.digital-winds"],"dra":["audio/vnd.dra"],"dts":["audio/vnd.dts"],"dtshd":["audio/vnd.dts.hd"],"lvp":["audio/vnd.lucent.voice"],"pya":["audio/vnd.ms-playready.media.pya"],"ecelp4800":["audio/vnd.nuera.ecelp4800"],"ecelp7470":["audio/vnd.nuera.ecelp7470"],"ecelp9600":["audio/vnd.nuera.ecelp9600"],"rip":["audio/vnd.rip"],"wav":["audio/wav","audio/wave","audio/x-wav"],"weba":["audio/webm"],"aac":["audio/x-aac"],"aif":["audio/x-aiff"],"aiff":["audio/x-aiff"],"aifc":["audio/x-aiff"],"caf":["audio/x-caf"],"flac":["audio/x-flac"],"mka":["audio/x-matroska"],"m3u":["audio/x-mpegurl"],"wax":["audio/x-ms-wax"],"wma":["audio/x-ms-wma"],"ram":["audio/x-pn-realaudio"],"ra":["audio/x-pn-realaudio","audio/x-realaudio"],"rmp":["audio/x-pn-realaudio-plugin"],"xm":["audio/xm"]}');
var getMimetypeFromUrl = function (url) {
    if (exports.rtmpRegexp.test(url))
        return 'rtmp/mp4';
    for (var key in extMimetypeMap) {
        if (url.indexOf("." + key) !== -1)
            return extMimetypeMap[key];
    }
    return '';
};
exports.parsePlayList = function (src) {
    if (!src)
        return [[]];
    var result = [];
    if (typeof src === 'string') {
        result.push([new model_1.SourceOption(src, '', getMimetypeFromUrl(src))]);
    }
    else if ((exports.IS_SUPPORT_MSE && src instanceof MediaSource) || src instanceof model_1.SourceOption) {
        result.push([src]);
    }
    else if (src.src && src.quality && src.mimetype) {
        result.push([new model_1.SourceOption(src.src, src.quality, src.mimetype)]);
    }
    else if (Array.isArray(src)) {
        var singleList = [];
        for (var _i = 0, src_1 = src; _i < src_1.length; _i++) {
            var item = src_1[_i];
            if (typeof item === 'string') {
                singleList.push(new model_1.SourceOption(item, '', getMimetypeFromUrl(item)));
            }
            else if ((exports.IS_SUPPORT_MSE && item instanceof MediaSource) || item instanceof model_1.SourceOption) {
                singleList.push(item);
            }
            else if (item.src && item.quality && item.mimetype) {
                singleList.push(new model_1.SourceOption(item.src, item.quality, item.mimetype));
            }
        }
        if (singleList.length) {
            result.push(singleList);
        }
        else {
            for (var _a = 0, src_2 = src; _a < src_2.length; _a++) {
                var item = src_2[_a];
                if (Array.isArray(item)) {
                    var multiList = [];
                    for (var _b = 0, item_1 = item; _b < item_1.length; _b++) {
                        var item2 = item_1[_b];
                        if (typeof item2 === 'string') {
                            multiList.push(new model_1.SourceOption(item2, '', getMimetypeFromUrl(item2)));
                        }
                        else if ((exports.IS_SUPPORT_MSE && item2 instanceof MediaSource) || item2 instanceof model_1.SourceOption) {
                            multiList.push(item2);
                        }
                        else if (item2.src && item2.quality && item2.mimetype) {
                            multiList.push(new model_1.SourceOption(item2.src, item2.quality, item2.mimetype));
                        }
                    }
                    result.push(multiList);
                }
            }
        }
    }
    return result;
};
exports.getAbsoluteURL = function (url) {
    // Check if absolute URL
    if (!url.match(/^https?:\/\//)) {
        // Convert to absolute URL. Flash hosted off-site needs an absolute URL.
        var div = document.createElement('div');
        div.innerHTML = "<a href=\"" + url + "\">x</a>";
        url = div.firstChild.href;
    }
    return url;
};
exports.genRandomID = function () {
    return Math.random().toString(36).substr(2, 10);
};
exports.canPlayFormat = {
    'video/flv': 'FLV',
    'video/x-flv': 'FLV',
    'video/flash': 'FLV',
};
exports.canPlayRtmpFormat = {
    'rtmp/mp4': 'MP4',
    'rtmp/flv': 'FLV',
};
exports.canPlayTypeByFlash = function (type) {
    if (type in Object.assign(exports.canPlayFormat, exports.canPlayRtmpFormat)) {
        return 'maybe';
    }
    return '';
};
exports.isRtmp = function (src) {
    return src.minetype in exports.canPlayRtmpFormat || exports.rtmpRegexp.test(src.src);
};
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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--0-1!../node_modules/postcss-loader/lib/index.js??ref--0-2!../node_modules/sass-loader/lib/loader.js!./player.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--0-1!../node_modules/postcss-loader/lib/index.js??ref--0-2!../node_modules/sass-loader/lib/loader.js!./player.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__(14);
var Subscription_1 = __webpack_require__(7);
var Observer_1 = __webpack_require__(16);
var rxSubscriber_1 = __webpack_require__(8);
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.i18nCN = {
    'unknown quality': '未知质量',
    'Video type is not support by current browser': '当前浏览器不支持播放该视频格式，请使用其他浏览器打开',
    'Fetch video data failed, please': '获取视频失败，请',
    'Network error, please check the network configuration and': '网络错误，请检查网络配置并',
    'retry play': '重试播放',
    'Video decode error': '视频解码错误',
    'Fetch video data failed': '获取视频失败',
    'Something goes wrong, please': '有些不对经，请',
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(6);
var toSubscriber_1 = __webpack_require__(21);
var observable_1 = __webpack_require__(26);
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
     *
     * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
     *
     * `subscribe` is not a regular operator, but a method that calls Observables internal `subscribe` function. It
     * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
     * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
     * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
     * thought.
     *
     * Apart from starting the execution of an Observable, this method allows you to listen for values
     * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
     * following ways.
     *
     * The first way is creating an object that implements {@link Observer} interface. It should have methods
     * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
     * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
     * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
     * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
     * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
     * be left uncaught.
     *
     * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
     * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
     * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
     * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
     * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
     * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
     *
     * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
     * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
     * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
     * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
     *
     * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
     * It is an Observable itself that decides when these functions will be called. For example {@link of}
     * by default emits all its values synchronously. Always check documentation for how given Observable
     * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
     *
     * @example <caption>Subscribe with an Observer</caption>
     * const sumObserver = {
     *   sum: 0,
     *   next(value) {
     *     console.log('Adding: ' + value);
     *     this.sum = this.sum + value;
     *   },
     *   error() { // We actually could just remote this method,
     *   },        // since we do not really care about errors right now.
     *   complete() {
     *     console.log('Sum equals: ' + this.sum);
     *   }
     * };
     *
     * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
     * .subscribe(sumObserver);
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Subscribe with functions</caption>
     * let sum = 0;
     *
     * Rx.Observable.of(1, 2, 3)
     * .subscribe(
     *   function(value) {
     *     console.log('Adding: ' + value);
     *     sum = sum + value;
     *   },
     *   undefined,
     *   function() {
     *     console.log('Sum equals: ' + sum);
     *   }
     * );
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Cancel a subscription</caption>
     * const subscription = Rx.Observable.interval(1000).subscribe(
     *   num => console.log(num),
     *   undefined,
     *   () => console.log('completed!') // Will not be called, even
     * );                                // when cancelling subscription
     *
     *
     * setTimeout(() => {
     *   subscription.unsubscribe();
     *   console.log('unsubscribed!');
     * }, 2500);
     *
     * // Logs:
     * // 0 after 1s
     * // 1 after 2s
     * // "unsubscribed!" after 2,5s
     *
     *
     * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
     *  Observable.
     * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled.
     * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     * @method subscribe
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this.source ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
var _root = __window || __global || __self;
exports.root = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__(22);
var isObject_1 = __webpack_require__(23);
var isFunction_1 = __webpack_require__(14);
var tryCatch_1 = __webpack_require__(24);
var errorObject_1 = __webpack_require__(15);
var UnsubscriptionError_1 = __webpack_require__(25);
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(6);
var Symbol = root_1.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, ".src-player__player--3Fgzp{position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;background-color:#000;font-family:PingFang SC,Arial,Microsoft YaHei,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.src-player__player--3Fgzp[max-width~=\"414px\"] .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__currentTime--3nUAJ,.src-player__player--3Fgzp[max-width~=\"414px\"] .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__duration--2Azx_,.src-player__player--3Fgzp[max-width~=\"414px\"] .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__quality--2ZICF{display:none}.src-player__player--3Fgzp.src-player__touchable--HAlbk .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__toolBarIcons--3KHzF:active{color:#00d7c6}.src-player__player--3Fgzp.src-player__touchable--HAlbk .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__toolBarIcons--3KHzF:active svg{fill:#00d7c6!important}.src-player__player--3Fgzp.src-player__touchable--HAlbk .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__volume--3jBzu{display:none}.src-player__player--3Fgzp:not(.src-player__touchable--HAlbk) .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__toolBarIcons--3KHzF:hover{color:#00d7c6}.src-player__player--3Fgzp:not(.src-player__touchable--HAlbk) .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__toolBarIcons--3KHzF:hover svg{fill:#00d7c6}.src-player__player--3Fgzp:not(.src-player__touchable--HAlbk) .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__progressBar--2BL3c .src-player__progressBarBackground--3iIT6:hover{height:7px}.src-player__player--3Fgzp .src-player__video--SDce4{position:absolute;left:0;top:0;width:100%;height:100%}.src-player__player--3Fgzp .src-player__controls--3t9Fe,.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__error--hWKcA{position:absolute;top:0;bottom:0;left:0;right:0}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__error--hWKcA{background-color:#000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__error--hWKcA .src-player__errorIcon--1AcrS{width:46px;height:40px}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__error--hWKcA .src-player__errorMessage--3MFWw{color:#fff;font-size:12px;line-height:1.5em;text-align:center;width:80%;margin:15px auto 0}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__error--hWKcA .src-player__errorMessage--3MFWw a{color:#00d7c6;text-decoration:none;cursor:pointer}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__error--hWKcA .src-player__errorMessage--3MFWw a:hover{text-decoration:underline}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__loading--2VqDm{position:absolute;left:0;top:0;bottom:0;right:0;margin:auto;border-radius:100%;width:15px;height:15px;-webkit-box-shadow:15px 15px hsla(0,0%,100%,.2),-15px 15px #fff,-15px -15px hsla(0,0%,100%,.2),15px -15px #fff;box-shadow:15px 15px hsla(0,0%,100%,.2),-15px 15px #fff,-15px -15px hsla(0,0%,100%,.2),15px -15px #fff;-webkit-animation:src-player__a--3dQJE ease infinite 3s;animation:src-player__a--3dQJE ease infinite 3s;display:none}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__bigPlay--1cSwP{position:absolute;width:66px;height:66px;top:50%;left:50%;-webkit-transform:translateY(-50%) translateX(-50%);transform:translateY(-50%) translateX(-50%);cursor:pointer;opacity:.8;-webkit-transition:opacity .3s;transition:opacity .3s}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__bigPlay--1cSwP:hover{opacity:1}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W{position:absolute;bottom:0;left:0;right:0;height:36px;background-color:rgba(0,0,0,.5);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__toolBarBtns--1AhvI{padding:0 6px}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__toolBarBtns--1AhvI .src-player__toolBarBtn--2lxVL{left:6px}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__toolBarBtns--1AhvI:nth-child(2){padding-left:12px}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__toolBarBtns--1AhvI:nth-child(2) .src-player__toolBarBtn--2lxVL{left:12px}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__toolBarBtns--1AhvI:last-child{padding-right:12px}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__toolBarIcons--3KHzF{color:#fff;-webkit-transition:color .5s;transition:color .5s}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__toolBarIcons--3KHzF svg{fill:#fff;-webkit-transition:fill .5s;transition:fill .5s}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__topProgressBar--3oliN{position:absolute;top:-2px;left:0;right:0;height:1px;background-color:hsla(0,0%,78%,.5);opacity:0}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__topProgressBar--3oliN .src-player__topProgressBarFill--3ETKt{position:absolute;top:0;bottom:0;left:0;width:0;background-color:#00d7c6}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__playPauseBtns--3S8EO{-ms-flex-negative:0;flex-shrink:0;position:relative;width:18px;cursor:pointer}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__playPauseBtns--3S8EO .src-player__pauseBtn--2pguz,.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__playPauseBtns--3S8EO .src-player__playBtn--1MQbs{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__playPauseBtns--3S8EO .src-player__playBtn--1MQbs{width:18px;height:20px}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__playPauseBtns--3S8EO .src-player__pauseBtn--2pguz{display:none;width:13px;height:18px}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__currentTime--3nUAJ,.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__duration--2Azx_{width:40px;color:#fff;font-size:14px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:default}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__progressBar--2BL3c{position:relative;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin-left:13px;margin-right:13px}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__progressBar--2BL3c .src-player__progressBarBackground--3iIT6{position:absolute;top:50%;left:0;right:0;height:3px;background-color:hsla(0,0%,78%,.5);cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:height .5s;transition:height .5s}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__progressBar--2BL3c .src-player__progressBarBackground--3iIT6 .src-player__progressBarBuffered--1mwG9{position:absolute;top:0;bottom:0;left:0;width:0;background-color:hsla(0,0%,100%,.5);pointer-events:none}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__progressBar--2BL3c .src-player__progressBarBackground--3iIT6 .src-player__progressBarFill--20bK1{position:absolute;top:0;bottom:0;left:0;width:0;background-color:#00d7c6;pointer-events:none}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__progressBar--2BL3c .src-player__progressBarBackground--3iIT6 .src-player__progressBarCursor--3h0-n{height:15px;width:15px;border-radius:50%;background-color:#fff;-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);position:absolute;left:0;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);cursor:pointer}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__quality--2ZICF{position:relative;-ms-flex-negative:0;flex-shrink:0;font-size:14px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__quality--2ZICF:hover .src-player__qualityConditioner--1YYHT{opacity:1;visibility:visible;-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__quality--2ZICF .src-player__qualityBtns--q5cbt{line-height:1em}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__quality--2ZICF .src-player__qualityConditioner--1YYHT{position:absolute;left:50%;bottom:36px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;background-color:rgba(0,0,0,.5);opacity:0;visibility:hidden;-webkit-transition:visibility 0s .3s,opacity .3s ease-out;transition:visibility 0s .3s,opacity .3s ease-out;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__quality--2ZICF .src-player__qualityConditioner--1YYHT .src-player__qualityRow--2ptoo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:35px;padding:0 10px;white-space:nowrap;color:#fff;-webkit-transition:color .3s;transition:color .3s}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__quality--2ZICF .src-player__qualityConditioner--1YYHT .src-player__qualityRow--2ptoo.activate,.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__quality--2ZICF .src-player__qualityConditioner--1YYHT .src-player__qualityRow--2ptoo:hover{color:#00d7c6}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__volume--3jBzu{-ms-flex-negative:0;flex-shrink:0;position:relative;width:23px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__volume--3jBzu:hover .src-player__volumeConditioner--HOFy-{opacity:1;visibility:visible;-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__volume--3jBzu .src-player__volumeBtns--2kke1{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__volume--3jBzu .src-player__volumeBtns--2kke1 .src-player__volumeOffBtn--THjHJ,.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__volume--3jBzu .src-player__volumeBtns--2kke1 .src-player__volumeOnBtn--dy0Mh{position:absolute;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__volume--3jBzu .src-player__volumeBtns--2kke1 .src-player__volumeOnBtn--dy0Mh{width:19px;height:18px}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__volume--3jBzu .src-player__volumeBtns--2kke1 .src-player__volumeOffBtn--THjHJ{width:23px;height:18px;display:none}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__volume--3jBzu .src-player__volumeConditioner--HOFy-{position:absolute;left:50%;bottom:36px;height:100px;width:23px;cursor:default;background-color:rgba(0,0,0,.5);opacity:0;visibility:hidden;-webkit-transition:visibility 0s .3s,opacity .3s ease-out;transition:visibility 0s .3s,opacity .3s ease-out;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__volume--3jBzu .src-player__volumeConditioner--HOFy- .src-player__volumeBackground--1J5w1{content:\"\";width:4px;background-color:hsla(0,0%,78%,.5);position:absolute;left:50%;top:12px;bottom:12px;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__volume--3jBzu .src-player__volumeConditioner--HOFy- .src-player__volumeFill--3yB0e{background-color:#00d7c6;width:4px;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:12px;pointer-events:none;-webkit-transition:height .3s;transition:height .3s}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__volume--3jBzu .src-player__volumeConditioner--HOFy- .src-player__volumeCursor--2As9x{height:10px;width:10px;border-radius:50%;background-color:#fff;-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);position:absolute;top:calc(100% - 12px);left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);-webkit-transition:top .3s;transition:top .3s;cursor:pointer}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__fullScreenBtns--2KXg8{-ms-flex-negative:0;flex-shrink:0;position:relative;width:16px;cursor:pointer}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__fullScreenBtns--2KXg8 .src-player__enterFullscreenBtn--30GAG,.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__fullScreenBtns--2KXg8 .src-player__exitFullscreenBtn--31wmH{position:absolute;top:50%;width:16px;height:16px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.src-player__player--3Fgzp .src-player__controls--3t9Fe .src-player__toolBar--EDQ-W .src-player__fullScreenBtns--2KXg8 .src-player__exitFullscreenBtn--31wmH{display:none}.src-player__hidden--293MA{display:none!important}@-webkit-keyframes src-player__a--3dQJE{0%,to{-webkit-box-shadow:15px 15px hsla(0,0%,100%,.2),-15px 15px #fff,-15px -15px hsla(0,0%,100%,.2),15px -15px #fff;box-shadow:15px 15px hsla(0,0%,100%,.2),-15px 15px #fff,-15px -15px hsla(0,0%,100%,.2),15px -15px #fff}25%{-webkit-box-shadow:-15px 15px #fff,-15px -15px hsla(0,0%,100%,.2),15px -15px #fff,15px 15px hsla(0,0%,100%,.2);box-shadow:-15px 15px #fff,-15px -15px hsla(0,0%,100%,.2),15px -15px #fff,15px 15px hsla(0,0%,100%,.2)}50%{-webkit-box-shadow:-15px -15px hsla(0,0%,100%,.2),15px -15px #fff,15px 15px hsla(0,0%,100%,.2),-15px 15px #fff;box-shadow:-15px -15px hsla(0,0%,100%,.2),15px -15px #fff,15px 15px hsla(0,0%,100%,.2),-15px 15px #fff}75%{-webkit-box-shadow:15px -15px #fff,15px 15px hsla(0,0%,100%,.2),-15px 15px #fff,-15px -15px hsla(0,0%,100%,.2);box-shadow:15px -15px #fff,15px 15px hsla(0,0%,100%,.2),-15px 15px #fff,-15px -15px hsla(0,0%,100%,.2)}}", ""]);

// exports
exports.locals = {
	"player": "src-player__player--3Fgzp",
	"controls": "src-player__controls--3t9Fe",
	"toolBar": "src-player__toolBar--EDQ-W",
	"currentTime": "src-player__currentTime--3nUAJ",
	"duration": "src-player__duration--2Azx_",
	"quality": "src-player__quality--2ZICF",
	"touchable": "src-player__touchable--HAlbk",
	"toolBarIcons": "src-player__toolBarIcons--3KHzF",
	"volume": "src-player__volume--3jBzu",
	"progressBar": "src-player__progressBar--2BL3c",
	"progressBarBackground": "src-player__progressBarBackground--3iIT6",
	"video": "src-player__video--SDce4",
	"error": "src-player__error--hWKcA",
	"errorIcon": "src-player__errorIcon--1AcrS",
	"errorMessage": "src-player__errorMessage--3MFWw",
	"loading": "src-player__loading--2VqDm",
	"a": "src-player__a--3dQJE",
	"bigPlay": "src-player__bigPlay--1cSwP",
	"toolBarBtns": "src-player__toolBarBtns--1AhvI",
	"toolBarBtn": "src-player__toolBarBtn--2lxVL",
	"topProgressBar": "src-player__topProgressBar--3oliN",
	"topProgressBarFill": "src-player__topProgressBarFill--3ETKt",
	"playPauseBtns": "src-player__playPauseBtns--3S8EO",
	"pauseBtn": "src-player__pauseBtn--2pguz",
	"playBtn": "src-player__playBtn--1MQbs",
	"progressBarBuffered": "src-player__progressBarBuffered--1mwG9",
	"progressBarFill": "src-player__progressBarFill--20bK1",
	"progressBarCursor": "src-player__progressBarCursor--3h0-n",
	"qualityConditioner": "src-player__qualityConditioner--1YYHT",
	"qualityBtns": "src-player__qualityBtns--q5cbt",
	"qualityRow": "src-player__qualityRow--2ptoo",
	"volumeConditioner": "src-player__volumeConditioner--HOFy-",
	"volumeBtns": "src-player__volumeBtns--2kke1",
	"volumeOffBtn": "src-player__volumeOffBtn--THjHJ",
	"volumeOnBtn": "src-player__volumeOnBtn--dy0Mh",
	"volumeBackground": "src-player__volumeBackground--1J5w1",
	"volumeFill": "src-player__volumeFill--3yB0e",
	"volumeCursor": "src-player__volumeCursor--2As9x",
	"fullScreenBtns": "src-player__fullScreenBtns--2KXg8",
	"enterFullscreenBtn": "src-player__enterFullscreenBtn--30GAG",
	"exitFullscreenBtn": "src-player__exitFullscreenBtn--31wmH",
	"hidden": "src-player__hidden--293MA"
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var video_1 = __webpack_require__(18);
var model_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var controls_1 = __webpack_require__(30);
var Subject_1 = __webpack_require__(31);
__webpack_require__(34);
var styles = __webpack_require__(2);
var ElementQueries = __webpack_require__(36);
var template = "\n  <div class=\"" + styles.player + " " + (utils_1.IS_MOBILE ? styles.touchable : '') + "\"></div>\n";
var ZaojiuPlayer = (function () {
    function ZaojiuPlayer(option) {
        this.eventSource = new Subject_1.Subject();
        this.event$ = this.eventSource.asObservable();
        this.language = new model_1.Language('zh-CN');
        this.containerPositionCache = '';
        if (!option)
            throw new Error('option cannot be empty');
        var optionParsed;
        if (option instanceof model_1.Option) {
            optionParsed = option;
        }
        else {
            optionParsed = new model_1.Option(option.element, option.playList, option.autoplay, option.preload, option.loop, option.controls, option.swf);
        }
        this.option = optionParsed;
        this.el = utils_1.createElementByString(template).item(0);
        this.prepareVideo();
        this.prepareControls();
        this.perpareVideoSource();
        this.render();
    }
    ZaojiuPlayer.use = function (plugin) {
        if (plugin.name === 'FlashVideo') {
            this.FlashVideo = plugin;
        }
    };
    ZaojiuPlayer.prototype.getTargetElement = function () {
        if (this.option.element instanceof HTMLElement) {
            return this.option.element;
        }
        return document.getElementById(this.option.element);
    };
    ZaojiuPlayer.prototype.prepareControls = function () {
        this.controls = new controls_1.Controls(this, this.option, this.video, this, this.event$);
    };
    ZaojiuPlayer.prototype.prepareVideo = function () {
        this.video = new video_1.VideoPlayer(this, this.option, this.eventSource, this.event$);
    };
    ZaojiuPlayer.prototype.perpareVideoSource = function () {
        this.video.setSrc(this.option.playList);
    };
    ZaojiuPlayer.prototype.render = function () {
        this.video.render();
        this.controls.render();
        var container = this.getTargetElement();
        if (container.style.position !== 'relative' && container.style.position !== 'absolute') {
            this.containerPositionCache = container.style.position;
            container.style.position = 'relative';
        }
        container.innerHTML = '';
        container.appendChild(this.el);
        this.elementQueries = new ElementQueries();
        this.elementQueries.init(true);
    };
    ZaojiuPlayer.prototype.destroy = function () {
        this.video.destroy();
        this.controls.destroy();
        var container = this.getTargetElement();
        container.style.position = this.containerPositionCache;
        container.innerHTML = '';
        this.elementQueries.detach();
    };
    return ZaojiuPlayer;
}());
exports.ZaojiuPlayer = ZaojiuPlayer;
if (!window.ZaojiuPlayer)
    window.ZaojiuPlayer = ZaojiuPlayer;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = __webpack_require__(13);
__export(__webpack_require__(0));
exports.default = player_1.ZaojiuPlayer;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
__webpack_require__(19);
var html_1 = __webpack_require__(29);
var utils_1 = __webpack_require__(1);
var player_1 = __webpack_require__(13);
var styles = __webpack_require__(2);
var videoEvents = ['ready', 'abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'encrypted', 'ended', 'interruptbegin', 'interruptend', 'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting'];
var VideoPlayerTemplate = "\n  <div class=\"" + styles.video + "\"></div>\n";
var VideoPlayer = (function () {
    function VideoPlayer(container, opt, eventSource, event$) {
        var _this = this;
        this.srcArray = [];
        this.eventHandler = function (e) { return _this.handleEvent(e); };
        this.container = container;
        this.opt = opt;
        this.eventSource = eventSource;
        this.event$ = event$;
        this.containerEl = utils_1.createElementByString(VideoPlayerTemplate).item(0);
        this.bindEvent();
    }
    VideoPlayer.prototype.setSrc = function (playList) {
        if (!playList.length)
            return;
        var srcArray = playList[0];
        if (!srcArray.length)
            return;
        this.srcArray = [];
        for (var _i = 0, srcArray_1 = srcArray; _i < srcArray_1.length; _i++) {
            var item = srcArray_1[_i];
            this.srcArray.push(item);
        }
        this.currentIndex = 0;
        var currentSrc = this.srcArray && this.srcArray.length ? this.srcArray[this.currentIndex] : null;
        var e = new model_1.PlayerEvent(model_1.PlayerEventType.SourceChange, new model_1.VideoSourceChangeEventDetail(this.srcArray, this.currentIndex));
        this.eventSource.next(e);
        this.setVideoSrc(currentSrc);
    };
    VideoPlayer.prototype.getSrc = function () {
        return this.srcArray;
    };
    VideoPlayer.prototype.switchSrc = function (index) {
        var _this = this;
        if (index < 0 || index > this.srcArray.length - 1)
            throw new Error('invalid source index');
        this.currentIndex = index;
        var currentSrc = this.srcArray[this.currentIndex];
        var e = new model_1.PlayerEvent(model_1.PlayerEventType.SourceChange, new model_1.VideoSourceChangeEventDetail(this.srcArray, this.currentIndex));
        this.eventSource.next(e);
        var currentTimeCache = this.el ? this.el.currentTime : 0;
        this.setVideoSrc(currentSrc);
        this.event$.filter(function (e) { return e.type === 'loadedmetadata'; }).first().subscribe(function (e) {
            if (currentSrc instanceof model_1.SourceOption && !utils_1.isRtmp(currentSrc))
                _this.el.currentTime = currentTimeCache;
            _this.el.play();
        });
    };
    VideoPlayer.prototype.bindEvent = function () {
        var _this = this;
        this.eventSub = this.event$.filter(function (e) { return e.type === model_1.PlayerEventType.RetryPlay; }).subscribe(function (e) {
            if (!_this.el)
                return;
            var srcCache = _this.el.src;
            var currentTime = _this.el.currentTime;
            _this.el.src = null;
            setTimeout(function () {
                _this.el.src = srcCache;
                _this.el.currentTime = currentTime;
                _this.el.play();
            });
        });
    };
    VideoPlayer.prototype.setVideoSrc = function (src) {
        if (!src)
            return;
        var customEvent = new model_1.PlayerEvent('reset', src);
        this.eventSource.next(customEvent);
        this.el = null;
        this.containerEl.innerHTML = '';
        if (src instanceof model_1.SourceOption) {
            if (document.createElement('video').canPlayType(src.minetype)) {
                this.el = html_1.createHTMLVideoElement();
                this.onVideoEvent();
                this.el.src = src.src;
            }
            else if (utils_1.IS_SUPPORT_FLASH && utils_1.canPlayTypeByFlash(src.minetype) && player_1.ZaojiuPlayer.FlashVideo) {
                this.el = new player_1.ZaojiuPlayer['FlashVideo'](this.opt);
                this.onVideoEvent();
                this.el.src = src;
            }
            else {
                var customEvent_1 = new model_1.PlayerEvent('error', MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED);
                this.eventSource.next(customEvent_1);
                console.error("can not play src: " + src.src + ", mimetype: " + src.minetype + ".");
            }
        }
        else {
            this.el = html_1.createHTMLVideoElement();
            this.onVideoEvent();
            this.el.src = URL.createObjectURL(src);
        }
        if (this.el) {
            this.el.autoplay = this.opt.autoplay;
            this.el.preload = this.opt.preload;
            this.el.loop = this.opt.loop;
            if (this.el instanceof HTMLVideoElement) {
                this.containerEl.appendChild(this.el);
                // html video has no ready
                var event_1 = new CustomEvent('ready', null);
                this.el.dispatchEvent(event_1);
            }
            else {
                this.containerEl.appendChild(this.el.el);
            }
        }
        return;
    };
    VideoPlayer.prototype.onVideoEvent = function () {
        var _this = this;
        videoEvents.forEach(function (eventKey) {
            if (_this.el)
                _this.el.addEventListener(eventKey, _this.eventHandler);
        });
    };
    VideoPlayer.prototype.offVideoEvent = function () {
        var _this = this;
        videoEvents.forEach(function (eventKey) {
            if (_this.el)
                _this.el.removeEventListener(eventKey, _this.eventHandler);
        });
    };
    VideoPlayer.prototype.handleEvent = function (e) {
        var eventKey = e.type;
        if (eventKey !== 'error') {
            var detail = e instanceof model_1.PlayerEvent ? e.detail : e;
            var customEvent = new model_1.PlayerEvent(eventKey, detail);
            this.eventSource.next(customEvent);
        }
        else if (this.el.error && this.el.error.code) {
            this.eventSource.next(new model_1.PlayerEvent(eventKey, this.el.error.code));
        }
    };
    VideoPlayer.prototype.render = function () {
        if (this.rendered)
            throw new Error('video already rendered');
        this.container.el.appendChild(this.containerEl);
        this.rendered = true;
    };
    VideoPlayer.prototype.destroy = function () {
        if (!this.rendered)
            throw new Error('video haven\'t render');
        this.containerEl.remove();
        if (this.eventSub)
            this.eventSub.unsubscribe();
        this.rendered = false;
    };
    return VideoPlayer;
}());
exports.VideoPlayer = VideoPlayer;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(5);
var first_1 = __webpack_require__(27);
Observable_1.Observable.prototype.first = first_1.first;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subscriber_1 = __webpack_require__(3);
var rxSubscriber_1 = __webpack_require__(8);
var Observer_1 = __webpack_require__(16);
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errorObject_1 = __webpack_require__(15);
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(6);
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root_1.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var EmptyError_1 = __webpack_require__(28);
/**
 * Emits only the first value (or the first value that meets some condition)
 * emitted by the source Observable.
 *
 * <span class="informal">Emits only the first value. Or emits only the first
 * value that passes some test.</span>
 *
 * <img src="./img/first.png" width="100%">
 *
 * If called with no arguments, `first` emits the first value of the source
 * Observable, then completes. If called with a `predicate` function, `first`
 * emits the first value of the source that matches the specified condition. It
 * may also take a `resultSelector` function to produce the output value from
 * the input value, and a `defaultValue` to emit in case the source completes
 * before it is able to emit a valid value. Throws an error if `defaultValue`
 * was not provided and a matching element is not found.
 *
 * @example <caption>Emit only the first click that happens on the DOM</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Emits the first click that happens on a DIV</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link take}
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
 * An optional function called with each item to test for condition matching.
 * @param {function(value: T, index: number): R} [resultSelector] A function to
 * produce the value on the output Observable based on the values
 * and the indices of the source Observable. The arguments passed to this
 * function are:
 * - `value`: the value that was emitted on the source.
 * - `index`: the "index" of the value from the source.
 * @param {R} [defaultValue] The default value emitted in case no valid value
 * was found on the source.
 * @return {Observable<T|R>} An Observable of the first item that matches the
 * condition.
 * @method first
 * @owner Observable
 */
function first(predicate, resultSelector, defaultValue) {
    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
}
exports.first = first;
var FirstOperator = (function () {
    function FirstOperator(predicate, resultSelector, defaultValue, source) {
        this.predicate = predicate;
        this.resultSelector = resultSelector;
        this.defaultValue = defaultValue;
        this.source = source;
    }
    FirstOperator.prototype.call = function (observer, source) {
        return source.subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
    };
    return FirstOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FirstSubscriber = (function (_super) {
    __extends(FirstSubscriber, _super);
    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.resultSelector = resultSelector;
        this.defaultValue = defaultValue;
        this.source = source;
        this.index = 0;
        this.hasCompleted = false;
        this._emitted = false;
    }
    FirstSubscriber.prototype._next = function (value) {
        var index = this.index++;
        if (this.predicate) {
            this._tryPredicate(value, index);
        }
        else {
            this._emit(value, index);
        }
    };
    FirstSubscriber.prototype._tryPredicate = function (value, index) {
        var result;
        try {
            result = this.predicate(value, index, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this._emit(value, index);
        }
    };
    FirstSubscriber.prototype._emit = function (value, index) {
        if (this.resultSelector) {
            this._tryResultSelector(value, index);
            return;
        }
        this._emitFinal(value);
    };
    FirstSubscriber.prototype._tryResultSelector = function (value, index) {
        var result;
        try {
            result = this.resultSelector(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this._emitFinal(result);
    };
    FirstSubscriber.prototype._emitFinal = function (value) {
        var destination = this.destination;
        if (!this._emitted) {
            this._emitted = true;
            destination.next(value);
            destination.complete();
            this.hasCompleted = true;
        }
    };
    FirstSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
            destination.next(this.defaultValue);
            destination.complete();
        }
        else if (!this.hasCompleted) {
            destination.error(new EmptyError_1.EmptyError);
        }
    };
    return FirstSubscriber;
}(Subscriber_1.Subscriber));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an Observable or a sequence was queried but has no
 * elements.
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link single}
 *
 * @class EmptyError
 */
var EmptyError = (function (_super) {
    __extends(EmptyError, _super);
    function EmptyError() {
        var err = _super.call(this, 'no elements in sequence');
        this.name = err.name = 'EmptyError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return EmptyError;
}(Error));
exports.EmptyError = EmptyError;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(1);
var styles = __webpack_require__(2);
var template = "\n  <video class=\"" + styles.video + "\" playsinline webkit-playsinline></video>\n";
exports.createHTMLVideoElement = function () {
    return utils_1.createElementByString(template).item(0);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(1);
var model_1 = __webpack_require__(0);
var styles = __webpack_require__(2);
var bigPlayBtnTemplate = "\n  <svg class=\"" + styles.bigPlay + "\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><path d=\"M0 30.006C0 46.582 13.44 60 30 60c16.56 0 30-13.43 30-30.006S46.56 0 30 0C13.44 0 0 13.43 0 30.006z\" id=\"b\"/><filter x=\"-6.2%\" y=\"-6.2%\" width=\"112.5%\" height=\"112.5%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feMorphology radius=\".75\" operator=\"dilate\" in=\"SourceAlpha\" result=\"shadowSpreadOuter1\"/><feOffset in=\"shadowSpreadOuter1\" result=\"shadowOffsetOuter1\"/><feGaussianBlur stdDeviation=\"1\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/><feComposite in=\"shadowBlurOuter1\" in2=\"SourceAlpha\" operator=\"out\" result=\"shadowBlurOuter1\"/><feColorMatrix values=\"0 0 0 0 0.563190901 0 0 0 0 0.563190901 0 0 0 0 0.563190901 0 0 0 1 0\" in=\"shadowBlurOuter1\"/></filter></defs><g fill=\"none\" fill-rule=\"evenodd\"><g transform=\"translate(3 3)\"><use fill=\"#000\" filter=\"url(#a)\" xlink:href=\"#b\"/><use stroke=\"#FFF\" stroke-width=\"1.5\" fill-opacity=\".3\" fill=\"#FFF\" xlink:href=\"#b\"/></g><path d=\"M29.257 20.7c-.215-.24-.526-.395-.872-.395-.25 0-.49.084-.682.215-.06.036-.108.084-.155.132-.287.287-.395.682-.323 1.052V44.32c-.072.37.036.765.323 1.052.454.454 1.195.454 1.65 0L44.18 33.855c.227-.227.347-.538.335-.85 0-.31-.108-.61-.335-.848L29.257 20.7z\" fill=\"#FFF\"/></g></svg>\n";
var BigPlayBtnControl = (function () {
    function BigPlayBtnControl(container, video, event$) {
        this.container = container;
        this.video = video;
        var elements = utils_1.createElementByString(bigPlayBtnTemplate);
        this.el = elements.item(0);
        this.event$ = event$;
        this.bindEvent();
    }
    BigPlayBtnControl.prototype.bindEvent = function () {
        var _this = this;
        this.eventSub = this.event$.subscribe(function (e) {
            if (e.type === 'play') {
                _this.hide();
            }
            else if (e.type === 'reset') {
                _this.hide();
            }
            else if (e.type === 'ready' || e.type === 'error') {
                _this.show();
            }
        });
        this.el.addEventListener('click', function () {
            _this.hide();
            if (_this.video.el)
                _this.video.el.play();
        });
    };
    BigPlayBtnControl.prototype.hide = function () {
        this.el.style.display = 'none';
    };
    BigPlayBtnControl.prototype.show = function () {
        this.el.style.display = 'block';
    };
    BigPlayBtnControl.prototype.render = function () {
        if (this.rendered)
            throw new Error('big play btn control already rendered');
        this.container.el.appendChild(this.el);
        this.rendered = true;
    };
    BigPlayBtnControl.prototype.destroy = function () {
        if (!this.rendered)
            throw new Error('big play btn control haven\'t render');
        this.el.remove();
        if (this.eventSub)
            this.eventSub.unsubscribe();
        this.rendered = false;
    };
    return BigPlayBtnControl;
}());
exports.BigPlayBtnControl = BigPlayBtnControl;
var errorTemplate = "\n  <div class=\"" + styles.error + "\">\n    <svg class=\"" + styles.errorIcon + "\" viewBox=\"0 0 46 40\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45.07 36.303L24.814 1.217C24.384.472 23.588.012 22.727.012c-.86 0-1.657.46-2.088 1.205L.342 36.372c-.43.746-.43 1.665 0 2.41.43.746 1.226 1.206 2.087 1.206h40.594c1.332 0 2.41-1.08 2.41-2.41 0-.47-.133-.906-.364-1.275zm-20.275-3.67c0 1.14-.926 2.067-2.068 2.067-1.14 0-2.067-.926-2.067-2.068v-.066c0-1.142.926-2.067 2.067-2.067 1.142 0 2.068.924 2.068 2.066v.066zm0-7.554c0 1.14-.926 2.066-2.068 2.066-1.14 0-2.067-.926-2.067-2.067V14.085c0-1.14.926-2.067 2.067-2.067 1.142 0 2.068.925 2.068 2.066v10.992z\" fill-rule=\"nonzero\" fill=\"#E1E1E1\"/></svg>\n    <div class=\"" + styles.errorMessage + "\"></div>\n  </div>\n";
var errorMessageTemplate = (_a = {},
    _a[model_1.VideoErrorType.EnvError] = "Video type is not support by current browser",
    _a[model_1.VideoErrorType.VideoSourceError] = "Fetch video data failed, please <a class=\"retry\">retry play</a>",
    _a[model_1.VideoErrorType.NetworkError] = "Network error, please check the network configuration and <a class=\"retry\">retry play</a>",
    _a[model_1.VideoErrorType.VideoDecodeError] = "Video decode error",
    _a[model_1.VideoErrorType.CrossDomainError] = "Fetch video data failed",
    _a[model_1.VideoErrorType.Others] = "Something goes wrong, please <a class=\"retry\">retry play</a>",
    _a);
var ErrorControl = (function () {
    function ErrorControl(container, video, lang, event$, eventSource) {
        this.container = container;
        var elements = utils_1.createElementByString(errorTemplate);
        this.el = elements.item(0);
        this.errorMessageEl = this.el.childNodes.item(1);
        this.video = video;
        this.lang = lang;
        this.event$ = event$;
        this.eventSource = eventSource;
        this.hide();
        this.bindEvent();
    }
    ErrorControl.prototype.bindEvent = function () {
        var _this = this;
        this.eventSub = this.event$.subscribe(function (e) {
            if (e.type === 'error') {
                _this.errorMessageEl.innerHTML = '';
                var msgTemplate = '';
                switch (e.detail) {
                    case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                        msgTemplate = errorMessageTemplate[model_1.VideoErrorType.EnvError];
                        if (_this.video.el && _this.video.el.networkState === model_1.NetworkState.NETWORK_NO_SOURCE) {
                            msgTemplate = errorMessageTemplate[model_1.VideoErrorType.NetworkError];
                        }
                        break;
                    case MediaError.MEDIA_ERR_ABORTED:
                    case MediaError.MEDIA_ERR_NETWORK:
                        msgTemplate = errorMessageTemplate[model_1.VideoErrorType.NetworkError];
                        break;
                    case MediaError.MEDIA_ERR_DECODE:
                        msgTemplate = errorMessageTemplate[model_1.VideoErrorType.VideoDecodeError];
                        break;
                    default:
                        msgTemplate = errorMessageTemplate[model_1.VideoErrorType.Others];
                }
                _this.errorMessageEl.innerHTML = _this.lang.translate(msgTemplate);
                _this.el.style.display = 'flex';
            }
            else if (e.type === 'play') {
                _this.hide();
            }
        });
        this.errorMessageEl.addEventListener('click', function (e) {
            var target = e.target;
            if (target.className === 'retry') {
                _this.hide();
                _this.eventSource.next(new model_1.PlayerEvent(model_1.PlayerEventType.RetryPlay, null));
                e.stopPropagation();
            }
        });
    };
    ErrorControl.prototype.hide = function () {
        this.el.style.display = 'none';
    };
    ErrorControl.prototype.render = function () {
        if (this.rendered)
            throw new Error('error control already rendered');
        this.container.el.appendChild(this.el);
        this.rendered = true;
    };
    ErrorControl.prototype.destroy = function () {
        if (!this.rendered)
            throw new Error('error control haven\'t render');
        this.el.remove();
        if (this.eventSub)
            this.eventSub.unsubscribe();
        this.rendered = false;
    };
    return ErrorControl;
}());
exports.ErrorControl = ErrorControl;
var loadingTemplate = "<div class=\"" + styles.loading + "\"></div>";
var LoadingControl = (function () {
    function LoadingControl(container, video, event$, eventSource) {
        this.container = container;
        var elements = utils_1.createElementByString(loadingTemplate);
        this.el = elements.item(0);
        this.video = video;
        this.event$ = event$;
        this.eventSource = eventSource;
        this.bindEvent();
        this.setLoadingMonitor();
    }
    LoadingControl.prototype.bindEvent = function () {
        var _this = this;
        this.eventSub = this.event$.subscribe(function (e) {
            switch (e.type) {
                case model_1.PlayerEventType.RetryPlay:
                    _this.setLoadingMonitor();
                    break;
                case 'ended':
                    _this.isPlayed = false;
                    break;
                case 'playing':
                    _this.isPlayed = true;
                    break;
            }
        });
    };
    LoadingControl.prototype.setLoadingMonitor = function () {
        var _this = this;
        var lastPostion = -1;
        var lastStuckTime = -1;
        var mediaErrorFired = false;
        this.loadingMonitor = setInterval(function () {
            if (!_this.video.el)
                return;
            var isPlaying = !_this.video.el.paused && !_this.video.el.ended;
            var currentTime = _this.video.el.currentTime;
            var hasMediaError = !!_this.video.el.error;
            var isStuck = _this.isPlayed && lastPostion === currentTime;
            var isStuckTooLong = _this.isPlayed && lastStuckTime !== -1 && lastStuckTime + 2 * 60 * 1000 < (new Date).getTime(); // 卡住时间超过2分钟默认网络出错
            var isNeedLoading = isStuck && !isStuckTooLong && !hasMediaError;
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
            }
            else {
                if ((_this.video.el.readyState === model_1.ReadyState.HAVE_METADATA || _this.video.el.readyState === model_1.ReadyState.HAVE_CURRENT_DATA) &&
                    _this.video.el.networkState === model_1.NetworkState.NETWORK_LOADING) {
                    if (lastStuckTime === -1)
                        lastStuckTime = (new Date).getTime();
                }
                else {
                    lastStuckTime = -1;
                }
            }
            if (isNeedLoading) {
                _this.el.style.display = 'block';
            }
            else {
                _this.el.style.display = 'none';
            }
            if (hasMediaError && !mediaErrorFired) {
                _this.eventSource.next(new model_1.PlayerEvent('error', _this.video.el.error.code));
                _this.video.el.pause();
                mediaErrorFired = true;
            }
            if (isStuckTooLong) {
                _this.eventSource.next(new model_1.PlayerEvent('error', MediaError.MEDIA_ERR_NETWORK));
                _this.video.el.pause();
            }
        }, 500);
    };
    LoadingControl.prototype.render = function () {
        if (this.rendered)
            throw new Error('loading control already rendered');
        this.container.el.appendChild(this.el);
        this.rendered = true;
    };
    LoadingControl.prototype.destroy = function () {
        if (!this.rendered)
            throw new Error('loading control haven\'t render');
        this.el.remove();
        if (this.eventSub)
            this.eventSub.unsubscribe();
        this.rendered = false;
    };
    return LoadingControl;
}());
exports.LoadingControl = LoadingControl;
var playPauseBtnTemplate = "\n  <div class=\"" + styles.playPauseBtns + " " + styles.toolBarBtns + " " + styles.toolBarIcons + "\">\n    <div class=\"" + styles.playBtn + " " + styles.toolBarBtn + "\"><svg viewBox=\"0 0 18 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.55 19.954c-.248.135-.55-.044-.55-.326V.368C0 .09.304-.09.55.05l16.848 9.474c.51.286.503 1.018-.01 1.296L.55 19.954z\" fill-rule=\"evenodd\"/></svg></div>\n    <div class=\"" + styles.pauseBtn + " " + styles.toolBarBtn + "\"><svg width=\"13\" height=\"18\" viewBox=\"0 0 13 18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h3v18H0V0zm10 0h3v18h-3V0z\" fill-rule=\"evenodd\"/></svg></div>\n  </div>\n";
var PlayPauseBtnControl = (function () {
    function PlayPauseBtnControl(container, video, event$) {
        this.container = container;
        var elements = utils_1.createElementByString(playPauseBtnTemplate);
        this.el = elements.item(0);
        this.event$ = event$;
        this.playBtnEl = this.el.childNodes.item(0);
        this.pauseBtnEl = this.el.childNodes.item(1);
        this.video = video;
        this.bindEvent();
    }
    PlayPauseBtnControl.prototype.bindEvent = function () {
        var _this = this;
        this.el.addEventListener('click', function () {
            if (!_this.video.el)
                return;
            _this.resetBtn(!_this.video.el.paused);
            _this.toggle();
        });
        this.eventSub = this.event$.subscribe(function (e) {
            switch (e.type) {
                case 'ended':
                case 'pause':
                    _this.resetBtn(false);
                    break;
                case 'playing':
                    _this.resetBtn(true);
                    break;
            }
        });
    };
    PlayPauseBtnControl.prototype.toggle = function () {
        if (!this.video.el)
            return;
        if (this.video.el.paused) {
            this.video.el.play();
        }
        else {
            this.video.el.pause();
        }
    };
    PlayPauseBtnControl.prototype.resetBtn = function (isPlaying) {
        if (isPlaying) {
            this.playBtnEl.style.display = 'none';
            this.pauseBtnEl.style.display = 'block';
        }
        else {
            this.pauseBtnEl.style.display = 'none';
            this.playBtnEl.style.display = 'block';
        }
    };
    PlayPauseBtnControl.prototype.render = function () {
        if (this.rendered)
            throw new Error('play btn already rendered');
        this.container.el.appendChild(this.el);
        this.rendered = true;
    };
    PlayPauseBtnControl.prototype.destroy = function () {
        if (!this.rendered)
            throw new Error('play btn haven\'t render');
        this.el.remove();
        if (this.eventSub)
            this.eventSub.unsubscribe();
        this.rendered = false;
    };
    return PlayPauseBtnControl;
}());
exports.PlayPauseBtnControl = PlayPauseBtnControl;
var progressBarTemplate = "\n  <div class=\"" + styles.progressBar + "\">\n    <div class=\"" + styles.progressBarBackground + "\">\n      <div class=\"" + styles.progressBarBuffered + "\"></div>\n      <div class=\"" + styles.progressBarFill + "\"></div>\n      <div class=\"" + styles.progressBarCursor + "\"></div>\n    </div>\n  </div>\n";
var ProgressBarControl = (function () {
    function ProgressBarControl(container, video, event$) {
        var _this = this;
        this.mouseDownOrigin = 0;
        this.cursorOrigin = 0;
        this.isMouseDown = false;
        this.seeking = false;
        this.progressBarMousemoveHandler = function (e) { return _this.cursorMove(e); };
        this.progressBarMouseupHandler = function (e) { return _this.cursorUp(e); };
        this.container = container;
        var elements = utils_1.createElementByString(progressBarTemplate);
        this.el = elements.item(0);
        this.backgroundEl = this.el.childNodes.item(0);
        this.bufferedEl = this.backgroundEl.childNodes.item(0);
        this.fillEl = this.backgroundEl.childNodes.item(1);
        this.cursorEl = this.backgroundEl.childNodes.item(2);
        this.video = video;
        this.event$ = event$;
        this.bindEvent();
    }
    ProgressBarControl.prototype.bindEvent = function () {
        var _this = this;
        if (utils_1.HAS_MOUSE_EVENT && !utils_1.IS_IOS && !utils_1.IS_ANDROID) {
            this.el.addEventListener('mousedown', function (e) {
                if (e.target === _this.backgroundEl) {
                    _this.backgroundDown(e);
                }
                else if (e.target === _this.cursorEl) {
                    _this.cursorDown(e);
                }
            });
        }
        else {
            this.el.addEventListener('touchstart', function (e) {
                _this.backgroundDown(e);
                _this.cursorDown(e);
            });
            this.el.addEventListener('touchmove', this.progressBarMousemoveHandler, false);
            this.el.addEventListener('touchend', this.progressBarMouseupHandler, false);
        }
        this.eventSub = this.event$.subscribe(function (e) {
            switch (e.type) {
                case 'progress':
                    _this.resetBuffered();
                    break;
                case 'timeupdate':
                    if (!_this.seeking) {
                        var currentTime = _this.video.el ? _this.video.el.currentTime : 0;
                        var duration = _this.video.el ? _this.video.el.duration : 0;
                        _this.resetCursor(currentTime / duration);
                    }
                    break;
                case 'seeking':
                    _this.seeking = true;
                    break;
                case 'seeked':
                    clearTimeout(_this.seekingTimer);
                    if (utils_1.IS_IOS) {
                        _this.seekingTimer = setTimeout(function () { return _this.seeking = false; }, 2000); // prevent ios seeking delay
                    }
                    else {
                        _this.seeking = false;
                    }
                    break;
                case 'ended':
                    _this.resetCursor(0);
                    break;
                case 'reset':
                    _this.resetProgressBar();
                    break;
                case 'ready':
                    var currentSrc = _this.video.srcArray[_this.video.currentIndex];
                    if (currentSrc instanceof model_1.SourceOption && utils_1.isRtmp(currentSrc)) {
                        _this.hide();
                    }
                    else {
                        _this.show();
                    }
            }
        });
    };
    ProgressBarControl.prototype.show = function () {
        this.el.style.visibility = '';
    };
    ProgressBarControl.prototype.hide = function () {
        this.el.style.visibility = 'hidden';
    };
    ProgressBarControl.prototype.resetProgressBar = function () {
        this.resetCursor(0);
        this.bufferedEl.style.width = "0%";
    };
    ProgressBarControl.prototype.resetBuffered = function () {
        if (!this.video.el)
            return;
        var lastBufferIndex = this.video.el.buffered.length - 1;
        var duration = this.video.el.duration;
        if (lastBufferIndex >= 0) {
            // const start = this.video.el.buffered.start(0);
            // this.bufferedEl.style.left = `${start / duration * 100}%`;
            var end = this.video.el.buffered.end(lastBufferIndex);
            this.bufferedEl.style.width = end / duration * 100 + "%";
        }
    };
    ProgressBarControl.prototype.backgroundDown = function (e) {
        if (!this.video.el)
            return;
        var offsetX;
        if (e instanceof MouseEvent) {
            offsetX = e.offsetX;
        }
        else {
            var elRect = this.el.getBoundingClientRect();
            offsetX = e.targetTouches[0].pageX - elRect.left;
        }
        var percent = offsetX / this.el.getBoundingClientRect().width;
        this.resetCursor(percent);
        this.resetCurrentTime(percent);
    };
    ProgressBarControl.prototype.cursorDown = function (e) {
        if (!this.video.el)
            return;
        var target = utils_1.getTouchTarget(e);
        this.mouseDownOrigin = (e instanceof MouseEvent) ? e.x : (target ? target.pageX : 0);
        this.cursorOrigin = this.cursorEl.offsetLeft;
        this.isMouseDown = true;
    };
    ProgressBarControl.prototype.cursorMove = function (e) {
        if (!this.video.el)
            return;
        var target = utils_1.getTouchTarget(e);
        if (this.isMouseDown) {
            var mouseX = (e instanceof MouseEvent) ? e.x : (target ? target.pageX : 0);
            var percent = this.caclulateOffsetX(mouseX);
            this.resetCursor(percent);
            this.seeking = true;
        }
    };
    ProgressBarControl.prototype.cursorUp = function (e) {
        var target = utils_1.getTouchTarget(e);
        if (this.isMouseDown) {
            var mouseX = (e instanceof MouseEvent) ? e.x : (target ? target.pageX : 0);
            var percent = this.caclulateOffsetX(mouseX);
            this.resetCurrentTime(percent);
            this.isMouseDown = false;
            this.seeking = false;
        }
    };
    ProgressBarControl.prototype.caclulateOffsetX = function (eventX) {
        var progressBarWidth = this.el.getBoundingClientRect().width;
        var offsetX = eventX - this.mouseDownOrigin;
        offsetX += this.cursorOrigin;
        if (offsetX < 0)
            offsetX = 0;
        if (offsetX > progressBarWidth)
            offsetX = progressBarWidth;
        return offsetX / progressBarWidth;
    };
    ProgressBarControl.prototype.resetCursor = function (percent) {
        percent = utils_1.parsePercent(percent);
        this.fillEl.style.width = percent * 100 + "%";
        this.cursorEl.style.left = percent * 100 + "%";
    };
    ProgressBarControl.prototype.resetCurrentTime = function (percent) {
        percent = utils_1.parsePercent(percent);
        if (this.video.el && this.video.el.duration) {
            this.video.el.currentTime = this.video.el.duration * percent;
        }
    };
    ProgressBarControl.prototype.render = function () {
        if (this.rendered)
            throw new Error('progress bar already rendered');
        this.container.el.appendChild(this.el);
        if (utils_1.HAS_MOUSE_EVENT && !utils_1.IS_IOS && !utils_1.IS_ANDROID) {
            window.addEventListener('mousemove', this.progressBarMousemoveHandler, false);
            window.addEventListener('mouseup', this.progressBarMouseupHandler, false);
        }
        this.rendered = true;
    };
    ProgressBarControl.prototype.destroy = function () {
        if (!this.rendered)
            throw new Error('progress bar haven\'t render');
        this.el.remove();
        if (utils_1.HAS_MOUSE_EVENT && !utils_1.IS_IOS && !utils_1.IS_ANDROID) {
            window.removeEventListener('mousemove', this.progressBarMousemoveHandler, false);
            window.removeEventListener('mouseup', this.progressBarMouseupHandler, false);
        }
        if (this.eventSub)
            this.eventSub.unsubscribe();
        this.rendered = false;
    };
    return ProgressBarControl;
}());
exports.ProgressBarControl = ProgressBarControl;
var currentTimeTemplate = "\n  <div class=\"" + styles.currentTime + " " + styles.toolBarBtns + "\">00:00</div>\n";
var CurrentTimeControl = (function () {
    function CurrentTimeControl(container, video, event$) {
        this.defaultWidth = 40;
        this.currentTime = '';
        this.container = container;
        this.video = video;
        this.event$ = event$;
        var elements = utils_1.createElementByString(currentTimeTemplate);
        this.el = elements.item(0);
        this.bindEvent();
    }
    CurrentTimeControl.prototype.bindEvent = function () {
        var _this = this;
        this.eventSub = this.event$.subscribe(function (e) {
            switch (e.type) {
                case 'timeupdate':
                    _this.resetCurrentTime(_this.video.el ? _this.video.el.currentTime : 0);
                    break;
                case 'ended':
                    _this.video.el.currentTime = 0;
                    break;
                case 'ready':
                    var currentSrc = _this.video.srcArray[_this.video.currentIndex];
                    if (currentSrc instanceof model_1.SourceOption && utils_1.isRtmp(currentSrc)) {
                        _this.hide();
                    }
                    else {
                        _this.show();
                    }
                    _this.resetCurrentTime(0);
                    break;
            }
        });
    };
    CurrentTimeControl.prototype.show = function () {
        this.el.style.visibility = '';
    };
    CurrentTimeControl.prototype.hide = function () {
        this.el.style.visibility = 'hidden';
    };
    CurrentTimeControl.prototype.resetCurrentTime = function (currentTime) {
        var time = utils_1.secondToMMSS(currentTime);
        if (time !== this.currentTime) {
            this.currentTime = time;
            this.el.style.width = this.currentTime.length >= 8 ? (this.currentTime.length - 5) * 8 + this.defaultWidth + "px" : '';
            this.el.innerText = "" + this.currentTime;
        }
    };
    CurrentTimeControl.prototype.render = function () {
        if (this.rendered)
            throw new Error('current time already rendered');
        this.container.el.appendChild(this.el);
        this.rendered = true;
    };
    CurrentTimeControl.prototype.destroy = function () {
        if (!this.rendered)
            throw new Error('current time haven\'t render');
        this.el.remove();
        if (this.eventSub)
            this.eventSub.unsubscribe();
        this.rendered = false;
    };
    return CurrentTimeControl;
}());
exports.CurrentTimeControl = CurrentTimeControl;
var durationTemplate = "\n  <div class=\"" + styles.duration + " " + styles.toolBarBtns + "\">00:00</div>\n";
var DurationControl = (function () {
    function DurationControl(container, video, event$) {
        this.defaultWidth = 40;
        this.duration = '';
        this.container = container;
        this.video = video;
        this.event$ = event$;
        var elements = utils_1.createElementByString(durationTemplate);
        this.el = elements.item(0);
        this.bindEvent();
    }
    DurationControl.prototype.bindEvent = function () {
        var _this = this;
        this.eventSub = this.event$.subscribe(function (e) {
            switch (e.type) {
                case 'loadedmetadata':
                case 'durationchange':
                    _this.resetDuration(_this.video.el.duration);
                    break;
                case 'reset':
                    var currentSrc = _this.video.srcArray[_this.video.currentIndex];
                    if (currentSrc instanceof model_1.SourceOption && utils_1.isRtmp(currentSrc)) {
                        _this.hide();
                    }
                    else {
                        _this.show();
                    }
                    _this.resetDuration(0);
                    break;
            }
        });
    };
    DurationControl.prototype.show = function () {
        this.el.style.visibility = '';
    };
    DurationControl.prototype.hide = function () {
        this.el.style.visibility = 'hidden';
    };
    DurationControl.prototype.resetDuration = function (duration) {
        this.duration = utils_1.secondToMMSS(duration);
        this.el.style.width = this.duration.length >= 8 ? (this.duration.length - 5) * 8 + this.defaultWidth + "px" : '';
        this.el.innerText = "" + this.duration;
    };
    DurationControl.prototype.render = function () {
        if (this.rendered)
            throw new Error('duration already rendered');
        this.container.el.appendChild(this.el);
        this.rendered = true;
    };
    DurationControl.prototype.destroy = function () {
        if (!this.rendered)
            throw new Error('duration haven\'t render');
        this.el.remove();
        if (this.eventSub)
            this.eventSub.unsubscribe();
        this.rendered = false;
    };
    return DurationControl;
}());
exports.DurationControl = DurationControl;
var volumeTemplate = "\n  <div class=\"" + styles.volume + " " + styles.toolBarBtns + "\">\n    <div class=\"" + styles.volumeBtns + " " + styles.toolBarIcons + "\">\n      <div class=\"" + styles.volumeOnBtn + " " + styles.toolBarBtn + "\"><svg viewBox=\"0 0 19 18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.128.063c-.205-.102-.448-.08-.63.058l-6.7 5.058H1.054C.474 5.178 0 5.65 0 6.233v5.458c0 .583.473 1.056 1.054 1.056h3.744l6.7 5.057c.107.08.234.12.362.12.09 0 .183-.02.268-.062.203-.1.332-.31.332-.536V.6c0-.227-.13-.435-.332-.537zm-1.288 15.46L5.433 11.44c-.096-.07-.212-.11-.33-.11H1.62V6.594h3.482c.12 0 .235-.04.33-.11L10.84 2.4v13.12zm4.106-9.6c-.386 0-.7.27-.7.6V11.4c0 .33.314.6.7.6.387 0 .7-.27.7-.6V6.524c0-.332-.313-.6-.7-.6zm2.925-2.398c-.386 0-.7.268-.7.6V13.8c0 .33.314.6.7.6.387 0 .7-.27.7-.6V4.124c0-.332-.313-.6-.7-.6z\" fill-rule=\"nonzero\"/></svg></div>\n      <div class=\"" + styles.volumeOffBtn + " " + styles.toolBarBtn + "\"><svg viewBox=\"0 0 23 18\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"evenodd\"><path d=\"M12.215.1c-.204-.1-.448-.078-.63.06l-6.7 5.056H1.142C.56 5.216.087 5.69.087 6.27v5.46c0 .58.473 1.054 1.055 1.054h3.743l6.7 5.057c.107.08.234.122.362.122.092 0 .183-.02.268-.063.203-.103.332-.31.332-.538V.638c0-.227-.13-.435-.332-.537zm-1.288 15.46L5.52 11.48c-.095-.073-.212-.112-.33-.112H1.706V6.632H5.19c.12 0 .235-.04.33-.11l5.407-4.082v13.12z\" fill-rule=\"nonzero\"/><path d=\"M15.224 5.224c.268-.27.672-.3.903-.07l6.72 6.72c.23.23.198.634-.07.902-.27.27-.673.3-.903.07l-6.72-6.72c-.23-.23-.2-.634.07-.902z\"/><path d=\"M22.776 5.224c-.268-.27-.672-.3-.903-.07l-6.72 6.72c-.23.23-.198.634.07.902.27.27.673.3.903.07l6.72-6.72c.23-.23.2-.634-.07-.902z\"/></g></svg></div>\n    </div>\n    <div class=\"" + styles.volumeConditioner + " " + styles.volumeConditionerShown + " " + styles.volumeConditionerHidden + "\">\n      <div class=\"" + styles.volumeBackground + "\"></div>\n      <div class=\"" + styles.volumeFill + "\"></div>\n      <div class=\"" + styles.volumeCursor + "\"></div>\n    </div>\n  </div>\n";
var VolumeControl = (function () {
    function VolumeControl(container, video, event$) {
        var _this = this;
        this.volumeCache = 1;
        this.volumeConditionerOffset = 12;
        this.volumeConditionerHeight = 75;
        this.isVolumeConditionerCursorDown = false;
        this.mouseDownOrigin = 0;
        this.cursorOrigin = 0;
        this.volumeMousemoveHandler = function (e) { return _this.cursorMove(e); };
        this.volumeMouseupHandler = function (e) { return _this.cursorUp(e); };
        this.container = container;
        this.video = video;
        this.event$ = event$;
        var elements = utils_1.createElementByString(volumeTemplate);
        this.el = elements.item(0);
        this.volumeOnBtnEl = this.el.childNodes.item(0).childNodes.item(0);
        this.volumeOffBtnEl = this.el.childNodes.item(0).childNodes.item(1);
        this.volumeBackgroundEl = this.el.childNodes.item(1).childNodes.item(0);
        this.volumeFillEl = this.el.childNodes.item(1).childNodes.item(1);
        this.volumeCursorEl = this.el.childNodes.item(1).childNodes.item(2);
        this.bindEvent();
    }
    VolumeControl.prototype.bindEvent = function () {
        var _this = this;
        this.eventSub = this.event$.subscribe(function (e) {
            if (e.type === 'volumechange') {
                _this.setConditioner(_this.video.el.volume);
                _this.setVolumeIcon(_this.video.el.volume);
            }
            else if (e.type === 'ready') {
                _this.initVolumeControls();
            }
        });
        this.volumeOnBtnEl.addEventListener('click', function () { return _this.toggle(); });
        this.volumeOffBtnEl.addEventListener('click', function () { return _this.toggle(); });
        this.volumeBackgroundEl.addEventListener('mousedown', function (e) { return _this.BackgoundClick(e); });
        this.volumeCursorEl.addEventListener('mousedown', function (e) { return _this.cursorDown(e); });
    };
    VolumeControl.prototype.initVolumeControls = function () {
        this.volumeCache = this.video.el.volume;
        this.setConditioner(this.video.el.volume);
        this.setVolumeIcon(this.video.el.volume);
    };
    VolumeControl.prototype.BackgoundClick = function (e) {
        if (!this.video.el)
            return;
        var percent = (this.volumeConditionerHeight - e.offsetY) / this.volumeConditionerHeight;
        this.setConditioner(percent);
        this.setVolume(percent);
    };
    VolumeControl.prototype.cursorDown = function (e) {
        if (!this.video.el)
            return;
        this.mouseDownOrigin = e.y;
        this.cursorOrigin = this.volumeCursorEl.offsetTop;
        this.isVolumeConditionerCursorDown = true;
        this.volumeCursorEl.style.transition = 'none';
        this.volumeFillEl.style.transition = 'none';
    };
    VolumeControl.prototype.cursorMove = function (e) {
        if (!this.video.el)
            return;
        if (this.isVolumeConditionerCursorDown) {
            var offset = e.y - this.mouseDownOrigin;
            offset += this.cursorOrigin;
            if (offset < this.volumeConditionerOffset)
                offset = this.volumeConditionerOffset;
            if (offset > this.volumeConditionerOffset + this.volumeConditionerHeight)
                offset = this.volumeConditionerOffset + this.volumeConditionerHeight;
            var percent = (this.volumeConditionerHeight - (offset - this.volumeConditionerOffset)) / this.volumeConditionerHeight;
            this.setConditioner(percent);
            this.setVolume(percent);
        }
    };
    VolumeControl.prototype.cursorUp = function (e) {
        this.isVolumeConditionerCursorDown = false;
        this.volumeCursorEl.style.transition = '';
        this.volumeFillEl.style.transition = '';
    };
    VolumeControl.prototype.toggle = function () {
        if (!this.video.el)
            return;
        if (this.video.el.volume) {
            this.volumeCache = this.video.el.volume;
            this.setVolume(0);
        }
        else {
            this.setVolume(this.volumeCache);
        }
    };
    VolumeControl.prototype.setVolumeIcon = function (percent) {
        percent = utils_1.parsePercent(percent);
        if (percent) {
            this.volumeOnBtnEl.style.display = 'block';
            this.volumeOffBtnEl.style.display = 'none';
        }
        else {
            this.volumeOnBtnEl.style.display = 'none';
            this.volumeOffBtnEl.style.display = 'block';
        }
    };
    VolumeControl.prototype.setConditioner = function (percent) {
        percent = utils_1.parsePercent(percent);
        this.volumeCursorEl.style.top = this.volumeConditionerOffset + this.volumeConditionerHeight * (1 - percent) + "px";
        this.volumeFillEl.style.height = this.volumeConditionerHeight * percent + "px";
    };
    VolumeControl.prototype.setVolume = function (percent) {
        percent = utils_1.parsePercent(percent);
        this.video.el.volume = percent;
    };
    VolumeControl.prototype.render = function () {
        if (this.rendered)
            throw new Error('volume already rendered');
        this.container.el.appendChild(this.el);
        document.addEventListener('mousemove', this.volumeMousemoveHandler, false);
        document.addEventListener('mouseup', this.volumeMouseupHandler, false);
        this.rendered = true;
    };
    VolumeControl.prototype.destroy = function () {
        if (this.rendered)
            throw new Error('volume haven\'t render');
        this.el.remove();
        document.removeEventListener('mousemove', this.volumeMousemoveHandler, false);
        document.removeEventListener('mouseup', this.volumeMouseupHandler, false);
        if (this.eventSub)
            this.eventSub.unsubscribe();
        this.rendered = false;
    };
    return VolumeControl;
}());
exports.VolumeControl = VolumeControl;
var qualityTemplate = "\n  <div class=\"" + styles.quality + " " + styles.toolBarBtns + "\">\n    <div class=\"" + styles.qualityBtns + " " + styles.toolBarIcons + "\"></div>\n    <div class=\"" + styles.qualityConditioner + "\"></div>\n  </div>\n";
var qualityRowTemplate = "\n  <div class=\"" + styles.qualityRow + "\"></div>\n";
var QualityControl = (function () {
    function QualityControl(container, opt, video, lang, event$) {
        this.container = container;
        this.video = video;
        this.opt = opt;
        var elements = utils_1.createElementByString(qualityTemplate);
        this.el = elements.item(0);
        this.qualityBtnEl = this.el.children.item(0);
        this.qualityConditionerEl = this.el.children.item(1);
        this.lang = lang;
        this.event$ = event$;
        this.resetQualityControl(this.video.srcArray, this.video.currentIndex);
        this.bindEvent();
    }
    QualityControl.prototype.resetQualityControl = function (srcArray, currentIndex) {
        var currentSrc = srcArray[currentIndex];
        if (utils_1.IS_SUPPORT_MSE && currentSrc instanceof MediaSource) {
            this.qualityBtnEl.innerText = this.lang.translate('unknown quality');
        }
        else if (currentSrc instanceof model_1.SourceOption) {
            this.qualityBtnEl.innerText = currentSrc.quality;
        }
        this.qualityConditionerEl.innerHTML = '';
        for (var index in srcArray) {
            var item = srcArray[index];
            var rowTemplate = utils_1.createElementByString(qualityRowTemplate).item(0);
            var row = rowTemplate.cloneNode();
            if (utils_1.IS_SUPPORT_MSE && item instanceof MediaSource) {
                row.innerText = this.lang.translate('unknown quality');
            }
            else if (item instanceof model_1.SourceOption) {
                row.innerText = item.quality;
            }
            if (+index === currentIndex)
                row.className += ' activate';
            this.qualityConditionerEl.appendChild(row);
        }
    };
    QualityControl.prototype.bindEvent = function () {
        var _this = this;
        // bind source change
        this.eventSub = this.event$.subscribe(function (e) {
            if (e.type === model_1.PlayerEventType.SourceChange) {
                var data = e.detail;
                _this.resetQualityControl(data.srcArray, data.currentIndex);
            }
        });
        this.qualityConditionerEl.addEventListener('click', function (e) {
            var index = Array.prototype.slice.call(_this.qualityConditionerEl.childNodes).indexOf(e.target);
            _this.video.switchSrc(index);
        }, false);
    };
    QualityControl.prototype.render = function () {
        if (this.rendered)
            throw new Error('quality already rendered');
        this.container.el.appendChild(this.el);
        this.rendered = true;
    };
    QualityControl.prototype.destroy = function () {
        if (this.rendered)
            throw new Error('quality haven\'t render');
        this.el.remove();
        if (this.eventSub)
            this.eventSub.unsubscribe();
        this.rendered = false;
    };
    return QualityControl;
}());
exports.QualityControl = QualityControl;
var fullScreenTemplate = "\n  <div class=\"" + styles.fullScreenBtns + " " + styles.toolBarBtns + " " + styles.toolBarIcons + "\">\n    <div class=\"" + styles.enterFullscreenBtn + " " + styles.toolBarBtn + "\"><svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.462 9.828l-4.277 4.277h3.412v1.825H.07V9.403h1.825v3.412l4.277-4.277 1.29 1.29zm1.94-7.933h3.413L8.537 6.172l1.29 1.29 4.278-4.277v3.412h1.825V.07H9.403v1.825z\" fill-rule=\"nonzero\"/></svg></div>\n    <div class=\"" + styles.exitFullscreenBtn + " " + styles.toolBarBtn + "\"><svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.07 14.64l4.278-4.278H.936V8.538h6.526v6.526H5.638v-3.412L1.36 15.93.07 14.64zm14.994-9.002h-3.412L15.93 1.36 14.64.07l-4.278 4.278V.936H8.537v6.527h6.527V5.638z\" fill-rule=\"nonzero\"/></svg></div>\n  </div>\n";
var FullScreenControl = (function () {
    function FullScreenControl(container, video, player, event$) {
        this.video = video;
        this.container = container;
        this.player = player;
        this.event$ = event$;
        var elements = utils_1.createElementByString(fullScreenTemplate);
        this.el = elements.item(0);
        this.enterFullscreenBtnEl = this.el.childNodes.item(0);
        this.exitFullscreenBtnEl = this.el.childNodes.item(1);
        this.bindEvent();
    }
    FullScreenControl.prototype.prepareFullScreenApi = function () {
        var _this = this;
        var fullScreenApiList = [
            ['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'],
            ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'],
            ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'],
            ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'],
            ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError'],
            ['webkitEnterFullscreen', 'webkitExitFullscreen', 'webkitDisplayingFullscreen', 'webkitSupportsFullscreen', 'webkitbeginfullscreen', 'webkitfullscreenerror'],
            ['webkitEnterFullScreen', 'webkitExitFullScreen', 'webkitDisplayingFullscreen', 'webkitSupportsFullscreen', 'webkitbeginfullscreen', 'webkitfullscreenerror'],
        ];
        var _loop_1 = function (item) {
            var requestFullscreen = item[0];
            var exitFullscreen = item[1];
            var fullscreenElement = item[2];
            var fullscreenEnabled = item[3];
            var fullscreenchange = item[4];
            if (requestFullscreen in this_1.player.el &&
                exitFullscreen in document &&
                fullscreenElement in document &&
                fullscreenEnabled in document &&
                "on" + fullscreenchange in document) {
                this_1.fullScreenApi = new model_1.FullScreenApi;
                this_1.fullScreenApi.requestFullscreen = function () {
                    _this.player.el[requestFullscreen]();
                };
                this_1.fullScreenApi.exitFullscreen = function () {
                    document[exitFullscreen]();
                };
                this_1.fullScreenApi.fullscreenEnabled = document[fullscreenEnabled];
                document.addEventListener(fullscreenchange, function (e) {
                    _this.fullScreenApi.fullscreenElement = document[fullscreenElement];
                    _this.resetBtn();
                });
                return "break";
            }
            else if (requestFullscreen in this_1.video.el &&
                exitFullscreen in this_1.video.el &&
                fullscreenElement in this_1.video.el &&
                fullscreenEnabled in this_1.video.el) {
                var fullScreenListener = function () {
                    _this.fullScreenApi.fullscreenElement = _this.video.el[fullscreenElement];
                    _this.resetBtn();
                };
                this_1.fullScreenApi = new model_1.FullScreenApi;
                this_1.fullScreenApi.requestFullscreen = function () {
                    _this.video.el[requestFullscreen]();
                };
                this_1.fullScreenApi.exitFullscreen = function () {
                    _this.video.el[exitFullscreen]();
                };
                this_1.fullScreenApi.fullscreenEnabled = this_1.video.el[fullscreenEnabled];
                this_1.video.el.addEventListener('webkitbeginfullscreen', fullScreenListener);
                this_1.video.el.addEventListener('webkitendfullscreen', fullScreenListener);
                return "break";
            }
        };
        var this_1 = this;
        for (var _i = 0, fullScreenApiList_1 = fullScreenApiList; _i < fullScreenApiList_1.length; _i++) {
            var item = fullScreenApiList_1[_i];
            var state_1 = _loop_1(item);
            if (state_1 === "break")
                break;
        }
    };
    FullScreenControl.prototype.resetBtn = function () {
        if (this.fullScreenApi.fullscreenElement) {
            this.enterFullscreenBtnEl.style.display = 'none';
            this.exitFullscreenBtnEl.style.display = 'block';
        }
        else {
            this.enterFullscreenBtnEl.style.display = 'block';
            this.exitFullscreenBtnEl.style.display = 'none';
        }
    };
    FullScreenControl.prototype.bindEvent = function () {
        var _this = this;
        this.el.addEventListener('click', function () { return _this.toggle(); });
        this.eventSub = this.event$.filter(function (e) { return e.type === 'ready'; }).subscribe(function (e) {
            _this.prepareFullScreenApi();
        });
    };
    FullScreenControl.prototype.toggle = function () {
        if (!this.fullScreenApi)
            return;
        if (!this.fullScreenApi.fullscreenElement) {
            this.fullScreenApi.requestFullscreen();
        }
        else {
            this.fullScreenApi.exitFullscreen();
        }
    };
    FullScreenControl.prototype.render = function () {
        if (this.rendered)
            throw new Error('fullScreen already rendered');
        this.container.el.appendChild(this.el);
        this.rendered = true;
    };
    FullScreenControl.prototype.destroy = function () {
        if (!this.rendered)
            throw new Error('fullScreen haven\'t render');
        this.el.remove();
        if (this.eventSub)
            this.eventSub.unsubscribe();
        this.rendered = false;
    };
    return FullScreenControl;
}());
exports.FullScreenControl = FullScreenControl;
var toolBarTemplate = "\n  <div class=\"" + styles.toolBar + "\">\n    <div class=\"" + styles.topProgressBar + "\">\n      <div class=\"" + styles.topProgressBarFill + "\"></div>\n    </div>\n  </div>\n";
var ToolBarControl = (function () {
    function ToolBarControl(container, option, video, player) {
        this.container = container;
        this.video = video;
        this.event$ = player.event$;
        var elements = utils_1.createElementByString(toolBarTemplate);
        this.el = elements.item(0);
        this.topProgressBarEl = this.el.childNodes.item(0);
        this.topProgressBarFillEl = this.topProgressBarEl.childNodes.item(0);
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
    ToolBarControl.prototype.bindEvent = function () {
        var _this = this;
        this.eventSub = this.event$.subscribe(function (e) {
            if (e.type === 'timeupdate') {
                var currentTime = _this.video.el ? _this.video.el.currentTime : 0;
                var duration = _this.video.el ? _this.video.el.duration : 0;
                _this.resetProgress(currentTime / duration);
            }
            else if (e.type === 'reset') {
                _this.slideDown();
            }
        });
    };
    ToolBarControl.prototype.resetProgress = function (percent) {
        percent = utils_1.parsePercent(percent);
        this.topProgressBarFillEl.style.width = percent * 100 + "%";
    };
    ToolBarControl.prototype.slideUp = function () {
        this.el.style.transform = 'translateY(0)';
        this.topProgressBarEl.style.transition = 'none';
        this.topProgressBarEl.style.opacity = '0';
    };
    ToolBarControl.prototype.slideDown = function () {
        this.el.style.transform = 'translateY(100%)';
        this.topProgressBarEl.style.transition = 'opacity .2s .4s';
        this.topProgressBarEl.style.opacity = '1';
    };
    ToolBarControl.prototype.render = function () {
        if (this.rendered)
            throw new Error('toolbar already rendered');
        if (this.option.controls === true || (this.option.controls instanceof model_1.ControlsOption && this.option.controls.hasToolBarControls)) {
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
    };
    ToolBarControl.prototype.destroy = function () {
        if (!this.rendered)
            throw new Error('toolbar haven\'t render');
        if (this.option.controls === true || (this.option.controls instanceof model_1.ControlsOption && this.option.controls.hasToolBarControls)) {
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
    };
    return ToolBarControl;
}());
exports.ToolBarControl = ToolBarControl;
var controlsTemplate = "\n  <div class=\"" + styles.controls + "\"></div>\n";
var Controls = (function () {
    function Controls(container, option, video, player, event$) {
        this.container = container;
        this.event$ = event$;
        var elements = utils_1.createElementByString(controlsTemplate);
        this.el = elements.item(0);
        this.bigPlayBtn = new BigPlayBtnControl(this, video, player.event$);
        this.loading = new LoadingControl(this, video, player.event$, player.eventSource);
        this.error = new ErrorControl(this, video, player.language, player.event$, player.eventSource);
        this.toolBar = new ToolBarControl(this, option, video, player);
        this.bindEvent();
    }
    Controls.prototype.bindEvent = function () {
        var _this = this;
        this.el.addEventListener('click', function (e) {
            if (e.target === _this.el)
                _this.toolBar.playPauseBtn.toggle();
        });
        this.el.addEventListener('dblclick', function (e) {
            if (e.target === _this.el)
                _this.toolBar.fullScreen.toggle();
        });
        this.eventSub = this.event$.subscribe(function (e) {
            if (e.type === 'reset') {
                _this.el.style.pointerEvents = 'none';
            }
            else if (e.type === 'ready' || e.type === 'error') {
                _this.el.style.pointerEvents = 'auto';
            }
        });
        this.el.addEventListener('mouseover', function () {
            _this.toolBar.slideUp();
            _this.resetMouseMoveTimer();
        });
        this.el.addEventListener('touchstart', function () {
            _this.toolBar.slideUp();
            _this.resetMouseMoveTimer();
        });
    };
    Controls.prototype.resetMouseMoveTimer = function () {
        var _this = this;
        clearTimeout(this.mouseMoveTimer);
        this.mouseMoveTimer = setTimeout(function () {
            _this.toolBar.slideDown();
        }, 2 * 1000);
    };
    Controls.prototype.render = function () {
        if (this.rendered)
            throw new Error('controls already rendered');
        this.bigPlayBtn.render();
        this.loading.render();
        this.error.render();
        this.toolBar.render();
        this.container.el.appendChild(this.el);
        this.rendered = true;
    };
    Controls.prototype.destroy = function () {
        if (!this.rendered)
            throw new Error('controls haven\'t render');
        this.bigPlayBtn.destroy();
        this.loading.destroy();
        this.error.destroy();
        this.toolBar.destroy();
        this.el.remove();
        this.rendered = false;
    };
    return Controls;
}());
exports.Controls = Controls;
var _a;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(5);
var Subscriber_1 = __webpack_require__(3);
var Subscription_1 = __webpack_require__(7);
var ObjectUnsubscribedError_1 = __webpack_require__(32);
var SubjectSubscription_1 = __webpack_require__(33);
var rxSubscriber_1 = __webpack_require__(8);
/**
 * @class SubjectSubscriber<T>
 */
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        _super.call(this, destination);
        this.destination = destination;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
/**
 * @class Subject<T>
 */
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        _super.call(this);
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
/**
 * @class AnonymousSubject<T>
 */
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        _super.call(this);
        this.destination = destination;
        this.source = source;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an action is invalid because the object has been
 * unsubscribed.
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 *
 * @class ObjectUnsubscribedError
 */
var ObjectUnsubscribedError = (function (_super) {
    __extends(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
        var err = _super.call(this, 'object unsubscribed');
        this.name = err.name = 'ObjectUnsubscribedError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ObjectUnsubscribedError;
}(Error));
exports.ObjectUnsubscribedError = ObjectUnsubscribedError;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(7);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        _super.call(this);
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(5);
var filter_1 = __webpack_require__(35);
Observable_1.Observable.prototype.filter = filter_1.filter;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/* tslint:enable:max-line-length */
/**
 * Filter items emitted by the source Observable by only emitting those that
 * satisfy a specified predicate.
 *
 * <span class="informal">Like
 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
 * it only emits a value from the source if it passes a criterion function.</span>
 *
 * <img src="./img/filter.png" width="100%">
 *
 * Similar to the well-known `Array.prototype.filter` method, this operator
 * takes values from the source Observable, passes them through a `predicate`
 * function and only emits those values that yielded `true`.
 *
 * @example <caption>Emit only click events whose target was a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
 * clicksOnDivs.subscribe(x => console.log(x));
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 * @see {@link ignoreElements}
 * @see {@link partition}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted, if `false` the value is not passed to the output
 * Observable. The `index` parameter is the number `i` for the i-th source
 * emission that has happened since the subscription, starting from the number
 * `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of values from the source that were
 * allowed by the `predicate` function.
 * @method filter
 * @owner Observable
 */
function filter(predicate, thisArg) {
    return this.lift(new FilterOperator(predicate, thisArg));
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.count = 0;
        this.predicate = predicate;
    }
    // the try catch block below is left specifically for
    // optimization and perf reasons. a tryCatcher is not necessary here.
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
;
(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(37)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === "object") {
        module.exports = factory(require('./ResizeSensor.js'));
    } else {
        root.ElementQueries = factory(root.ResizeSensor);
    }
}(this, function (ResizeSensor) {

    /**
     *
     * @type {Function}
     * @constructor
     */
    var ElementQueries = function() {

        var trackingActive = false;
        var elements = [];

        /**
         *
         * @param element
         * @returns {Number}
         */
        function getEmSize(element) {
            if (!element) {
                element = document.documentElement;
            }
            var fontSize = window.getComputedStyle(element, null).fontSize;
            return parseFloat(fontSize) || 16;
        }

        /**
         *
         * @copyright https://github.com/Mr0grog/element-query/blob/master/LICENSE
         *
         * @param {HTMLElement} element
         * @param {*} value
         * @returns {*}
         */
        function convertToPx(element, value) {
            var numbers = value.split(/\d/);
            var units = numbers[numbers.length-1];
            value = parseFloat(value);
            switch (units) {
                case "px":
                    return value;
                case "em":
                    return value * getEmSize(element);
                case "rem":
                    return value * getEmSize();
                // Viewport units!
                // According to http://quirksmode.org/mobile/tableViewport.html
                // documentElement.clientWidth/Height gets us the most reliable info
                case "vw":
                    return value * document.documentElement.clientWidth / 100;
                case "vh":
                    return value * document.documentElement.clientHeight / 100;
                case "vmin":
                case "vmax":
                    var vw = document.documentElement.clientWidth / 100;
                    var vh = document.documentElement.clientHeight / 100;
                    var chooser = Math[units === "vmin" ? "min" : "max"];
                    return value * chooser(vw, vh);
                default:
                    return value;
                // for now, not supporting physical units (since they are just a set number of px)
                // or ex/ch (getting accurate measurements is hard)
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @constructor
         */
        function SetupInformation(element) {
            this.element = element;
            this.options = {};
            var key, option, width = 0, height = 0, value, actualValue, attrValues, attrValue, attrName;

            /**
             * @param {Object} option {mode: 'min|max', property: 'width|height', value: '123px'}
             */
            this.addOption = function(option) {
                var idx = [option.mode, option.property, option.value].join(',');
                this.options[idx] = option;
            };

            var attributes = ['min-width', 'min-height', 'max-width', 'max-height'];

            /**
             * Extracts the computed width/height and sets to min/max- attribute.
             */
            this.call = function() {
                // extract current dimensions
                width = this.element.offsetWidth;
                height = this.element.offsetHeight;

                attrValues = {};

                for (key in this.options) {
                    if (!this.options.hasOwnProperty(key)){
                        continue;
                    }
                    option = this.options[key];

                    value = convertToPx(this.element, option.value);

                    actualValue = option.property == 'width' ? width : height;
                    attrName = option.mode + '-' + option.property;
                    attrValue = '';

                    if (option.mode == 'min' && actualValue >= value) {
                        attrValue += option.value;
                    }

                    if (option.mode == 'max' && actualValue <= value) {
                        attrValue += option.value;
                    }

                    if (!attrValues[attrName]) attrValues[attrName] = '';
                    if (attrValue && -1 === (' '+attrValues[attrName]+' ').indexOf(' ' + attrValue + ' ')) {
                        attrValues[attrName] += ' ' + attrValue;
                    }
                }

                for (var k in attributes) {
                    if(!attributes.hasOwnProperty(k)) continue;

                    if (attrValues[attributes[k]]) {
                        this.element.setAttribute(attributes[k], attrValues[attributes[k]].substr(1));
                    } else {
                        this.element.removeAttribute(attributes[k]);
                    }
                }
            };
        }

        /**
         * @param {HTMLElement} element
         * @param {Object}      options
         */
        function setupElement(element, options) {
            if (element.elementQueriesSetupInformation) {
                element.elementQueriesSetupInformation.addOption(options);
            } else {
                element.elementQueriesSetupInformation = new SetupInformation(element);
                element.elementQueriesSetupInformation.addOption(options);
                element.elementQueriesSensor = new ResizeSensor(element, function() {
                    element.elementQueriesSetupInformation.call();
                });
            }
            element.elementQueriesSetupInformation.call();

            if (trackingActive && elements.indexOf(element) < 0) {
                elements.push(element);
            }
        }

        /**
         * @param {String} selector
         * @param {String} mode min|max
         * @param {String} property width|height
         * @param {String} value
         */
        var allQueries = {};
        function queueQuery(selector, mode, property, value) {
            if (typeof(allQueries[mode]) == 'undefined') allQueries[mode] = {};
            if (typeof(allQueries[mode][property]) == 'undefined') allQueries[mode][property] = {};
            if (typeof(allQueries[mode][property][value]) == 'undefined') allQueries[mode][property][value] = selector;
            else allQueries[mode][property][value] += ','+selector;
        }

        function getQuery() {
            var query;
            if (document.querySelectorAll) query = document.querySelectorAll.bind(document);
            if (!query && 'undefined' !== typeof $$) query = $$;
            if (!query && 'undefined' !== typeof jQuery) query = jQuery;

            if (!query) {
                throw 'No document.querySelectorAll, jQuery or Mootools\'s $$ found.';
            }

            return query;
        }

        /**
         * Start the magic. Go through all collected rules (readRules()) and attach the resize-listener.
         */
        function findElementQueriesElements() {
            var query = getQuery();

            for (var mode in allQueries) if (allQueries.hasOwnProperty(mode)) {

                for (var property in allQueries[mode]) if (allQueries[mode].hasOwnProperty(property)) {
                    for (var value in allQueries[mode][property]) if (allQueries[mode][property].hasOwnProperty(value)) {
                        var elements = query(allQueries[mode][property][value]);
                        for (var i = 0, j = elements.length; i < j; i++) {
                            setupElement(elements[i], {
                                mode: mode,
                                property: property,
                                value: value
                            });
                        }
                    }
                }

            }
        }

        /**
         *
         * @param {HTMLElement} element
         */
        function attachResponsiveImage(element) {
            var children = [];
            var rules = [];
            var sources = [];
            var defaultImageId = 0;
            var lastActiveImage = -1;
            var loadedImages = [];

            for (var i in element.children) {
                if(!element.children.hasOwnProperty(i)) continue;

                if (element.children[i].tagName && element.children[i].tagName.toLowerCase() === 'img') {
                    children.push(element.children[i]);

                    var minWidth = element.children[i].getAttribute('min-width') || element.children[i].getAttribute('data-min-width');
                    //var minHeight = element.children[i].getAttribute('min-height') || element.children[i].getAttribute('data-min-height');
                    var src = element.children[i].getAttribute('data-src') || element.children[i].getAttribute('url');

                    sources.push(src);

                    var rule = {
                        minWidth: minWidth
                    };

                    rules.push(rule);

                    if (!minWidth) {
                        defaultImageId = children.length - 1;
                        element.children[i].style.display = 'block';
                    } else {
                        element.children[i].style.display = 'none';
                    }
                }
            }

            lastActiveImage = defaultImageId;

            function check() {
                var imageToDisplay = false, i;

                for (i in children){
                    if(!children.hasOwnProperty(i)) continue;

                    if (rules[i].minWidth) {
                        if (element.offsetWidth > rules[i].minWidth) {
                            imageToDisplay = i;
                        }
                    }
                }

                if (!imageToDisplay) {
                    //no rule matched, show default
                    imageToDisplay = defaultImageId;
                }

                if (lastActiveImage != imageToDisplay) {
                    //image change

                    if (!loadedImages[imageToDisplay]){
                        //image has not been loaded yet, we need to load the image first in memory to prevent flash of
                        //no content

                        var image = new Image();
                        image.onload = function() {
                            children[imageToDisplay].src = sources[imageToDisplay];

                            children[lastActiveImage].style.display = 'none';
                            children[imageToDisplay].style.display = 'block';

                            loadedImages[imageToDisplay] = true;

                            lastActiveImage = imageToDisplay;
                        };

                        image.src = sources[imageToDisplay];
                    } else {
                        children[lastActiveImage].style.display = 'none';
                        children[imageToDisplay].style.display = 'block';
                        lastActiveImage = imageToDisplay;
                    }
                } else {
                    //make sure for initial check call the .src is set correctly
                    children[imageToDisplay].src = sources[imageToDisplay];
                }
            }

            element.resizeSensor = new ResizeSensor(element, check);
            check();

            if (trackingActive) {
                elements.push(element);
            }
        }

        function findResponsiveImages(){
            var query = getQuery();

            var elements = query('[data-responsive-image],[responsive-image]');
            for (var i = 0, j = elements.length; i < j; i++) {
                attachResponsiveImage(elements[i]);
            }
        }

        var regex = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi;
        var attrRegex = /\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi;
        /**
         * @param {String} css
         */
        function extractQuery(css) {
            var match;
            var smatch;
            css = css.replace(/'/g, '"');
            while (null !== (match = regex.exec(css))) {
                smatch = match[1] + match[3];
                attrs = match[2];

                while (null !== (attrMatch = attrRegex.exec(attrs))) {
                    queueQuery(smatch, attrMatch[1], attrMatch[2], attrMatch[3]);
                }
            }
        }

        /**
         * @param {CssRule[]|String} rules
         */
        function readRules(rules) {
            var selector = '';
            if (!rules) {
                return;
            }
            if ('string' === typeof rules) {
                rules = rules.toLowerCase();
                if (-1 !== rules.indexOf('min-width') || -1 !== rules.indexOf('max-width')) {
                    extractQuery(rules);
                }
            } else {
                for (var i = 0, j = rules.length; i < j; i++) {
                    if (1 === rules[i].type) {
                        selector = rules[i].selectorText || rules[i].cssText;
                        if (-1 !== selector.indexOf('min-height') || -1 !== selector.indexOf('max-height')) {
                            extractQuery(selector);
                        }else if(-1 !== selector.indexOf('min-width') || -1 !== selector.indexOf('max-width')) {
                            extractQuery(selector);
                        }
                    } else if (4 === rules[i].type) {
                        readRules(rules[i].cssRules || rules[i].rules);
                    }
                }
            }
        }

        var defaultCssInjected = false;

        /**
         * Searches all css rules and setups the event listener to all elements with element query rules..
         *
         * @param {Boolean} withTracking allows and requires you to use detach, since we store internally all used elements
         *                               (no garbage collection possible if you don not call .detach() first)
         */
        this.init = function(withTracking) {
            trackingActive = typeof withTracking === 'undefined' ? false : withTracking;

            for (var i = 0, j = document.styleSheets.length; i < j; i++) {
                try {
                    readRules(document.styleSheets[i].cssRules || document.styleSheets[i].rules || document.styleSheets[i].cssText);
                } catch(e) {
                    if (e.name !== 'SecurityError') {
                        throw e;
                    }
                }
            }

            if (!defaultCssInjected) {
                var style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = '[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img { width: 100%;}';
                document.getElementsByTagName('head')[0].appendChild(style);
                defaultCssInjected = true;
            }

            findElementQueriesElements();
            findResponsiveImages();
        };

        /**
         *
         * @param {Boolean} withTracking allows and requires you to use detach, since we store internally all used elements
         *                               (no garbage collection possible if you don not call .detach() first)
         */
        this.update = function(withTracking) {
            this.init(withTracking);
        };

        this.detach = function() {
            if (!this.withTracking) {
                throw 'withTracking is not enabled. We can not detach elements since we don not store it.' +
                'Use ElementQueries.withTracking = true; before domready or call ElementQueryes.update(true).';
            }

            var element;
            while (element = elements.pop()) {
                ElementQueries.detach(element);
            }

            elements = [];
        };
    };

    /**
     *
     * @param {Boolean} withTracking allows and requires you to use detach, since we store internally all used elements
     *                               (no garbage collection possible if you don not call .detach() first)
     */
    ElementQueries.update = function(withTracking) {
        ElementQueries.instance.update(withTracking);
    };

    /**
     * Removes all sensor and elementquery information from the element.
     *
     * @param {HTMLElement} element
     */
    ElementQueries.detach = function(element) {
        if (element.elementQueriesSetupInformation) {
            //element queries
            element.elementQueriesSensor.detach();
            delete element.elementQueriesSetupInformation;
            delete element.elementQueriesSensor;

        } else if (element.resizeSensor) {
            //responsive image

            element.resizeSensor.detach();
            delete element.resizeSensor;
        } else {
            //console.log('detached already', element);
        }
    };

    ElementQueries.withTracking = false;

    ElementQueries.init = function() {
        if (!ElementQueries.instance) {
            ElementQueries.instance = new ElementQueries();
        }

        ElementQueries.instance.init(ElementQueries.withTracking);
    };

    var domLoaded = function (callback) {
        /* Internet Explorer */
        /*@cc_on
         @if (@_win32 || @_win64)
         document.write('<script id="ieScriptLoad" defer src="//:"><\/script>');
         document.getElementById('ieScriptLoad').onreadystatechange = function() {
         if (this.readyState == 'complete') {
         callback();
         }
         };
         @end @*/
        /* Mozilla, Chrome, Opera */
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callback, false);
        }
        /* Safari, iCab, Konqueror */
        else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
            var DOMLoadTimer = setInterval(function () {
                if (/loaded|complete/i.test(document.readyState)) {
                    callback();
                    clearInterval(DOMLoadTimer);
                }
            }, 10);
        }
        /* Other web browsers */
        else window.onload = callback;
    };

    ElementQueries.listen = function() {
        domLoaded(ElementQueries.init);
    };

    // make available to common module loader
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = ElementQueries;
    }
    else {
        window.ElementQueries = ElementQueries;
        ElementQueries.listen();
    }

    return ElementQueries;

}));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
;
(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.ResizeSensor = factory();
    }
}(this, function () {

    //Make sure it does not throw in a SSR (Server Side Rendering) situation
    if (typeof window === "undefined") {
        return null;
    }
    // Only used for the dirty checking, so the event callback count is limted to max 1 call per fps per sensor.
    // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
    // would generate too many unnecessary events.
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (fn) {
            return window.setTimeout(fn, 20);
        };

    /**
     * Iterate over each of the provided element(s).
     *
     * @param {HTMLElement|HTMLElement[]} elements
     * @param {Function}                  callback
     */
    function forEachElement(elements, callback){
        var elementsType = Object.prototype.toString.call(elements);
        var isCollectionTyped = ('[object Array]' === elementsType
            || ('[object NodeList]' === elementsType)
            || ('[object HTMLCollection]' === elementsType)
            || ('[object Object]' === elementsType)
            || ('undefined' !== typeof jQuery && elements instanceof jQuery) //jquery
            || ('undefined' !== typeof Elements && elements instanceof Elements) //mootools
        );
        var i = 0, j = elements.length;
        if (isCollectionTyped) {
            for (; i < j; i++) {
                callback(elements[i]);
            }
        } else {
            callback(elements);
        }
    }

    /**
     * Class for dimension change detection.
     *
     * @param {Element|Element[]|Elements|jQuery} element
     * @param {Function} callback
     *
     * @constructor
     */
    var ResizeSensor = function(element, callback) {
        /**
         *
         * @constructor
         */
        function EventQueue() {
            var q = [];
            this.add = function(ev) {
                q.push(ev);
            };

            var i, j;
            this.call = function() {
                for (i = 0, j = q.length; i < j; i++) {
                    q[i].call();
                }
            };

            this.remove = function(ev) {
                var newQueue = [];
                for(i = 0, j = q.length; i < j; i++) {
                    if(q[i] !== ev) newQueue.push(q[i]);
                }
                q = newQueue;
            }

            this.length = function() {
                return q.length;
            }
        }

        /**
         * @param {HTMLElement} element
         * @param {String}      prop
         * @returns {String|Number}
         */
        function getComputedStyle(element, prop) {
            if (element.currentStyle) {
                return element.currentStyle[prop];
            } else if (window.getComputedStyle) {
                return window.getComputedStyle(element, null).getPropertyValue(prop);
            } else {
                return element.style[prop];
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {Function}    resized
         */
        function attachResizeEvent(element, resized) {
            if (!element.resizedAttached) {
                element.resizedAttached = new EventQueue();
                element.resizedAttached.add(resized);
            } else if (element.resizedAttached) {
                element.resizedAttached.add(resized);
                return;
            }

            element.resizeSensor = document.createElement('div');
            element.resizeSensor.className = 'resize-sensor';
            var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
            var styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';

            element.resizeSensor.style.cssText = style;
            element.resizeSensor.innerHTML =
                '<div class="resize-sensor-expand" style="' + style + '">' +
                    '<div style="' + styleChild + '"></div>' +
                '</div>' +
                '<div class="resize-sensor-shrink" style="' + style + '">' +
                    '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' +
                '</div>';
            element.appendChild(element.resizeSensor);

            if (getComputedStyle(element, 'position') == 'static') {
                element.style.position = 'relative';
            }

            var expand = element.resizeSensor.childNodes[0];
            var expandChild = expand.childNodes[0];
            var shrink = element.resizeSensor.childNodes[1];
            var dirty, rafId, newWidth, newHeight;
            var lastWidth = element.offsetWidth;
            var lastHeight = element.offsetHeight;

            var reset = function() {
                expandChild.style.width = '100000px';
                expandChild.style.height = '100000px';

                expand.scrollLeft = 100000;
                expand.scrollTop = 100000;

                shrink.scrollLeft = 100000;
                shrink.scrollTop = 100000;
            };

            reset();

            var onResized = function() {
                rafId = 0;

                if (!dirty) return;

                lastWidth = newWidth;
                lastHeight = newHeight;

                if (element.resizedAttached) {
                    element.resizedAttached.call();
                }
            };

            var onScroll = function() {
                newWidth = element.offsetWidth;
                newHeight = element.offsetHeight;
                dirty = newWidth != lastWidth || newHeight != lastHeight;

                if (dirty && !rafId) {
                    rafId = requestAnimationFrame(onResized);
                }

                reset();
            };

            var addEvent = function(el, name, cb) {
                if (el.attachEvent) {
                    el.attachEvent('on' + name, cb);
                } else {
                    el.addEventListener(name, cb);
                }
            };

            addEvent(expand, 'scroll', onScroll);
            addEvent(shrink, 'scroll', onScroll);
        }

        forEachElement(element, function(elem){
            attachResizeEvent(elem, callback);
        });

        this.detach = function(ev) {
            ResizeSensor.detach(element, ev);
        };
    };

    ResizeSensor.detach = function(element, ev) {
        forEachElement(element, function(elem){
            if(elem.resizedAttached && typeof ev == "function"){
                elem.resizedAttached.remove(ev);
                if(elem.resizedAttached.length()) return;
            }
            if (elem.resizeSensor) {
                if (elem.contains(elem.resizeSensor)) {
                    elem.removeChild(elem.resizeSensor);
                }
                delete elem.resizeSensor;
                delete elem.resizedAttached;
            }
        });
    };

    return ResizeSensor;

}));


/***/ })
/******/ ]);
//# sourceMappingURL=zaojiu-player.js.map