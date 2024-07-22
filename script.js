const btnToggleList = document.querySelectorAll('.faq-toggle');

btnToggleList.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
  });
});
