console.log("welcome to spotify")
let songIndex = 0;
let audioElement=new Audio('1.mp');
let masterplay = document.getElementById('masterplay')
let myprogressBar = document.getElementById('myprogressBar')

let songs = [
    {songName:"repalle-vadalona-chinni-krishna", filepath: "songs/repalle vadalona", coverpath:"cover/mmm.jpg"},
    {songName:"JANATHA GARAGE", filepath: "songs/repalle vadalona", coverpath:"cover/mmm.jpg"},
    {songName:"SARKARU VAARI PAATA", filepath: "songs/repalle vadalona", coverpath:"cover/mmm.jpg"},
    {songName:"RAYALA SIMA MUDDU BIDDA", filepath: "songs/repalle vadalona", coverpath:"cover/mmm.jpg"},
    {songName:"CHINNA RAMULAMMA", filepath: "songs/repalle vadalona", coverpath:"cover/mmm.jpg"},
    {songName:"YADIKELLI VACHINAVE", filepath: "songs/repalle vadalona", coverpath:"cover/mmm.jpg"},
    {songName:"KRISHN HAI VISTHAR", filepath: "songs/repalle vadalona", coverpath:"cover/mmm.jpg"},
    {songName:"YELLAMMA DJ SONG", filepath: "songs/repalle vadalona", coverpath:"cover/mmm.jpg"},
    {songName:"SRIMANTHUDU RAMA RAMA", filepath: "songs/repalle vadalona", coverpath:"cover/mmm.jpg"},
    {songName:"SHANTHI SANDESHA", filepath: "songs/repalle vadalona", coverpath:"cover/mmm.jpg"},
    {songName:"AMMA BAVANI LOCALANELE", filepath: "songs/repalle vadalona", coverpath:"cover/mmm.jpg"},
    {songName:"AMMA BAVANI LOCALANELE", filepath: "songs/repalle vadalona", coverpath:"cover/mmm.jpg"},
    {songName:"AMMA BAVANI LOCALANELE", filepath: "songs/repalle vadalona", coverpath:"cover/mmm.jpg"},
    
]
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pausecirle");
    }
})

myprogressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
})