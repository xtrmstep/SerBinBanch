import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

async function streamFileAvro(ctx: Koa.Context){
    ctx.body = 'OK';
}

router
    .get('/avr', streamFileAvro);

export default () => {
    return router.middleware();
};
