//  For Games exploration Section
var cursor = document.getElementById('cursor');
var fullscreen = 0;

document.getElementById("cursor-show").addEventListener("click", myFunction);
function myFunction(){
    if(fullscreen==0){
        $('.hide').hide(200);
        $('.footer').hide(200);
        cursor.style.opacity = "1";
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";

        setTimeout(2000);
        window.addEventListener('mousemove', function(e){
            cursor.style.top = e.pageY + 'px';
            cursor.style.left = e.pageX + 'px';
        });

        document.querySelectorAll('.explore-games img').forEach(item => {
            item.addEventListener('mouseenter', event => {
                item.style.opacity = 1;
                cursor.classList.add('active');
            });
            item.addEventListener('mouseleave', event => {
                item.style.opacity = 0;
                cursor.classList.remove('active');
            });
        })
        
        fullscreen=1;
        document.getElementById("cursor-show").innerHTML = "Go back?";
    }
    else{
        $('.hide').show(1000);
        $('.footer').show(1000);
        cursor.style.opacity = "0";
        fullscreen=0;
        document.body.style.height = "100vh";
        document.body.style.overflow = "visible";
        document.getElementById("cursor-show").innerHTML = "Explore";
        document.querySelectorAll('.explore-games img').forEach(item => {
            item.style.opacity = 0;
        })
    }
}

// For Image slider
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.manual-btn');
let currentSlide = 1;

var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

// For drop down menu
$(document).ready(function () {
    $('.games-drop-down').click(function () {
        var no_of_active = 0;
        $('.drop-down').each(function (index, val) {
            if ($(this).hasClass("active")) {
                no_of_active+=1;
                if (index == 0) {
                    $('.games-drop-down').toggleClass('active');
                }
                else {
                    $(this).toggleClass('active');
                    $('.games-drop-down').toggleClass('active');
                }
            };
        });
        if(no_of_active==0){
            $('.games-drop-down').toggleClass('active');
        }
    });

    $('.hardware-drop-down').click(function () {
        var no_of_active = 0;
        $('.drop-down').each(function (index, val) {
            if ($(this).hasClass("active")) {
                no_of_active+=1;
                if (index == 0) {
                    $(this).toggleClass('active');
                    $('.hardware-drop-down').toggleClass('active');
                    return false;
                }
                else {
                    $('.hardware-drop-down').toggleClass('active');
                }
            };
        });
        if(no_of_active==0){
            $('.hardware-drop-down').toggleClass('active');
        }
    });

    $('.burger').click(function(){
        $('.right').toggleClass('active');
    })
})
