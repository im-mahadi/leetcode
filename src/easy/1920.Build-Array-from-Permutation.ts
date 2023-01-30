function buildArray(nums: number[]): number[] {
    let arr: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[nums[i]]);
    }

    return arr;
};