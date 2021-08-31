function findNearestElement(arr, num) {
    // если число есть в массиве
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return `ближайший элемент к числу: ${arr[i-1]}`;
    }
    // если числа нет в массиве
    let number = result = 0;

    for (let i = 0; i < arr.length; i++) {
        number = arr[i];
        if (number <= num) { 
            result = number; 
        }
    }
    return `ближайший элемент к числу: ${result}`;
}

console.log(findNearestElement([1, 2, 3, 7, 8, 9, 10, 15, 23], 16));
