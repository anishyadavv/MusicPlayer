console.log("Welcome to Música");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
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
        songName: "Zindagi - Pawan Singh",
        filePath: "songs/7.mp3",
        coverPath: "cover/Zindagi Pawan Singh.jpg"
    }, {
        songName: "Najariya Na Lage - Pawan Singh",
        filePath: "songs/8.mp3",
        coverPath: "cover/najariya na laage.jpg"
    }, {
        songName: "Mohobat Ab Bechata  - Pawan Singh",
        filePath: "songs/9.mp3",
        coverPath: "cover/Mohobat ab bechata Pawan Singh.jpg"
    }, {
        songName: "Lut gaye Bhojpuri - Pawan Singh",
        filePath: "songs/10.mp3",
        coverPath: "cover/Lut gaye Bhojpuri Pawan Singh.jpg"
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
        makeAllPlays();
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

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById('songInfoBottom').innerText = songs[songIndex].songName;
        document.getElementById("cover").src = songs[songIndex].coverPath;
        document.getElementById("cover1").src = songs[songIndex].coverPath;
        document.getElementById("coverImg").src = songs[songIndex].coverPath;

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    makeAllPlays();
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    document.getElementById('songInfoBottom').innerText = songs[songIndex].songName;
    document.getElementById("cover").src = songs[songIndex].coverPath;
    document.getElementById("cover1").src = songs[songIndex].coverPath;
    document.getElementById("coverImg").src = songs[songIndex].coverPath;

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    document.getElementById('songInfoBottom').innerText = songs[songIndex].songName;
    document.getElementById("cover").src = songs[songIndex].coverPath;
    document.getElementById("cover1").src = songs[songIndex].coverPath;
    document.getElementById("coverImg").src = songs[songIndex].coverPath;
})