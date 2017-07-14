class Cipher {
    
    constructor () {
        this.key = getKey(arguments[0]);
    }
    
    encode (plainText) {
        return [...plainText]
            .map((c, i) => String
                .fromCharCode(coder(offset(this.key, c, i, "+"), "encode")))
            .join("");
    }
    
    decode (codedText) {
        return [...codedText]
            .map((c, i) => String
                .fromCharCode(coder(offset(this.key, c, i, "-"), "decode")))
            .join("");
    }
}

const badFlag = new Error("Invalid flag");
const badKey = new Error("Bad key");

const offset = (key, char, ind, op) => {
    switch (op) {
        case "+": return char.charCodeAt(0) + translate(key)[ind];
        case "-": return char.charCodeAt(0) - translate(key)[ind];
        default: throw badFlag;
    }
};

const translate = (key) => [...key].map(c => c.charCodeAt(0) - 97);

const coder = (code, flag) => {
    switch (flag) {
        case "encode": return (code <= 122) ? code : code - 26;
        case "decode": return (code >= 97) ? code : code + 26;
        default: throw badFlag;
    }
};

const getKey = (key) => {
    switch (true) {
        case key === undefined: return genKey();
        case /^[a-z]+$/.test(key): return key;
        default: throw badKey;
    }
};

const genKey = () => Array(100)
    .fill("-")
    .map(c => c = String.fromCharCode(Math.floor(Math.random() * 26) + 97))
    .join("");

module.exports = Cipher;
