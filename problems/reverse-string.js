module.exports = function reverseString(string) {
    let str = string.split('').reverse();
    return str.join('');
};