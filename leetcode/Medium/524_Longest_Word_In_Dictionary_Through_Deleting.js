/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    let result = '';
    const charIndexMap = {};
    s.split('').forEach((char, index) => {
        charIndexMap[char] = char in charIndexMap ? charIndexMap[char].concat([index]) : [index];
    });
    const charIndexMapString = JSON.stringify(charIndexMap);
    d.forEach(word => {
        if (word.length >= result.length) {
            const clonedMap = JSON.parse(charIndexMapString);
            let prevCharIndexInS = -1;
            let isWordValid = true;
            let isCurrentWordLexicalGraphicalSmaller = false;
            let needToTestLex = true;
            for (let i = 0; i < word.length; i++) {
                let currentCharIndexesInS = clonedMap[word[i]];
                if (!currentCharIndexesInS) {
                    isWordValid = false;
                    break;
                }
                while (currentCharIndexesInS[0] < prevCharIndexInS) {
                    currentCharIndexesInS.shift();
                }
                if (currentCharIndexesInS.length === 0) {
                    isWordValid = false;
                    break;
                } else {
                    prevCharIndexInS = clonedMap[word[i]].shift();
                    if (needToTestLex && result.length > i && result[i] !== word[i]) {
                        isCurrentWordLexicalGraphicalSmaller = result[i] > word[i];
                        needToTestLex = false;
                    }
                }
            }
            if (isWordValid) {
                result = word.length === result.length ? isCurrentWordLexicalGraphicalSmaller ? word : result : word;
            }
        }
    });
    return result;
};
