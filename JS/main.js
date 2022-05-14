
// toggle menu
const burgerMenu = document.querySelector('.burger');

const menuIsActive = () => {
    burgerMenu.classList.toggle('active');
};

burgerMenu.addEventListener('click', menuIsActive);





const burgerContent = document.querySelector('.navbar-mobile-menu');
const burger = document.querySelector('.toggle-box');


burger.addEventListener('click',function(){
    burgerContent.classList.toggle('opened-menu');
    document.body.classList.toggle('lock')
})

const scrollBtn = document.querySelector(".scroll-to-top");

const btnVisibility = () => {
    if (window.scrollY > 100) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
    });
});