import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoFrame = document.getElementById('vimeo-player');
const video = new Player(videoFrame);
const storageKey = 'videoplayer-current-time';

const getTime = () => {
  video.getCurrentTime().then(function (time) {
    localStorage.setItem(storageKey, time);
  });
};
const setTime = throttle(getTime, 1000);
setInterval(setTime, 1000);
