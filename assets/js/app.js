//SCRIPT FOR NAVBAR
let menuToggle = document.querySelector('.toggle');
let navMenu = document.querySelector('.navigation');
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}


//ADD ACTIVE CLASS IN SELECTED THUMBNAIL
let el = document.querySelectorAll('.member-thumbnail li');
for (let i = 0; i < el.length; i++) {
    el[i].onclick = function() {
        var c = 0;
        while (c < el.length) {
            el[c++].className = 'check';
        }
        el[i].className = 'check active';
    }
}

//CHANGE IMAGE ON CLICK
function imgSlider(anything) {
    document.querySelector('.crews').src = anything;
}

//Change BACKGROUND COLOR
function changeBg(color) {
    const bg = document.querySelector('.bg');
    bg.style.background = color;
}
