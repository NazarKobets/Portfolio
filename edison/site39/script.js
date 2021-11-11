/* TODO
*		Add play/pause song
*		Add song titles and pictures
*		Add switch songs
*		Add progress bar
*		Add current song time and duration for that song
*		Add setting the current time with the mouse
*/

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currentTimeEl = document.getElementById('currTime');
const durationTimeEl = document.getElementById('durTime');

const songs = ['hey', 'summer', 'ukulele'];

let songIndex = 2;

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    isPlaying ? pauseSong() : playSong();
});

function prevSong() {
    songIndex--;
    songIndex = songIndex < 0 ? songs.length - 1 : songIndex;
    
    loadSong(songs[songIndex]);
    playSong();
}

prevBtn.addEventListener('click', prevSong);

