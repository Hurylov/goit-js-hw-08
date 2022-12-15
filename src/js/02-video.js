import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.getItem(CURRENT_TIME_KEY)) {
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY));
}

const saveVideoCurrentTime = data => {
  localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
};

player.on('timeupdate', throttle(saveVideoCurrentTime, 1000));