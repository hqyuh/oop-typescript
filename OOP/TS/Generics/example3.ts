const map = <T, U>(array: T[], callbackFunc: (item: T) => U): U[] => {
    let result: U[] = [];
    for (const item of array) {
        result.push(callbackFunc(item));
    }
    return result;
}

console.log(map([1, 2, 3, 4, 5, 6, 7, 8, 9], (number) => number * 2));
