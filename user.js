const dropBtn = document.querySelector("#drop-btn");
const dropDown = document.querySelector(".content-drop");

let isDropShow = false;
dropBtn.addEventListener("click", () => {
  if (isDropShow) {
    dropDown.style.display = "none";
    isDropShow = false;
  } else {
    isDropShow = true;
    dropDown.style.display = "flex";
  }
});
