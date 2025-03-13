document.addEventListener("DOMContentLoaded", () => {
    const eyes = document.querySelectorAll('.eyes');
    const pupils = document.querySelectorAll('.pupils');
    const curve = document.querySelector('.curve');
    const passwordInput = document.getElementById("password");
    let isPasswordVisible = false;
  
    // Mouse movement event listener
    document.addEventListener('mousemove', (e) => {
      eyes.forEach((eye, index) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const maxMove = 25;
        const moveX = Math.cos(angle) * maxMove;
        const moveY = Math.sin(angle) * maxMove;
  
        pupils[index].style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
  
    // Toggle password visibility when eyes are clicked
    eyes.forEach(eye => {
      eye.addEventListener("click", function() {
        isPasswordVisible = !isPasswordVisible;
        passwordInput.type = isPasswordVisible ? "text" : "password";
  
        // Animate pupils when toggling password visibility
        document.querySelectorAll(".pupils").forEach(pupil => {
          pupil.style.transform = isPasswordVisible ? "scale(1.5)" : "scale(1)";
        });
      });
    });
  
    // Validate login credentials
    function validateLogin() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (username === "Vinayaka" && password === "Vinay@1432") {
        eyes.forEach(eye => {
          eye.classList.remove("red");
          eye.classList.add("green");
        });
        curve.classList.remove("sad");
        curve.classList.add("happy");
      } else {
        eyes.forEach(eye => eye.classList.add("red"));
        curve.classList.remove("happy");
        curve.classList.add("sad");
      }
    }
  
    // Attach validateLogin function to button click event
    document.querySelector("button").addEventListener("click", validateLogin);
  });
  