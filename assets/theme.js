document.addEventListener('DOMContentLoaded', function () {
  var ageGate = document.querySelector('[data-age-gate]');
  if (!ageGate) return;

  if (window.localStorage.getItem('ovo_age_verified') === 'true') {
    ageGate.remove();
    return;
  }

  ageGate.addEventListener('click', function (event) {
    if (event.target.matches('[data-age-yes]')) {
      event.preventDefault();
      window.localStorage.setItem('ovo_age_verified', 'true');
      ageGate.classList.add('is-hidden');
      setTimeout(function () {
        ageGate.remove();
      }, 300);
    }
  });
});
