var http = require('http');

var server = http.createServer(function(req, res){
  if (req.method == 'GET' && req.url == '/users'){  //When the require method is GET and  URL with /users response the list of name.
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><head><title>SomeTitle</title></head><body><ul><li>Owen</li><li>Kan</li><li>Wen</li><li>Cindy</li><li>Bobby</li></ul></body></html>')
    res.end();
  }
  else if(req.method == 'POST' && req.url == '/work'){ //When the require method is POST and URL with /work response the json message.
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({message: "This is my first http OMG so cool!!"}));
    res.end();
  }
});

server.listen(8000);