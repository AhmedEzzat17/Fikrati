let swiper = new Swiper(".slider-wrapper", {  // slider
    loop: true,
    //   grabCursor: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 500,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    centeredSlides: false,
});


window.addEventListener("scroll", function () {
    // navbar
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        navbar.style.width = "90%";
        navbar.style.margin = "0 auto";
        navbar.style.left = "2.5%";
        navbar.style.right = "2.5%";
        navbar.style.top = "2.5%";
        navbar.style.borderRadius = "40px";
    } else {
        navbar.classList.remove("scrolled");
        navbar.style.width = "100%";
        navbar.style.margin = "0";
        navbar.style.left = "0";
        navbar.style.right = "0";
        navbar.style.top = "0";
        navbar.style.borderRadius = "0";
    }
});
document.getElementById("menu-icon").addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("active");
});


