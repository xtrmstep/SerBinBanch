import Koa from 'koa';
import Router from 'koa-router';
import Bson from 'bson';
import jsonContent from '../data/data-provider';

const router = new Router();

async function streamFileBson(ctx: Koa.Context){
    let items = jsonContent.slice(1,3);

    let buffer = Bson.serialize(items).buffer;
    let binaryObj = new Uint8Array(buffer);
    let binary = Array.from(binaryObj);

    ctx.body = binary;
    ctx.set('Content-Type', 'application/bson');
}

router
    .get('/bsn', streamFileBson);

export default () => {
    return router.middleware();
};
