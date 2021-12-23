test();
function test() {
    LoadingWithMask('./img/test.jpg');
    setTimeout("closeLoadingWithMask()", 1000);
}
 
function LoadingWithMask(gif) {
    //화면의 높이와 너비를 구합니다.
    var maskHeight = $(document).height();
    var maskWidth  = window.document.body.clientWidth;
     
    //화면에 출력할 마스크를 설정해줍니다.
    var mask       ="<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
    var loadingImg ='';
      
    loadingImg +=" <img src='"+ gif +"' style='position: absolute; display: block; margin: 0px auto;'/>";
 
    //화면에 레이어 추가
    $('body')
        .append(mask)
 
    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.
    $('#mask').css({
            'width' : maskWidth,
            'height': maskHeight,
            'opacity' :'0.8'
    });
  
    //마스크 표시
    $('#mask').show();
  
    //로딩중 이미지 표시
    $('#loadingImg').append(loadingImg);
    $('#loadingImg').show();
}
 
function closeLoadingWithMask() {
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').empty(); 
}
//  https://kkamikoon.tistory.com/168
// 이거 왜 안돼 시바




var body = document.getElementsByTagName("body")[0];

window.onload = function(){
var innerWidth = window.innerWidth;
//innerWidth <= "800" ? console.log("<800") : console.log(">800");
innerWidth <= "800" ? body.style.backgroundImage = "url('./img/main2.jpg')" : body.style.backgroundImage = "url('./img/main.jpg')";
//innerWidth <= "800" ? document.getElementById("hdn-header-logo").src = "./img/logo2.jpg" : document.getElementById("hdn-header-logo").src = "./img/logo1.jpg";
ElementRandomize();
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

function ElementRandomize() {
	var innerWidth = window.innerWidth;
	var innerHeight = window.innerHeight;

	for (i=1; i<3; i++) {
		var Wpos = Math.round(Math.random()*(innerWidth*0.3));
		var Hpos = Math.round(Math.random()*(innerHeight*0.5));

		document.getElementById("modal"+String(i)).style.top = Wpos+'px';
		document.getElementById("modal"+String(i)).style.left = Hpos+'px';
	}
}

