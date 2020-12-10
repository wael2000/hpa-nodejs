var http = require('http');
var port = 8080;
var ip = '0.0.0.0';
var server = http.createServer(function (req, res) {
   req.on('data', function (data) {
   });   
   if (req.url === "/") {
      req.on('end', function () {
         console.log("Invoked");
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write('<html><head><title></title></head>');
         res.write('<body>');
         res.write('<div>');
         res.write('Hello World');
         res.write('</div>');  
         res.write('</body>');
         res.write('</html>');
         res.end('\n');
      });
   } else if (req.url === "/started") {
      req.on('end', function () {
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write('<html><head><title></title></head>');
         res.write('<body>');
         res.write('<div>');
         res.write('Started');
         res.write('</div>');  
         res.write('</body>');
         res.write('</html>');
         res.end('\n');
      });
   } else if (req.url === "/ready") {
      req.on('end', function () {
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write('<html><head><title></title></head>');
         res.write('<body>');
         res.write('<div>');
         res.write('Ready');
         res.write('</div>');  
         res.write('</body>');
         res.write('</html>');
         res.end('\n');
      });
   } else if (req.url === "/live") {
      req.on('end', function () {
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write('<html><head><title></title></head>');
         res.write('<body>');
         res.write('<div>');
         res.write('live');
         res.write('</div>');  
         res.write('</body>');
         res.write('</html>');
         res.end('\n');
      });
   }

});
server.listen(port,ip, function(){
      var address = server.address();
      console.log('Server is running');
});

