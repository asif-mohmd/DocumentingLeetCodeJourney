};

    const result = [];
    backtrack(n, k, 1, [], result);
    return result;
    if (combination.length === k) {
function backtrack(n, k, start, combination, result) {
        result.push([...combination]);
        return;
    }
    for (let i = start; i <= n; i++) {
var combine = function(n, k) {
 */
 * @return {number[][]}
 * @param {number} k
 * @param {number} n
/**
        combination.push(i);
        backtrack(n, k, i + 1, combination, result);
        combination.pop();
    }
}
4
