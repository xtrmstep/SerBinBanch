import Koa from 'koa';
import Router from 'koa-router';
import Axios from 'axios';

const ENDPOINT_URL = 'http://localhost:3000/fs';
const router = new Router();

async function replyOk(ctx: Koa.Context) {
    let timeNow = new Date();
    ctx.body = `Alive! It is ${timeNow} now`;
}

async function readFileProtocolBuffers(ctx: Koa.Context){
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
    .get('/pbf', readFileProtocolBuffers)
    .get('/avr', readFileAvro)
    .get('/col', readFileColfer)
    .get('/psf', readFileProtostuff);

export default () => {
    return router.middleware();
};
