const http = require('node:http');

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'Docker Build Demo';
const VERSION = process.env.VERSION || '1.0.0';


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello from APPLICATION:${APP_NAME} VERSION: ${VERSION} PORT: ${PORT}  \n`);
});


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});