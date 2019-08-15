import Koa from 'koa';
import Router from 'koa-router';

let router = new Router();

async function replyOk(ctx: Koa.Context) {
    ctx.body = "OK. It is " + new Date();
}

router
    .get('/', replyOk);

export default () => {
    return router.middleware();
};
