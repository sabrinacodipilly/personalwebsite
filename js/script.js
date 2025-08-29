const formButton = document.getElementById('contactbutton');

form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Clear the form fields
    form.reset();
  
    // Add a confirmation message for the user
    alert('Your message has been sent!');
  });
