console.log('Loaded!');
var ele = document.getElementById('main-hi');
ele.innerHTML='hi!';
var img=documnet.getElementById('o');
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var m=setInterval(moveRight,100);
}