console.log("Welcome to Música");
let songIndex = 0;
let audioElement = new Audio('songs/Yaad Aati Nahin  Pawan Singh.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let songs = [{
        songName: "Yaad Aati Nahin - Pawan Singh",
        filePath: "songs/Yaad Aati Nahin  Pawan Singh.mp3",
        coverPath: "cover/Yaad Aati Nahin  Pawan Singh.jpg"
    },
    {
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
    }, {
        songName: "Yaad Aati Nahin - Pawan Singh",
        filePath: "songs/Yaad Aati Nahin  Pawan Singh.mp3",
        coverPath: "cover/Yaad Aati Nahin  Pawan Singh.jpg"
    },
]

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