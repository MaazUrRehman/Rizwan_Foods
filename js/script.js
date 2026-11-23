document.documentElement.classList.add("js-ready");

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const categoryNav = document.querySelector(".category-nav");
  const categoryLinks = Array.from(document.querySelectorAll(".category-link"));
  const sections = Array.from(document.querySelectorAll(".category-section"));

  const updateStickyState = () => {
    categoryNav.classList.toggle("is-stuck", categoryNav.getBoundingClientRect().top <= header.getBoundingClientRect().bottom + 1);
  };
  updateStickyState();
  window.addEventListener("scroll", updateStickyState, { passive: true });

  const setActiveCategory = (categoryId) => {
    categoryLinks.forEach((link) => {
      const active = link.dataset.categoryId === categoryId;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
      if (active && window.innerWidth <= 760) {
        link.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
      }
    });
  };

  if ("IntersectionObserver" in window) {
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveCategory(entry.target.dataset.categoryId);
      });
    }, { rootMargin: "-18% 0px -70% 0px", threshold: 0 });
    sections.forEach((section) => activeObserver.observe(section));

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  }

});
