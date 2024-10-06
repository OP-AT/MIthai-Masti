window.addEventListener('load', function() {
    const logo = document.getElementById('logo');
    
    // Once the fly animation ends, show the content
    logo.addEventListener('animationend', (event) => {
      if (event.animationName === 'fly') {
        document.body.classList.add('loaded'); // Show the main content and hide the preloader
      }
    });
  });
  