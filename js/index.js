var body = document.getElementsByTagName("body")[0];

window.onload = function(){
  var innerWidth = window.innerWidth;
  //innerWidth <= "800" ? console.log("<800") : console.log(">800");
  innerWidth <= "800" ? body.style.backgroundImage = "url('./img/main2.jpg')" : body.style.backgroundImage = "url('./img/main.jpg')";
  //innerWidth <= "800" ? document.getElementById("hdn-header-logo").src = "./img/logo2.jpg" : document.getElementById("hdn-header-logo").src = "./img/logo1.jpg";
  ElementRandomize();
  //ElementScaling();
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
$(".modal").toggleClass('animate');

function ElementRandomize() {
  var innerWidth = window.innerWidth;
  var innerHeight = window.innerHeight;

  for (i = 1; i < 3; i++) {
    var Wpos = Math.round(Math.random() * (innerWidth * 0.3));
    var Hpos = Math.round(Math.random() * (innerHeight * 0.5));

    document.getElementById("modal" + String(i)).style.top = Wpos + 'px';
    document.getElementById("modal" + String(i)).style.left = Hpos + 'px';
  }
}
/*
function ElementScaling() {
	for (i = 1; i < 3; i++) {
		$(".modal" + String(i)).toggleClass('animate');
	}
}
*/