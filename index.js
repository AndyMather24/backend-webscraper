// const http = require('http');
// const url = require('url');
const { hostname, port } = require('./config/config.js');
const { webscrape } = require('./controller/controller.js');

// console.log(hostname);
// console.log(port);

// http.createServer((req, res) => {
//     console.log(hostname);
//     res.writeHead(200);
//     const purl=url.parse(req.url,true);

//     if(purl.pathname == '/*')
//         res.end(`Route to ${ purl.pathname }`);
//     else

//     res.end('Hello World');
  
// }).listen(3000);
// console.log(`Server running at ${ hostname }:${ port }`);

const http = require('http');

const server = http.createServer((req, res) => {
    const { url } = req;
    if (url === '/') console.log('Home');
    else {
        if (req.method === 'GET') {
            // console.log(req.url);
            // webscrape(req.url);
            webscrape('https://broken-links-api.herokuapp.com/')
        }
    }
});

server.listen(port, err => {
    if (err) {
        throw err;
    } else {
        console.log('Server listening...');
    }
});
