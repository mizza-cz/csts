headerNavOpenerClick();
function headerNavOpenerClick() {
  const bodyEl = document.querySelector("body");
  const headerNavOpener = document.querySelector(".js-header__opener");
  if (!bodyEl || !headerNavOpener) {
    return;
  }
  headerNavOpener.addEventListener("click", function () {
    if (!this.classList.contains("is-open")) {
      bodyEl.classList.add("is-nav-open");
      this.classList.add("is-open");
    } else {
      bodyEl.classList.remove("is-nav-open");
      this.classList.remove("is-open");
    }
  });
}
$(function () {
  $(".navbar__menu-item").on("click", function () {
    $(this).closest(".navbar__menu-list").toggleClass("active");
  });
});

headerNavOpenerClickNews();

function headerNavOpenerClickNews() {
  const bodyEl = document.querySelector("body");
  const headerNavOpenerNews = document.querySelector(".c-header__openerNews");
  const menuNewsBtn = document.querySelector(".menuNewsBtn");

  if (!bodyEl || !headerNavOpenerNews || !menuNewsBtn) {
    return;
  }

  headerNavOpenerNews.addEventListener("click", function () {
    if (!bodyEl.classList.contains("is-openNew")) {
      bodyEl.classList.add("is-openNew");
    }
    this.classList.add("is-openNews");
    menuNewsBtn.classList.remove("is-openNews");
  });

  menuNewsBtn.addEventListener("click", function () {
    if (bodyEl.classList.contains("is-openNew")) {
      bodyEl.classList.remove("is-openNew");
    }
  });
}
