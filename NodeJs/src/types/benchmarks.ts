export class BenchmarkInfo {
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

export abstract class ProtocolEncoder {
    private info: BenchmarkInfo;

    constructor(info: BenchmarkInfo) {
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
