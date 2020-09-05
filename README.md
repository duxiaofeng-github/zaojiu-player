# Zaojiu player

## Install

```
yarn add zaojiu-player
```

or

```
npm i zaojiu-player
```

## Usage

```typescript
import { ZaojiuPlayer } from "zaojiu-player";
import { FlashVideo } from "zaojiu-player/dist/zaojiu-player-flash.plugin";

// if you don't want to play rtmp live stream, you can the remove following line
ZaojiuPlayer.use(FlashVideo);

const srcRtmp = {
  src: "rtmp://ali-live.zaojiu.com/zaojiu/59313bd2647259000183041d_sd?auth_key=1512472740-0-0-845571a71200e6c83807d4e399f3ad00",
  quality: "Live",
  mimetype: "rtmp/mp4",
};

const srcMD = {
  src: "http://7qnbk6.com1.z0.glb.clouddn.com/The-Battle-of-Evony-MD.mp4",
  quality: "高清",
  mimetype: "video/mp4",
};

const srcSD = {
  src: "http://7qnbk6.com1.z0.glb.clouddn.com/The-Battle-of-Evony-SD.mp4",
  quality: "标清",
  mimetype: "video/mp4",
};

const srcHD = {
  src: "http://7qnbk6.com1.z0.glb.clouddn.com/The-Battle-of-Evony-HD.mp4",
  quality: "超清",
  mimetype: "video/mp4",
};

const player = new ZaojiuPlayer({
  element: "player",
  playList: [srcSD, srcMD, srcHD],
  autoplay: true,
  swf: "example/video-js.swf",
});

// you can control video player by using its instance
setTimeout(() => {
  player.video.el.pause();
}, 3000);
```

## API

You can get its api definitions from [here](./types)
