module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function(previous, current, index, array) {
        previous.push(fn.call(thisArg, current, index, array));
        return previous;
    }, []);
}
