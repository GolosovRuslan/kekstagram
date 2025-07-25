import { getGeneratePhoto } from "./data.js";
import { showBigPicture } from "./big-picture.js";

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const pictureTemplateItem = pictureTemplate.querySelector('.picture');

const fragment = document.createDocumentFragment();

const newPictures = getGeneratePhoto();

newPictures.forEach(({ url, likes, comments, descriptions, name }) => {

    const newPictureItem = pictureTemplateItem.cloneNode(true);
    newPictureItem.addEventListener('click', function () {
        showBigPicture({ url, likes, comments, descriptions, name });
    });
    newPictureItem.querySelector('.picture__img').src = url;
    newPictureItem.querySelector('.picture__img').alt = name;
    newPictureItem.querySelector('.picture__likes').textContent = likes;

    fragment.append(newPictureItem);
});

const pictures = picturesList.append(fragment);

export { pictures };