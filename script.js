

var rect = $('#containerbox')[0].getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

$("#containerbox").mousemove(function(e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
 
// Ticker event will be called on every frame
TweenLite.ticker.addEventListener('tick', function(){
  if (mouse.moved){    
    parallaxIt(".slide", -100);
    parallaxIt(".topelem", -30);
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  TweenMax.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  rect = $('#containerbox')[0].getBoundingClientRect();


  
})




var rect = $('#containerbox')[0].getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

$("#containerbox").mousemove(function(e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
 
// Ticker event will be called on every frame
TweenLite.ticker.addEventListener('tick', function(){
  if (mouse.moved){    
    parallaxIt(".menu-pizza", -100);
    parallaxIt(".menu-burger", -30);
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  TweenMax.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  rect = $('#containerbox')[0].getBoundingClientRect();


  
})







  var swiper = new Swiper('.mySwiper', {
    // Default parameters
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween:0
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev', }
  
  })






//curser//




var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})











function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function incrementValue() {
  var value = parseInt(document.getElementById("number").value);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}
function decreaseValue() {
  var value = parseInt(document.getElementById("number").value);
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById("number").value = value;
}
