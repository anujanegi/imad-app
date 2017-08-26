/*// Counter code
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
};*/
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

var submit=document.getElementById('submit_btn');

submit.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200)
            {
                console.log('User logged in');
                alert('Logged in mate!');
            }
            else if(request.status===403)
            {
                alert('invalid credentials');
            }
            else if(request.status===500){
                alert('Something went wrong on the server');
            }
        }
        };
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://anujanegi1.imad.hasura-app.io/login',true);
    request.setRequestHeader('content-type', 'application/json');
    request.send(JSON.stringify({username:username, password:password}));
};