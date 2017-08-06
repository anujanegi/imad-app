// Counter code
var button=document.getElementById('counter');
var c=0;
button.onclick=function(){
    c=c+1;
    var span=document.getElementById('c');
    span.innerHTML=c.toString();
}

/*console.log('Loaded!');
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
}*/
