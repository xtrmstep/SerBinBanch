import Koa from 'koa';
import Router from 'koa-router';
import jsonContent from '../data/data-provider';

const router = new Router();

async function streamFileFlatBuffers(ctx: Koa.Context){
    ctx.body = "OK";
}

router
    .get('/flb', streamFileFlatBuffers);

export default () => {
    return router.middleware();
};
