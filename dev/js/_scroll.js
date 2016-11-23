/**
 * Created by w7 on 27.10.2016.
 */
'use strict';

var menu = document.querySelector('.menu');
var logo = document.querySelector('.logo');
var mobileMenu = document.querySelector('.mobile-menu');
var menuItems = menu.getElementsByClassName('menu__item');

menu.addEventListener('click', scrollTop);
logo.addEventListener('click', scrollTop);
mobileMenu.addEventListener('click', scrollTop);

menuItems[0].addEventListener('click',function (){changeActiveMenuItem(0)});
menuItems[1].addEventListener('click',function (){changeActiveMenuItem(1)});
menuItems[2].addEventListener('click',function (){changeActiveMenuItem(2)});
logo.addEventListener('click',function (){changeActiveMenuItem(0)});

function scrollTop() {
    setTimeout(function(){window.scrollTo(0,0);}, 100);
}

function changeActiveMenuItem(menuItemIndex) {
    menu.querySelector('.menu__item_active').classList.remove('menu__item_active');
    menuItems[menuItemIndex].classList.add('menu__item_active');
}
