function maximumCount(nums: number[]): number {
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) continue;

        if (nums[i] > 0) positive++;
        else negative++;
    }

    if (positive > negative) return positive;
    else return negative;
};