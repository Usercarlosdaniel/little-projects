const btns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

btns.forEach(() => {
  addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      btns.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      content.forEach((article) => article.classList.remove("active"));
      const articleActive = document.getElementById(id);
      articleActive.classList.add("active");
    }
  });
});
