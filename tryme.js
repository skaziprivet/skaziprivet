const buttonElement1 = document.getElementById('experience');
const popupElement1 = document.getElementById('popup.experience');
const buttonElement2 = document.getElementById('hobby');
const popupElement2 = document.getElementById('popup.hobby');
const buttonElement3 = document.getElementById('contacts');
const popupElement3 = document.getElementById('popup.contacts');

buttonElement1.addEventListener('click', () => {
    popupElement1.classList.add('popup_opened');
});

popupElement1.addEventListener('click',(evt) => {
    if (evt.target === popupElement1) {
        popupElement1.classList.remove('popup_opened');
    }
})
   
buttonElement2.addEventListener('click', () => {
    popupElement2.classList.add('popup_opened');
});

popupElement2.addEventListener('click',(evt) => {
    if (evt.target === popupElement2) {
        popupElement2.classList.remove('popup_opened');
    }
})

buttonElement3.addEventListener('click', () => {
    popupElement3.classList.add('popup_opened');
});

popupElement3.addEventListener('click',(evt) => {
    if (evt.target === popupElement3) {
        popupElement3.classList.remove('popup_opened');
    }
})

var slideIndex = 0;
showSlides ();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
   slides [slideIndex-1].style.display = "block";
   setTimeout(showSlides, 4000);
   dots [slideIndex-1].className += "active";
 }
 