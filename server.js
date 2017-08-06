var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    tilte:'Article One-Anuja Negi',
    heading:'Article One',
    date:'Aug 6',
    content:`
            <p>
                Article content.Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. 
            </p>
            <p>
                Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. 
            </p>
            <p>
                Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. Article content. v
            </p>`
};

function createTemplate(data){
    var date=data.date;
    var title=data.title;
    var content=data.content;
    var heading=data.heading;
    var htmlTemplate=
        `<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet"/>
      </head>
      
      <body>
        <div class="container">
                <div>
                  <a href='/'>Home</a>
                </div>
                <hr/>
                <h3>${heading}</h3>
                
                <div>${date}</div>
                
                <div>${content}</div>
        </div>
      </body>
      </html>`;
}
  
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
    res.send(createTemplate(artilceOne);
});
app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-two.html'));
});
app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
  
  return htmlTemplate; 
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
