/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[];
    const map={
        '(':')',
        '[':']',

    };

    for (let char of s){
        if(map[char]){
            stack.push(char);
        } else if(char ===')')
    }
};

module.exports = { isValid };


