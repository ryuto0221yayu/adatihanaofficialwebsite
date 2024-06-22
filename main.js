{
const ham = document.querySelector('#js-hamburger');
const meu = document.querySelector('#clact');
ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  meu.classList.toggle('active');
});
}
function scrollCallback(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      hamburger.classList.add("scrolled");
    } else {
      hamburger.classList.remove("scrolled");
    }
  });
}
const hamburger = document.querySelector(".header__hamburger");
{
  const scrollObserver = new IntersectionObserver(scrollCallback);
  scrollObserver.observe(document.getElementById("target-2"));
}