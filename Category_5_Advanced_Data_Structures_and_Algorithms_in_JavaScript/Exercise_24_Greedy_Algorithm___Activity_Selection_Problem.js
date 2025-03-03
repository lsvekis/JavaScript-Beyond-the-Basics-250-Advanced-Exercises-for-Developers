
function activitySelection(activities) {
// Sort activities by finish time
activities.sort((a, b) => a.finish - b.finish);
const result = [];
let lastFinish = 0;
for (const activity of activities) {
if (activity.start >= lastFinish) {
result.push(activity);
lastFinish = activity.finish;
}
}
return result;
}

const activities = [
{ start: 1, finish: 4 },
{ start: 3, finish: 5 },
{ start: 0, finish: 6 },
{ start: 5, finish: 7 },
{ start: 3, finish: 9 },
{ start: 5, finish: 9 },
{ start: 6, finish: 10 },
{ start: 8, finish: 11 },
{ start: 8, finish: 12 },
{ start: 2, finish: 14 },
{ start: 12, finish: 16 }
];

console.log(activitySelection(activities));
/* Output: An array of selected activities that do not overlap */

Explanation:
By sorting activities by finish time and greedily selecting the next compatible activity, the algorithm finds the maximum set of non-overlapping activities.
