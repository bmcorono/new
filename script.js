// Handle navigation and page toggling
document.querySelectorAll('.nav-btn').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const page = button.dataset.page;

    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(page);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});
