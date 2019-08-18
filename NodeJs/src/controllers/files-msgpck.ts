import Koa from 'koa';
import Router from 'koa-router';
import msgpack from 'msgpack-lite';
import jsonContent from '../data/data-provider';
import {BenchmarkInfo, ProtocolEncoder} from '../types/benchmarks';

const router = new Router();

class MsgpckProtocolEncoder extends ProtocolEncoder {

    encoder(obj: any): Buffer {
        const buffer: Buffer = msgpack.encode(obj);
        return buffer;
    }
}

async function processWithMsgpck(ctx: Koa.Context) {
    const info = new BenchmarkInfo("MessagePack");
    const encoder = new MsgpckProtocolEncoder(info);
    const encoded = encoder.encode(jsonContent);

    info.toConsole();

    ctx.body = encoded;
    ctx.set('Content-Type', 'application/octet-stream');
}

async function processWithTest(ctx: Koa.Context) {
    const buffer: Buffer = Buffer.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const arr = new Int8Array(buffer.buffer, buffer.byteOffset, buffer.length);
    const arr2 = Uint8Array.from(buffer);

    console.log(buffer);
    console.log(arr);
    console.log(arr2);

    console.log(`buffer.byteLength: ${buffer.byteLength}`);
    console.log(`arr.byteLength: ${arr.byteLength}`);
    console.log(`arr2.byteLength: ${arr2.byteLength}`);
}

async function streamFileMessagePack(ctx: Koa.Context) {

    await processWithMsgpck(ctx);
    //await processWithTest(ctx);
}

router
    .get('/mpk', streamFileMessagePack);

export default () => {
    return router.middleware();
};
