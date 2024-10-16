document.getElementById('surpriseButton').addEventListener('click', function() {
    // Hide the button
    this.style.display = 'none';
    
    // Show the message with animation
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    
    // Animate fingers
    setTimeout(function() {
      document.querySelector('.finger.left').style.opacity = '1';
      document.querySelector('.finger.left').style.transform = 'scale(1)';
    }, 100);
    
    setTimeout(function() {
      document.querySelector('.finger.right').style.opacity = '1';
      document.querySelector('.finger.right').style.transform = 'scale(1)';
    }, 300);
    
    // Show text
    setTimeout(function() {
      document.querySelector('p').style.opacity = '1';
    }, 600);
    
    // Start the background color change for full screen
    startBackgroundColorChange();
    
    // Continuously generate balloons
    setInterval(generateBalloons, 250);
    
    // Continuously generate more confetti at a faster rate
    setInterval(generateConfetti, 10); // More confetti, faster
  });
  
  function startBackgroundColorChange() {
    setInterval(function() {
      // Generate random color
      const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      // Apply it to both html and body to cover the full screen
      document.documentElement.style.backgroundColor = randomColor;
      document.body.style.backgroundColor = randomColor;
    }, 100); // Change background color every 0.1 seconds
  }
  
  function generateBalloons() {
    const balloonContainer = document.getElementById('balloons');
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}vw`;
    balloonContainer.appendChild(balloon);
    
    // Remove the balloon once it goes out of view
    setTimeout(() => balloon.remove(), 7000);
  }
  
  function generateConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 5; i++) { // Generate 5 confetti per interval for denser confetti
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.top = `${Math.random() * 100}vh`;
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confettiContainer.appendChild(confetti);
      
      // Remove confetti after falling
      setTimeout(() => confetti.remove(), 3000);
    }
  }
  