// let music=new Audio('./2.mp3')

// let input=document.getElementById('input')

// input.addEventListener("input",function(){
//     music.play()
// })
// let music=new Audio("./суротуно.mp3")
// let play=document.getElementById("play")
// let stop=document.getElementById("stop")

// play.addEventListener('click',function(){
// music.play()
// })

// stop.addEventListener('click',function() {
//     music.pause()
// })
let music1=new Audio("./sound1.mp3")
let music2=new Audio("./sound2.mp3")
let music3=new Audio("./sound3.mp3")

let sound1=document.getElementById("one")
let sound2=document.getElementById("two")
let sound3=document.getElementById("three")

sound1.addEventListener("click",function(){
    music1.play()
    
})
sound2.addEventListener("click",function(){
    music2.play()
})
sound3.addEventListener("click",function(){
    music3.play()
})