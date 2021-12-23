var body = document.getElementsByTagName("body")[0];

window.onload = function(){
	var innerWidth = window.innerWidth;
	//innerWidth <= "800" ? console.log("<800") : console.log(">800");
	innerWidth <= "767" ? body.style.backgroundImage = "url('./img/main2.jpg')" : body.style.backgroundImage = "url('./img/main.jpg')";
}

window.onresize = function(event){
var innerWidth = window.innerWidth;
//innerWidth <= "800" ? console.log("<800") : console.log(">800");
innerWidth <= "767" ? body.style.backgroundImage = "url('./img/main2.jpg')" : body.style.backgroundImage = "url('./img/main.jpg')";
}