import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));

player.on('timeupdate', Throttle (function (data) {
  const currentTime = data.seconds;
//   console.log(JSON.stringify(currentTime));

  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTime));
}, 1000)
);
