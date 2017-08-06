var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title:'Article One-Anuja Negi',
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
          },
    'article-two': {
            title:'Article Two-Anuja Negi',
            heading:'Article Two',
            date:'Aug 10',
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
    },
    'article-three': {
            title:'Article Three-Anuja Negi',
            heading:'Article Three',
            date:'Aug 15',
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
            }
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
      
      return htmlTemplate;
}
  
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var c=0;
app.get('/counter',function(req,res){
   c=c+1;
   res.send(c.toString());
});

app.get('/:articleName',function(req,res){
    //articleName==article-one
    var articleName=req.params.articleName;  //functionality of express
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function(req,res){
   res.sendFile(path.join(--dirname,'ui','main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
  
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
