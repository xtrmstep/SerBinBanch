import http from 'http';
import Koa from 'koa';
import mount from 'koa-mount';

import readers from './controllers/readers';

let  app = new Koa();

// routes configuration
app.use(mount('/readers', readers()));

// server configuration

const HOST = 'localhost';
const HTTP_PORT = 8080;
http.createServer(app.callback()).listen(HTTP_PORT, HOST, () => {console.log(`Client is listening on http://${HOST}:${HTTP_PORT}...`);});
