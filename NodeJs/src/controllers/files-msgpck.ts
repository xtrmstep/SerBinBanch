import Koa from 'koa';
import Router from 'koa-router';
import msgpack from 'msgpack-lite';
import jsonContent from '../data/data-provider';

const router = new Router();

async function streamFileMessagePack(ctx: Koa.Context){
    let items = jsonContent.slice(1,3);
    let buffer = msgpack.encode(items);

    let binaryObj = new Uint8Array(buffer);
    let binary = Array.from(binaryObj);

    ctx.body = binary;
    // ctx.set('Content-Type', 'application/msgpck');
    ctx.set('Content-Type', 'application/octet-stream');
}

router
    .get('/mpk', streamFileMessagePack);

export default () => {
    return router.middleware();
};
