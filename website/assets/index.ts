import MediaPlayer from '@andresbadillo/mediaplayer';
import AutoPlay from '@andresbadillo/mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@andresbadillo/mediaplayer/lib/plugins/AutoPause';
import Ads from '@andresbadillo/mediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads(),
    ] 
});

const playButton: HTMLElement = document.querySelector('#playButton') as HTMLElement;
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton') as HTMLElement;
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
};

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../sw.js').catch(error => {
//         console.log(error.message);
//     });
// }

if('serviceWorker' in navigator){
    navigator.serviceWorker.register(new URL('/sw.js', import.meta.url),{type: 'module'}).catch(error => {
        console.log(error.message)
    })
}
