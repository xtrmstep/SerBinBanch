import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

async function replyOk(ctx: Koa.Context) {
    let timeNow = new Date();
    ctx.body = `Alive! It is ${timeNow} now`;
}

async function readFileBson(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function readFileFlatBuffers(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function readFileMessagePack(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function readFileProtocolBuffers(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function readFileThrift(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function readFileAvro(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function readFileColfer(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function readFileProtostuff(ctx: Koa.Context){
    ctx.body = 'OK';
}


router
    .get('/', replyOk)
    .get('/bsn', readFileBson)
    .get('/flb', readFileFlatBuffers)
    .get('/mpk', readFileMessagePack)
    .get('/pbf', readFileProtocolBuffers)
    .get('/thf', readFileThrift)
    .get('/avr', readFileAvro)
    .get('/col', readFileColfer)
    .get('/psf', readFileProtostuff);

export default () => {
    return router.middleware();
};
