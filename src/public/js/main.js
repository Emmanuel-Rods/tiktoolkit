
document.addEventListener('DOMContentLoaded', function() {
  // Add loading state to form submission
  const form = document.querySelector('form');
  const searchButton = form.querySelector('button[type="submit"]');
  const searchInput = form.querySelector('input[name="username"]');
  
  form.addEventListener('submit', function(e) {
    // Only for client-side validation
    if (!searchInput.value.trim()) {
      e.preventDefault();
      return;
    }
    
    // Add loading state
    searchButton.innerHTML = 'Searching...';
    searchButton.disabled = true;
    searchInput.disabled = true;
  });
  
  // Add smooth scroll to videos section if results exist
  if (document.querySelector('.glass-card')) {
    setTimeout(() => {
      window.scrollTo({
        top: document.querySelector('h2').offsetTop - 20,
        behavior: 'smooth'
      });
    }, 500);
  }
});
