$(function() {
    var scroll = $(document).scrollTop();
    // var navHeight = $('.navigation').outerHeight();
    $(window).scroll(function() {
        var scrolled = $(document).scrollTop();
        if(scrolled > 20) {
            $('nav').addClass('nav-border');
        } else {
            $('nav').removeClass('nav-border');
        }
        if(scrolled > scroll) {
            $('.navigation').addClass('sticky');
        } else {
            $('.navigation').removeClass('sticky');
        }
        scroll = $(document).scrollTop();
    })
})
// nav-border




// let border = document.querySelectorAll('nav');
// console.log(border);
// document.addEventListener("scroll", e => {
//     var scrolled = document.scrollingElement.scrollTop;
//     if (scrolled === 1) {
//         document.querySelector('nav').classList.remove('nav-border');
        
//     } else {
//         document.querySelector('nav').classList.add('nav-border');
//     }
//   });

const image = document.querySelectorAll('.portofolio-item-wrapper');

image.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.childNodes[1].classList.add('img-darken');
    });
    img.addEventListener('mouseout', () => {
        img.childNodes[1].classList.remove('img-darken');
    });
});

  ///////////////////////// Footer rights ///////////
//   let date = new Date().getFullYear();
//   console.log(date);
  
//   let currentYear = document.querySelector('.allrights');
//   currentYear.innerHTML = date;


