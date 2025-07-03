import { getRandomPositiveInteger } from "./utils.js";
import { getUniqueRandomId } from "./utils.js";
import { getRandomArrayElements } from "./utils.js";

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

const PICTURE_COUNT = 25;

const createPicture = () => {
    const uniqueId = getUniqueRandomId(PICTURE_COUNT);
    return {
        id: uniqueId,
        avatar: "photos/" + uniqueId + ".jpg",
        message: getRandomArrayElements(COMMENT_LINES),
        name: getRandomArrayElements(NAMES),
        likes: getRandomPositiveInteger(15, 250)
    };
};

const getGeneratePhoto = () => Array.from({ length: PICTURE_COUNT }, createPicture);

export { getGeneratePhoto };