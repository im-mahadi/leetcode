export function maxIceCream(costs: number[], coins: number): number {
    let arr = costs.sort((a,b) => (a - b));

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (coins >= arr[i]) {
            coins -= arr[i];
            count++;
        }
    }

    return count;
};