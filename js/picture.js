import { getGeneratePhoto } from "./data.js";

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const pictureTemplateItem = pictureTemplate.querySelector('.picture');

const fragment = document.createDocumentFragment();

const newPictures = getGeneratePhoto();

newPictures.forEach(({ url, likes, comments }) => {
    const newPictureItem = pictureTemplateItem.cloneNode(true);
    newPictureItem.querySelector('.picture__img').src = url;
    newPictureItem.querySelector('.picture__likes').textContent = likes;
    newPictureItem.querySelector('.picture__comments').textContent = comments;
    fragment.append(newPictureItem);
});

const pictures = picturesList.append(fragment);

export { pictures };