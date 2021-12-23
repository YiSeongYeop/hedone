var body = document.getElementsByTagName("body")[0];
/*
window.onload = function(){
var innerWidth = window.innerWidth;
//innerWidth <= "800" ? console.log("<800") : console.log(">800");
innerWidth <= "800" ? body.style.backgroundImage = "url('./img/main2.jpg')" : body.style.backgroundImage = "url('./img/main.jpg')";
}

window.onresize = function(event){
var innerWidth = window.innerWidth;
//innerWidth <= "800" ? console.log("<800") : console.log(">800");
innerWidth <= "800" ? body.style.backgroundImage = "url('./img/main2.jpg')" : body.style.backgroundImage = "url('./img/main.jpg')";
}
*/
window.addEventListener("load", onLoadFunction);

function onLoadFunction(e){
var innerWidth = window.innerWidth;
//innerWidth <= "800" ? console.log("<800") : console.log(">800");
innerWidth <= "800" ? body.style.backgroundImage = "url('./img/main2.jpg')" : body.style.backgroundImage = "url('./img/main.jpg')";

window.addEventListener("resize", onResizeFunction);
}

function onResizeFunction (e){
var innerWidth = window.innerWidth;
//innerWidth <= "800" ? console.log("<800") : console.log(">800");
innerWidth <= "800" ? body.style.backgroundImage = "url('./img/main2.jpg')" : body.style.backgroundImage = "url('./img/main.jpg')";

}