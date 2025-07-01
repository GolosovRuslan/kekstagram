const getRandomPositiveInteger = (min, max = 1) => {
    if (min === undefined) {
        throw new Error("Первый параметр должен быть число")
    }

    min = Math.ceil(Math.abs(min));
    max = Math.floor(Math.abs(max));
    const number = Math.floor(Math.random() * (max - min)) + min;
    return number;
};

// const checkStringLength = (string, length) => {
//     return string.length <= length;
// };

const getRandomArrayElements = (elements) => {
    return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const COMMENT_LINES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
    'Иван',
    'Мария',
    'Виктор',
    'Юлия',
];

const PICTURE_COUNT = 25;

const createPicture = () => {
    return {
        id: getRandomPositiveInteger(1, 25),
        avatar: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
        message: getRandomArrayElements(COMMENT_LINES),
        name: getRandomArrayElements(NAMES),
        likes: getRandomPositiveInteger(15, 250)
    };
};

const generatePhoto = Array.from({ length: PICTURE_COUNT }, createPicture);

console.log(generatePhoto);
