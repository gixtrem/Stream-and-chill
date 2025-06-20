const audio = document.getElementById("audio");
const songTitle = document.getElementById("song-title");
const cover = document.getElementById("cover");

const playlist = [
    {
        title: "Rainy Day Blues",
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        image: "https://picsum.photos/id/1002/300/300"
    },
    {
        title: "Midnight Energy",
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        image: "https://picsum.photos/id/1025/300/300"
    },
    {
        title: "Sunset Vibes",
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        image: "https://picsum.photos/id/1042/300/300"
    }
];

let currentSong = 0;

function loadSong(index) {
    audio.src = playlist[index].file;
    songTitle.textContent = playlist[index].title;
    cover.src = playlist[index].image;
    audio.play();
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    currentSong = (currentSong + 1) % playlist.length;
    loadSong(currentSong);
}

function prevSong() {
    currentSong = (currentSong - 1 + playlist.length) % playlist.length;
    loadSong(currentSong);
}

audio.addEventListener("ended", nextSong);
loadSong(currentSong);
