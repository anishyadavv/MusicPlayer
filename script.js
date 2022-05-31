console.log("Welcome to Música");
let songIndex = 0;
let audioElement = new Audio('songs/Yaad Aati Nahin  Pawan Singh.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [{
        songName: "Yaad Aati Nahin - Pawan Singh",
        filePath: "songs/Yaad Aati Nahin  Pawan Singh.mp3",
        coverPath: "cover/Yaad Aati Nahin  Pawan Singh.jpg"
    },
    {
        songName: "Aa jaiha Pach ke - Pawan Singh",
        filePath: "songs/Aa jaiha Pach ke - Pawan Singh.mp3",
        coverPath: "cover/Aa Jaiha 5 ke pawan singh.jpg"
    }, {
        songName: "Baarish Ban Jaana ( Bhojpuri ) - Pawan Singh",
        filePath: "songs/Baarish Ban Jaana ( Bhojpuri ) - Pawan Singh.mp3",
        coverPath: "cover/Baarish Ban jaana Pawan singh.jpg"
    }, {
        songName: "Saari Se Tadi - Pawan Singh",
        filePath: "songs/Saari Se Tadi - Pawan Singh.mp3",
        coverPath: "cover/Saari se tadi Pawan singh.jpg"
    }, {
        songName: "Tumsa Koi Pyaara - PAWAN SINGH & PRIYANKA SINGH  ",
        filePath: "songs/Tumsa Koi Pyaara - PAWAN SINGH & PRIYANKA SINGH  .mp3",
        coverPath: "cover/Tumsa Koi Pyaara Pawan singh.jpg"
    }, {
        songName: "Zindagi 2 Mulaqaat Pawan Singh",
        filePath: "songs/Zindagi 2 Mulaqaat Pawan Singh.mp3",
        coverPath: "cover/Zindagi 2 Mulaqaat Pawan Singh.jpg"
    }, {
        songName: "Yaad Aati Nahin - Pawan Singh",
        filePath: "songs/Yaad Aati Nahin  Pawan Singh.mp3",
        coverPath: "cover/Yaad Aati Nahin  Pawan Singh.jpg"
    }, {
        songName: "Yaad Aati Nahin - Pawan Singh",
        filePath: "songs/Yaad Aati Nahin  Pawan Singh.mp3",
        coverPath: "cover/Yaad Aati Nahin  Pawan Singh.jpg"
    }, {
        songName: "Yaad Aati Nahin - Pawan Singh",
        filePath: "songs/Yaad Aati Nahin  Pawan Singh.mp3",
        coverPath: "cover/Yaad Aati Nahin  Pawan Singh.jpg"
    }, {
        songName: "Yaad Aati Nahin - Pawan Singh",
        filePath: "songs/Yaad Aati Nahin  Pawan Singh.mp3",
        coverPath: "cover/Yaad Aati Nahin  Pawan Singh.jpg"
    },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();//listen to events
//handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }

})
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})


function timestamp() {
    document.getElementById('time').innerText = parseInt(audioElement.currentTime);
}
setInterval(timestamp, 1);