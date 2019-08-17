import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

async function streamFileProtocolBuffers(ctx: Koa.Context){
    ctx.body = 'OK';
}

router
    .get('/pbf', streamFileProtocolBuffers);

export default () => {
    return router.middleware();
};
