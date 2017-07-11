const keep = (arr, fn) => arr.filter(e => fn(e));
const discard = (arr,fn) => arr.filter(e => !fn(e));

module.exports = {
    keep,
    discard
};