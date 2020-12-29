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