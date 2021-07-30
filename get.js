let file = new Audio();
file.src = url;
document.querySelector('.entryRunButtonBigMinimize').addEventListener('click', e => {
    file.play();
});
document.querySelector('.entryStopButtonMinimize').addEventListener('click', e => {
    file.stop();
});
document.querySelector('.entryPauseButtonMinimize').addEventListener('click', e => {
    if (file.paused) {
        file.play();
    } else {
        file.pause();
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
