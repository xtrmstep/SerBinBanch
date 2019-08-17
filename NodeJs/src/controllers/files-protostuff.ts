import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

async function streamFileProtostuff(ctx: Koa.Context){
    ctx.body = 'OK';
}

router
    .get('/psf', streamFileProtostuff);

export default () => {
    return router.middleware();
};
