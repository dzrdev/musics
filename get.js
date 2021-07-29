let file = new Audio();
file.src = url;
console.log(location.href);
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
let btn = document.createElement('button');
btn.innerHTML = '음원 다운로드';
btn.addEventListener('click', e => {
    window.open(file.src, '_blank');
});
//button css code
let css = btn.style;
css.color = 'white';
css.backgroundColor = 'rgb(22, 216, 163)';
css.border = 0;
css.borderRadius = '4px';
css.fontSize = '1em';
css.padding = '9px 20px';
css.marginLeft = '10px';
document.querySelector('.css-bl8trf').appendChild(btn);
