import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

async function streamFileThrift(ctx: Koa.Context){
    ctx.body = 'OK';
}

router
    .get('/thf', streamFileThrift);

export default () => {
    return router.middleware();
};
