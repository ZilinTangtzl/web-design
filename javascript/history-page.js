let images = document.querySelectorAll('main > div > img');
// alert(images.length);

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

function changeOpacity() {
    images[1].style.opacity = '0.5';
    images[2].style.opacity = '0.5';
    images[3].style.opacity = '0.5';
    images[4].style.opacity = '0.5';
    images[5].style.opacity = '0.5';

    this.style.opacity = '1';
}

function resetOpacity() {
    images[1].style.opacity = '1'; // reset opacity of each image
    images[2].style.opacity = '1';
    images[3].style.opacity = '1';
    images[4].style.opacity = '1';
    images[5].style.opacity = '1';
}

// event listeners for hover on
images[1].addEventListener('pointerover', changeOpacity);
images[2].addEventListener('pointerover', changeOpacity);
images[3].addEventListener('pointerover', changeOpacity);
images[4].addEventListener('pointerover', changeOpacity);
images[5].addEventListener('pointerover', changeOpacity);

// event listeners for hover off
images[1].addEventListener('pointerout', resetOpacity);
images[2].addEventListener('pointerout', resetOpacity);
images[3].addEventListener('pointerout', resetOpacity);
images[4].addEventListener('pointerout', resetOpacity);
images[5].addEventListener('pointerout', resetOpacity);



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
