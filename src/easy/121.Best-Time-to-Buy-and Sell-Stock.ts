export function maxProfit(prices: number[]): number {
    let index = 0;
    let min = prices[index];
    let maxDiff = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            index = i;
        }

        if ((prices[index] - prices[i]) < maxDiff) {
            maxDiff = prices[index] - prices[i];
        }
    }

    return Math.abs(maxDiff);
};