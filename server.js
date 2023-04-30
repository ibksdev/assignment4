var fs = require('fs');
var http = require('http');

//create a new HTTP server and specify a callback function.
var server  = http.createServer( function (req,res)
    {
        if(req.url == "/") // check  the requested url is / , if true then read the home.html elements
        {
            let data = fs.readFileSync('home.html','utf8');
            res.end(data);
        }
        else if(req.url == "/about") // check  the requested url is /about  pge, if true then read the about.html elements
        {
            let data = fs.readFileSync('about.html','utf8');
            res.end(data);
        }
        else if(req.url == "/Contact") // check  the requested url is /Contact pge, if true then read the contact.html elements
        {
            let data = fs.readFileSync('contact.html','utf8');
            res.end(data);
        }
        else {
            //if url not match then show 404 error
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('404 Error - Page Not Found');
        }

    });
//start ther server listening port 3000 and log message to the console
server.listen(3000);
console.log("Server run successfully");
