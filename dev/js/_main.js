/**
 * Created by w7 on 27.10.2016.
 */
'use strict';

var navigationPanel = document.querySelector('header');

window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if(scrolled){
        navigationPanel.classList.add('nav__scrolled');
    }else{
        navigationPanel.classList.remove('nav__scrolled');
    }
};
