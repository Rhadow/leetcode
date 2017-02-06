/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    return words.filter(word => {
        return word.toLowerCase().split('').map(char => {
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].includes(char)) {
                    return i;
                }
            }
            return -1;
        }).every((row, index, arr) => arr[0] === row);
    });
};
