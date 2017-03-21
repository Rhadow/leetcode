/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.initialize = function(char) {
        return {
            char,
            word: 0,
            prefix: 0,
            children: {}
        }
    }
    this.trie = this.initialize('');
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currentNode = this.trie;
    word.split('').forEach((char, index) => {
        currentNode.prefix += 1;
        if (!currentNode.children[char]) {
            currentNode.children[char] = this.initialize(char);
        }
        currentNode = currentNode.children[char];
    });
    currentNode.word += 1;
    currentNode.prefix += 1;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currentNode = this.trie;
    let chars = word.split('');
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        if (!currentNode.children[char]) {
            return false
        } else {
            currentNode = currentNode.children[char];
        }
    }
    return currentNode.word > 0;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.trie;
    let chars = prefix.split('');
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        if (!currentNode.children[char]) {
            return false
        } else {
            currentNode = currentNode.children[char];
        }
    }
    return currentNode.prefix > 0;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
 
