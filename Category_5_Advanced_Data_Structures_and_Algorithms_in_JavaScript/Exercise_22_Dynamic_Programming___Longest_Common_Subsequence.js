
function lcs(str1, str2) {
const m = str1.length, n = str2.length;
const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
for (let i = 1; i <= m; i++) {
for (let j = 1; j <= n; j++) {
if (str1[i - 1] === str2[j - 1]) {
dp[i][j] = dp[i - 1][j - 1] + 1;
} else {
dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
}
}
}
return dp[m][n];
}

console.log(lcs("AGGTAB", "GXTXAYB")); // Output: 4

Explanation:
A 2D DP table is used to determine the length of the longest common subsequence between two strings.
