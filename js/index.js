var body = document.getElementsByTagName("body")[0];

window.onload = function(){
  var innerWidth = window.innerWidth;
  //innerWidth <= "800" ? console.log("<800") : console.log(">800");
  innerWidth <= "800" ? body.style.backgroundImage = "url('./img/main2.jpg')" : body.style.backgroundImage = "url('./img/main.jpg')";
  //innerWidth <= "800" ? document.getElementById("hdn-header-logo").src = "./img/logo2.jpg" : document.getElementById("hdn-header-logo").src = "./img/logo1.jpg";
  //ElementRandomize();
  ElementLoop();
}

window.onresize = function(event){
  var innerWidth = window.innerWidth;
  //innerWidth <= "800" ? console.log("<800") : console.log(">800");
  innerWidth <= "800" ? body.style.backgroundImage = "url('./img/main2.jpg')" : body.style.backgroundImage = "url('./img/main.jpg')";
  //innerWidth <= "800" ? document.getElementById("hdn-header-logo").src = "./img/logo2.jpg" : document.getElementById("hdn-header-logo").src = "./img/logo1.jpg";
}

$(".modal").draggable({
  containment: "body", scroll: false
});

/*
function ElementRandomize() {
  var innerWidth = window.innerWidth;
  var innerHeight = window.innerHeight;

  for (i = 1; i < 3; i++) {
    var Wpos = Math.round(Math.random() * (innerWidth * 0.3));
    var Hpos = Math.round(Math.random() * (innerHeight * 0.5));

    $("#modal" + String(i)).toggleClass('animate');
    document.getElementById("modal" + String(i)).style.top = Wpos + 'px';
    document.getElementById("modal" + String(i)).style.left = Hpos + 'px';
  }
}
*/
var j = 1;
function ElementLoop() {
  setTimeout(function() {
  	var Wpos = Math.round(Math.random() * (innerWidth * 0.3));
    var Hpos = Math.round(Math.random() * (innerHeight * 0.5));

    $("#modal" + String(j)).toggleClass('animate');
    document.getElementById("modal" + String(j)).style.top = Wpos + 'px';
    document.getElementById("modal" + String(j)).style.left = Hpos + 'px';
  	j++;
  	if (j < 5) {
  		ElementLoop();
  	}
  }, 300)
}