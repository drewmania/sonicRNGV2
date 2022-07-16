function click() {
document.getElementById('play').addEventListener('click', e=> {
    location.replace('/characterAndStage.html')
})
document.getElementById('howToPlay').addEventListener('click', e=> {
    console.log('how to play')
})
document.getElementById('debug').addEventListener('click', e=> {
    if(document.getElementById('debug').classList.contains('locked') === true) {
        document.getElementById('debug').classList.toggle('lockedAnimation')
        setTimeout(() => {
            document.getElementById('debug').classList.toggle('lockedAnimation')
        }, 1000);
    }
    if(document.getElementById('debug').classList.contains('unlocked') === true) {
        console.log('unlocked')
    }
})
}
setTimeout(click, 1000)