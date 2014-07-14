$(document).ready(function(){

//local links are loaded on same window, foreign links are 
//loaded in new window/tab
$("a").attr("target", function() {
if (this.host == location.host) return "_self"
else return "_blank"; });﻿

  //for cloud animation
    function newPos() {
       var w = $(window).width();
       var nw = Math.floor(Math.random() * w);
        
       var nh = Math.floor(Math.random() * 28)+'%';
        
       return [nw, nh];
    }
  //stop required to prevent memory leak
    function animateCloud(image){
       $(image).stop(true).animate({        
            top: newPos()[1],
            left: newPos()[0]
       }, 10000, function(){
           animateCloud(image);
       });
    }   

    animateCloud($("#cloud0"));
    animateCloud($("#cloud1"));
    animateCloud($("#cloud2"));


});