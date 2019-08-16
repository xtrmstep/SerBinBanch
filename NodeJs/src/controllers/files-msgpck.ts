import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

async function streamFileMessagePack(ctx: Koa.Context){
    ctx.body = 'OK';
}

router
    .get('/mpk', streamFileMessagePack);

export default () => {
    return router.middleware();
};
