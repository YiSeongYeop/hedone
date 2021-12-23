var body = document.getElementsByTagName("body")[0];

window.onload = function(){
var innerWidth = window.innerWidth;
//innerWidth <= "800" ? console.log("<800") : console.log(">800");
innerWidth <= "800" ? body.style.backgroundImage = "url('./img/main2.jpg')" : body.style.backgroundImage = "url('./img/main.jpg')";
innerWidth <= "800" ? document.getElementById("hdn-header-logo").src = "./img/logo3.jpg" : document.getElementById("hdn-header-logo").src = "./img/logo1.jpg";
}

window.onresize = function(event){
var innerWidth = window.innerWidth;
//innerWidth <= "800" ? console.log("<800") : console.log(">800");
innerWidth <= "800" ? body.style.backgroundImage = "url('./img/main2.jpg')" : body.style.backgroundImage = "url('./img/main.jpg')";
innerWidth <= "800" ? document.getElementById("hdn-header-logo").src = "./img/logo2.jpg" : document.getElementById("hdn-header-logo").src = "./img/logo1.jpg";
}

document.getElementById("hdn-header-logo").src = "./img/logo2.jpg";