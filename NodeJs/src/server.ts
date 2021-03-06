import http from 'http';
import Koa from 'koa';
import mount from 'koa-mount';

import files from './controllers/files';
import filesBson from './controllers/files-bson';
import fileFlatBuffers from './controllers/files-fbs';
import fileMsgpck from './controllers/files-msgpck';
import fileThrift from './controllers/files-thrift';
import fileProtobuffs from './controllers/files-protobuffs';
import fileAvro from './controllers/files-avro';
import fileColfer from './controllers/files-colfer';
import fileProtostuff from './controllers/files-protostuff';

let  app = new Koa();

// routes configuration
app.use(mount('/fs', files()));
app.use(mount('/fs', filesBson()));
app.use(mount('/fs', fileFlatBuffers()));
app.use(mount('/fs', fileMsgpck()));
app.use(mount('/fs', fileThrift()));
app.use(mount('/fs', fileProtobuffs()));
app.use(mount('/fs', fileAvro()));
app.use(mount('/fs', fileColfer()));
app.use(mount('/fs', fileProtostuff()));

// server configuration

//const HOST = 'localhost';
const HTTP_PORT = 3000;
http.createServer(app.callback()).listen(HTTP_PORT, () => {console.log(`Server is listening on port ${HTTP_PORT}...`);});


// import https from 'https';
// const HTTPS_PORT = 3001;
// https.createServer(app.callback()).listen(HTTPS_PORT, HOST, () => {console.log(`Listening on https://${HOST}:${HTTPS_PORT}...`);});

// getting error ERR_SSL_VERSION_OR_CIPHER_MISMATCH when accessing HTTPS
// so disabling for now


