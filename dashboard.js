let setting3 = document.querySelector(".setting3");
let settbox = document.querySelector('.settbox');
setting3.addEventListener('click', function () {
   settbox.classList.toggle('settbox-2');
   setting3.classList.toggle('setting3-2');
   console.log(settbox);
});

let navbar = document.querySelector('.navbar');
let color = document.querySelectorAll('.color');
let btns = document.querySelectorAll('button');
let line = document.querySelector('.line');
let btn = document.querySelectorAll('.btn');
let li = document.querySelectorAll('li');
let hone = document.querySelectorAll('h1')
let htwo = document.querySelectorAll('h2')
let hfour = document.querySelectorAll('h4')



color.forEach(function (ele, index) {
   ele.addEventListener("click", function () {
      var cl = getComputedStyle(this).getPropertyValue("background-color");
      var font = getComputedStyle(this).getPropertyValue('font-family');
      btns.forEach(function (btn) {
         btn.style.backgroundColor = cl;
         btn.style.color = 'white';
         btn.style.fontFamily = font;
         btn.style.border = '2px solid white';
         navbar.style.backgroundColor = cl;
         line.style.backgroundColor = cl;
         li.forEach(function (listItem) {
            listItem.style.fontFamily = font;
         });
         hone.forEach(function (item) {
            item.style.color = cl
         })
         htwo.forEach(function (item) {
            item.style.color = cl
         })
         hfour.forEach(function(item){
item.style.color=cl
         })
      });
   });
});
