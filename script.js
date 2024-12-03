document.querySelectorAll(".nav-btn").forEach(button => {
  button.addEventListener("click", e => {
    const page = e.target.dataset.page;
    loadPage(page);
  });
});

function loadPage(page) {
  const mainContent = document.getElementById("main-content");
  if (page === "about") {
    mainContent.innerHTML = `
      <div class="section">
        <h2>About Me</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Age:</strong> 21</p>
        <p><strong>Birthday:</strong> January 15, 2003</p>
        <p><strong>School:</strong> University of IT</p>
        <p><strong>Course:</strong> BS Information Technology</p>
        <p><strong>Motivation:</strong> My passion is creating efficient solutions to complex problems and helping the world through technology.</p>
        <button onclick="loadPage('skills')">Skills</button>
      </div>`;
  } else if (page === "skills") {
    mainContent.innerHTML = `
      <div class="section">
        <h2>My Skills</h2>
        <div class="box">
          <div class="box-item">
            <img src="mica.PNG" alt="Skill">
            <p>Programming in Python, JavaScript, and C++</p>
          </div>
        </div>
      </div>`;
  } else if (page === "services") {
    mainContent.innerHTML = `
      <div class="section">
        <h2>Services</h2>
        <div class="box">
          <div class="box-item">
            <img src="webdevelopment.jpg" alt="Web Development">
            <p>Web Development</p>
          </div>
          <div class="box-item">
            <img src="mobileappdevelopment.jpg" alt="Mobile App Development">
            <p>Mobile App Development</p>
          </div>
        </div>
        <button>Learn More</button>
      </div>`;
  }
  // Continue with "Portfolio" and "Contact"
}
