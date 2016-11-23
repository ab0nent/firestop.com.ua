/**
 * Created by w7 on 27.10.2016.
 */
'use strict';

var menu = document.querySelector('.menu');
var logo = document.querySelector('.logo');
var mobileMenu = document.querySelector('.mobile-menu');

menu.addEventListener('click', scrollTop);
logo.addEventListener('click', scrollTop);
mobileMenu.addEventListener('click', scrollTop);

function scrollTop() {
    setTimeout(function(){window.scrollTo(0,0);}, 100);
}
