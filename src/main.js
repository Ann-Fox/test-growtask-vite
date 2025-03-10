import "./style.scss";
import "swiper/css/navigation";
import "swiper/css";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

// Меню бургер
const menuButton = document.querySelector(".dropbtn");
menuButton.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//Swiper
new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    cssMode: true,
    navigation: {
        nextEl: ".next-Btn",
        prevEl: ".prev-btn",
    },
    mousewheel: true,
    keyboard: true,
    allowTouchMove: true,
    // simulateTouch: true,
    breakpoints: {
        0: {
            spaceBetween: 20,
            slidesPerView: 1.2,
        },
        577: {
            spaceBetween: 20,
            slidesPerView: 2.6,
        },
        991: {
            spaceBetween: 20,
            slidesPerView: 4,
        },
        1401: {
            spaceBetween: 20,
            slidesPerView: 4,
        },
    },

    // breakpoints: {}
});

// Presentation image
const presentationBtns = document.querySelectorAll(".presentation__radio");

presentationBtns.forEach((el, index) => {
    el.addEventListener("change", function () {
        if (el.checked) {
            image.src = `assets/images/presentation/image-${index + 1}.jpg`;
        } else {
            image.src = `assets/images/presentation/image-${index + 1}.jpg`;
        }
    });
});

//  Section FAQ
const faqWrapper = document.querySelectorAll(".faq__item");

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".faq__item");

    items.forEach(function (item) {
        const toggleAnswer = item.querySelector(".answer");
        const toggleButton = item.querySelector(".rotateButton");

        item.addEventListener("click", function (e) {
            if (toggleAnswer.classList.contains("answer__active")) {
                toggleAnswer.classList.remove("answer__active");
                toggleButton.classList.toggle("rotate");
            } else {
                toggleAnswer.classList.add("answer__active");
                toggleButton.classList.toggle("rotate");
            }
        });
    });
});

// Кнопка checkbox
const btnEl = document.querySelector(".checkbox-icon");
if (btnEl) {
    btnEl.addEventListener("click", function (e) {
        btnEl.classList.toggle("active");
    });
}
