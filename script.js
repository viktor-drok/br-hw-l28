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
    const birthYear = document.querySelector('.age').value;
    document.querySelector('.user-age').innerHTML = `Вік - ${currentYear - birthYear} роки`;
}