
var trigger = document.getElementById('toggle');
var box = document.getElementById('menu');

toggle.addEventListener('click', function() {
  box.classList.toggle('active');
});

//! Scroll 

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//! Slider 

$('.slider').slick({
    prevArrow: '<button id="prev" type="button" class="prev"> &#8249; New Post</button>',
    nextArrow: '<button id="next" type="button" class="next">Old Post &#8250;</button>',
  
});
  