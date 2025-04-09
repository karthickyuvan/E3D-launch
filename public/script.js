document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('subscribeForm');
    const emailInput = document.getElementById('subscriberEmail');
    const successMsg = document.getElementById('successMsg');
  
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
  
      const email = emailInput.value;
  
      try {
        const response = await fetch('/api/subscribe', { // 👈 updated URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        });
  
        if (response.ok) {
          successMsg.style.display = 'block';
          emailInput.value = '';
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (err) {
        alert("Error connecting to server.");
        console.error(err);
      }
    });
  });
// nav link active state on scroll
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  });


// Form Submission Script

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccessMsg');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    try {
    
        const response = await fetch('/api/contact-form', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name, phone, message })
      });

      if (response.ok) {
        successMsg.style.display = 'block';
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Error connecting to server.");
      console.error(err);
    }
  });
});


  