function isPalindrome(x: number): boolean {
    let left = x.toString();
    let right = left.split('').reverse().join('');

    if (left === right) {
        return true;
    }
    return false;
};