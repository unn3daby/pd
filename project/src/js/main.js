'use strict';
const menu = document.querySelector('.burger'),
      wrapper = document.querySelector('.main__wrapper'),
      closeCanvas = document.querySelector('.btn-close');
menu.addEventListener('click', ()=> {
    wrapper.classList.remove('canvas_off');
    wrapper.classList.toggle('canvas_on');
});
closeCanvas.addEventListener('click', ()=> {
    wrapper.classList.toggle('canvas_on');
    wrapper.classList.toggle('canvas_off');
});
