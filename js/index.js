const show_modal = document.querySelectorAll(".show_modal");

const modal = document.querySelector(".modal");
const close_modal = document.querySelector(".close_modal");
const overlay = document.querySelector(".overlay");

const showResults = function () {
  console.log("Open Modal");
  modal.classList.remove("hiden");
  overlay.classList.remove("hiden");
};

const closeResults = function () {
  console.log("Close Modal");
  modal.classList.add("hiden");
  overlay.classList.add("hiden");
};

for (let i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener("click", showResults);
}

close_modal.addEventListener("click", closeResults);
overlay.addEventListener("click", closeResults);
