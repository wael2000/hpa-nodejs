const http = require('http');
const url = require('url');

// recursive call --> CPU intense
function fibo(n) {
    if (n < 2)
        return 1;
    else   
        return fibo(n - 2) + fibo(n - 1);
}

const server = http.createServer();
server.on('request', async (req, res) => 
{
     if (req.url === "/started") {
        res.end('Started');
     } else if (req.url === "/ready") {
        res.end('ready');
     } else if (req.url === "/live") {
        res.end('live');
     } else {
        const queryObject = url.parse(req.url,true).query;
        let num = 5;
        if (queryObject.num)
            num=queryObject.num;
        // memory intense
        let arr = Array(num * 200000).fill("some string");   // num * 200K 
        const data = await someAsyncFunc(num);
        res.end(JSON.stringify(data));
        arr.reverse();
     }
});

function someAsyncFunc(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({data: fibo(num)});
        }, 1);
    });
}

server.listen(8080);

require('appmetrics-dash').monitor({
    appmetrics: require('appmetrics'),
    server: server,
});