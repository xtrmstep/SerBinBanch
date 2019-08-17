import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

async function streamFileColfer(ctx: Koa.Context){
    ctx.body = 'OK';
}

router
    .get('/col', streamFileColfer);

export default () => {
    return router.middleware();
};
