function toggleColorMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");

}



let date = new Date();
let day = date.getDay(); 
let reply;

let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();
let currentDate = `${currentMonth}-${currentDay}-${currentYear}`;

if (day >= 1 && day <= 5) {
    reply = `Today is ${currentDate}, a weekday. Still have to work! :(`;
} else {
    reply = `Today is ${currentDate}. It is weekend now, have a rest. :)`;
}

let greeting = document.getElementById('greeting');
greeting.textContent = reply;
