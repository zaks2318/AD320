var http = require('http');

var server = http.createServer(function(req, res){
  if (req.url == '/users'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><head><title>SomeTitle</title></head><body><ul><li>Owen</li><li>Kan</li><li>Wen</li><li>Cindy</li><li>Bobby</li></ul></body></html>')
    res.end();
  }
  else if(req.url == '/work'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({message: "This is my first http OMG so cool!!"}));
    res.end();
  }
});

server.listen(8000);