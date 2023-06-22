import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoFrame = document.getElementById('vimeo-player');
const video = new Player(videoFrame);

const savedTime = data =>
  localStorage.setItem('videoplayer-current-time', data.seconds);

const saveTimeDelay = throttle(savedTime, 1000);

const getCurrentTime = localStorage.getItem('videoplayer-current-time');

video.setCurrentTime(getCurrentTime).then();
video.on('timeupdate', saveTimeDelay);
