

const http = require('http');
const url = require('url');

//var appmetrics = require('appmetrics');

/* var monitoring = appmetrics.monitor();
monitoring.on('initialized', function (env) {
    env = monitoring.getEnvironment();
    for (var entry in env) {
        console.log(entry + ':' + env[entry]);
    };
 });
 
 monitoring.on('cpu', function (cpu) {
    console.log('[' + new Date(cpu.time) + '] CPU: ' + cpu.process + ' CPU-System:' + cpu.system);
 });
*/


function fibo(n) {
    if (n < 2)
        return 1;
    else   
        return fibo(n - 2) + fibo(n - 1);
}


const server = http.createServer();

server.on('request', async (req, res) => 
{
    let arr = Array(1000000).fill("some string");
    const queryObject = url.parse(req.url,true).query;
    let num = 5;
    if (queryObject.num)
        num=queryObject.num;
    const data = await someAsyncFunc(num);
    res.end(JSON.stringify(data));
    arr.reverse();
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