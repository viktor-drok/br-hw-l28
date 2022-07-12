"use strict"

document.getElementsByClassName("name-btn")[0].onclick =
    function() { greeting()
};

function greeting() {
    let user;
    user = document.getElementById("name").value;
    document.getElementById("user-name").innerHTML = "Привіт, " + user;
};





document.querySelector(".age-btn").onclick =
    function() { age()
};

function age() {
    const currentYear = 2022;
    const birthYear = document.querySelector('#age').value;
    document.querySelector('.user-age').innerHTML = `Вік - ${currentYear - birthYear} роки`;
};




document.querySelector('.square-btn').onclick =
    function () { square(); };

function square() {
    // Площа квадрату  S = a^2
    let side;
    side = document.querySelector('#square-side').value;
    document.querySelector('.square-area').innerHTML = 'Площа квадрату ' + 
        side ** 2;
}



document.querySelector('.radius-btn').onclick =
    function () { squareCircle(); };

function squareCircle() {
    // Площа круга S = Pi*r^2
    // Довжина круга C = 2*Pi*r
    const pI = 3.14;
    let radius;
    radius = document.querySelector('#radius').value;
    document.querySelector('.circle-length').innerHTML ='Довжина круга ' +
        2 * pI * radius;
    document.querySelector('.circle-square').innerHTML = 'Площа круга ' + 
    pI * (radius ** 2);
}


document.querySelector('.speed-btn').onclick =
    function () { speed() };

function speed() {
    // Швидкість  V = s / t
    let distance;
    let time;
    distance = document.querySelector('#distance').value;
    time = document.querySelector('#time').value;

    document.querySelector('.speed').innerHTML = 'Розрахункова швидкість ' + 
        distance / time;
}