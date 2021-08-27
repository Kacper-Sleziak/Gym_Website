var open_button = document.getElementById("menu_button");
var close_buton = document.getElementById("close_button");
var links_container = document.getElementById("links_container");
var side_nav = document.getElementById("side_navbar");

function open_side_nav() {
    open_button.classList.toggle("change");
    links_container.style.opacity = "1";
    side_nav.style.width = "250px";
}

function close_side_nav() {
    open_button.classList.toggle("change");
    links_container.style.opacity = "0";
    side_nav.style.width = "0";
}

open_button.addEventListener("click", open_side_nav);
close_buton .addEventListener("click", close_side_nav);