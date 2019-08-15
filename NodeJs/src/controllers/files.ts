import fs from 'fs';
import Koa from 'koa';
import Router from 'koa-router';
import Bson from 'bson';

// load JSON to memory when server is started
let content = fs.readFileSync('./src/data/file1mb.json');
let jsonContent = JSON.parse(content.toString());

const router = new Router();

async function replyOk(ctx: Koa.Context) {
    let timeNow = new Date();
    ctx.body = `Alive! It is ${timeNow} now`;
}

// this list of methods would start streaming JSON item by item

async function streamFileBson(ctx: Koa.Context){
    let items = jsonContent.slice(1,3);
    let bsonBuffer = Bson.serialize(items);
    console.log(bsonBuffer);

    ctx.set('Content-Type', 'application/bson');
    ctx.body = bsonBuffer;
}

async function streamFileFlatBuffers(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function streamFileMessagePack(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function streamFileProtocolBuffers(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function streamFileThrift(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function streamFileAvro(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function streamFileColfer(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function streamFileProtostuff(ctx: Koa.Context){
    ctx.body = 'OK';
}


router
    .get('/', replyOk)
    .get('/bsn', streamFileBson)
    .get('/flb', streamFileFlatBuffers)
    .get('/mpk', streamFileMessagePack)
    .get('/pbf', streamFileProtocolBuffers)
    .get('/thf', streamFileThrift)
    .get('/avr', streamFileAvro)
    .get('/col', streamFileColfer)
    .get('/psf', streamFileProtostuff);

export default () => {
    return router.middleware();
};
