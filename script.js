var songs=[
    {Name:"jale 2",song:"./songs/Jale 2.mp3",image:"./images/jale.jpg"},
    {Name:"arjan velley",song:"./songs/Arjan Vailly Ne.mp3",image:"./images/animal.jpg"},
    {Name:"ram siya ram",song:"./songs/Ram Siya Ram.mp3",image:"./images/ram.jpg"},
    {Name:"Bhala",song:"./songs/Bhala.mp3",image:"https://c.saavncdn.com/136/Bhala-Hindi-2020-20210222203652-500x500.jpg"},
    {Name:"Yun Hi Chala Chal",song:"./songs/chala chal.mp3",image:"https://th.bing.com/th/id/OIP.Q7BdARBW1tWDu15uCS0wXAAAAA?rs=1&pid=ImgDetMain"},
    {Name:"Kachha Ghada",song:"./songs/ghada.mp3",image:"https://c.saavncdn.com/855/Kachha-Ghada-English-2022-20220206150009-500x500.jpg"},
    {Name:"Just Chill",song:"./songs/just chill.mp3",image:"https://i.ytimg.com/vi/-FaBA4DgA2I/maxresdefault.jpg"},
    {Name:"Samjho Na",song:"./songs/samjho na.mp3",image:"https://c.saavncdn.com/852/Samjho-Na-Hindi-2022-20220209214141-500x500.jpg"}
    
 ]
var audio= new Audio();
var selectedsong=0;
var play =document.querySelector("#play")
var backward=document.querySelector("#backward")
var forward=document.querySelector('#forward')

 function allsongs(){
    clutter="";
    songs.forEach(function(song,index){
        clutter+=`<div class="song" id="${index}">
        <div class="part1">
            <img src="${song.image}" alt="">
            <h2>${song.Name} <br><span>ft.deepanshi yadav</span> </h2>
        </div>
        <h6>3:56</h6>
    </div>`
    })
    console.log(clutter)
    document.querySelector("#all-songs").innerHTML=clutter;
    audio.src=songs[selectedsong].song
    document.querySelector("#left #playingimg").style.backgroundImage=`url(${songs[selectedsong].image})`
    document.querySelector("#left #text").innerHTML=` <h2>${songs[selectedsong].Name}<br> <span>ft.deepanshi yadav</span></h2>`

 }
 allsongs()

function music(){
document.querySelector("#all-songs").addEventListener("click",function(dts){
    selectedsong= dts.target.id
    allsongs()
    play.innerHTML=`<i class="ri-pause-line"></i>`
    bag=1
    audio.play();
})
}
music()  
var bag=0;
play.addEventListener("click",function(){
    if(bag==0){
   play.innerHTML=`<i class="ri-pause-line"></i>`
   allsongs()
   audio.play()
   bag=1
}else{
    play.innerHTML=`<i class="ri-play-fill"></ i>` 
    allsongs()
    audio.pause()
    bag=0;
}
})

forward.addEventListener("click",function(){
    if(selectedsong<songs.length-1){
        selectedsong++
        allsongs()
        audio.play()
        play.innerHTML=`<i class="ri-pause-line"></i>`
        bag=1
    }else{
        forward.style.opacity=0.4
    }
})

backward.addEventListener("click",function(){
    if(selectedsong>0){
        selectedsong--
        allsongs()
        audio.play()
        play.innerHTML=`<i class="ri-pause-line"></i>`
        bag=1
    }else{
        backward.style.opacity=0.4
    }
})