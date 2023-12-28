import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const videoPlayerCurrentTimeKey = 'videoplayer-current-time';
const currentTime = localStorage.getItem(videoPlayerCurrentTimeKey);

if (currentTime) {
  player.setCurrentTime(Number(currentTime));
}

const onTimeupdate = ({ seconds }) => {
  localStorage.setItem(videoPlayerCurrentTimeKey, seconds);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));
