const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (var i = 0; i < nums.length; i++) {
	if (nums[i] > 7) {
		break;
	}
	console.log(nums[i]);
}

for (var i = 0; i < nums.length; i++) {
	if (nums[i] < 7) {
		continue;
		// break;
	}
	console.log('for last', nums[i]);
}
