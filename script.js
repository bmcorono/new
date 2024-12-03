// JavaScript to load content dynamically
document.querySelectorAll('.nav-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const page = button.getAttribute('data-page');
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `<h2>Loading ${page.charAt(0).toUpperCase() + page.slice(1)}...</h2>`;
    
    // Simulate loading content
    setTimeout(() => {
      mainContent.innerHTML = `<h2>${page.charAt(0).toUpperCase() + page.slice(1)}</h2><p>Content for the ${page} page will go here.</p>`;
    }, 500);
  });
});
