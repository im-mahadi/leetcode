export function shuffle(nums: number[], n: number): number[] {
    let arr: number[] = [];

    let x = nums.length / 2;
    for (let i = 0; i < x; i++) {
        arr.push(nums[i]);
        arr.push(nums[i + n]);
    }

    return arr;
};