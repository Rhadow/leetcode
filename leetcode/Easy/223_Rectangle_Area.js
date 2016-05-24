/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var area1 = (C- A) * (D - B);
    var area2 = (G - E) * (H - F);
    var repeatedArea = Math.max(Math.min(C, G) - Math.max(A, E), 0) * Math.max(Math.min(D, H) - Math.max(B, F), 0);
    return area1 + area2 - repeatedArea;
};
