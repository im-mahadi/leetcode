function sortedSquares(nums: number[]): number[] {
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[i] * nums[i];
    }

    return result.sort((a, b) => a - b);
};