let menuIcon = document.querySelector('svg.menu');
let navigation = document.querySelector('nav');
let header = document.querySelector('header');

function toggleNav() {
    //alert(6);
    //alert(document.getElementsByClassName("mynavforsvg")[0].style.display == "none");
    //alert(document.getElementsByClassName("mynavforsvg")[0].style.display);
    //alert(navigation);
    if (document.getElementsByClassName("mynavforsvg")[0].style.display == "none") {
        document.getElementsByClassName("mynavforsvg")[0].style.display = "flex";
    } else {
        document.getElementsByClassName("mynavforsvg")[0].style.display = "none";
    }
    // navigation.classList.toggle('toggle');
    // alert(menuIcon);
    // alert(11);
}

// menuIcon.addEventListener('click', toggleNav);

let day = new Date().getDay(); 
let reply;

console.log('Day: ' + day);
let answer = document.getElementsByTagName('body')[0];

if (day == 1 || day == 3) {
    answer.style.backgroundImage = "url('images/greenmountain.JPG')";
} else if (day == 2 || day == 4) { 
    answer.style.backgroundImage = "url('images/greymountain1.JPG')";
} else if (day == 5 || day == 7 ){ 
    answer.style.backgroundImage = "url('images/colorfulmountain.JPG')";
} else {
    answer.style.backgroundImage = "url('images/bluemountain.JPG')";
}


function toggleLanguage() {
    let languageElements = document.querySelectorAll("[data-language]");
    for (let i = 0; i < languageElements.length; i++) {
        let element = languageElements[i];
        if (element.dataset.language === "en") {
            if (element.style.display === "none") {
                element.style.display = "";
            } else {
                element.style.display = "none";
            }
        } else if (element.dataset.language === "zh") {
            if (element.style.display === "") {
                element.style.display = "none";
            } else {
                element.style.display = "";
            }
        }
    }
}


