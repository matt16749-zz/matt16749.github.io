$(document).ready(function(){

function newPos() {
   var w = $(window).width();
   var nw = Math.floor(Math.random() * w);
    
   var nh = Math.floor(Math.random() * 30)+'%';
    
   return [nw, nh];
}

function animateCloud(image){
   $(image).animate({        
        top: newPos()[1],
        left: newPos()[0]
   }, 3000, function(){
       animateCloud(image);
   });
}   

animateCloud($("#cloud0"));
animateCloud($("#cloud1"));
animateCloud($("#cloud2"));

});