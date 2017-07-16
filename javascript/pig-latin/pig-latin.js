const translate = (string) => {
    const V = /^[aeiouy]/;
    const CorQ = /(\w?qu|[^aeiouy]+)(\w+)/;
    
    return string
        .split(" ")
        .map(word => `${(V.test(word)) ? word : word.replace(CorQ, "$2$1")}ay`)
        .join(" ");
};

module.exports = { translate };