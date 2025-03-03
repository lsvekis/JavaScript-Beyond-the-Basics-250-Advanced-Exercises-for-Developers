
function knapsack(weights, values, capacity) {
const n = weights.length;
const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
for (let i = 1; i <= n; i++) {
for (let w = 0; w <= capacity; w++) {
if (weights[i - 1] > w) {
dp[i][w] = dp[i - 1][w];
} else {
dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
}
}
}
return dp[n][capacity];
}

console.log(knapsack([2, 3, 4], [3, 4, 5], 5)); // Output: 7

Explanation:
Dynamic programming builds a table of maximum values achievable for each sub-capacity, ultimately yielding the best total value.
