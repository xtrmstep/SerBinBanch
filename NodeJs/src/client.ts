import http from 'http';
import Koa from 'koa';
import mount from 'koa-mount';

import readers from './controllers/readers';
import readersBson from './controllers/readers-bson';
import readersFbs from './controllers/readers-fbs';
import readersMsgpck from './controllers/readers-msgpck';
import readersThrifts from './controllers/readers-thrift';
import readersProtobuffs from './controllers/readers-protobuffs';
import readersAvro from './controllers/readers-avro';
import readersColfer from './controllers/readers-colfer';
import readersProtostuff from './controllers/readers-protostuff';

let  app = new Koa();

// routes configuration
app.use(mount('/readers', readers()));
app.use(mount('/readers', readersBson()));
app.use(mount('/readers', readersFbs()));
app.use(mount('/readers', readersMsgpck()));
app.use(mount('/readers', readersThrifts()));
app.use(mount('/readers', readersProtobuffs()));
app.use(mount('/readers', readersAvro()));
app.use(mount('/readers', readersColfer()));
app.use(mount('/readers', readersProtostuff()));

// server configuration

const HOST = 'localhost';
const HTTP_PORT = 8080;
http.createServer(app.callback()).listen(HTTP_PORT, HOST, () => {console.log(`Client is listening on http://${HOST}:${HTTP_PORT}...`);});
