

var progressBar = document.querySelectorAll(".skill-progress div");
var skillContainer = document.getElementById("skills");
//window.addEventListener("scroll",checkScroll);
var animationDone = false;

function initializeBar(){
    for(let bar of progressBar){
        bar.style.width = 0 + "%";
    }
}
initializeBar();


function fillbar(){
   for(let bar of progressBar){
       let targetWidth = bar.getAttribute("data-progress");
       let currentWidth =0;
       var interval = setInterval(function(){
           if(currentWidth>=targetWidth){
               clearInterval(interval);
               return;
           }
           currentWidth++;
           bar.style.width = currentWidth + "%";
       },20);
   }
}


function checkScroll(){
    var coordinate = skillContainer.getBoundingClientRect();
    if(!animationDone && coordinate.top <= window.innerHeight){
        animationDone = true;
        console.log("skills");
        fillbar();
    }
    else if(coordinate.top>window.innerHeight){
        animationDone=false;
        initializeBar();
    }
    
}
window.addEventListener("scroll",checkScroll);