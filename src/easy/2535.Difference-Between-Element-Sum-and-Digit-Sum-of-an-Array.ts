export function differenceOfSum(nums: number[]): number {

    let sum = 0;
    let digitSum = 0;

    nums.forEach((element) => {
        sum += element;

        if (element <= 9) {
            digitSum += element;
        } else {
            const arr = Array.from(element.toString());

            arr.forEach((item) => {
                digitSum += Number(item);
            })
        }
    })

    return Math.abs(sum - digitSum);
};