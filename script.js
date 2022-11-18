console.log("welcome to spotify")
let soundindex = 0;
let audioelement = new Audio('songs/kessariya.mp3')
let masterplay = document.getElementById('masterplay');
let myproressbar = document.getElementById('myprogressbar');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let mastersongName = document.getElementById('mastersongname');


let songs = [
    { songname: "kessariya", filepath: "songs/1.mp3", coverpath: "covers/cp1.jpg" },
    { songname: "Bhool bhulaiyaa 2", filepath: "songs/2.mp3", coverpath: "covers/bhul.jpg" },
    { songname: "Chaand Baaliyan", filepath: "songs/3.mp3", coverpath: "covers/chand.jfif" },
    { songname: "Aankhon Se Batana", filePath: "songs/4.mp3", coverpath: "covers/ankho.jfif" },
    { songname: "Doobey- Gehraiyaan", filepath: "songs/5.mp3", coverpath: "covers/doobey.jfif" },
    { songname: "Jaan Nisaar", filepath: "songs/6.mp3", coverpath: "covers/jansiar.jfif" },
    { songname: "Jugnu_Badsha", filepath: "songs/7.mp3", coverpath: "covers/jugmu.jfif" },
    { songname: "Kala Chashma", filepath: "songs/8.mp3", coverpath: "covers/kalachasma.jfif" },
    { songname: "Rangi Saari", filepath: "songs/9.mp3", coverpath: "covers/rangsari.jfif" },
    { songname: "Srivalli", filepath: "song10.mp3", coverpath: "covers/pushpa.jfif" },
]
songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})


//audioelement.play();

//handle play pause
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
});
// listen evennts
audioelement.addEventListener('timeupdate', () => {
    console.log('timeupdate')
    // Update Seekbar
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    console.log('progress');
    myprogressbar.value = progress;

});
myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('fa-solid  fa-play songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}


Array.from(document.getElementsByClassName('fa-solid  fa-play songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        // console.log(e);
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-solid.fa-play');   
        e.target.classList.add('fa-solid.fa-pause');
        audioelement.src = `songs/${songindex+1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-solid fa-play');
        masterplay.classList.add('fa-solid fa-pause');
    })
})