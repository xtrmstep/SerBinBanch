import Koa from 'koa';
import Router from 'koa-router';
import Axios from 'axios';
import Bson from 'bson';

const ENDPOINT_URL = 'http://localhost:3000/fs';
const router = new Router();

async function readFileBson(ctx: Koa.Context){
    ctx.body = 'OK';

    const url = `${ENDPOINT_URL}/bsn`;

    let bsonResponse = await Axios.get(url);
    let binary = Uint8Array.from(bsonResponse.data);
    let buffer = Buffer.from(binary);
    let json = Bson.deserialize(buffer);

    console.log(json);
}

router
    .get('/bsn', readFileBson);

export default () => {
    return router.middleware();
};
