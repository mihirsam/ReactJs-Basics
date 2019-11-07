const nums = [ 1, 2, 3, 4, 5 ];
const doubled = nums.map(function(num) {
	return num * 2;
});
console.log(doubled);
const filters = nums.filter(function(num) {
	return num > 2;
});
console.log(filters);
