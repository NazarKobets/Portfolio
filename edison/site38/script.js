const finder = (key, element) => element.dataset.key == key;

const playSound = (audio, block) => {
    audio.play();
    block.classList.add("playing");
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        block.classList.remove("playing");
    }, 100)
}

const audios = [...document.querySelectorAll('audio')];
const keyBlocks = [...document.querySelectorAll('.key')];

window.addEventListener('keydown', (event) => {
    const { keyCode } = event;
    const finderWithKey = finder.bind(null, keyCode);
    const currentAudio = audios.find(finderWithKey);
    const currentBlock = keyBlocks.find(finderWithKey);
    currentAudio && playSound(currentAudio, currentBlock);
});


