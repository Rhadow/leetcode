/**
 * @constructor
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var poped = this.stack.pop();
    if (poped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};
