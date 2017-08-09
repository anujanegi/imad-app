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
var submit=document.getElementIdBy('submit_btn');

submit.onclick=function(){
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200)
            {
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                    list+='<li>+names[i]+</li>';
                }
                var ul=document.getElementById('list');
                ul.innerHTML=list;
            }
        }
        };
    var n=document.getElementById('name');
    var nam=n.value;
    request.open('GET','http://anujanegi1.imad.hasura-app.io/submit-name?name='+nam,true);
    request.send(null);
};