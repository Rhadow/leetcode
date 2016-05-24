/**
 * @constructor
 */
var MedianFinder = function() {
    this.stream = [];
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function(num) {
    var isSmaller = false;
    if (this.stream.length !== 0) {
        for (var i = 0; i < this.stream.length; i++) {
            if (this.stream[i] > num) {
                this.stream.splice(i, 0, num);
                isSmaller = true;
                break;
            }
        }
    }
    if (!isSmaller) {
        this.stream.push(num);
    }
};

/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function() {
    var evenMedian = (this.stream[this.stream.length / 2] + this.stream[this.stream.length / 2 - 1]) / 2;
    var oddMedian = this.stream[Math.floor(this.stream.length / 2)];
    return this.stream.length % 2 === 0 ? evenMedian : oddMedian;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */
