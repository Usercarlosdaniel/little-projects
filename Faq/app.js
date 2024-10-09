const btn = document.querySelectorAll("button");

btn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const faq = btn.closest(".faq");
    faq.classList.toggle("show");
  });
});
