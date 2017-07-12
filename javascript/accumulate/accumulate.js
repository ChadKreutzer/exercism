const accumulate = (col, fn) => col.map(a => fn(a));

module.exports = accumulate;