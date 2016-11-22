/**
 * Created by w7 on 27.10.2016.
 */
'use strict';

var menu = document.querySelector('.menu');
var logo = document.querySelector('.logo');

menu.addEventListener('click', ScrollTop);
logo.addEventListener('click', ScrollTop);

function ScrollTop() {
    setTimeout(function(){window.scrollTo(0,0);}, 1);
}
