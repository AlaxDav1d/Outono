var sla = document.querySelector("nav");
var cont = document.querySelector("#cont");
function aparece(){
    sla.style.opacity = 1;
    sla.style.transitionDuration = "2s";
    cont.style.paddingRight = 200;
    cont.style.transitionDuration = "1.5s";
}
function some(){
    sla.style.opacity = 0 ;
    cont.style.paddingRight = 0;
    sla.style.transitionDuration = "800ms";
}