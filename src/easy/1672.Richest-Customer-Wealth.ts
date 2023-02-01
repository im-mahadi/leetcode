export function maximumWealth(accounts: number[][]): number {
    let max = 0;
    let count = 0;

    for (let arr = 0; arr < accounts.length; arr++) {
        count = 0;

        accounts[arr].forEach((element) => {
            count += element;
        })

        if (count > max) {
            max = count;
        }
    }

    return max;
};