document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const confirmation = document.getElementById('confirmation');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Show the confirmation message
        form.classList.add('hidden');
        confirmation.classList.remove('hidden');
    });
});
