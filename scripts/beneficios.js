document.addEventListener('DOMContentLoaded', function() {
  const card = document.getElementById('beneficios');
  const modal = document.getElementById('beneficios-modal');
  const closeBtn = modal.querySelector('.modal-close');

  function openModal(e) {
    e.preventDefault();
    modal.style.display = 'flex';
  }

  if (card) {
    card.addEventListener('click', openModal);
    card.addEventListener('keypress', function(e){
      if(e.key === 'Enter' || e.key === ' ') openModal(e);
    });
  }

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) modal.style.display = 'none';
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') modal.style.display = 'none';
  });
});