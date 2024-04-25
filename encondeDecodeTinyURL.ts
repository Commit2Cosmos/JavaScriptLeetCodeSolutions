class Codec {
    encodeMap: Map<any, any>;
    decodeMap: Map<any, any>;
    base: string;

    constructor() {
        this.encodeMap = new Map();
        this.decodeMap = new Map();
        this.base = "http://tinyurl.com/";
    }

    encode(longUrl: string) {
        if (!this.encodeMap.has(longUrl)) {
            const shortUrl = this.base + (this.encodeMap.size + 1);
            this.encodeMap.set(longUrl, shortUrl);
            this.decodeMap.set(shortUrl, longUrl);
        }
        
        return this.encodeMap.get(longUrl);
    }

    decode(shortUrl: string) {
        if (this.decodeMap.has(shortUrl)) {
            return this.decodeMap.get(shortUrl);
        }
        return false
    }
}

const url = "http://someURL.com/jhgvbuhgbn";
const url2 = "http://someURL.com/jhgvbu";
const url3 = "http://someURL.com/jhgvbuhgbnhgfcvbn";


const codec = new Codec();
console.log(codec.encode(url));
console.log(codec.encode(url2));
console.log(codec.encode(url3));