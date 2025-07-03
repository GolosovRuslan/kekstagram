const getRandomPositiveInteger = (min, max = 1) => {
    if (min === undefined) {
        throw new Error("Первый параметр должен быть число");
    }

    min = Math.ceil(Math.abs(min));
    max = Math.floor(Math.abs(max));
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
};

const usedIds = new Set();
const getUniqueRandomId = (PICTURE_COUNT) => {
    let id;
    do {
        id = getRandomPositiveInteger(1, PICTURE_COUNT);
    } while (usedIds.has(id));

    usedIds.add(id);
    return id;
};

const getRandomArrayElements = (elements) => {
    return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

export { getRandomPositiveInteger, getRandomArrayElements, getUniqueRandomId };