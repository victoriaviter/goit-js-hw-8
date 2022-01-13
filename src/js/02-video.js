

import Player from '@vimeo/player';
import throttle from 'lodash/throttle'; 

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

document.addEventListener('play',throttle(videoStart, 1000))


player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then( (sec) => {
        console.log('title:', sec);
        localStorage.setItem('current-time', JSON.stringify(sec))
    });
}, 1000),
);
   
const toStart = JSON.parse(localStorage.getItem('current-time')) || 0;
console.log(toStart);
player.setCurrentTime(toStart);

function videoStart(toStart) {
    console.log(toStart);
    
}