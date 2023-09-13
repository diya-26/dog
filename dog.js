
  const clickme = document.getElementById('clickme');

  clickme.addEventListener('click', function() {
    // Add a delay of 2-3 seconds (you can change this value as needed)
    const delay = 2000; // 2 seconds
    // const delay = 3000; // 3 seconds

    // Disable the button to prevent multiple clicks during the delay
    clickme.disabled = true;

    // Add a loading icon before the "Click me" text
    clickme.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';

    // Wait for the specified delay and then change the location
    setTimeout(() => {
      window.location.href = 'dog2.html';

      // Revert the button content to its original state
      clickme.innerHTML = '<i class="fa-solid fa-magnifying-glass" id="xx"></i> Click me';
      clickme.disabled = false; // Enable the button after the delay
    }, delay);
  });
