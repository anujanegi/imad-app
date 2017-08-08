// Counter code
var button=document.getElementById('counter');

button.onclick=function(){
   
//request object
var request=new XMLHttpRequest();

//capture the response and store in variable
request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200)
        {
            var c=request.responseText;
            var span=document.getElementById('c');
            span.innerHTML=c.toString();
        }
    }
};
request.open('GET','hhtp://anujanegi1@imad.hasura-app.io/counter');
request.send(null);
};
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


//submit name
var n=documnet.getElementById('name');
var nam=n.value;
var submit=document.getElementIdBy('submit_btn');
submit.onclick=funtion(){
  var names=['name1','name2','name3','name4'];
  var list='';
  for(var i=0;i<names.length;i++){
      list+='<li>+names[i]+</li>';
  }
  var ul=document.getElementById('list');
  ul.innerHTML=list;
};