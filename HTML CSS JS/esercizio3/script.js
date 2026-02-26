const stars = document.querySelectorAll('.star');
const label = document.getElementById('label');

stars.forEach(function(star) {
  star.addEventListener('click', function() {
    const index = parseInt(star.dataset.index);

    stars.forEach(function(s, i) {
      if (i <= index) {
        s.style.color = 'orange';
      } else {
        s.style.color = 'lightgray';
      }
    });

    label.textContent = 'Hai votato: ' + (index + 1) + ' su 5';
  });
});
