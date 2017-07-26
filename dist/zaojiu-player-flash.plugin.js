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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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

/***/ 10:
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

/***/ 11:
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

/***/ 12:
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

/***/ 2:
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

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(1);
var model_1 = __webpack_require__(0);
var styles = __webpack_require__(2);
var parseRtmpSrc = function (src) {
    if (!src) {
        return [];
    }
    var connEnd = src.search(/&(?!\w+=)/);
    var streamBegin;
    if (connEnd !== -1) {
        streamBegin = connEnd + 1;
    }
    else {
        connEnd = streamBegin = src.lastIndexOf('/') + 1;
        if (connEnd === 0) {
            connEnd = streamBegin = src.length;
        }
    }
    var connection = src.substring(0, connEnd);
    var stream = src.substring(streamBegin, src.length);
    return [connection, stream];
};
var getFlashTemplate = function (swf, flashVars, params, attributes) {
    var objTag = '<object type="application/x-shockwave-flash" ';
    var flashVarsString = '';
    var paramsString = '';
    var attrsString = '';
    if (flashVars) {
        Object.getOwnPropertyNames(flashVars).forEach(function (key) {
            flashVarsString += key + "=" + flashVars[key] + "&amp;";
        });
    }
    params = Object.assign({
        movie: swf,
        flashvars: flashVarsString,
        allowScriptAccess: 'always',
        allowNetworking: 'all'
    }, params);
    Object.getOwnPropertyNames(params).forEach(function (key) {
        paramsString += "<param name=\"" + key + "\" value=\"" + params[key] + "\" />";
    });
    attributes = Object.assign({
        data: swf,
        width: '100%',
        height: '100%'
    }, attributes);
    Object.getOwnPropertyNames(attributes).forEach(function (key) {
        attrsString += key + "=\"" + attributes[key] + "\" ";
    });
    return "" + objTag + attrsString + ">" + paramsString + "</object>";
};
var FlashVideo = (function () {
    function FlashVideo(opt) {
        this.lastSeekTarget = -1;
        this.isReady = false;
        this.readyResolver = [];
        this.listenerGroup = {};
        this.isNeedDelaySeeking = true;
        this.opt = opt;
        this.createEl();
    }
    FlashVideo.onReady = function (swfID) {
        var el = document.getElementById(swfID);
        var instance = el && el.instance;
        // and the tech element was removed from the player div
        if (instance && instance.el && instance.el.vjs_getProperty) {
            setTimeout(function () { instance.handleReady(); }, 1000);
        }
        else {
            setTimeout(function () { return instance.handleReady(); }, 1000); // recheck in one second
        }
    };
    FlashVideo.onEvent = function (swfID, eventName) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var el = document.getElementById(swfID);
        var instance = el && el.instance;
        // dispatch FlashVideo events asynchronously for two reasons:
        // - FlashVideo swallows any exceptions generated by javascript it
        //   invokes
        // - FlashVideo is suspended until the javascript returns which may cause
        //   playback performance issues
        setTimeout(function () {
            instance.handleEvent(eventName, args);
        });
    };
    FlashVideo.onError = function (swfID, err) {
        var el = document.getElementById(swfID);
        var instance = el && el.instance;
        instance.handleError(err);
    };
    FlashVideo.canPlayType = function (type) {
        return utils_1.canPlayTypeByFlash(type);
    };
    FlashVideo.prototype.setRtmpSrc = function (src) {
        var conn = parseRtmpSrc(src);
        this.rtmpConnection = conn[0];
        this.rtmpStream = conn[1];
    };
    FlashVideo.prototype.setSrc = function (src) {
        var _this = this;
        if (utils_1.isRtmp(src)) {
            this.setRtmpSrc(src.src);
        }
        else {
            var srcParsed = utils_1.getAbsoluteURL(src.src);
            this.el.vjs_src(srcParsed);
        }
        if (this.opt.autoplay) {
            setTimeout(function () { return _this.play(); }, 0);
        }
    };
    FlashVideo.prototype.createEl = function () {
        var options = this.opt;
        // for the hosted swf, which should be relative to the page (not video.js)
        // The CDN also auto-adds a swf URL for that specific version.
        var objId = "zaojiu-flash-player-" + utils_1.genRandomID();
        var flashVars = {
            readyFunction: 'ZaojiuPlayer.FlashVideo.onReady',
            eventProxyFunction: 'ZaojiuPlayer.FlashVideo.onEvent',
            errorEventProxyFunction: 'ZaojiuPlayer.FlashVideo.onError',
            autoplay: options.autoplay,
            preload: options.preload,
            loop: options.loop,
        };
        var params = {
            wmode: 'opaque',
            bgcolor: '#000000',
        };
        var attributes = {
            id: objId,
            name: objId,
            class: styles.video,
        };
        this.el = utils_1.createElementByString(getFlashTemplate(options.swf, flashVars, params, attributes)).item(0);
        this.el.instance = this;
    };
    FlashVideo.prototype.propertySetter = function (property, value) {
        var _this = this;
        if (this.isReady) {
            this.el.vjs_setProperty(property, value);
        }
        else {
            (new Promise(function (resolve, reject) {
                _this.readyResolver.push(resolve);
            })).then(function () {
                _this.el.vjs_setProperty(property, value);
            });
        }
    };
    FlashVideo.prototype.propertyGetter = function (property) {
        return this.el && this.el.vjs_getProperty ? this.el.vjs_getProperty(property) : null;
    };
    FlashVideo.prototype.initTimeChecker = function () {
        var _this = this;
        var timeCache = -1;
        this.timeupdateTimer = setInterval(function () {
            if (!_this.el)
                return;
            if (_this.currentTime !== timeCache) {
                timeCache = _this.currentTime;
                _this.handleEvent('timeupdate', '');
            }
        }, 1000);
    };
    FlashVideo.prototype.load = function () {
        if (this.el && this.el.vjs_load)
            this.el.vjs_load();
    };
    FlashVideo.prototype.play = function () {
        if (this.el && this.el.vjs_play)
            this.el.vjs_play();
    };
    FlashVideo.prototype.pause = function () {
        if (this.el && this.el.vjs_pause)
            this.el.vjs_pause();
    };
    FlashVideo.prototype.canPlayType = function (type) {
        return FlashVideo.canPlayType(type);
    };
    ;
    Object.defineProperty(FlashVideo.prototype, "seeking", {
        get: function () {
            return this.lastSeekTarget !== -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "duration", {
        get: function () {
            if (this.readyState === model_1.ReadyState.HAVE_NOTHING) {
                return NaN;
            }
            var duration = this.propertyGetter('duration') || 0;
            return duration >= 0 ? duration : Infinity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "seekable", {
        get: function () {
            var duration = this.duration;
            if (duration === 0) {
                return new model_1.FlashTimeRanges(new model_1.FlashBuffer(0, 0));
            }
            return new model_1.FlashTimeRanges(new model_1.FlashBuffer(0, duration));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "buffered", {
        get: function () {
            var ranges = this.propertyGetter('buffered') || null;
            if (!ranges || ranges.length === 0) {
                return new model_1.FlashTimeRanges(new model_1.FlashBuffer(0, 0));
            }
            var buffers = [];
            for (var _i = 0, ranges_1 = ranges; _i < ranges_1.length; _i++) {
                var range = ranges_1[_i];
                buffers.push(new model_1.FlashBuffer(range[0], range[1]));
            }
            return new model_1.FlashTimeRanges(buffers);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "ended", {
        get: function () {
            return !!this.propertyGetter('ended');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "paused", {
        get: function () {
            return !!this.propertyGetter('paused');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "networkState", {
        get: function () {
            return this.propertyGetter('networkState') || model_1.NetworkState.NETWORK_EMPTY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "readyState", {
        get: function () {
            return this.propertyGetter('readyState') || model_1.ReadyState.HAVE_NOTHING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "src", {
        // read write properties -------------------------------------------
        get: function () {
            return this.propertyGetter('currentSrc');
        },
        set: function (src) {
            var _this = this;
            if (!this.isReady) {
                this.sourceBeforeReady = src;
                var ready = new Promise(function (resolve, reject) {
                    _this.readyResolver.push(resolve);
                });
                ready.then(function () {
                    _this.setSrc(_this.sourceBeforeReady);
                    _this.sourceBeforeReady = null;
                });
            }
            else {
                this.setSrc(src);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "currentTime", {
        get: function () {
            return this.seeking ? this.lastSeekTarget : (this.propertyGetter('currentTime') || 0);
        },
        set: function (time) {
            var seekable = this.seekable;
            if (seekable.length) {
                time = time > seekable.start(0) ? time : seekable.start(0);
                time = time < seekable.end(seekable.length - 1) ? time : seekable.end(seekable.length - 1);
                this.lastSeekTarget = time;
                this.handleEvent('seeking', null);
                // if (this.isNeedDelaySeeking) {
                //   // Set current time when initializing would never trigger seeked event.
                //   // So delay 500ms to prevent this bug.
                //   setTimeout(() => this.propertySetter('currentTime', time), 1000);
                //   setTimeout(() => this.isNeedDelaySeeking = false, 1000);
                // } else {
                this.propertySetter('currentTime', time);
                // }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "autoplay", {
        get: function () {
            return this.propertyGetter('autoplay') || false;
        },
        set: function (isAutoPlay) {
            this.propertySetter('autoplay', isAutoPlay);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "preload", {
        get: function () {
            return this.propertyGetter('preload') || '';
        },
        set: function (preload) {
            this.propertySetter('preload', preload);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "loop", {
        get: function () {
            return this.propertyGetter('loop') || '';
        },
        set: function (loop) {
            this.propertySetter('loop', loop);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "volume", {
        get: function () {
            return this.propertyGetter('volume') || 0;
        },
        set: function (volume) {
            this.propertySetter('volume', volume);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "muted", {
        get: function () {
            return this.propertyGetter('muted') || false;
        },
        set: function (muted) {
            this.propertySetter('muted', muted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "defaultMuted", {
        get: function () {
            return this.propertyGetter('defaultMuted') || false;
        },
        set: function (defaultMuted) {
            this.propertySetter('defaultMuted', defaultMuted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "playbackRate", {
        get: function () {
            return this.propertyGetter('playbackRate') || 1;
        },
        set: function (playbackRate) {
            this.propertySetter('playbackRate', playbackRate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "defaultPlaybackRate", {
        get: function () {
            return this.propertyGetter('defaultPlaybackRate') || 1;
        },
        set: function (defaultPlaybackRate) {
            this.propertySetter('defaultPlaybackRate', defaultPlaybackRate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "poster", {
        get: function () {
            return this.propertyGetter('poster') || '';
        },
        set: function (poster) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "rtmpConnection", {
        get: function () {
            return this.propertyGetter('rtmpConnection') || '';
        },
        set: function (connection) {
            this.propertySetter('rtmpConnection', connection);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlashVideo.prototype, "rtmpStream", {
        get: function () {
            return this.propertyGetter('rtmpStream') || '';
        },
        set: function (stream) {
            this.propertySetter('rtmpStream', stream);
        },
        enumerable: true,
        configurable: true
    });
    // TODO: remain property
    // const _readOnly = [
    //   'initialTime',
    //   'startOffsetTime',
    //   'videoWidth',
    //   'videoHeight'
    // ];
    FlashVideo.prototype.addEventListener = function (type, listener, useCapture) {
        if (!listener)
            return;
        var listenerArr = this.listenerGroup[type] || [];
        var has = listenerArr.find(function (l) { return l === listener; });
        if (!has) {
            listenerArr.push(listener);
        }
        this.listenerGroup[type] = listenerArr;
    };
    FlashVideo.prototype.removeEventListener = function (type, listener, useCapture) {
        if (!listener)
            return;
        var listenerArr = this.listenerGroup[type] || [];
        if (!listenerArr.length)
            return;
        for (var i in listenerArr) {
            if (listenerArr[i] === listener) {
                listenerArr.splice(+i, 1);
                break;
            }
        }
    };
    FlashVideo.prototype.handleEvent = function (eventName, args) {
        // flash event list
        // public static const ON_SRC_CHANGE:String = "onsrcchange";
        // public static const ON_LOAD_START:String = "loadstart";
        // public static const ON_START:String = "playing";
        // public static const ON_PAUSE:String = "pause";
        // public static const ON_RESUME:String = "play";
        // public static const ON_SEEK_START:String = "seeking";
        // public static const ON_SEEK_COMPLETE:String = "seeked";
        // public static const ON_BUFFER_FULL:String = "loadeddata";
        // public static const ON_BUFFER_EMPTY:String = "waiting";
        // public static const ON_BUFFER_FLUSH:String = "emptied";
        // public static const ON_PLAYBACK_COMPLETE:String = "ended";
        // public static const ON_METADATA:String = "loadedmetadata";
        // public static const ON_DURATION_CHANGE:String = "durationchange";
        // public static const ON_CAN_PLAY:String = "canplay";
        // public static const ON_CAN_PLAY_THROUGH:String = "canplaythrough";
        // public static const ON_VOLUME_CHANGE:String = "volumechange";
        //
        // public static const ON_RTMP_CONNECT_SUCCESS:String = "rtmpconnected";
        // public static const ON_RTMP_RETRY:String = "rtmpretry";
        // public static const ON_STAGE_CLICK:String = "stageclick";
        //
        // public static const ON_TEXT_DATA:String = "textdata";
        if (eventName === 'seeked')
            this.lastSeekTarget = -1;
        // flash loop option not woking~~
        if (eventName === 'ended' && !this.opt.loop)
            this.pause();
        var listenerArr = this.listenerGroup[eventName] || [];
        if (listenerArr.length) {
            listenerArr.forEach(function (listener) {
                var handler;
                if (typeof listener === 'function') {
                    handler = listener;
                }
                else if (listener && typeof listener.handleEvent === 'function') {
                    handler = listener.handleEvent;
                }
                if (handler)
                    handler(new model_1.PlayerEvent(eventName, args));
            });
        }
    };
    FlashVideo.prototype.handleReady = function () {
        this.isReady = true;
        if (this.readyResolver && this.readyResolver.length) {
            this.readyResolver.forEach(function (resolve) { return resolve(); });
            this.readyResolver = [];
        }
        this.initTimeChecker();
        this.handleEvent('ready', '');
    };
    FlashVideo.prototype.handleError = function (err) {
        // flash error list
        // public static const SRC_NOT_SET:String = "srcnotset";
        // public static const SRC_404:String = "srcnotfound";
        // public static const RTMP_CONNECT_FAILURE:String = "rtmpconnectfailure";
        // public static const PROPERTY_NOT_FOUND:String = "propertynotfound";
        // public static const UNSUPPORTED_MODE:String = "unsupportedmode";
        switch (err) {
            case 'srcnotset':
            case 'srcnotfound':
                this.error = new model_1.PlayerError(model_1.MediaErrorCode.MEDIA_ERR_SRC_NOT_SUPPORTED);
                break;
            case 'rtmpconnectfailure':
                this.error = new model_1.PlayerError(model_1.MediaErrorCode.MEDIA_ERR_NETWORK);
                break;
        }
        this.handleEvent('error', err);
    };
    FlashVideo.prototype.remove = function () {
        this.el.remove();
    };
    return FlashVideo;
}());
exports.FlashVideo = FlashVideo;
if (window.ZaojiuPlayer && !window.ZaojiuPlayer.FlashVideo) {
    window.ZaojiuPlayer.FlashVideo = FlashVideo;
}
exports.default = FlashVideo;


/***/ }),

/***/ 4:
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

/***/ 9:
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

/***/ })

/******/ });
//# sourceMappingURL=zaojiu-player-flash.plugin.js.map