document.querySelectorAll("a").forEach(link => {
  const href = link.getAttribute("href");

  // only intercept if: (1) same hostname AND (2) not just an in-page anchor
  if (link.hostname === window.location.hostname && href && !href.startsWith("#")) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 500); // match transition duration
    });
  }
});