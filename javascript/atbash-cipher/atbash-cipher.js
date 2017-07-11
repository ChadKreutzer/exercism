const CIPHER = { a: "z", b: "y", c: "x", d: "w", e: "v", f: "u", g: "t",
                 h: "s", i: "r", j: "q", k: "p", l: "o", m: "n", n: "m",
                 o: "l", p: "k", q: "j", r: "i", s: "h", t: "g", u: "f",
                 v: "e", w: "d", x: "c", y: "b", z: "a" };
                 

const encode = (string) => {
    return string.toLowerCase()
        .replace(/(\W)/g, "")
        .replace(/([a-z])/g, (match) => CIPHER[match] )
        .replace(/(\w{5})/g, `$1 `)
        .trim();
};

module.exports = { encode };