(function e(t, r) {
  if (typeof exports === "object" && typeof module === "object") module.exports = r();
  else if (typeof define === "function" && define.amd) define([], r);
  else {
    var n = r();
    for (var i in n)(typeof exports === "object" ? exports : t)[i] = n[i]
  }
})(this, function () {
  return function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var i = t[n] = {
        exports: {},
        id: n,
        loaded: false
      };
      e[n].call(i.exports, i, i.exports, r);
      i.loaded = true;
      return i.exports
    }
    r.m = e;
    r.c = t;
    r.p = "//imgcache.qq.com/open/qcloud/video/vcplayer/";
    return r(0)
  }([function (e, t, r) {
    "use strict";
    t.__esModule = true;
    t.TcPlayer = undefined;
    var n = r(1);
    var i = h(n);
    var o = r(2);
    var s = h(o);
    var a = r(3);
    var l = h(a);
    var u = r(4);
    var c = h(u);
    var p = r(5);

    function h(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function f(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function d(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function v(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var y = c.MSG;
    var m = {
      mobile: ["m3u8", "mp4"],
      pc: ["rtmp", "flv", "m3u8", "mp4"]
    };
    var g = t.TcPlayer = function (e) {
      v(t, e);

      function t(r, n) {
        f(this, t);
        var o = !(n.m3u8 || n.m3u8_hd || n.m3u8_sd || n.mp4 || n.mp4_hd || n.mp4_sd);
        if (n.flash == undefined) {
          n.flash = i.IS_MOBILE || !o && (i.IS_MAC && i.IS_SAFARI || !i.IS_ENABLED_FLASH) ? false : true
        }
        if (!n.flash) {
          m.pc = ["m3u8", "mp4"]
        }
        var s = b(n);
        var a = {
          owner: r,
          videoSource: s,
          src: s.curUrl,
          autoplay: n.autoplay,
          live: n.live,
          flash: n.flash,
          poster: n.coverpic,
          width: n.width,
          height: n.height,
          listener: n.listener,
          wording: n.wording,
          controls: n.controls,
          x5_type: n.x5_type,
          x5_fullscreen: n.x5_fullscreen
        };
        var l = d(this, e.call(this, a));
        _.call(l, a);
        return l
      }
      t.prototype.switchClarity = function r(e) {
        e = e || "od";
        var t = this.currentTime(),
          r = this.options.videoSource,
          n = w(r.urls, e);
        this.load(n.url);
        r.curUrl = n.url;
        r.curDef = n.definition;
        r.curFormat = n.format;
        var i = l.bind(this, function () {
          if (parseInt(this.duration() - t) > 0 && !this.options.live) {
            this.currentTime(t);
            this.play()
          }
          c.unsub(y.MetaLoaded, "*", i, this)
        });
        c.sub(y.MetaLoaded, "*", i, this)
      };
      t.prototype.handleMsg = function n(t) {
        e.prototype.handleMsg.call(this, t)
      };
      return t
    }(p.Player);

    function b(e) {
      var t = {
        urls: {
          m3u8: {
            od: e.m3u8 || "",
            hd: e.m3u8_hd || "",
            sd: e.m3u8_sd || ""
          },
          flv: {
            od: e.flv || "",
            hd: e.flv_hd || "",
            sd: e.flv_sd || ""
          },
          mp4: {
            od: e.mp4 || "",
            hd: e.mp4_hd || "",
            sd: e.mp4_sd || ""
          },
          rtmp: {
            od: e.rtmp || "",
            hd: e.rtmp_hd || "",
            sd: e.rtmp_sd || ""
          }
        },
        isClarity: function o(e) {
          var r = t.urls;
          return !!r["m3u8"][e] || !! r["flv"][e] || !! r["mp4"][e] || !! r["rtmp"][e]
        },
        isFormat: function s(e) {
          var r = t.urls;
          return !!r[e]["od"] || !! r[e]["hd"] || !! r[e]["sd"]
        }
      };
      t.definitions = [];
      var r = ["od", "hd", "sd"];
      for (var n = 0; n < r.length; n++) {
        if (t.isClarity(r[n])) {
          t.definitions.push(r[n])
        }
      }
      var i = E(t);
      if (i) {
        t.curUrl = i.url;
        t.curDef = i.definition;
        t.curFormat = i.format
      }
      return t
    }
    function _(e) {
      var t = e.videoSource;
      if (i.IS_FILE_PROTOCOL) {
        this.errortips.show({
          code: "FileProtocol"
        })
      }
      if (!(t.isFormat("rtmp") || t.isFormat("flv") || t.isFormat("m3u8") || t.isFormat("mp4"))) {
        this.errortips.show({
          code: "UrlEmpty"
        });
        return false
      }
      return true
    }
    function w(e, t, r) {
      var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : m;
      var o = "",
        s = void 0;
      r = r || (i.IS_MOBILE ? n.mobile : n.pc);
      for (var a = 0; a < r.length; a++) {
        o = r[a];
        if (e[o][t]) {
          s = {
            definition: t,
            url: e[o][t],
            format: o
          };
          break
        }
      }
      return s
    }
    function S(e, t) {
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["od", "hd", "sd"];
      var n = "";
      for (var i = 0; i < r.length; i++) {
        n = r[i];
        if (e[t][n]) {
          return {
            definition: n,
            url: e[t][n]
          }
        }
      }
    }
    function E(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : m;
      var r = void 0,
        n = "",
        o = e.urls,
        s = i.IS_MOBILE ? t.mobile : t.pc;
      for (var a = 0; a < s.length; a++) {
        n = s[a];
        if (e.isFormat(n)) {
          r = S(o, n);
          r.format = n;
          break
        }
      }
      return r
    }
    function M(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ["od", "hd", "sd"];
      var r = void 0,
        n = "",
        i = e.urls;
      for (var o = 0; o < t.length; o++) {
        n = t[o];
        if (e.isClarity(n)) {
          r = w(i, n);
          break
        }
      }
      return r
    }
  }, function (e, t) {
    "use strict";
    t.__esModule = true;
    var r = window.navigator.userAgent;
    var n = /AppleWebKit\/([\d.]+)/i.exec(r);
    var i = n ? parseFloat(n.pop()) : null;
    var o = t.IS_IPAD = /iPad/i.test(r);
    var s = t.IS_IPHONE = /iPhone/i.test(r) && !o;
    var a = t.IS_IPOD = /iPod/i.test(r);
    var l = t.IS_IOS = s || o || a;
    var u = t.IOS_VERSION = function () {
      var e = r.match(/OS (\d+)_/i);
      if (e && e[1]) {
        return e[1]
      }
    }();
    var c = t.IS_MAC = /Mac/i.test(r);
    var p = t.IS_SAFARI = /Safari/i.test(r);
    var h = t.IS_ANDROID = /Android/i.test(r);
    var f = t.ANDROID_VERSION = function () {
      var e = r.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
        t, n;
      if (!e) {
        return null
      }
      t = e[1] && parseFloat(e[1]);
      n = e[2] && parseFloat(e[2]);
      if (t && n) {
        return parseFloat(e[1] + "." + e[2])
      } else if (t) {
        return t
      } else {
        return null
      }
    }();
    var d = t.IS_OLD_ANDROID = h && /webkit/i.test(r) && f < 2.3;
    var v = t.IS_NATIVE_ANDROID = h && f < 5 && i < 537;
    var y = t.IS_FIREFOX = /Firefox/i.test(r);
    var m = t.IS_EDGE = /Edge/i.test(r);
    var g = t.IS_CHROME = !m && /Chrome/i.test(r);
    var b = t.IS_IE8 = /MSIE\s8\.0/.test(r);
    var _ = t.IS_IE9 = /MSIE\s9\.0/.test(r);
    var w = t.IS_IE = /MSIE\s([\d.]+)/.test(r);
    var S = t.TOUCH_ENABLED = !! ("ontouchstart" in window || window.DocumentTouch && document instanceof window
      .DocumentTouch);
    var E = t.BACKGROUND_SIZE_SUPPORTED = "backgroundSize" in document.createElement("video").style;
    var M = t.HASVIDEO = !! document.createElement("video").canPlayType;
    var O = t.IS_X5TBS = /TBS\/\d+/i.test(r);
    var k = t.IS_MQQB = !O && /MQQBrowser\/\d+/i.test(r);
    var P = t.IS_MOBILE = h || l;
    var T = t.IS_FILE_PROTOCOL = /file:/.test(location.protocol);
    var C = t.IS_ENABLED_FLASH = function () {
      var e;
      if (document.all) {
        try {
          e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
          if (e) {
            window.console && console.log("FLASH_VERSION", parseInt(e.GetVariable("$version").split(" ")[
              1].split(",")[0]));
            return true
          }
        } catch (t) {
          return false
        }
      } else {
        try {
          if (navigator.plugins && navigator.plugins.length > 0) {
            e = navigator.plugins["Shockwave Flash"];
            if (e) {
              var r = e.description.split(" ");
              for (var n = 0; n < r.length; ++n) {
                if (isNaN(parseInt(r[n]))) continue;
                window.console && console.log("FLASH_VERSION", parseInt(r[n]))
              }
              return true
            }
          }
        } catch (t) {
          return false
        }
      }
      return false
    }()
  }, function (e, t) {
    "use strict";
    t.__esModule = true;
    t.on = r;
    t.off = n;
    t.createEl = i;
    t.get = o;
    t.addClass = s;
    t.removeClass = a;
    t.toggleClass = l;
    t.hasClass = u;
    t.findElPosition = p;
    t.getPointerPosition = h;
    t.loadScript = f;
    t.getViewportSize = d;

    function r(e, t, r) {
      if (!e) return console.warn("element not exists");
      if (e.addEventListener) e.addEventListener(t, r, false);
      else if (e.attachEvent) e.attachEvent("on" + t, r);
      return r
    }
    function n(e, t, r) {
      if (!e) return console.warn("element not exists");
      if (e.removeEventListener) e.removeEventListener(t, r, false);
      else if (e.detachEvent) e.detachEvent("on" + t, r)
    }
    function i() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var n = document.createElement(e);
      for (var i in t) {
        if (!t.hasOwnProperty(i)) continue;
        var o = t[i];
        if (o === null) n.removeAttribute(o);
        else n.setAttribute(i, o)
      }
      for (var s in r) {
        if (!r.hasOwnProperty(s)) continue;
        n[s] = r[s]
      }
      return n
    }
    function o(e) {
      return document.getElementById(e)
    }
    function s(e, t) {
      if (e.classList) e.classList.add(t);
      else if (!u(e, t)) e.className = e.className + " " + t
    }
    function a(e, t) {
      if (e.classList) e.classList.remove(t);
      else e.className = e.className.replace(c(t), " ")
    }
    function l(e, t, r) {
      r ? s(e, t) : a(e, t)
    }
    function u(e, t) {
      if (e.classList) return e.classList.contains(t);
      else return c(t).test(e.className)
    }
    function c(e) {
      return new RegExp("(^|\\s)" + e + "($|\\s)")
    }
    function p(e) {
      var t = void 0;
      if (e.getBoundingClientRect && e.parentNode) {
        t = e.getBoundingClientRect()
      }
      if (!t) {
        return {
          left: 0,
          top: 0
        }
      }
      var r = document.documentElement;
      var n = document.body;
      var i = r.clientLeft || n.clientLeft || 0;
      var o = window.pageXOffset || n.scrollLeft;
      var s = t.left + o - i;
      var a = r.clientTop || n.clientTop || 0;
      var l = window.pageYOffset || n.scrollTop;
      var u = t.top + l - a;
      return {
        left: Math.round(s),
        top: Math.round(u)
      }
    }
    function h(e, t, r) {
      var n = {};
      var i = r || p(e);
      var o = e.offsetWidth;
      var s = e.offsetHeight;
      var a = i.top;
      var l = i.left;
      var u = t.pageY || t.clientY;
      var c = t.pageX || t.clientX;
      if (t.changedTouches) {
        c = t.changedTouches[0].pageX;
        u = t.changedTouches[0].pageY
      }
      n.y = Math.max(0, Math.min(1, (a - u + s) / s));
      n.x = Math.max(0, Math.min(1, (c - l) / o));
      return n
    }
    function f(e, t, r) {
      var n = document.createElement("script");
      n.onload = n.onreadystatechange = function () {
        if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
          if (typeof t == "function") {
            t()
          }
          n.onload = n.onreadystatechange = null;
          if (n.parentNode) {
            n.parentNode.removeChild(n)
          }
        }
      };
      if (r) {
        for (var i in r) {
          if (!r.hasOwnProperty(i)) continue;
          var o = r[i];
          if (o === null) n.removeAttribute(o);
          else n.setAttribute(i, o)
        }
      }
      n.src = e;
      document.getElementsByTagName("head")[0].appendChild(n)
    }
    function d() {
      var e = document;
      var t = e.documentElement;
      var r = e.body;
      return {
        width: t && t.clientWidth || r && r.offsetWidth || window.innerWidth || 0,
        height: t && t.clientHeight || r && r.offsetHeight || window.innerHeight || 0
      }
    }
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    t.console = t.VideoType = t.CDNPath = t.FullscreenApi = undefined;
    t.guid = u;
    t.bind = c;
    t.isEmpty = p;
    t.covertTime = h;
    t.doFullscreen = w;
    t.extend = S;
    t.store = E;
    var n = r(2);
    var i = a(n);
    var o = r(4);
    var s = a(o);

    function a(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    var l = 1;

    function u() {
      return l++
    }
    function c(e, t, r) {
      if (!t.guid) t.guid = u();
      var n = function i() {
        t.apply(e, arguments)
      };
      n.guid = r ? r + "_" + t.guid : t.guid;
      return n
    }
    function p(e) {
      if (e instanceof Array) return e.length === 0;
      for (var t in e) {
        if (e.hasOwnProperty(t)) return false
      }
      return true
    }
    function h(e) {
      e = e | 0;
      var t = 3600,
        r = 60;
      var n = e / t | 0;
      var i = (e - n * t) / r | 0;
      var o = e - n * t - i * r;
      n = n > 0 ? n + ":" : "";
      i = i > 0 ? i + ":" : parseInt(n) > 0 ? "00:" : "";
      o = o > 0 ? o + "" : "00";
      n = n.length == 2 ? "0" + n : n;
      i = i.length == 2 ? "0" + i : i;
      o = o.length == 1 ? "0" + o : o;
      return n + i + o
    }
    var f = t.FullscreenApi = {
      requestFullscreen: null,
      exitFullscreen: null,
      fullscreenElement: null,
      fullscreenEnabled: null,
      fullscreenchange: null,
      fullscreenerror: null
    };
    var d = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled",
      "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen",
      "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange",
      "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen",
      "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange",
      "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen",
      "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], [
      "msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled",
      "MSFullscreenChange", "MSFullscreenError"]];
    var v = d[0];
    var y = void 0;
    for (var m = 0; m < d.length; m++) {
      if (d[m][1] in document) {
        y = d[m]
      }
    }
    if (y) {
      for (var g = 0; g < y.length; g++) {
        f[v[g]] = y[g]
      }
    }
    function b(e) {
      w.__isFullscreen = !! document[f.fullscreenElement];
      if (!w.__isFullscreen) {
        i.off(document, f.fullscreenchange, b)
      }
      s.pub({
        type: o.MSG.FullScreen,
        src: "util",
        ts: e.timestamp,
        detail: {
          isFullscreen: w.__isFullscreen
        }
      }, w.player)
    }
    function _(e) {
      if (e.keyCode === 27) w(w.player, false)
    }
    function w(e, t, r) {
      if (typeof t === "undefined") return w.__isFullscreen || false;
      w.player = e;
      if (f.requestFullscreen) {
        if (t) {
          i.on(document, f.fullscreenchange, b);
          r && r[f.requestFullscreen]()
        } else {
          document[f.exitFullscreen]()
        }
      } else {
        w.__isFullscreen = t;
        if (w.__isFullscreen) {
          w.__origOverflow = document.documentElement.style.overflow;
          document.documentElement.style.overflow = "hidden";
          i.on(document, "keydown", _)
        } else {
          document.documentElement.style.overflow = w.__origOverflow;
          i.off(document, "keydown", _)
        }
        i.toggleClass(document.body, "vcp-full-window", t);
        s.pub({
          type: o.MSG.FullScreen,
          src: "util",
          detail: {
            isFullscreen: w.__isFullscreen
          }
        }, w.player)
      }
    }
    function S(e) {
      for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
        r[n - 1] = arguments[n]
      }
      for (var i = 0; i < r.length; i++) {
        var o = r[i];
        for (var s in o) {
          if (o.hasOwnProperty(s)) e[s] = e[s] || o[s]
        }
      }
      return e
    }
    function E(e, t) {
      if (typeof t === "undefined") return JSON.parse(localStorage[e] || "null");
      localStorage[e] = JSON.stringify(t)
    }
    var M = t.CDNPath = "//imgcache.qq.com/open/qcloud/video/vcplayer/";
    var O = t.VideoType = {
      RTMP: "rtmp",
      M3U8: "m3u8"
    };
    var k = t.console = {
      log: function P() {
        if (window.console) {
          window.console.log.apply(window.console, arguments)
        }
      },
      warn: function T() {
        if (window.console) {
          window.console.warn.apply(window.console, arguments)
        }
      },
      error: function C() {
        if (window.console) {
          window.console.error.apply(window.console, arguments)
        }
      }
    }
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    t.MSG = undefined;
    t.pub = p;
    t.sub = f;
    t.unsub = d;
    var n = r(3);
    var i = o(n);

    function o(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    var s = t.MSG = {
      Error: "error",
      TimeUpdate: "timeupdate",
      Load: "load",
      MetaLoaded: "loadedmetadata",
      Loaded: "loadeddata",
      Progress: "progress",
      FullScreen: "fullscreen",
      Play: "play",
      Playing: "playing",
      Pause: "pause",
      Ended: "ended",
      Seeking: "seeking",
      Seeked: "seeked",
      Resize: "resize",
      VolumeChange: "volumechange"
    };
    var a = {};
    var l = {};

    function u(e) {
      var t = e.guid;
      if (!t) {
        console.error(e, " has no guid.");
        return {}
      }
      a[t] = a[t] || {};
      return a[t]
    }
    function c(e) {
      var t = e.guid;
      if (!t) {
        console.error(e, " has no guid.");
        return {}
      }
      l[t] = l[t] || {};
      return l[t]
    }
    function p(e, t) {
      h(e.type, e, t);
      h("*", e, t)
    }
    function h(e, t, r) {
      try {
        var n = u(r);
        var i = c(r);
        if (!n[e]) return;
        var o = n[e];
        for (var s in o) {
          if (!o.hasOwnProperty(s)) continue;
          var a = o[s];
          var l = i[s];
          if (!(typeof l === "function")) return false;
          for (var p = 0; p < a.length; p++) {
            var h = a[p];
            if (h === "*" || h === t.src) l(t)
          }
        }
      } catch (f) {
        window.console && console.error && console.error(f.stack || f)
      }
    }
    function f(e, t, r, n) {
      var i = u(n);
      var o = c(n);
      if (!r.guid) return console.error("callback function need guid");
      o[r.guid] = r;
      i[e] = i[e] || {};
      i[e][r.guid] = i[e][r.guid] || [];
      i[e][r.guid].push(t);
      return r
    }
    function d(e, t, r, n) {
      var o = u(n);
      var s = c(n);
      if (e != "*" && !o[e]) return;
      if (e != "*" && !o[e][r.guid]) return;
      for (var a in o) {
        if (e !== "*" && a != e) continue;
        if (!o.hasOwnProperty(a)) continue;
        if (r === "*") {
          for (var l in o[a]) {
            delete s[l]
          }
          delete o[a];
          continue
        }
        var p = o[a][r.guid];
        if (t === "*") p = [];
        for (var h = 0; h < p.length;) {
          if (p[h] === t) p.splice(h, 1);
          else h++
        }
        if (p.length == 0) {
          delete o[a][r.guid]
        }
        if (i.isEmpty(o[a])) delete o[a]
      }
    }
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    t.Player = t.dom = t.util = t.browser = t.MSG = undefined;
    r(6);
    var n = r(1);
    var i = k(n);
    var o = r(2);
    var s = k(o);
    var a = r(3);
    var l = k(a);
    var u = r(4);
    var c = k(u);
    var p = r(10);
    var h = O(p);
    var f = r(13);
    var d = O(f);
    var v = r(14);
    var y = O(v);
    var m = r(22);
    var g = O(m);
    var b = r(23);
    var _ = O(b);
    var w = r(24);
    var S = O(w);
    var E = r(25);
    var M = O(E);

    function O(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function k(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function P(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    if (!window.console) window.console = {
      log: function j() {},
      error: function D() {},
      debug: function G() {},
      info: function F() {}
    };
    var T = t.MSG = c.MSG;
    var C = t.browser = i;
    var I = t.util = l;
    var x = t.dom = s;
    var L = t.Player = function () {
      function e(t) {
        P(this, e);
        this.options = t;
        this.ready = false;
        var r = t.owner;
        if (!r) return console.error("Player need a container");
        this.guid = I.guid();
        this.listener = this.options.listener;
        c.sub("*", "*", I.bind(this, this.handleMsg), this);
        r = x.get(r);
        this.render(r)
      }
      e.prototype.render = function t(e) {
        var t = "vcp-player";
        if (C.TOUCH_ENABLED) t += " touchable";
        this.el = x.createEl("div", {
          "class": t
        });
        this.options.flash = this.options.flash || C.IS_IE;
        if (!this.options.flash && C.HASVIDEO) {
          var r = new h["default"](this);
          r.render(this.el);
          this.video = r
        } else {
          var n = new d["default"](this);
          n.render(this.el);
          this.video = n
        } if (!this.video) return I.console.error("create video failed");
        e.appendChild(this.el);
        this.poster = new _["default"](this);
        this.poster.render(this.el);
        this.bigplay = new g["default"](this);
        this.bigplay.render(this.el);
        var i = void 0;
        if (!this.options.controls || this.options.controls == "default" || this.options.flash && this.options
            .controls == "system") {
          i = true
        } else {
          i = false
        } if (i) {
          this.panel = new y["default"](this);
          this.panel.render(this.el)
        }
        this.errortips = new M["default"](this);
        this.errortips.render(this.el);
        this.loading = new S["default"](this);
        this.loading.render(this.el);
        this.options.width = this.options.width || e.offsetWidth;
        this.options.height = this.options.height || e.offsetHeight;
        this.size(this.options.width, this.options.height);
        this.loadingMonitor = (function (video, loading, errorTips) {
          if (!video.el) return;

          var lastPostion;
          var lastStuckTime;
          var HAVE_CURRENT_DATA = 2,
            HAVE_METADATA = 1,
            HAVE_NOTHING = 0,
            NETWORK_LOADING = 2,
            NETWORK_NO_SOURCE = 3,
            MEDIA_ERR_NETWORK = 2,
            MEDIA_ERR_SRC_NOT_SUPPORTED = 4;

          var loadingMonitor = setInterval(function () {
            var isPlaying = video.el.paused === false && video.el.ended === false;
            var currentTime = video.el.currentTime;
            var isStuck = lastPostion === currentTime;
            var isStuckTooLong = lastStuckTime && lastStuckTime + 10 * 1000 < (new Date).getTime(); // 卡住时间超过2分钟
            var hasMediaError = !!video.el.error;
            var hasNativeNetworkError = hasMediaError && video.el.error.code === MEDIA_ERR_NETWORK;
            var hasNoSourceError = video.el.networkState === NETWORK_NO_SOURCE && video.el.readyState === HAVE_NOTHING && hasMediaError && video.el.error.code === MEDIA_ERR_SRC_NOT_SUPPORTED;
            var isNeedLoading = isStuck && !isStuckTooLong && !hasMediaError;

            if (isPlaying) {
              if (lastPostion === undefined) {
                lastPostion = currentTime;
              }

              if (isStuck && lastStuckTime === undefined) {
                lastStuckTime = (new Date).getTime();
              }

              if (lastPostion !== currentTime) {
                lastPostion = undefined;
                lastStuckTime = undefined;
              }
            } else {
              if (
                (video.el.readyState === HAVE_METADATA || video.el.readyState === HAVE_CURRENT_DATA) &&
                video.el.networkState === NETWORK_LOADING) {
                if (lastStuckTime === undefined) lastStuckTime = (new Date).getTime();
              } else {
                lastStuckTime = undefined;
              }
            }

            if (isNeedLoading) {
              loading.show();
            } else {
              loading.hide();
            }

            if (isStuckTooLong) {
              video.notify({
                type: 'error',
                code: 2
              })
            }

            if (hasNoSourceError) {
              video.notify({
                type: 'error',
                code: 4
              })
            }

            if (!isStuck && !hasMediaError) {
              errorTips.hide();
            }
          }, 1000);

          return loadingMonitor;
        })(this.video, this.loading, this.errortips);

        this.setup()
      };
      e.prototype.size = function r(e, t, n) {
        n = n || "cover";
        var i = /^\d+\.?\d{0,2}%$/;
        var o = void 0,
          s = void 0;
        if (i.test(e) || i.test(t)) {
          o = e;
          s = t
        } else {
          var a = this.video.videoWidth(),
            l = this.video.videoHeight();
          o = e;
          s = t;
          if (a && l) {
            var u = a / l;
            if (n == "fit") {
              o = e;
              s = o / u;
              if (s > t) {
                o *= t / s;
                s = t
              }
            }
          }
          var c = x.getViewportSize();
          if (o > c.width) {
            o = c.width
          }
        }
        o += i.test(o) ? "" : "px";
        s += i.test(s) ? "" : "px";
        this.el.style.width = o;
        this.el.style.height = s;
        this.video.width(o);
        this.video.height(s);
        this.width = o;
        this.height = s
      };
      e.prototype.setup = function n() {
        this.__handleEvent = I.bind(this, this.handleEvent);
        if (C.IS_MOBILE) {
          if (this.options.autoplay || C.IOS_VERSION != 10) {
            this.loading.show();
            if (this.options.autoplay) {
              var e = this;
              document.addEventListener("WeixinJSBridgeReady", function () {
                e.play()
              })
            }
          }
        } else {
          this.loading.show()
        }
        x.loadScript("//pingjs.qq.com/h5/stats.js?v2.0.2", null, {
          name: "MTAH5",
          sid: "500376528",
          cid: "500383222"
        })
      };
      e.prototype.destroy = function i() {
        this.video && this.video.destroy();
        this.panel && this.panel.destroy();
        this.bigplay && this.bigplay.destroy();
        this.loading && this.loading.destroy();
        this.loadingMonitor && clearInterval(this.loadingMonitor);
        c.unsub("*", "*", this.handleMsg, this);
        this.video = this.panel = this.bigplay = this.loading = null
      };
      e.prototype.setListener = function o(e) {
        this.listener = e
      };
      e.prototype.handleEvent = function s(e) {
        switch (e.type) {
          case "mousemove":
            if (this.__lastmove && new Date - this.__lastmove < 100) break;
            var t = this;
            this.__movecnt = this.__movecnt || 0;
            this.__movecnt++;
            if (this.__movecnt < 5) {
              setTimeout(function () {
                t.__movecnt = 0
              }, 500);
              break
            }
            this.__movecnt = 0;
            this.__lastmove = +new Date;
            clearTimeout(this.__moveid);
            t.panel && t.panel.show();
            this.__moveid = setTimeout(function () {
              t.playing() && t.panel && t.panel.hide()
            }, 3e3);
            break
        }
      };
      e.prototype.handleMsg = function a(e) {
        switch (e.type) {
          case T.Play:
            if (!this.playing()) break;
            x.addClass(this.el, "vcp-playing");
            if (this.video.type() == I.VideoType.RTMP) {
              this.__wait = true;
              this.loading.show()
            }
            x.on(this.el, "mousemove", this.__handleEvent);
            break;
          case T.TimeUpdate:
            if (this.__wait) {
              this.__wait = false;
              this.loading.hide()
            }
            break;
          case T.Pause:
            x.off(this.el, "mousemove", this.__handleEvent);
            x.removeClass(this.el, "vcp-playing");
            break;
          case T.Ended:
            x.off(this.el, "mousemove", this.__handleEvent);
            this.panel && this.panel.show();
            x.removeClass(this.el, "vcp-playing");
            break;
          case T.MetaLoaded:
            if (this.options.autoplay && this.video.type() == I.VideoType.RTMP) {
              this.__wait = true;
              this.loading.show()
            } else {
              this.loading.hide()
            }
            this.size(this.options.width, this.options.height);
            break;
          case T.Seeking:
            this.loading.show();
            break;
          case T.Seeked:
            this.loading.hide();
            break;
          case T.FullScreen:
            var t = this;
            setTimeout(function () {
              x.toggleClass(t.el, "vcp-fullscreen", e.detail.isFullscreen)
            }, 0);
            break;
          case T.Error:
            this.loading.hide();
            this.errortips.show(e.detail);
            this.panel && this.panel.show();
            try {
              MtaH5.clickStat("error", {
                error: "true"
              })
            } catch (r) {}
            break
        }
        if (!e["private"] && this.listener) this.listener(e)
      };
      e.prototype.currentTime = function l(e) {
        return this.video.currentTime(e)
      };
      e.prototype.duration = function u() {
        return this.video.duration()
      };
      e.prototype.percent = function p(e) {
        if (!this.video.duration()) return 0;
        if (!e) return this.video.currentTime() / this.video.duration();
        this.video.currentTime(this.video.duration() * e)
      };
      e.prototype.buffered = function f() {
        if (!this.video.duration()) return 0;
        return this.video.buffered() / this.video.duration()
      };
      e.prototype.pause = function v() {
        this.video.pause()
      };
      e.prototype.play = function m() {
        this.errortips.clear();
        this.video.play()
      };
      e.prototype.togglePlay = function b() {
        this.errortips.clear();
        this.video.togglePlay()
      };
      e.prototype.mute = function w(e) {
        return this.video.mute(e)
      };
      e.prototype.volume = function E(e) {
        return this.video.volume(e)
      };
      e.prototype.fullscreen = function O(e) {
        return this.video.fullscreen(e)
      };
      e.prototype.load = function k(e, t) {
        this.errortips.clear();
        this.loading.show();
        this.video.load(e || this.options.src, t)
      };
      e.prototype.playing = function L() {
        return this.video.playing()
      };
      return e
    }()
  }, function (e, t, r) {
    var n = r(7);
    if (typeof n === "string") n = [[e.id, n, ""]];
    var i = r(9)(n, {});
    if (n.locals) e.exports = n.locals;
    if (false) {
      if (!n.locals) {
        e.hot.accept("!!../../node_modules/css-loader/index.js!./vcplayer.css", function () {
          var t = require("!!../../node_modules/css-loader/index.js!./vcplayer.css");
          if (typeof t === "string") t = [[e.id, t, ""]];
          i(t)
        })
      }
      e.hot.dispose(function () {
        i()
      })
    }
  }, function (e, t, r) {
    t = e.exports = r(8)();
    t.push([e.id,
      ".vcp-player {\r\n    position: relative;\r\n    z-index: 0;\r\n    font-family: Tahoma, '\\5FAE\\8F6F\\96C5\\9ED1', \\u5b8b\\u4f53,Verdana,Arial,sans-serif;\r\n    background-color: black;\r\n}\r\n.vcp-player video{\r\n    display: block;\r\n    overflow: hidden;\r\n}\r\n.vcp-fullscreen.vcp-player, .vcp-fullscreen video {\r\n    width: 100%!important;\r\n    height: 100%!important;\r\n}\r\n/* 伪全屏 */\r\nbody.vcp-full-window {\r\n    width: 100%!important;\r\n    height: 100%!important;\r\n    overflow-y: auto;\r\n}\r\n.vcp-full-window .vcp-player {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n/* chrome flash 成功加载到DOM之前会闪白屏，所以加个黑屏遮一遮 */\r\n.vcp-pre-flash {\r\n    z-index: 1000; background: black; width: 100%; height: 100%; position: absolute; top: 0; left: 0;\r\n}\r\n.vcp-controls-panel {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    font-size: 16px;\r\n    height: 3em;\r\n    z-index: 1000;\r\n}\r\n.vcp-controls-panel.show{\r\n    -webkit-animation: fadeIn ease 0.8s;\r\n    animation: fadeIn ease 0.8s;\r\n    animation-fill-mode: forwards;\r\n    -webkit-animation-fill-mode: forwards;\r\n}\r\n.vcp-controls-panel.hide{\r\n    -webkit-animation: fadeOut ease 0.8s;\r\n    animation: fadeOut ease 0.8s;\r\n    animation-fill-mode: forwards;\r\n    -webkit-animation-fill-mode: forwards;\r\n}\r\n.vcp-panel-bg {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: rgb(36, 36, 36);\r\n    opacity: 0.8;\r\n    filter: alpha(opacity=80);\r\n    z-index: 1000;\r\n}\r\n\r\n.vcp-playtoggle {\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 1001;\r\n    width: 3em;\r\n    height: 100%;\r\n    float: left;\r\n    background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/play_btn.png);\r\n    background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/play_btn.svg), none;\r\n}\r\n.vcp-playtoggle:hover, .vcp-playtoggle:focus {\r\n    background-color: slategray;\r\n    opacity: 0.9;\r\n    filter: alpha(opacity=90);\r\n}\r\n.touchable .vcp-playtoggle:hover {\r\n    background-color: transparent;\r\n    opacity: 1;\r\n}\r\n.vcp-playing .vcp-playtoggle {\r\n    background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/stop_btn.png);\r\n    background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/stop_btn.svg), none;\r\n}\r\n.vcp-bigplay {\r\n    display: none;\r\n    width: 100%;\r\n    height: 80%; /*会遮住原生控制栏*/\r\n    position: absolute;\r\n    background-color: white\\0;\r\n    filter: alpha(opacity=0); /*奇怪的IE8/9鼠标事件穿透*/\r\n    opacity: 0;\r\n    z-index: 1000;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.vcp-slider {\r\n    position: relative;\r\n    z-index: 1001;\r\n    float: left;\r\n    background: rgb(196, 196, 196);\r\n    height: 10px;\r\n    opacity: 0.8;\r\n    filter: alpha(opacity=80);\r\n    cursor: pointer;\r\n}\r\n.vcp-slider .vcp-slider-track {\r\n    width: 0;\r\n    height: 100%;\r\n    margin-top: 0;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n    background-color: dodgerblue; /*beautiful blue*/\r\n}\r\n.vcp-slider .vcp-slider-thumb {\r\n    cursor: pointer;\r\n    background-color: white;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 1em!important;\r\n    height: 10px;\r\n    margin-left: -5px;\r\n    width: 10px;\r\n}\r\n\r\n.vcp-slider-vertical {\r\n    position: relative;\r\n    width: 0.5em;\r\n    height: 8em;\r\n    top: -5.6em;\r\n    z-index: 1001;\r\n    background-color: rgb(28, 28, 28);\r\n    opacity: 0.9;\r\n    filter: alpha(opacity=90);\r\n    cursor: pointer;\r\n}\r\n.vcp-slider-vertical .vcp-slider-track {\r\n    background-color: rgb(18, 117, 207);\r\n    width: 0.5em;\r\n    height: 100%;\r\n    opacity: 0.8;\r\n    filter: alpha(opacity=80);\r\n}\r\n.vcp-slider-vertical .vcp-slider-thumb {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    background-color: aliceblue;\r\n    width: 0.8em;\r\n    height: 0.8em;\r\n    border-radius: 0.8em!important;\r\n    margin-top: -0.4em;\r\n    top: 0;\r\n    left: -0.15em;\r\n}\r\n/* 时间线/进度条 */\r\n.vcp-timeline {\r\n    top: -10px;\r\n    left: 0;\r\n    height: 10px;\r\n    position: absolute;\r\n    z-index: 1001;\r\n    width: 100%;\r\n}\r\n.vcp-timeline .vcp-slider-thumb {\r\n    top: -4px;\r\n}\r\n.vcp-timeline .vcp-slider {\r\n    margin-top: 8px;\r\n    height: 2px;\r\n    width: 100%;\r\n}\r\n.vcp-timeline:hover .vcp-slider {\r\n    margin-top: 0;\r\n    height: 10px;\r\n}\r\n.vcp-timeline:hover .vcp-slider-thumb {\r\n    display: block;\r\n    width: 16px;\r\n    height: 16px;\r\n    top: -3px;\r\n    margin-left: -8px;\r\n}\r\n/* 时间展示 */\r\n.vcp-timelabel {\r\n    display: inline-block;\r\n    line-height: 3em;\r\n    height: 3em;\r\n    width: 3em;\r\n    float: left;\r\n    color: white;\r\n    padding: 0 9px;\r\n    z-index: 1001;\r\n    position: relative;\r\n}\r\n/* 音量控制 */\r\n.vcp-volume {\r\n    height: 3em;\r\n    width: 3em;\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 1001;\r\n    float: right;\r\n    background-color: transparent;\r\n    opacity: 0.9;\r\n    filter: alpha(opacity=90);\r\n}\r\n.vcp-volume-icon {\r\n    background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/volume.png);\r\n    background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/volume.svg), none;\r\n    display: inline-block;\r\n    width: 3em;\r\n    height: 3em;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n.vcp-volume-muted .vcp-volume-icon {\r\n    background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/muted.png);\r\n    background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/muted.svg), none;\r\n}\r\n.vcp-volume .vcp-slider-vertical {\r\n    top: -8.4em;\r\n    left: 1em;\r\n    display: none;\r\n}\r\n.vcp-volume .vcp-slider-track {\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n.vcp-volume:hover .vcp-slider-vertical {\r\n    display: block;\r\n}\r\n.vcp-volume .vcp-volume-bg {\r\n    height: 8.8em;\r\n    width: 2em;\r\n    position: absolute;\r\n    left: 0.25em;\r\n    top: -8.8em;\r\n    background: rgb(36,36,36);\r\n    display: none;\r\n}\r\n.vcp-volume:hover .vcp-volume-bg, .vcp-volume:hover .vcp-slider-vertical {\r\n    display: block;\r\n}\r\n/* 全屏控件 */\r\n.vcp-fullscreen-toggle {\r\n    position: relative;\r\n    width: 3em;\r\n    height: 3em;\r\n    float: right;\r\n    cursor: pointer;\r\n    z-index: 1001;\r\n    background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/fullscreen.png);\r\n    background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/fullscreen.svg), none;\r\n}\r\n.vcp-fullscreen .vcp-fullscreen-toggle {\r\n    background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/fullscreen_exit.png);\r\n    background-image: url(//imgcache.qq.com/open/qcloud/video/vcplayer/img/fullscreen_exit.svg), none;\r\n}\r\n\r\n.vcp-loading {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin-top: -27px;\r\n    display: none;\r\n}\r\n\r\n.vcp-poster {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    overflow: hidden;\r\n    z-index: 1000;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: none;\r\n}\r\n.vcp-poster-pic {\r\n    position: relative;\r\n}\r\n.vcp-poster-pic.default{\r\n    left: 50%;\r\n    top: 50%;\r\n    -ms-transform: translate(-50%, -50%); /* IE 9 */\r\n    -webkit-transform: translate(-50%, -50%); /* Safari */\r\n    transform: translate(-50%, -50%);\r\n}\r\n.vcp-poster-pic.cover{\r\n    width: 100%;\r\n    left: 50%;\r\n    top: 50%;\r\n    -ms-transform: translate(-50%, -50%); /* IE 9 */\r\n    -webkit-transform: translate(-50%, -50%); /* Safari */\r\n    transform: translate(-50%, -50%);\r\n}\r\n.vcp-poster-pic.stretch{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.vcp-error-tips .bi-failure-face {font-size: 50px; margin-bottom: 30px}\r\n\r\n.vcp-error-tips .vcp-error-retry {cursor: pointer;}\r\n\r\n.vcp-error-tips {position: absolute; z-index: 1001; width: 100%; height: 100%; left: 0; top: 0; color: white; background-color: rgb(35, 35, 35); justify-content: center; align-items: center; flex-direction: column; display: none;\r\n}\r\n\r\n.vcp-clarityswitcher{\r\n    height: 3em;\r\n    width: 3em;\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 1001;\r\n    float: right;\r\n    background-color: transparent;\r\n    opacity: 0.9;\r\n}\r\n.vcp-vertical-switcher-container{\r\n    width: 3em;\r\n    position: absolute;\r\n    left: 0em;\r\n    bottom: 2.4em;\r\n    background: rgb(36,36,36);\r\n    display: none;\r\n}\r\n.vcp-vertical-switcher-current{\r\n    display: block;\r\n    color: #fff;\r\n    text-align: center;\r\n    line-height:3em;\r\n}\r\n.vcp-vertical-switcher-item{\r\n    display: block;\r\n    color: #fff;\r\n    text-align: center;\r\n    line-height:2em;\r\n}\r\n.vcp-vertical-switcher-item.current{\r\n    color: #888;\r\n}\r\n/* animations */\r\n@-webkit-keyframes fadeOut {\r\n    from {\r\n        opacity: 1;\r\n    }\r\n    to {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes fadeOut {\r\n    from {\r\n        opacity: 1;\r\n    }\r\n    to {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.fadeOut {\r\n    -webkit-animation: fadeOut ease 0.8s;\r\n    animation: fadeOut ease 0.8s;\r\n    animation-fill-mode: forwards;\r\n    -webkit-animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.fadeIn {\r\n    -webkit-animation: fadeIn ease 0.8s;\r\n    animation: fadeIn ease 0.8s;\r\n    animation-fill-mode: forwards;\r\n    -webkit-animation-fill-mode: forwards;\r\n}",
      ""])
  }, function (e, t) {
    e.exports = function () {
      var e = [];
      e.toString = function t() {
        var e = [];
        for (var t = 0; t < this.length; t++) {
          var r = this[t];
          if (r[2]) {
            e.push("@media " + r[2] + "{" + r[1] + "}")
          } else {
            e.push(r[1])
          }
        }
        return e.join("")
      };
      e.i = function (t, r) {
        if (typeof t === "string") t = [[null, t, ""]];
        var n = {};
        for (var i = 0; i < this.length; i++) {
          var o = this[i][0];
          if (typeof o === "number") n[o] = true
        }
        for (i = 0; i < t.length; i++) {
          var s = t[i];
          if (typeof s[0] !== "number" || !n[s[0]]) {
            if (r && !s[2]) {
              s[2] = r
            } else if (r) {
              s[2] = "(" + s[2] + ") and (" + r + ")"
            }
            e.push(s)
          }
        }
      };
      return e
    }
  }, function (e, t, r) {
    var n = {}, i = function (e) {
        var t;
        return function () {
          if (typeof t === "undefined") t = e.apply(this, arguments);
          return t
        }
      }, o = i(function () {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
      }),
      s = i(function () {
        return document.head || document.getElementsByTagName("head")[0]
      }),
      a = null,
      l = 0,
      u = [];
    e.exports = function (e, t) {
      if (false) {
        if (typeof document !== "object") throw new Error(
          "The style-loader cannot be used in a non-browser environment")
      }
      t = t || {};
      if (typeof t.singleton === "undefined") t.singleton = o();
      if (typeof t.insertAt === "undefined") t.insertAt = "bottom";
      var r = p(e);
      c(r, t);
      return function i(e) {
        var i = [];
        for (var o = 0; o < r.length; o++) {
          var s = r[o];
          var a = n[s.id];
          a.refs--;
          i.push(a)
        }
        if (e) {
          var l = p(e);
          c(l, t)
        }
        for (var o = 0; o < i.length; o++) {
          var a = i[o];
          if (a.refs === 0) {
            for (var u = 0; u < a.parts.length; u++) a.parts[u]();
            delete n[a.id]
          }
        }
      }
    };

    function c(e, t) {
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        var o = n[i.id];
        if (o) {
          o.refs++;
          for (var s = 0; s < o.parts.length; s++) {
            o.parts[s](i.parts[s])
          }
          for (; s < i.parts.length; s++) {
            o.parts.push(y(i.parts[s], t))
          }
        } else {
          var a = [];
          for (var s = 0; s < i.parts.length; s++) {
            a.push(y(i.parts[s], t))
          }
          n[i.id] = {
            id: i.id,
            refs: 1,
            parts: a
          }
        }
      }
    }
    function p(e) {
      var t = [];
      var r = {};
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        var o = i[0];
        var s = i[1];
        var a = i[2];
        var l = i[3];
        var u = {
          css: s,
          media: a,
          sourceMap: l
        };
        if (!r[o]) t.push(r[o] = {
          id: o,
          parts: [u]
        });
        else r[o].parts.push(u)
      }
      return t
    }
    function h(e, t) {
      var r = s();
      var n = u[u.length - 1];
      if (e.insertAt === "top") {
        if (!n) {
          r.insertBefore(t, r.firstChild)
        } else if (n.nextSibling) {
          r.insertBefore(t, n.nextSibling)
        } else {
          r.appendChild(t)
        }
        u.push(t)
      } else if (e.insertAt === "bottom") {
        r.appendChild(t)
      } else {
        throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")
      }
    }
    function f(e) {
      e.parentNode.removeChild(e);
      var t = u.indexOf(e);
      if (t >= 0) {
        u.splice(t, 1)
      }
    }
    function d(e) {
      var t = document.createElement("style");
      t.type = "text/css";
      h(e, t);
      return t
    }
    function v(e) {
      var t = document.createElement("link");
      t.rel = "stylesheet";
      h(e, t);
      return t
    }
    function y(e, t) {
      var r, n, i;
      if (t.singleton) {
        var o = l++;
        r = a || (a = d(t));
        n = g.bind(null, r, o, false);
        i = g.bind(null, r, o, true)
      } else if (e.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" &&
        typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa ===
        "function") {
        r = v(t);
        n = _.bind(null, r);
        i = function () {
          f(r);
          if (r.href) URL.revokeObjectURL(r.href)
        }
      } else {
        r = d(t);
        n = b.bind(null, r);
        i = function () {
          f(r)
        }
      }
      n(e);
      return function s(t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          n(e = t)
        } else {
          i()
        }
      }
    }
    var m = function () {
      var e = [];
      return function (t, r) {
        e[t] = r;
        return e.filter(Boolean).join("\n")
      }
    }();

    function g(e, t, r, n) {
      var i = r ? "" : n.css;
      if (e.styleSheet) {
        e.styleSheet.cssText = m(t, i)
      } else {
        var o = document.createTextNode(i);
        var s = e.childNodes;
        if (s[t]) e.removeChild(s[t]);
        if (s.length) {
          e.insertBefore(o, s[t])
        } else {
          e.appendChild(o)
        }
      }
    }
    function b(e, t) {
      var r = t.css;
      var n = t.media;
      if (n) {
        e.setAttribute("media", n)
      }
      if (e.styleSheet) {
        e.styleSheet.cssText = r
      } else {
        while (e.firstChild) {
          e.removeChild(e.firstChild)
        }
        e.appendChild(document.createTextNode(r))
      }
    }
    function _(e, t) {
      var r = t.css;
      var n = t.sourceMap;
      if (n) {
        r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON
            .stringify(n)))) + " */"
      }
      var i = new Blob([r], {
        type: "text/css"
      });
      var o = e.href;
      e.href = URL.createObjectURL(i);
      if (o) URL.revokeObjectURL(o)
    }
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (e) {
      return typeof e
    } : function (e) {
      return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ?
        "symbol" : typeof e
    };
    var i = r(11);
    var o = d(i);
    var s = r(2);
    var a = f(s);
    var l = r(3);
    var u = f(l);
    var c = r(4);
    var p = r(12);
    var h = f(p);

    function f(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function v(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function y(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function m(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var g = u.FullscreenApi;
    var b = function (e) {
      m(t, e);

      function t(r) {
        v(this, t);
        return y(this, e.call(this, r, "H5Video"))
      }
      t.prototype.render = function r(t) {
        var r = this.player.options;
        var i = r.controls == "system" ? "" : null;
        var o = r.autoplay ? true : null;
        var s;
        if (r.poster && n(r.poster) == "object") {
          s = r.poster.src
        } else if (typeof r.poster == "string") {
          s = r.poster
        } else {
          s = null
        }
        this.createEl("video", {
          controls: i,
          preload: "auto",
          autoplay: o,
          "webkit-playsinline": "",
          playsinline: "",
          "x-webkit-airplay": "allow",
          "x5-video-player-type": r.x5_type == "h5" ? "h5" : null,
          "x5-video-player-fullscreen": r.x5_fullscreen ? true : null
        });
        return e.prototype.render.call(this, t)
      };
      t.prototype.__hlsLoaded = function i(e) {
        if (!Hls.isSupported()) return this.notify({
          type: "error",
          code: 5
        });
        var t = new Hls;
        t.loadSource(e);
        t.attachMedia(this.el);
        t.on(Hls.Events.ERROR, u.bind(this, this.__hlsOnError));
        this.hls = t
      };
      t.prototype.__hlsOnManifestParsed = function o(e, t) {
        this.metaDataLoaded = true
      };
      t.prototype.__hlsOnError = function s(e, t) {
        var r = t.type;
        var n = t.details;
        var i = t.fatal;
        var o = this.hls;
        if (i) {
          switch (r) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              if (n.indexOf("TimeOut") > 0) {
                u.console.error("加载视频文件超时")
              } else {
                u.console.error("无法加载视频文件，请检查网络，以及视频文件是否允许跨域请求访问，m3u8文件是否存在 " + (t.response && t.response
                    .status ? "netstatus:" + t.response.status : ""))
              }
              this.notify({
                type: "error",
                code: 4
              });
              o.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              o.recoverMediaError();
              break;
            default:
              o.destroy();
              break
          }
        } else {}
      };
      t.prototype.setup = function l() {
        var e = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error",
          "loadedmetadata", "loadeddata", "loadstart", "pause", "play", "playing", "timeline",
          "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange",
          "waiting"];
        this.playState = h.PlayStates.IDLE;
        this.seekState = h.SeekStates.IDLE;
        this.metaDataLoaded = false;
        this.__timebase = +new Date;
        this.on(c.MSG.MetaLoaded, this.notify);
        this.on(c.MSG.Loaded, this.notify);
        this.on(c.MSG.Progress, this.notify);
        this.on(c.MSG.Play, this.notify);
        this.on(c.MSG.Playing, this.notify);
        this.on(c.MSG.Pause, this.notify);
        this.on(c.MSG.Error, this.notify);
        this.on(c.MSG.TimeUpdate, this.notify);
        this.on(c.MSG.Ended, this.notify);
        this.on(c.MSG.Seeking, this.notify);
        this.on(c.MSG.Seeked, this.notify);
        this.on(c.MSG.VolumeChange, this.notify);
        this.on("durationchange", this.notify);
        this.load(this.options.src, this.options.m3u8 ? u.VideoType.M3U8 : "")
      };
      t.prototype.notify = function p(e) {
        var t = {
          type: e.type,
          src: this,
          ts: e.timeStamp
        };
        switch (e.type) {
          case c.MSG.MetaLoaded:
            this.__timebase = +new Date - t.ts;
            this.metaDataLoaded = true;
            break;
          case c.MSG.Error:
            var r = {
              1: "MEDIA_ERR_ABORTED",
              2: "MEDIA_ERR_NETWORK",
              3: "MEDIA_ERR_DECODE",
              4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
            };
            t.detail = this.el && this.el.error || {
                code: e.code
              };
            t.detail.reason = r[t.detail.code];
            break;
          case c.MSG.Ended:
            this.pause();
            this.playState = h.PlayStates.STOP;
            break;
          case "durationchange":
            if (this.videoHeight() != 0) t.type = c.MSG.Resize;
            break;
          case c.MSG.Playing:
            this.playState = e.type.toUpperCase();
            break;
          case c.MSG.Pause:
            this.playState = h.PlayStates.PAUSED;
            break;
          case c.MSG.Seeking:
          case c.MSG.Seeked:
            this.seekState = e.type.toUpperCase();
            break
        }
        if (e.type != "timeupdate") {
          try {
            lt(e.type);
            for (var n in e) {
              lt(n + "|" + e[n])
            }
            lt("------------------------------------")
          } catch (e) {}
        }
        this.pub(t)
      };
      t.prototype.videoWidth = function f() {
        return this.el.videoWidth
      };
      t.prototype.videoHeight = function d() {
        return this.el.videoHeight
      };
      t.prototype.width = function g(e) {
        if (!e) return this.el.width;
        else this.el.style.width = e
      };
      t.prototype.height = function b(e) {
        if (!e) return this.el.height;
        else this.el.style.height = e
      };
      t.prototype.play = function _() {
        this.el.play()
      };
      t.prototype.togglePlay = function w() {
        if (this.paused()) {
          this.play()
        } else {
          this.pause()
        }
      };
      t.prototype.pause = function S() {
        this.el.pause()
      };
      t.prototype.stop = function E() {
        this.el.stop()
      };
      t.prototype.paused = function M() {
        return this.el.paused
      };
      t.prototype.buffered = function O() {
        if (this.el.buffered.length >= 1) return this.el.buffered.end(this.el.buffered.length - 1);
        else return 0
      };
      t.prototype.currentTime = function k(e) {
        if (typeof e === "undefined") return this.el.currentTime;
        return this.el.currentTime = e
      };
      t.prototype.duration = function P() {
        return this.el.duration || 0
      };
      t.prototype.mute = function T(e) {
        if (typeof e === "undefined") return this.el.muted;
        else return this.el.muted = e
      };
      t.prototype.volume = function C(e) {
        if (typeof e === "undefined") return this.el.volume;
        if (e < 0) e = 0;
        if (e > 1) e = 1;
        return this.el.volume = e
      };
      t.prototype.fullscreen = function I(e) {
        return u.doFullscreen(this.player, e, this.owner)
      };
      t.prototype.load = function x(e, t) {
        this.pub({
          type: c.MSG.Load,
          src: this,
          ts: +new Date - this.__timebase,
          detail: {
            src: e,
            type: t
          }
        });
        var r = e.indexOf(".m3u8") > -1 || t == u.VideoType.M3U8;
        var n = r && this.el.canPlayType("application/x-mpegurl") == "maybe";
        if (r && !n) {
          this.__type = u.VideoType.M3U8;
          var i = this;
          if (typeof window.Hls == "undefined") a.loadScript(u.CDNPath + "libs/hls.js", function () {
            i.__hlsLoaded.call(i, e)
          });
          else this.__hlsLoaded(e)
        } else {
          this.__type = t;
          this.el.src = e
        }
      };
      t.prototype.playing = function L() {
        return !this.el.paused
      };
      t.prototype.type = function j() {
        return this.__type
      };
      return t
    }(o["default"]);
    t["default"] = b
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = r(2);
    var i = p(n);
    var o = r(3);
    var s = p(o);
    var a = r(4);
    var l = p(a);
    var u = r(1);
    var c = p(u);

    function p(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function h(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    var f = function () {
      function e(t, r) {
        h(this, e);
        this.name = r;
        this.player = t;
        this.options = t.options;
        this.fnCache = {};
        this.guid = s.guid()
      }
      e.prototype.createEl = function t(e, r, n) {
        return this.el = i.createEl(e, r, n)
      };
      e.prototype.render = function r(e) {
        if (e && this.el) {
          this.owner = e;
          e.appendChild(this.el);
          this.setup()
        }
        return this.el
      };
      e.prototype.on = function n(e, t, r) {
        if (typeof e === "string") {
          r = t;
          t = e;
          e = this.el
        }
        if (c.IS_MOBILE && t == "click") t = "touchend";
        this.cbs = this.cbs || {};
        var n = v(this.guid, r);
        var o = !n;
        var a = n && !this.fnCache[n];
        if (o || a) {
          r = s.bind(this, r, this.guid);
          this.fnCache[r.guid] = r;
          n = r.guid
        } else {
          r = this.fnCache[n]
        }
        i.on(e, t, r);
        this.cbs[d(n, t)] = {
          guid: n,
          el: e,
          type: t
        };
        return r
      };
      e.prototype.off = function o(e, t, r) {
        if (typeof e === "string") {
          r = t;
          t = e;
          e = this.el
        }
        if (c.IS_MOBILE && t == "click") t = "touchend";
        var n = v(this.guid, r);
        if (this.fnCache[n]) r = this.fnCache[n];
        i.off(e, t, r);
        delete this.cbs[d(n, t)]
      };
      e.prototype.pub = function a(e) {
        var t = this;
        setTimeout(function () {
          l.pub(e, t.player)
        }, 0)
      };
      e.prototype.sub = function u(e, t, r) {
        l.sub(e, t, r, this.player)
      };
      e.prototype.unsub = function p(e, t, r) {
        l.unsub(e, t, r, this.player)
      };
      e.prototype.handleMsg = function f() {};
      e.prototype.setup = function y() {};
      e.prototype.destroy = function m() {
        if (this.handleMsg) this.unsub("*", "*", this.handleMsg);
        if (!this.cbs) return;
        for (var e in this.cbs) {
          if (!this.cbs.hasOwnProperty(e)) continue;
          var t = this.cbs[e];
          i.off(t.el, t.type, this.fnCache[t.guid]);
          delete this.cbs[e]
        }
        this.fnCache = null;
        this.cbs = null;
        try {
          this.el.parentNode.removeChild(this.el)
        } catch (r) {}
      };
      return e
    }();
    t["default"] = f;

    function d(e, t) {
      return t + "_" + e
    }
    function v(e, t) {
      if (t.guid && String(t.guid).indexOf("_") == -1) return e + "_" + t.guid;
      return t.guid
    }
  }, function (e, t) {
    "use strict";
    t.__esModule = true;
    var r = t.PlayStates = {
      IDLE: "IDLE",
      PLAYING: "PLAYING",
      PAUSED: "PAUSED",
      STOP: "STOP"
    };
    var n = t.SeekStates = {
      IDLE: "IDLE",
      SEEKING: "SEEKING",
      SEEKED: "SEEKED"
    };
    var i = t.ControlsStates = {
      DEFAULT: "default",
      NONE: "none",
      SYSTEM: ""
    }
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = r(11);
    var i = v(n);
    var o = r(4);
    var s = r(2);
    var a = d(s);
    var l = r(3);
    var u = d(l);
    var c = r(12);
    var p = d(c);
    var h = r(1);
    var f = d(h);

    function d(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function v(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function y(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function m(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function g(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var b = {
      Playing: "PLAYING",
      Paused: "PAUSED",
      Stop: "STOP",
      Seeking: "SEEKING",
      Seeked: "SEEKED"
    };
    var _ = function (e) {
      g(t, e);

      function t(r) {
        y(this, t);
        var n = m(this, e.call(this, r, "FlashVideo"));
        var i = "vcpFlashCB_" + n.guid;
        n.__flashCB = i;
        if (!window[i]) {
          window[i] = function (e, t) {
            t = t && t[0];
            var r = window[i].fnObj && window[i].fnObj[t.objectID];
            r && r(e, t)
          };
          window[i].fnObj = {}
        }
        return n
      }
      t.prototype.render = function r(e) {
        this.__timebase = +new Date;
        var t = "//imgcache.qq.com/open/qcloud/video/player/release/QCPlayer.swf";
        var r = this.player.options;
        var n = "opaque";
        var i = "obj_vcplayer_" + this.player.guid;
        var o = this.__flashCB;
        this.__id = i;
        e.innerHTML = '\n       <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="" id="' +
          i + '" width="100%" height="100%">\n            <param name="movie"  value="' + t +
          '" />\n            <param name="quality" value="autohigh" />\n            <param name="swliveconnect" value="true" />\n            <param name="allowScriptAccess" value="always" />\n            <param name="bgcolor" value="#000" />\n            <param name="allowFullScreen" value="true" />\n            <param name="wmode" value="' +
          n + '" />\n            <param name="FlashVars" value="cbName=' + o +
          '" />\n\n            <embed src="' + t + '" width="100%" height="100%" name="' + i +
          '"\n                   quality="autohigh"\n                   bgcolor="#000"\n                   align="middle" allowFullScreen="true"\n                   allowScriptAccess="always"\n                   type="application/x-shockwave-flash"\n                   swliveconnect="true"\n                   wmode="' +
          n + '"\n                   FlashVars="cbName=' + o +
          '"\n                   pluginspage="http://www.macromedia.com/go/getflashplayer" >\n            </embed>\n        </object>\n        ';
        this.owner = e;
        this.cover = a.createEl("div", {
          "class": "vcp-pre-flash"
        });
        this.owner.appendChild(this.cover);
        window[this.__flashCB].fnObj[this.__id] = u.bind(this, this.notify)
      };
      t.prototype.setup = function n() {
        this.on("error", this.notify);
        this.playState = p.PlayStates.IDLE;
        this.seekState = p.SeekStates.IDLE;
        this.metaDataLoaded = false
      };
      t.prototype.doPolling = function i() {
        if (this.options.live) return;
        clearInterval(this.__timer);
        this.__timer = setInterval(this.interval.bind(this), 1e3)
      };
      t.prototype.endPolling = function s() {
        clearInterval(this.__timer)
      };
      t.prototype.interval = function l() {
        var e;
        try {
          e = this.el.getState()
        } catch (t) {
          this.endPolling();
          return
        }
        if (this.__m3u8) {
          var r = this.currentTime() + e.bufferLength;
          if (this.__buffered !== r) {
            this.__buffered = r;
            this.pub({
              type: o.MSG.Progress,
              src: this,
              ts: new Date - this.__timebase
            })
          }
          if (this.__buffered >= this.duration()) this.endPolling()
        } else if (!this.__rtmp) {
          if (this.__bytesloaded != e.bytesLoaded) {
            this.__bytesloaded = e.bytesLoaded;
            this.pub({
              type: o.MSG.Progress,
              src: this,
              ts: new Date - this.__timebase
            })
          }
          if (this.__bytesloaded >= this.__bytesTotal) this.endPolling()
        }
      };
      t.prototype.destroy = function c() {
        delete window[this.__flashCB].fnObj[this.__id];
        this.endPolling();
        e.prototype.destroy.call(this)
      };
      t.prototype.notify = function h(e, t) {
        var r = {
          type: e,
          ts: +new Date - this.__timebase
        };
        try {
          if (this.options.debug) {
            this.pub({
              type: r.type,
              src: this,
              ts: r.ts,
              detail: u.extend({
                debug: true
              }, t)
            })
          }
          switch (r.type) {
            case "ready":
              this.el = w(this.__id);
              this.setup();
              if (f.IS_FIREFOX) {
                var n = this;
                setTimeout(function () {
                  n.el.setAutoPlay(n.options.autoplay ? true : false);
                  n.__timebase = new Date - t.time;
                  n.load(n.options.src)
                }, 0)
              } else {
                this.el.setAutoPlay(this.options.autoplay ? true : false);
                this.__timebase = new Date - t.time;
                this.load(this.options.src)
              }
              return;
              break;
            case "metaData":
              r.type = o.MSG.MetaLoaded;
              this.__videoWidth = t.videoWidth;
              this.__videoHeight = t.videoHeight;
              this.__duration = t.duration;
              this.__bytesTotal = t.bytesTotal;
              this.__prevPlayState = null;
              this.__m3u8 = t.type === u.VideoType.M3U8;
              this.__rtmp = t.type === u.VideoType.RTMP;
              this.__type = t.type;
              this.__metaloaded = true;
              this.metaDataLoaded = true;
              this.doPolling();
              var n = this;
              if (!n.cover) break;
              setTimeout(function () {
                n.owner.removeChild(n.cover);
                n.cover = null
              }, 500);
              break;
            case "playState":
              this.playState = t.playState;
              if (t.playState == p.PlayStates.PLAYING) {
                this.__playing = true;
                this.__stopped = false;
                r.type = o.MSG.Play
              } else if (t.playState == p.PlayStates.PAUSED) {
                this.__playing = false;
                this.__stopped = false;
                r.type = o.MSG.Pause
              } else if (t.playState == p.PlayStates.STOP) {
                this.__playing = false;
                this.__stopped = true;
                r.type = o.MSG.Ended;
                this.__prevPlayState = null;
                if (this.options.live) {
                  this.metaDataLoaded = false
                }
              } else if (t.playState == p.PlayStates.IDLE) {
                this.__playing = false;
                this.__stopped = true;
                r.type = o.MSG.Ended
              }
              break;
            case "seekState":
              this.seekState = t.seekState;
              if (!this.__metaloaded) return;
              if (t.seekState == p.SeekStates.SEEKING) {
                r.type = o.MSG.Seeking
              } else if (t.seekState == p.SeekStates.SEEKED) {
                if (!this.__m3u8 && !this.options.live && t.playState == p.PlayStates.STOP) {
                  this.play();
                  this.__prevPlayState = t.playState
                }
                r.type = o.MSG.Seeked
              } else {
                return
              }
              break;
            case "netStatus":
              if (!this.options.live) {
                if (t.code == "NetStream.Buffer.Full") {
                  if (this.__prevPlayState == p.PlayStates.PAUSED || this.__prevPlayState == p.PlayStates
                      .STOP) {}
                  this.__prevPlayState = null;
                  r.type = o.MSG.Seeked
                } else if (t.code == "NetStream.Seek.Complete") {}
              }
              if (t.code == "NetConnection.Connect.Closed") {
                if (this.options.src.indexOf("rtmp://") > -1) {
                  if (this.playState == p.PlayStates.STOP) {} else {
                    r.type = "error";
                    t = {
                      code: 1002,
                      reason: t.code
                    }
                  }
                }
              }
              if (t.code == "NetStream.Play.Stop") {}
              break;
            case "mediaTime":
              this.__videoWidth = t.videoWidth;
              this.__videoHeight = t.videoHeight;
              r.type = o.MSG.TimeUpdate;
              break;
            case "error":
              if (t.code == "NetStream.Seek.InvalidTime") {
                this.currentTime(t.details);
                return false
              }
              if (t.code == "NetStream.Play.StreamNotFound") {}
              var i = isNaN(parseInt(t.code)) ? 1002 : t.code;
              var s = isNaN(parseInt(t.code)) ? t.code : t.msg;
              var a = s.match(/#(\d+)/);
              if (a && a[1]) i = a[1];
              t = {
                code: i,
                reason: s || ""
              };
              this.metaDataLoaded = false;
              break
          }
          var l = e == "printLog" || e == "canPlay";
          !l && this.pub({
            type: r.type,
            src: this,
            ts: r.ts,
            detail: t
          })
        } catch (c) {
          u.console.error(e + " " + r.type, c)
        }
        if (e != "mediaTime") {}
      };
      t.prototype.handleMsg = function d(e) {};
      t.prototype.videoWidth = function v() {
        return this.__videoWidth
      };
      t.prototype.videoHeight = function b() {
        return this.__videoHeight
      };
      t.prototype.width = function _(e) {
        if (typeof e === "undefined") return this.el && this.el.width;
        e = "100%";
        return this.el && (this.el.width = e)
      };
      t.prototype.height = function S(e) {
        if (typeof e === "undefined") return this.el && this.el.height;
        e = "100%";
        return this.el && (this.el.height = e)
      };
      t.prototype.play = function E() {
        this.el.playerResume()
      };
      t.prototype.togglePlay = function M() {
        if (!this.metaDataLoaded) {
          this.player.load()
        } else {
          if (this.playState == p.PlayStates.PAUSED) {
            this.el.playerResume()
          } else if (this.playState == p.PlayStates.PLAYING) {
            this.el.playerPause()
          } else if (this.playState == p.PlayStates.STOP) {
            this.currentTime(0);
            this.el.playerResume()
          } else {
            this.el.playerPlay()
          }
        }
      };
      t.prototype.pause = function O() {
        this.el.playerPause()
      };
      t.prototype.stop = function k() {
        this.el.playerStop()
      };
      t.prototype.paused = function P() {
        return !this.__playing
      };
      t.prototype.buffered = function T() {
        var e;
        if (this.__m3u8) {
          return this.__buffered || 0
        } else {
          e = (this.__bytesloaded || 0) / (this.__bytesTotal || 1);
          return this.duration() * e
        }
      };
      t.prototype.currentTime = function C(e) {
        if (typeof e === "undefined") return this.el.getPosition();
        this.el.playerSeek(e)
      };
      t.prototype.duration = function I() {
        return this.__duration
      };
      t.prototype.mute = function x(e) {
        if (typeof e === "undefined") return this.volume() == 0;
        this.volume(e ? 0 : this.__lastVol)
      };
      t.prototype.volume = function L(e) {
        if (typeof e === "undefined") return this.el && this.el.getState().volume;
        this.el && this.el.playerVolume(e);
        e != 0 && (this.__lastVol = e);
        this.pub({
          type: o.MSG.VolumeChange,
          src: this,
          ts: new Date - this.__timebase
        })
      };
      t.prototype.fullscreen = function j(e) {
        return u.doFullscreen(this.player, e, this.owner)
      };
      t.prototype.load = function D(e, t) {
        this.pub({
          type: o.MSG.Load,
          src: this,
          ts: new Date - this.__timebase,
          detail: {
            src: e,
            type: t
          }
        });
        this.el && this.el.playerLoad(e)
      };
      t.prototype.playing = function G() {
        return this.el && this.el.getState && this.el.getState().playState === p.PlayStates.PLAYING
      };
      t.prototype.type = function F() {
        return this.__type
      };
      return t
    }(i["default"]);
    t["default"] = _;

    function w(e) {
      if (window.document[e]) {
        return window.document[e]
      }
      if (navigator.appName.indexOf("Microsoft Internet") == -1) {
        if (document.embeds && document.embeds[e]) return document.embeds[e]
      } else {
        return document.getElementById(e)
      }
    }
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = r(11);
    var i = k(n);
    var o = r(15);
    var s = k(o);
    var a = r(16);
    var l = k(a);
    var u = r(17);
    var c = r(18);
    var p = k(c);
    var h = r(19);
    var f = k(h);
    var d = r(20);
    var v = k(d);
    var y = r(21);
    var m = k(y);
    var g = r(4);
    var b = r(2);
    var _ = O(b);
    var w = r(3);
    var S = O(w);
    var E = r(1);
    var M = O(E);

    function O(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function k(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function P(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function T(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function C(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var I = function (e) {
      C(t, e);

      function t(r) {
        P(this, t);
        return T(this, e.call(this, r, "Panel"))
      }
      t.prototype.render = function r(t) {
        this.createEl("div", {
          "class": "vcp-controls-panel"
        });
        this.el.appendChild(_.createEl("div", {
          "class": "vcp-panel-bg"
        }));
        this.playToggle = new s["default"](this.player);
        this.playToggle.render(this.el);
        this.timelabel = new f["default"](this.player);
        this.timelabel.render(this.el);
        this.timeline = new p["default"](this.player);
        this.timeline.render(this.el);
        this.fullscreen = new l["default"](this.player);
        this.fullscreen.render(this.el);
        if (!M.IS_MOBILE) {
          this.volume = new v["default"](this.player);
          this.volume.render(this.el)
        }
        if (this.options.videoSource && this.options.videoSource.definitions.length > 1 && !M.IS_MOBILE) {
          this.claritySwitcher = new m["default"](this.player);
          this.claritySwitcher.render(this.el)
        }
        return e.prototype.render.call(this, t)
      };
      t.prototype.setup = function n() {
        var e = S.bind(this, this.handleMsg);
        this.sub(u.MSG.Changing, this.volume, e);
        this.sub(u.MSG.Changed, this.timeline.progress, e);
        this.sub(g.MSG.TimeUpdate, this.player.video, e);
        this.sub(g.MSG.Progress, this.player.video, e);
        this.sub(g.MSG.MetaLoaded, this.player.video, e);
        this.sub(g.MSG.Pause, this.player.video, e);
        this.sub(g.MSG.Play, this.player.video, e);
        this.sub(g.MSG.Ended, this.player.video, e)
      };
      t.prototype.handleMsg = function i(e) {
        switch (e.type) {
          case g.MSG.MetaLoaded:
            this.timeline.percent(this.player.percent());
            this.timeline.buffered(this.player.buffered());
            this.player.volume(typeof this.options.volume === "undefined" ? .5 : this.options.volume);
            !this.options.autoplay && this.show();
            break;
          case g.MSG.TimeUpdate:
            if (!this.timeline.scrubbing) this.timeline.percent(this.player.percent());
            break;
          case g.MSG.Pause:
            this.show();
            break;
          case g.MSG.Play:
            this.hide();
            break;
          case g.MSG.Progress:
            this.timeline.buffered(this.player.buffered());
            break;
          case u.MSG.Changed:
            if (e.src === this.timeline.progress) {
              this.player.percent(this.timeline.percent())
            }
            break;
          case g.MSG.Ended:
            this.show();
            break
        }
      };
      t.prototype.toggle = function o() {
        if (_.hasClass(this.el, "show")) this.hide();
        else this.show()
      };
      t.prototype.show = function a() {
        if (_.hasClass(this.el, "hide")) {
          _.removeClass(this.el, "hide");
          _.addClass(this.el, "show")
        }
      };
      t.prototype.hide = function c() {
        _.removeClass(this.el, "show");
        _.addClass(this.el, "hide")
      };
      return t
    }(i["default"]);
    t["default"] = I
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = r(11);
    var i = d(n);
    var o = r(2);
    var s = f(o);
    var a = r(4);
    var l = f(a);
    var u = r(3);
    var c = f(u);
    var p = r(12);
    var h = f(p);

    function f(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function v(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function y(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function m(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var g = function (e) {
      m(t, e);

      function t(r) {
        v(this, t);
        return y(this, e.call(this, r, "PlayToggle"))
      }
      t.prototype.render = function r(t) {
        this.createEl("div", {
          "class": "vcp-playtoggle"
        });
        return e.prototype.render.call(this, t)
      };
      t.prototype.setup = function n() {
        this.on("click", this.onClick)
      };
      t.prototype.onClick = function i() {
        this.player.togglePlay()
      };
      t.prototype.handleMsg = function o(e) {
        console.log("@" + this.name, e)
      };
      return t
    }(i["default"]);
    t["default"] = g
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = r(11);
    var i = h(n);
    var o = r(2);
    var s = p(o);
    var a = r(4);
    var l = p(a);
    var u = r(3);
    var c = p(u);

    function p(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function h(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function f(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function d(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function v(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var y = function (e) {
      v(t, e);

      function t(r) {
        f(this, t);
        return d(this, e.call(this, r, "FullscreenToggle"))
      }
      t.prototype.render = function r(t) {
        this.createEl("div", {
          "class": "vcp-fullscreen-toggle"
        });
        window.fsApi = c.FullscreenApi;
        return e.prototype.render.call(this, t)
      };
      t.prototype.setup = function n() {
        this.on("click", this.onClick)
      };
      t.prototype.onClick = function i() {
        this.player.fullscreen(!this.player.fullscreen())
      };
      t.prototype.handleMsg = function o(e) {
        console.log(t.name, e)
      };
      return t
    }(i["default"]);
    t["default"] = y
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    t.MSG = undefined;
    var n = r(11);
    var i = h(n);
    var o = r(2);
    var s = p(o);
    var a = r(4);
    var l = p(a);
    var u = r(3);
    var c = p(u);

    function p(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function h(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function f(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function d(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function v(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var y = t.MSG = {
      Changing: "sliderchanging",
      Changed: "sliderchanged"
    };
    var m = function (e) {
      v(t, e);

      function t(r, n) {
        f(this, t);
        var i = d(this, e.call(this, r, "Slider"));
        i.vertical = n || false;
        return i
      }
      t.prototype.render = function r(t, n) {
        var i = this.vertical ? "vcp-slider-vertical" : "vcp-slider";
        this.createEl("div", {
          "class": i
        });
        this.track = s.createEl("div", {
          "class": "vcp-slider-track"
        });
        this.thumb = s.createEl("div", {
          "class": "vcp-slider-thumb"
        });
        this.el.appendChild(this.track);
        this.el.appendChild(this.thumb);
        this.enabled = typeof n == "undefined" ? true : n;
        return e.prototype.render.call(this, t)
      };
      t.prototype.setup = function n() {
        if (!this.enabled) return;
        this.ownerDoc = document.body.ownerDocument;
        this.on("mousedown", this.mousedown);
        this.on("touchstart", this.mousedown)
      };
      t.prototype.handleMsg = function i(e) {};

      t.prototype.mousedown = function o(e) {
        e.preventDefault && e.preventDefault();
        this.pos = s.findElPosition(this.el);
        this.on(this.ownerDoc, "mouseup", this.mouseup);
        this.on(this.ownerDoc, "mousemove", this.mousemove);
        this.on(this.ownerDoc, "touchend", this.mouseup);
        this.on(this.ownerDoc, "touchmove", this.mousemove);
        this.isMouseDown = true;
        this.mousemove(e);
        return false
      };
      t.prototype.mouseup = function a(e) {
        var t = e.target || e.srcElement;
        this.off(this.ownerDoc, "mouseup", this.mouseup);
        this.off(this.ownerDoc, "mousemove", this.mousemove);
        this.off(this.ownerDoc, "touchend", this.mouseup);
        this.off(this.ownerDoc, "touchmove", this.mousemove);
        this.isMouseDown = false;
        this.pub({
          type: y.Changed,
          src: this,
          "private": true
        })
      };
      t.prototype.mousemove = function l(e) {
        if (!this.isMouseDown) return;

        var t = s.getPointerPosition(this.el, e, this.pos);
        if (this.vertical) {
          this.__percent = 1 - t.y;
          this.thumb.style.top = this.__percent * 100 + "%"
        } else {
          this.__percent = t.x;
          this.thumb.style.left = this.__percent * 100 + "%"
        }
        this.__percent = Number(this.__percent.toFixed(3));
        this.pub({
          type: y.Changing,
          src: this,
          "private": true
        })
      };
      t.prototype.percent = function u(e) {
        if (!e) return this.__percent;
        this.__percent = e;
        if (this.vertical) this.thumb.style.top = this.__percent * 100 + "%";
        else this.thumb.style.left = this.__percent * 100 + "%"
      };
      return t
    }(i["default"]);
    t["default"] = m
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = r(17);
    var i = h(n);
    var o = r(11);
    var s = h(o);
    var a = r(2);
    var l = p(a);
    var u = r(3);
    var c = p(u);

    function p(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function h(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function f(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function d(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function v(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var y = function (e) {
      v(t, e);

      function t(r) {
        f(this, t);
        return d(this, e.call(this, r, "Timeline"))
      }
      t.prototype.render = function r(t) {
        if (this.options.live) return;
        this.enabled = !this.options.live;
        this.createEl("div", {
          "class": "vcp-timeline"
        });
        this.progress = new i["default"](this.player, false);
        this.progress.render(this.el, this.enabled);
        this.track = this.progress.track;
        return e.prototype.render.call(this, t)
      };
      t.prototype.setup = function o() {
        if (!this.enabled) return;
        this.sub(n.MSG.Changing, this.progress, c.bind(this, this.handleMsg));
        this.sub(n.MSG.Changed, this.progress, c.bind(this, this.handleMsg))
      };
      t.prototype.handleMsg = function s(e) {
        if (e.type === n.MSG.Changing) {
          this.scrubbing = true;
          this.syncLabel(this.percent())
        } else if (e.type === n.MSG.Changed) {
          this.scrubbing = false
        }
      };
      t.prototype.syncLabel = function a(e) {
        var t = this.player.duration();
        e = Math.min(e, 1);
        var r = "";
        if (t) r = c.covertTime(e * t) + "/" + c.covertTime(t);
        this.pub({
          type: "timelabel",
          src: "timeline",
          label: r,
          "private": true
        })
      };
      t.prototype.buffered = function l(e) {
        if (!this.enabled) return;
        e = Math.min(e, 1);
        this.__buffered = e;
        this.track.style.width = e * 100 + "%"
      };
      t.prototype.percent = function u(e) {
        if (!this.enabled) return;
        if (typeof e === "undefined") return this.progress.percent() || 0;
        e = Math.min(e, 1);
        this.syncLabel(e);
        if (this.__buffered < e) this.buffered(this.player.buffered());
        return this.progress.percent(e)
      };
      return t
    }(s["default"]);
    t["default"] = y
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = r(17);
    var i = h(n);
    var o = r(11);
    var s = h(o);
    var a = r(2);
    var l = p(a);
    var u = r(3);
    var c = p(u);

    function p(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function h(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function f(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function d(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function v(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var y = function (e) {
      v(t, e);

      function t(r) {
        f(this, t);
        return d(this, e.call(this, r, "Timelabel"))
      }
      t.prototype.render = function r(t) {
        this.createEl("span", {
          "class": "vcp-timelabel"
        });
        return e.prototype.render.call(this, t)
      };
      t.prototype.setup = function n() {
        this.sub("timelabel", "timeline", c.bind(this, this.handleMsg))
      };
      t.prototype.handleMsg = function i(e) {
        this.el.innerHTML = e.label
      };
      return t
    }(s["default"]);
    t["default"] = y
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = r(17);
    var i = f(n);
    var o = r(11);
    var s = f(o);
    var a = r(2);
    var l = h(a);
    var u = r(3);
    var c = h(u);
    var p = r(4);

    function h(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function d(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function v(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function y(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var m = function (e) {
      y(t, e);

      function t(r) {
        d(this, t);
        return v(this, e.call(this, r, "Volume"))
      }
      t.prototype.render = function r(t) {
        this.createEl("div", {
          "class": "vcp-volume"
        });
        this.bg = l.createEl("div", {
          "class": "vcp-volume-bg"
        });
        this.el.appendChild(this.bg);
        this.volume = new i["default"](this.player, true);
        this.volume.render(this.el);
        this.track = this.volume.track;
        this.icon = l.createEl("span", {
          "class": "vcp-volume-icon"
        });
        this.el.appendChild(this.icon);
        return e.prototype.render.call(this, t)
      };
      t.prototype.setup = function o() {
        this.sub(n.MSG.Changing, this.volume, c.bind(this, this.handleMsg));
        this.sub(n.MSG.Changed, this.volume, c.bind(this, this.handleMsg));
        this.sub(p.MSG.VolumeChange, this.player.video, c.bind(this, this.handleMsg));
        this.on(this.icon, "click", this.toggleMute)
      };
      t.prototype.handleMsg = function s(e) {
        switch (e.type) {
          case n.MSG.Changing:
            this.syncTrack(this.percent());
            break;
          case n.MSG.Changed:
            this.percent(this.percent());
            break;
          case p.MSG.VolumeChange:
            var t = this.player.volume();
            this.syncTrack(t);
            this.syncMute(this.player.mute());
            break
        }
      };
      t.prototype.toggleMute = function a(e) {
        var t = !this.player.mute();
        this.player.mute(t)
      };
      t.prototype.syncMute = function u(e) {
        if (e) l.addClass(this.el, "vcp-volume-muted");
        else l.removeClass(this.el, "vcp-volume-muted");
        this.__muted = e
      };
      t.prototype.syncTrack = function h(e) {
        this.track.style.height = e * 100 + "%";
        this.volume.percent(1 - e);
        if (e == 0) {
          this.syncMute(true)
        } else if (e > 0 && this.__muted) {
          this.syncMute(false)
        }
      };
      t.prototype.percent = function f(e) {
        if (typeof e === "undefined") return 1 - this.volume.percent() || 0;
        this.player.volume(e);
        return e
      };
      return t
    }(s["default"]);
    t["default"] = m
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = r(11);
    var i = c(n);
    var o = r(2);
    var s = u(o);
    var a = r(3);
    var l = u(a);

    function u(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function p(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function h(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function f(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var d = {
      od: "原画",
      hd: "高清",
      sd: "标清"
    };
    var v = function (e) {
      f(t, e);

      function t(r) {
        p(this, t);
        return h(this, e.call(this, r, "ClaritySwitcher"))
      }
      t.prototype.render = function r(t) {
        this.show = false;
        this.createEl("div", {
          "class": "vcp-clarityswitcher"
        });
        this.current = s.createEl("a", {
          "class": "vcp-vertical-switcher-current"
        });
        this.container = s.createEl("div", {
          "class": "vcp-vertical-switcher-container"
        });
        this.items = [];
        this.currentItem = "";
        var r = this.options.videoSource;
        this.current.innerHTML = d[r.curDef];
        this.el.appendChild(this.current);
        for (var n = 0; n < r.definitions.length; n++) {
          var i = s.createEl("a", {
            "class": "vcp-vertical-switcher-item"
          });
          i.innerHTML = d[r.definitions[n]];
          if (r.definitions[n] == r.curDef) {
            i.classList.add("current");
            this.currentItem = i
          }
          i.setAttribute("data-def", r.definitions[n]);
          this.items.push(i);
          this.container.appendChild(i)
        }
        this.el.appendChild(this.container);
        return e.prototype.render.call(this, t)
      };
      t.prototype.setup = function n() {
        this.on("click", this.onClick);
        this.on("mouseenter", this.onMouseEnter);
        this.on("mouseleave", this.onMouseLeave)
      };
      t.prototype.onClick = function i(e) {
        var t = e.target.getAttribute("data-def");
        if (t) {
          this.current.innerHTML = d[t];
          this.currentItem.classList.remove("current");
          e.target.classList.add("current");
          this.currentItem = e.target;
          this.player.switchClarity(t)
        } else {
          if (!this.show) {} else {}
        }
      };
      t.prototype.onMouseLeave = function o() {
        this.container.style.display = "none";
        this.show = false
      };
      t.prototype.onMouseEnter = function a() {
        this.container.style.display = "block";
        this.show = true
      };
      return t
    }(i["default"]);
    t["default"] = v
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = r(11);
    var i = l(n);
    var o = r(1);
    var s = a(o);

    function a(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function u(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function c(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function p(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var h = function (e) {
      p(t, e);

      function t(r) {
        u(this, t);
        return c(this, e.call(this, r, "BigPlay"))
      }
      t.prototype.render = function r(t) {
        this.createEl("div", {
          "class": "vcp-bigplay"
        });
        return e.prototype.render.call(this, t)
      };
      t.prototype.setup = function n() {
        this.on("click", this.onClick)
      };
      t.prototype.onClick = function i() {
        var e = this.player.video;
        if (s.IS_MOBILE && !e.paused()) {
          return this.player.panel && this.player.panel.toggle()
        }
        this.player.togglePlay()
      };
      t.prototype.handleMsg = function o(e) {
        console.log("@" + this.name, e)
      };
      return t
    }(i["default"]);
    t["default"] = h
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (e) {
      return typeof e
    } : function (e) {
      return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ?
        "symbol" : typeof e
    };
    var i = r(11);
    var o = h(i);
    var s = r(2);
    var a = p(s);
    var l = r(3);
    var u = p(l);
    var c = r(4);

    function p(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function h(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function f(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function d(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function v(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var y = function (e) {
      v(t, e);

      function t(r) {
        f(this, t);
        var i = d(this, e.call(this, r, "Poster"));
        if (i.options.poster && n(i.options.poster) == "object") {
          i.poster = i.options.poster
        } else if (typeof i.options.poster == "string") {
          i.poster = {
            src: i.options.poster
          }
        } else {
          i.poster = {}
        }
        return i
      }
      t.prototype.render = function r(t) {
        this.createEl("div", {
          "class": "vcp-poster"
        });
        this.hide();
        var r = this.poster;
        if (r) {
          this.pic = a.createEl("img", {
            "class": "vcp-poster-pic"
          });
          var n = this.poster.style;
          switch (n) {
            case "stretch":
              a.addClass(this.pic, "stretch");
              break;
            case "cover":
              a.addClass(this.pic, "cover");
              break;
            default:
              a.addClass(this.pic, "default")
          }
          this.el.appendChild(this.pic)
        }
        return e.prototype.render.call(this, t)
      };
      t.prototype.setup = function i() {
        this.on("click", this.onClick);
        this.sub(c.MSG.Load, this.player.video, u.bind(this, this.handleMsg));
        this.sub(c.MSG.MetaLoaded, this.player.video, u.bind(this, this.handleMsg));
        this.sub(c.MSG.Play, this.player.video, u.bind(this, this.handleMsg));
        this.sub(c.MSG.Pause, this.player.video, u.bind(this, this.handleMsg));
        this.sub(c.MSG.Ended, this.player.video, u.bind(this, this.handleMsg));
        this.sub(c.MSG.Error, this.player.video, u.bind(this, this.handleMsg))
      };
      t.prototype.onClick = function o() {
        this.pub({
          type: "click",
          src: this
        })
      };
      t.prototype.handleMsg = function s(e) {
        switch (e.type) {
          case c.MSG.Load:
            this.__loaded = false;
            break;
          case c.MSG.MetaLoaded:
            this.__loaded = true;
            if (this.player.playing()) this.hide();
            else this.setPoster(this.poster.start);
            break;
          case c.MSG.Play:
            if (!this.__loaded) break;
            this.hide();
            break;
          case c.MSG.Pause:
            if (!this.__loaded) break;
            this.setPoster(this.poster.pause);
            break;
          case c.MSG.Ended:
            if (!this.__loaded) break;
            break;
          case c.MSG.Error:
            if (!this.__loaded) break;
            break
        }
      };
      t.prototype.setPoster = function l(e) {
        e = e || this.poster.src;
        if (!e) return;
        if (this.__preload) this.__preload.onload = null;
        this.__preload = new Image;
        var t = this.__preload;
        this.hide();
        var r = this;
        t.onload = function () {
          r.pic.src = t.src;
          r.show()
        };
        t.src = e
      };
      t.prototype.toggle = function p(e) {
        clearTimeout(this.__tid);
        var t = this;
        this.__tid = setTimeout(function () {
          t.el.style.display = e
        }, 100)
      };
      t.prototype.hide = function h() {
        this.__preload && (this.__preload.onload = null);
        this.toggle("none")
      };
      t.prototype.show = function y() {
        this.toggle("block")
      };
      return t
    }(o["default"]);
    t["default"] = y
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = r(11);
    var i = h(n);
    var o = r(2);
    var s = p(o);
    var a = r(4);
    var l = p(a);
    var u = r(3);
    var c = p(u);

    function p(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function h(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function f(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function d(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function v(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var y = {};
    ! function (e, t) {
      e.Spinner = t()
    }(y, function () {
      "use strict";

      function e(e, t) {
        var r, n = document.createElement(e || "div");
        for (r in t) {
          n[r] = t[r]
        }
        return n
      }
      function t(e) {
        for (var t = 1, r = arguments.length; r > t; t++) {
          e.appendChild(arguments[t])
        }
        return e
      }
      function r(e, t, r, n) {
        var i = ["opacity", t, ~~ (100 * e), r, n].join("-"),
          o = .01 + r / n * 100,
          s = Math.max(1 - (1 - e) / t * (100 - o), e),
          a = u.substring(0, u.indexOf("Animation")).toLowerCase(),
          l = a && "-" + a + "-" || "";
        return h[i] || (c.insertRule("@" + l + "keyframes " + i + "{0%{opacity:" + s + "}" + o +
          "%{opacity:" + e + "}" + (o + .01) + "%{opacity:1}" + (o + t) % 100 + "%{opacity:" + e +
          "}100%{opacity:" + s + "}}", c.cssRules.length), h[i] = 1), i
      }
      function n(e, t) {
        var r, n, i = e.style;
        if (t = t.charAt(0).toUpperCase() + t.slice(1), void 0 !== i[t]) return t;
        for (n = 0; n < p.length; n++) {
          if (r = p[n] + t, void 0 !== i[r]) return r
        }
      }
      function i(e, t) {
        for (var r in t) {
          e.style[n(e, r) || r] = t[r]
        }
        return e
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            void 0 === e[n] && (e[n] = r[n])
          }
        }
        return e
      }
      function s(e, t) {
        return "string" == typeof e ? e : e[t % e.length]
      }
      function a(e) {
        this.opts = o(e || {}, a.defaults, f)
      }
      function l() {
        function r(t, r) {
          return e("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', r)
        }
        c.addRule(".spin-vml", "behavior:url(#default#VML)"), a.prototype.lines = function (e, n) {
          function o() {
            return i(r("group", {
              coordsize: c + " " + c,
              coordorigin: -u + " " + -u
            }), {
              width: c,
              height: c
            })
          }
          function a(e, a, l) {
            t(h, t(i(o(), {
              rotation: 360 / n.lines * e + "deg",
              left: ~~a
            }), t(i(r("roundrect", {
              arcsize: n.corners
            }), {
              width: u,
              height: n.scale * n.width,
              left: n.scale * n.radius,
              top: -n.scale * n.width >> 1,
              filter: l
            }), r("fill", {
              color: s(n.color, e),
              opacity: n.opacity
            }), r("stroke", {
              opacity: 0
            }))))
          }
          var l, u = n.scale * (n.length + n.width),
            c = 2 * n.scale * u,
            p = -(n.width + n.length) * n.scale * 2 + "px",
            h = i(o(), {
              position: "absolute",
              top: p,
              left: p
            });
          if (n.shadow) for (l = 1; l <= n.lines; l++) {
            a(l, -2,
              "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")
          }
          for (l = 1; l <= n.lines; l++) {
            a(l)
          }
          return t(e, h)
        }, a.prototype.opacity = function (e, t, r, n) {
          var i = e.firstChild;
          n = n.shadow && n.lines || 0, i && t + n < i.childNodes.length && (i = i.childNodes[t + n], i =
            i && i.firstChild, i = i && i.firstChild, i && (i.opacity = r))
        }
      }
      var u, c, p = ["webkit", "Moz", "ms", "O"],
        h = {}, f = {
          lines: 12,
          length: 7,
          width: 5,
          radius: 10,
          scale: 1,
          corners: 1,
          color: "#000",
          opacity: .25,
          rotate: 0,
          direction: 1,
          speed: 1,
          trail: 100,
          fps: 20,
          zIndex: 2e9,
          className: "spinner",
          top: "50%",
          left: "50%",
          shadow: !1,
          hwaccel: !1,
          position: "absolute"
        };
      if (a.defaults = {}, o(a.prototype, {
          spin: function v(t) {
            this.stop();
            var r = this,
              n = r.opts,
              o = r.el = e(null, {
                className: n.className
              });
            if (i(o, {
                position: n.position,
                width: 0,
                zIndex: n.zIndex,
                left: n.left,
                top: n.top
              }), t && t.insertBefore(o, t.firstChild || null), o.setAttribute("role", "progressbar"), r.lines(
                o, r.opts), !u) {
              var s, a = 0,
                l = (n.lines - 1) * (1 - n.direction) / 2,
                c = n.fps,
                p = c / n.speed,
                h = (1 - n.opacity) / (p * n.trail / 100),
                f = p / n.lines;
              ! function d() {
                a++;
                for (var e = 0; e < n.lines; e++) {
                  s = Math.max(1 - (a + (n.lines - e) * f) % p * h, n.opacity), r.opacity(o, e * n.direction +
                    l, s, n)
                }
                r.timeout = r.el && setTimeout(d, ~~ (1e3 / c))
              }()
            }
            return r
          },
          stop: function y() {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el =
              void 0), this
          },
          lines: function m(n, o) {
            function a(t, r) {
              return i(e(), {
                position: "absolute",
                width: o.scale * (o.length + o.width) + "px",
                height: o.scale * o.width + "px",
                background: t,
                boxShadow: r,
                transformOrigin: "left",
                transform: "rotate(" + ~~(360 / o.lines * c + o.rotate) + "deg) translate(" + o.scale * o
                  .radius + "px,0)",
                borderRadius: (o.corners * o.scale * o.width >> 1) + "px"
              })
            }
            for (var l, c = 0, p = (o.lines - 1) * (1 - o.direction) / 2; c < o.lines; c++) {
              l = i(e(), {
                position: "absolute",
                top: 1 + ~(o.scale * o.width / 2) + "px",
                transform: o.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: o.opacity,
                animation: u && r(o.opacity, o.trail, p + c * o.direction, o.lines) + " " + 1 / o.speed + "s linear infinite"
              }), o.shadow && t(l, i(a("#000", "0 0 4px #000"), {
                top: "2px"
              })), t(n, t(l, a(s(o.color, c), "0 0 1px rgba(0,0,0,.1)")))
            }
            return n
          },
          opacity: function g(e, t, r) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = r)
          }
        }), "undefined" != typeof document) {
        c = function () {
          var r = e("style", {
            type: "text/css"
          });
          return t(document.getElementsByTagName("head")[0], r), r.sheet || r.styleSheet
        }();
        var d = i(e("group"), {
          behavior: "url(#default#VML)"
        });
        !n(d, "transform") && d.adj ? l() : u = n(d, "animation")
      }
      return a
    });
    var m = function (e) {
      v(t, e);

      function t(r) {
        f(this, t);
        return d(this, e.call(this, r, "Loading"))
      }
      t.prototype.render = function r(t) {
        this.createEl("div", {
          "class": "vcp-loading"
        });
        var r = {
          lines: 11,
          length: 12,
          width: 4,
          radius: 16,
          scale: 1,
          corners: 1,
          color: "#fff",
          opacity: .25,
          rotate: 0,
          direction: 1,
          speed: 1,
          trail: 60,
          fps: 20,
          zIndex: 2e9,
          className: "vcp-spinner",
          top: "50%",
          left: "50%",
          shadow: false,
          hwaccel: true,
          position: "absolute"
        };
        var n = new y.Spinner(r).spin(this.el);
        return e.prototype.render.call(this, t)
      };
      t.prototype.setup = function n() {};
      t.prototype.handleMsg = function i(e) {};
      t.prototype.show = function o() {
        this.el.style.display = "block"
      };
      t.prototype.hide = function s() {
        this.el.style.display = "none"
      };
      return t
    }(i["default"]);
    t["default"] = m
  }, function (e, t, r) {
    "use strict";
    t.__esModule = true;
    var n = r(11);
    var i = h(n);
    var o = r(2);
    var s = p(o);
    var a = r(4);
    var l = p(a);
    var u = r(3);
    var c = p(u);

    function p(e) {
      if (e && e.__esModule) {
        return e
      } else {
        var t = {};
        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
          }
        }
        t["default"] = e;
        return t
      }
    }
    function h(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    function f(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
    function d(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return t && (typeof t === "object" || typeof t === "function") ? t : e
    }
    function v(e, t) {
      if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
    }
    var y = {
      VideoSourceError: [1002, 4, 2032],
      EnvError: [5],
      NetworkError: [1001, 1, 2],
      VideoDecodeError: [3],
      ArgumentError: [],
      CrossDomainError: [2048]
    };
    var m = {
      EnvError: '<i class="bi bi-failure-face"></i><div class="vcp-error-text">当前系统环境不支持播放该视频格式</div>',
      VideoSourceError: '<i class="bi bi-failure-face"></i><div class="vcp-error-text">获取视频失败，请 <a class="vcp-error-retry">点击重试</a></div>',
      NetworkError: '<i class="bi bi-failure-face"></i><div class="vcp-error-text">网络错误，请检查网络配置并 <a class="vcp-error-retry">点击重试</a></div>',
      VideoDecodeError: '<i class="bi bi-failure-face"></i><div class="vcp-error-text">视频解码错误</div>',
      ArgumentError: '<i class="bi bi-failure-face"></i><div class="vcp-error-text">使用参数有误，请检查播放器调用代码</div>',
      UrlEmpty: '<i class="bi bi-failure-face"></i><div class="vcp-error-text">请填写视频播放地址</div>',
      FileProtocol: '<i class="bi bi-failure-face"></i><div class="vcp-error-text">请勿在file协议下使用播放器，可能会导致视频无法播放</div>',
      LiveFinish: '<i class="bi bi-failure-face"></i><div class="vcp-error-text">直播已结束,请稍后再来</div>',
      CrossDomainError: '<i class="bi bi-failure-face"></i><div class="vcp-error-text">无法加载视频文件，跨域访问被拒绝</div>'
    };
    var g = function (e) {
      v(t, e);

      function t(r) {
        f(this, t);
        var n = d(this, e.call(this, r, "ErrorTips"));
        n.customTips = c.extend({}, m, n.options.wording);
        for (var i in y) {
          for (var o = 0; o < y[i].length; o++) {
            var s = y[i][o];
            n.customTips[s] = n.customTips[s] || n.customTips[i]
          }
        }
        return n
      }
      t.prototype.render = function r(t) {
        this.createEl("div", {
          "class": "vcp-error-tips"
        });
        var self = this;
        var currentTime;
        this.el.addEventListener("click", function(e) {
          if (self.player.video.el.currentTime && !currentTime) currentTime = self.player.video.el.currentTime;
          if (e.target && e.target.className === "vcp-error-retry") self.reset.call(self, currentTime || 0);
        }, false);
        return e.prototype.render.call(this, t)
      };
      t.prototype.reset = function(currentTime) {
        var player = this.player;
        var video = player.video;
        if (video && video.el) {
          var src = video.el.src;
          var listener = function() {
            if (!player.options.live) video.el.currentTime = currentTime;
            video.el.removeEventListener('loadedmetadata', listener, false);
          };
          video.el.src = '';
          video.el.src = src;
          player.play();
          video.el.addEventListener('loadedmetadata', listener, false);
        }
      }
      t.prototype.setup = function n() {};
      t.prototype.handleMsg = function i(e) {};
      t.prototype.show = function o(e) {
        this.el.style.display = "flex";
        var t = void 0;
        if (typeof e === "string") {
          t = e
        } else {
          var r = this.customTips[e.code] || e.reason;
          t = r
        }
        this.el.innerHTML = t
      };
      t.prototype.hide = function s() {
        this.el.style.display = "none"
      };
      t.prototype.clear = function a() {
        this.el.innerHTML = "";
        this.hide()
      };
      return t
    }(i["default"]);
    t["default"] = g
  }])
}); /*  |xGv00|75e5d587f04ebb8b3efc4ef07c35dfd0 */
