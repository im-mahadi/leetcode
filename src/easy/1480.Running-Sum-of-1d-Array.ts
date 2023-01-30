function runningSum(nums: number[]): number[] {
    let arr: number[] = [];

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        count += nums[i];
        arr.push(count);
    }

    return arr;
};