

var progressBar = document.querySelectorAll(".skill-progress > div");

function initializebar(bar){
        bar.setAttribute("data-value",false);
        bar.style.width = 0 + "%";
}
for(var bar of progressBar){
    initializebar(bar);
}


function fillbar(bar){
   var currentProgress = 0;
   var progress = bar.getAttribute("data-progress");
   var interval = setInterval(function(){
        if(currentProgress>= progress){
            clearInterval(interval);
            return;
        }
        currentProgress++;
        bar.style.width=currentProgress+"%";
   },5);
}


function checkScroll(){
    for(let bar of progressBar){
        var coordinate = bar.getBoundingClientRect();
        if((bar.getAttribute("data-value")=="false") && (coordinate.top <= (window.innerHeight - coordinate.height))){
            bar.setAttribute("data-value",true);
            fillbar(bar);
        }
        else if(coordinate.top>window.innerHeight){
            bar.setAttribute("data-value",false);
            initializebar(bar);
           
        }

    }
}

window.addEventListener("scroll",checkScroll);