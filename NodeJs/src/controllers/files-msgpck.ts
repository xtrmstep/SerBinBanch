import Koa from 'koa';
import Router from 'koa-router';
import msgpack from 'msgpack-lite';
import jsonContent from '../data/data-provider';

const router = new Router();

class BenchmarkInfo {
    protocol: string;
    originalSize: number;
    encodeTime: [number, number];
    encodedSize: number;

    constructor(protocol: string) {
        this.protocol = protocol;
        this.originalSize = 0;
        this.encodeTime = [0, 0];
        this.encodedSize = 0;
    }

    readOriginalObject(obj: any) {
        this.originalSize = this.byteSize(obj);
    }

    private byteSize(obj: any) {
        let json = JSON.stringify(obj);
        let jsonByteSize = Buffer.byteLength(json, 'utf8');
        return jsonByteSize;
    }

    private formatByteSize(bytes: number) {
        const precision = 2;
        if (bytes < 1024) return bytes + " bytes";
        else if (bytes < 1048576) return (bytes / 1024).toFixed(precision) + " KiB";
        else if (bytes < 1073741824) return (bytes / 1048576).toFixed(precision) + " MiB";
        else return (bytes / 1073741824).toFixed(precision) + " GiB";
    };

    toConsole() {
        console.log(`Elapsed time: ${this.encodeTime[1] / 1000000}ms`);
        console.log(`Original size: ${this.formatByteSize(this.originalSize)}`);
        console.log(`Encoded size: ${this.formatByteSize(this.encodedSize)}`);
        console.log(`Size ratio: ${(this.encodedSize / this.originalSize * 100).toFixed(2)}%`);
    }
}

abstract class ProtocolEncoder {
    private info: BenchmarkInfo;

    constructor(info: BenchmarkInfo){
        this.info = info;
    }

    protected abstract encoder(obj: any): Buffer;

    public encode(obj: any): Uint8Array {

        this.info.readOriginalObject(obj);

        const encodeTimeStart = process.hrtime();

        const buffer = this.encoder(obj);
        const binary = Uint8Array.from(buffer);

        this.info.encodeTime = process.hrtime(encodeTimeStart);
        this.info.encodedSize = binary.byteLength;
        return binary;
    }
}

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
