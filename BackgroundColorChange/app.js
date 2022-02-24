const colors = ["green", "red", "rgba(133,122,200)", "#f15025","#DC143C","#FF69B4",
"#FF4500","#4B0082","#7FFFD4","#A9A9A9"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");



btn.addEventListener('click', function(){
    // pegar um numero aleatorio entre 0 -3 colors[1]
 const  randomNumber = getRandomNumber();
 document.body.style.backgroundColor = colors [randomNumber];
 color.textContent = colors [randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()* colors.length);
}