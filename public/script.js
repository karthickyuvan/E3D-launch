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
  