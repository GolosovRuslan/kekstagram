
const BIG_PICTURE = document.querySelector('.big-picture');
const BIG_PICTURE_CLOSE = document.querySelector('.big-picture__cancel');
const BIG_PICTURE_COMMENTS = document.querySelector('.social__comments');
const BIG_PICTURE_BTN = document.querySelector('.comments-loader');
const BODY = document.querySelector('body');

let visibleCount = 5;
let currentComments = [];

const createComment = ({ avatar, message, name }) => {
    const comment = document.createElement('li');
    comment.innerHTML = `<img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35" /><p class="social__text">${message}</p>`;
    comment.classList.add('social__comment');
    return comment;
}

const renderComments = (comments) => {
    BIG_PICTURE_COMMENTS.innerHTML = '';
    let commentsString = '';
    const fragment = document.createDocumentFragment();
    Array.from(comments).forEach((comment) => {
        const commentElement = createComment(comment);
        fragment.append(commentElement);
        commentsString += `${commentElement.outerHTML}`;
    });

    BIG_PICTURE_COMMENTS.append(fragment);
    return commentsString;
};

const showNextComments = () => {
    const allComments = document.querySelectorAll('.social__comment');
    const totalComments = currentComments.length;

    allComments.forEach(comment => {
        comment.style.display = 'none';
    });

    for (let i = 0; i < visibleCount && i < totalComments; i++) {
        allComments[i].style.display = 'block';
    }

    if (visibleCount >= totalComments) {
        BIG_PICTURE_BTN.classList.add('hidden')
    }
    else {
        BIG_PICTURE_BTN.classList.remove('hidden')
    }
}

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

const renderPictureDetails = ({ url, likes, descriptions, comments }) => {
    BIG_PICTURE.querySelector('img').src = url;
    BIG_PICTURE.querySelector('.likes-count').textContent = likes;
    BIG_PICTURE.querySelector('.social__caption').textContent = descriptions;
    currentComments = comments;

    BIG_PICTURE.querySelector('.social__comment-count').innerHTML = `${Math.min(visibleCount, currentComments.length)} из <span class="comments-count">${currentComments.length}</span> комментариев!`;
    BIG_PICTURE.querySelector('.comments-count').textContent = comments.length;
};

const showBigPicture = ({ url, likes, comments, descriptions }) => {
    visibleCount = 5;
    BIG_PICTURE.classList.remove('hidden');
    BODY.classList.add('modal-open');
    document.addEventListener('keydown', onEscKeyDown);
    renderPictureDetails({ url, likes, comments, descriptions });
    renderComments(comments);
    showNextComments();
}
BIG_PICTURE_BTN.addEventListener('click', function () {
    visibleCount += 5;
    showNextComments();
    const displayedCommentsCount = Math.min(visibleCount, currentComments.length);
    BIG_PICTURE.querySelector('.social__comment-count').innerHTML = `${displayedCommentsCount} из <span class="comments-count">${currentComments.length}</span> комментариев!`;
})
BIG_PICTURE_CLOSE.addEventListener('click', hideBigPicture);

export { showBigPicture };