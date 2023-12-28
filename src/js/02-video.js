import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const VIDEO_PLAYER_CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = localStorage.getItem(VIDEO_PLAYER_CURRENT_TIME);

if (currentTime) {
  player.setCurrentTime(Number(currentTime));
}

const onTimeupdate = ({ seconds }) => {
  localStorage.setItem(VIDEO_PLAYER_CURRENT_TIME, seconds);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));
