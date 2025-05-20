
const btnOpen = document.querySelector(".btn--open");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".btn--close");

const modalViewHndler = () => {
    modal.classList.toggle("modal--open");
}

btnOpen.addEventListener('click', modalViewHndler);
btnClose.addEventListener('click', modalViewHndler);
