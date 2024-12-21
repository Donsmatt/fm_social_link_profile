document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll("li");

  listItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      if (!e.target.matches("a")) {
        const anchor = item.querySelector("a");
        if (anchor) anchor.click();
      }
    });
  });
});
