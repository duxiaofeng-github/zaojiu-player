var srcHD = {
  src: 'http://7qnbk6.com1.z0.glb.clouddn.com/The-Battle-of-Evony-HD.mp4',
  quality: '超清',
  mimetype: 'video/mp4'
};
var srcMD = {
  src: 'http://7qnbk6.com1.z0.glb.clouddn.com/The-Battle-of-Evony-MD.mp4',
  quality: '高清',
  mimetype: 'video/mp4'
};
var srcSD = {
  src: '//edge.flowplayer.org/flowplayer-700.flv',
  quality: '标清',
  mimetype: 'video/mp4'
};
var player = new ZaojiuPlayer({element: 'player', playList: [srcSD, srcMD, srcHD]});
console.log(player);
