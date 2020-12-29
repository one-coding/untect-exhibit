/*이미지 확대 스크립트*/

const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal__overlay");
const closeBtn = modal.querySelector("button");

const openModal = () => {
    modal.classList.remove("hidden");

}
const closeModel = () => {
    modal.classList.add("hidden");
}

overlay.addEventListener("click", closeModel);
closeBtn.addEventListener("click", closeModel);
openButton.addEventListener("click", openModal);

/*전체목록 스크립트*/

const openArtMemu = document.getElementById("open__art-menu");
const artMenuModal = document.querySelector(".art-memu__modal");
const artMenuOverlay = artMenuModal.querySelector(".art-memu__modal__overlay");
const closeArtMenu = artMenuModal.querySelector(".art-menu__close-button");

const openArtMenuModal = () => {
    artMenuModal.classList.remove("art-memue__hidden");

}
const closeArtMenuCloseModel = () => {
    artMenuModal.classList.add("art-memue__hidden");
}

artMenuOverlay.addEventListener("click", closeArtMenuCloseModel);
closeArtMenu.addEventListener("click", closeArtMenuCloseModel);
openArtMemu.addEventListener("click", openArtMenuModal);