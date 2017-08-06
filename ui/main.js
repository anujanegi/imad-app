console.log('Loaded!');
var ele = document.getElementById('main-hi');
ele.innerHTML='hi!';
var img=documnet.getElementById('o');
var marginRight=0;
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var m=setInterval(moveRight,50);
}