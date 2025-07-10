document.querySelectorAll('a[href="#contato"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const footer = document.getElementById('footer');
    if (!footer) return;

    footer.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

    setTimeout(() => {
      footer.classList.remove('highlight');
      void footer.offsetWidth;
      footer.classList.add('highlight');
    }, 700);
  });
});