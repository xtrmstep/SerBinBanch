import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

async function replyOk(ctx: Koa.Context) {
    let timeNow = new Date();
    ctx.body = `Alive! It is ${timeNow} now`;
}

async function streamFileBson(ctx: Koa.Context){
    ctx.body = 'OK';
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
