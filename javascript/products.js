const filter = document.querySelector("#filters");
const filterBtn = document.querySelector(".filter-btn");

const filterBtnClose = document.querySelector(".filter-btn-close");

const openFilter = () => {
  filter.style.display = "flex";
};

const closeFilter = () => {
  filter.style.display = "none";
};

filterBtn.addEventListener("click", openFilter);
filterBtnClose.addEventListener("click", closeFilter);
