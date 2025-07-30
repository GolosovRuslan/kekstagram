
const BIG_PICTURE = document.querySelector('.big-picture');
const BIG_PICTURE_CLOSE = document.querySelector('.big-picture__cancel');
const BIG_PICTURE_COMMENTS = document.querySelector('.social__comments');
const BODY = document.querySelector('body');

const createComment = ({ avatar, message, name }) => {
    const comment = document.createElement('li');

    comment.innerHTML = `<img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35" /><p class="social__text">${message}</p>`;
    comment.classList.add('social__comment');
    return comment;
}

const renderComments = (comments) => {
    BIG_PICTURE_COMMENTS.innerHTML = '';

    const fragment = document.createDocumentFragment();

    Array.from(comments).forEach((comment) => {
        const commentElement = createComment(comment);
        fragment.append(commentElement);
    });

    BIG_PICTURE_COMMENTS.append(fragment);
};

const hideBigPicture = () => {
    BIG_PICTURE.classList.add('hidden');
    BODY.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
    if (evt.key === "Escape") {
        evt.preventDefault();
        hideBigPicture();
    }
};

const renderPictureDetails = ({ url, likes, descriptions }) => {

    BIG_PICTURE.querySelector('img').src = url;
    BIG_PICTURE.querySelector('.likes-count').textContent = likes;
    BIG_PICTURE.querySelector('.social__caption').textContent = descriptions;
};

const showBigPicture = ({ url, likes, comments, descriptions }) => {
    BIG_PICTURE.classList.remove('hidden');
    BODY.classList.add('modal-open');
    document.addEventListener('keydown', onEscKeyDown);
    renderPictureDetails({ url, likes, comments, descriptions });
    renderComments(comments);
}
BIG_PICTURE_CLOSE.addEventListener('click', hideBigPicture);

export { showBigPicture };