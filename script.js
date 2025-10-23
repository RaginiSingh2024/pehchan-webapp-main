// Tab Functionality for Donate Page
function showTab(tabName) {
    // Hide all tab panels
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabPanels.forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// Form Submissions
document.addEventListener('DOMContentLoaded', function() {
    // Volunteer Form
    const volunteerForm = document.querySelector('.volunteer-form');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for registering as a volunteer! We will contact you soon.');
            volunteerForm.reset();
        });
    }

    // Donate Form
    const donateForm = document.querySelector('.donate-form');
    if (donateForm) {
        donateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your generous donation! Redirecting to payment gateway...');
            donateForm.reset();
        });
    }

    // Auth Forms
    const authForms = document.querySelectorAll('.auth-form');
    authForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formType = this.closest('#login') ? 'Login' : 'Signup';
            alert(`${formType} successful!`);
            form.reset();
        });
    });

    // Contact Form
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});

console.log('Pehchan website loaded successfully! 🎉');
