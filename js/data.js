import { getRandomPositiveInteger, getUniqueRandomId, getRandomArrayElements } from "./utils.js";

const COMMENT_LINES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
    'Иван',
    'Мария',
    'Виктор',
    'Юлия',
];

const maxId = 25;

const createPicture = () => {
    const uniqueId = getUniqueRandomId(maxId);
    return {
        id: uniqueId,
        url: "photos/" + uniqueId + ".jpg",
        comments: getRandomArrayElements(COMMENT_LINES),
        name: getRandomArrayElements(NAMES),
        likes: getRandomPositiveInteger(15, 250)
    };
};

const getGeneratePhoto = () => Array.from({ length: maxId }, createPicture);

export { getGeneratePhoto };