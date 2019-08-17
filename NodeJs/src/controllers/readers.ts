import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

async function replyOk(ctx: Koa.Context) {
    let timeNow = new Date();
    ctx.body = `Alive! It is ${timeNow} now`;
}

router
    .get('/', replyOk);

export default () => {
    return router.middleware();
};
