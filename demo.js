/*var navMenu = document.querySelectorAll(".navm li a");
for(var i=0;i<navMenu.length;i++){
    navMenu[i].addEventListener("click",function(event){
        event.preventDefault();
        var targetSectionId = this.innerText.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        var interval = setInterval(function(){
            var coor = targetSection.getBoundingClientRect();
            if(coor.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
} */


var navMenu = document.querySelectorAll(".navm li a");
var interval;
for(var i=0;i<navMenu.length;i++){
    navMenu[i].addEventListener("click",function(event){
        event.preventDefault();
        var targetSectionId = this.innerText.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        // interval = setInterval(scrollVertical,20,targetSection);

        interval = setInterval(function(){
            scrollVertical(targetSection);
        },20);
    });
}

function scrollVertical(targetSection){
    var coor = targetSection.getBoundingClientRect();
    if(coor.top<=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}