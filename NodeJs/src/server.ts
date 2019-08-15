import http from 'http';
// import https from 'https';

import app from './app';

const HOST = 'localhost';
const HTTP_PORT = 3000;
// const HTTPS_PORT = 3001;

const httpServer = http.createServer(app.callback()).listen(HTTP_PORT, HOST, () => {console.log(`Listening on http://${HOST}:${HTTP_PORT}...`);});
// getting error ERR_SSL_VERSION_OR_CIPHER_MISMATCH when accessing HTTPS
// so disabling for now
// const httpsServer = https.createServer(app.callback()).listen(HTTPS_PORT, HOST, () => {console.log(`Listening on https://${HOST}:${HTTPS_PORT}...`);});

