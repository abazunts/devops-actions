const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3001;

const app = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
};

let server;

if (require.main === module) {
    server = http.createServer(app);
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

module.exports = { app, server };
