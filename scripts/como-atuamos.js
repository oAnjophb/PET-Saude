document.addEventListener('DOMContentLoaded', function() {
  const navComoAtuamos = document.querySelector('a[href="#como-atuamos"]');
  const modal = document.getElementById('como-atuamos-modal');
  const closeBtn = modal.querySelector('.modal-close');

  if (navComoAtuamos && modal && closeBtn) {
    navComoAtuamos.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    // Fecha modal ao clicar fora do conteúdo
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Fecha com ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') modal.style.display = 'none';
    });
  }
});