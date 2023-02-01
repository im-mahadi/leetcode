export function mostWordsFound(sentences: string[]): number {
    let max = 0;

    sentences.map((item) => {
        const count = item.split(" ").length;

        if (count > max) {
            max = count;
        }
    })

    return max;
};