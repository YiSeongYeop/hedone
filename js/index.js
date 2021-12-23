var body = document.getElementsByTagName("body")[0];

window.onresize = function(event){
var innerWidth = window.innerWidth;
//innerWidth <= "800" ? console.log("<800") : console.log(">800");
innerWidth <= "1100" ? body.style.backgroundImage = "url('./img/main2.jpg')" : body.style.backgroundImage = "url('./img/main.jpg')";
}