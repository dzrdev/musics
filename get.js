let file = new Audio();
let queryString = new URLSearchParams(location.search);
file.src = `https://4tangsusu.github.io/musics/${queryString.get('name')}`;
let playState = false;
function play() {
    file.play();
    playState = true;
}
function pause() {
    file.pause();
    playState = false;
}
document.querySelector('.entryRunButtonBigMinimize').addEventListener('click', e => {
    play();
});
document.querySelector('.entryStopButtonMinimize').addEventListener('click', e => {
    pause();
    file.currentTime = 0;
});
document.querySelector('.entryPauseButtonMinimize').addEventListener('click', e => {
    if (playState) {
        pause();
    } else {
        play();
    }
});
