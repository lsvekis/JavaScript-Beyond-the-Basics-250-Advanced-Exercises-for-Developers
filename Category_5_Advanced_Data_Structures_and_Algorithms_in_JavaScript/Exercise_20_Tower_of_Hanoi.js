
function towerOfHanoi(n, source, auxiliary, target) {
if (n === 1) {
console.log(`Move disk 1 from ${source} to ${target}`);
return;
}
towerOfHanoi(n - 1, source, target, auxiliary);
console.log(`Move disk ${n} from ${source} to ${target}`);
towerOfHanoi(n - 1, auxiliary, source, target);
}

towerOfHanoi(3, 'A', 'B', 'C');
/* Output:
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
*/

Explanation:
This classic recursive problem demonstrates how to move disks between pegs following specific rules.
