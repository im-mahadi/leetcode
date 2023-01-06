function isAnagram(s: string, t: string): boolean {

    const s1 = s.split('');
    const t1 = t.split('');

    s1.sort();
    t1.sort();

    const sortedString = s1.join('');
    const sortedString2 = t1.join('');

    let res = false;

    if (sortedString === sortedString2) {
        res = true;
        return res;
    }
    else return res;
};