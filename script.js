// Example: Show success message on form submit (for all forms)
document.addEventListener('DOMContentLoaded', function () {
  // Creator form
  const creatorForm = document.getElementById('creatorForm');
  if (creatorForm) {
    creatorForm.addEventListener('submit', function (e) {
      e.preventDefault();
      creatorForm.style.display = 'none';
      document.getElementById('creatorSuccess').style.display = 'block';
    });
  }

  // Apply form
  const applyForm = document.getElementById('applyForm');
  if (applyForm) {
    applyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      applyForm.style.display = 'none';
      document.getElementById('applySuccess').style.display = 'block';
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactForm.style.display = 'none';
      document.getElementById('contactSuccess').style.display = 'block';
    });
  }
});