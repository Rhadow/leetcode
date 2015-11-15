/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var As = [], Bs = [], secretLeft = [], guessLeft = [];

    for (var i = 0; i < guess.length; i++) {
        if (secret[i] === guess[i]) {
            As.push(1);
        } else {
            secretLeft.push(secret[i]);
            guessLeft.push(guess[i]);
        }
    }

    for (var j = 0; j < guessLeft.length; j++) {
        var temp = secretLeft.indexOf(guessLeft[j]);
        if (temp >= 0) {
            Bs.push(1);
            secretLeft.splice(temp, 1);
        }
    }

    return As.length + 'A' + Bs.length + 'B';
};
