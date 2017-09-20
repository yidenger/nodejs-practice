const fs = require('fs');
const http = require('http');
const profiler = require('v8-profiler');

profiler.startProfiling('', true);

setTimeout(() => {
    console.log('stop');
    let result = profiler.stopProfiling('');
    fs.writeFileSync('./node.cpu.json', JSON.stringify(result));
    result.delete();
}, 60 * 1000);

function testTryCatch(req, res) {
    try {
        res.end('tryCatchStatement success!');
    }
    catch(e) {
        res.end('tryCatchStatement ' + e.message);
    }
}

function testSleep(req, res) {
    const now = Date.now();
    while (Date.now() - now < 200) {}
    res.end('testSleep success');
}

http.createServer(function(req, res) {
    if(req.url === '/tryCatchStatement') {
        return testTryCatch(req, res);
    }
    if(req.url === '/sleep') {
        return testSleep(req, res);
    }

    res.end('404');
}).listen(8081);