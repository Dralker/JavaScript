const reviews = [
    {
        id: 1,
        name: "Luiz",
        job: "Back-end Developer",
        img:"/Reviews/img/d1.jpg",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        name: "Felipe",
        job: "Front-end Developer",
        img:"/Reviews/img/d2.jpg",
        text:"Etiam eget ligula eu lectus lobortis condimentum."
    },
    {
        id: 3,
        name: "Luisa",
        job: "Manager",
        img:"/Reviews/img/d3.jpg",
        text:" Aliquam nonummy auctor massa."
    },
    {
        id: 4,
        name: "Lucas",
        job: "CEO",
        img:"/Reviews/img/d4.jpg",
        text:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
        id: 5,
        name: "Larissa",
        job: "Designer",
        img:"/Reviews/img/d5.png",
        text:"Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."
    },

];

// select itens

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item

let currentItem =  0;

// load initial item

window.addEventListener('DOMContentLoaded',function (){
    showPerson();
});

//show person base on item
 function showPerson(){
    const item =  reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
 };

 //show next person

 nextBtn.addEventListener('click', function (){
     currentItem++;
     if(currentItem > reviews.length - 1){
         currentItem = 0;
     }
     showPerson();
 });

 //show prev person

 prevBtn.addEventListener('click',function(){
     currentItem--;
     if(currentItem < 0){
         currentItem =  reviews.length -1;
     }
     showPerson();
 });
 //show random person

 randomBtn.addEventListener('click',function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson();
});