import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

async function replyOk(ctx: Koa.Context) {
    let timeNow = new Date();
    ctx.body = `Alive! It is ${timeNow} now`;
}

// this list of methods would start streaming JSON item by item
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
    .get('/avr', streamFileAvro)
    .get('/col', streamFileColfer)
    .get('/psf', streamFileProtostuff);

export default () => {
    return router.middleware();
};
