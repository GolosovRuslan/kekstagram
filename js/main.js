function getRandomPositiveInteger(min, max = 1) {
    if (min === undefined) {
        throw new Error("Первый параметр должен быть число")
    }

    min = Math.ceil(Math.abs(min));
    max = Math.floor(Math.abs(max));
    let result = Math.floor(Math.random() * (max - min)) + min;
    return result;
}

function checkStringLength(string, length) {
    return string.length <= length;
}

getRandomPositiveInteger(10, 100);
checkStringLength('', 3);