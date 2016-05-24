/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var sortedCitations = citations.slice(0).sort(function(a, b) { return a - b; });
    var HIndex = 0;
    var right = [];
    var filteredRight = [];

    for (var i = sortedCitations.length - 1; i >= 0; i--) {
        right = sortedCitations.slice(i);
        filteredRight = right.filter(function(v) { return v >= right.length; });
        if (right.length === filteredRight.length) {
            HIndex = right.length;
        }
    }

    return HIndex;
};
