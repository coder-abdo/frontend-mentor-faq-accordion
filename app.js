const faqItems = document.querySelectorAll(".faq__item");
[...faqItems].forEach((item) => {
  item.addEventListener("click", function (_e) {
    faqItems.forEach((item) => {
      item.lastElementChild.classList.remove("expand");
      item.firstElementChild.lastElementChild.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="icon-minus"/>`;
    });
    this.lastElementChild.classList.add("expand");
    this.firstElementChild.lastElementChild.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="icon-plus"/>`;
  });
});
