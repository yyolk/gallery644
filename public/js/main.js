require([
  'bootstrap', 'jquery'
],
function ( bootstrap, $ ) {
    'use strict';
    function rc(){
      return Math.floor(Math.random()*255);
    }
    //start();
    setInterval(function(){
      $('h1').css('color', 'rgb('+rc()+','+rc()+','+rc()+')');
      $('body').css('background-color', 'rgb('+rc()+','+rc()+','+rc()+')');
    }, 500);
});
