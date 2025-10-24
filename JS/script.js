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

// Main DOMContentLoaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    initMobileMenu();
    
    // Hero Buttons
    initHeroButtons();
    
    // Form Submissions
    initForms();
    
    // Smooth Scrolling for Links
    initSmoothScroll();
    
    // Logo Click Handler
    initLogoClick();

    // Navbar scroll behavior (Home page only)
    initNavbarScroll();
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }
}

// Hero Button Functionality
function initHeroButtons() {
    const joinBtn = document.querySelector('.btn-join');
    const donateHeroBtn = document.querySelector('.btn-donate-hero');
    
    if (joinBtn) {
        joinBtn.addEventListener('click', function() {
            window.location.href = 'volunteer.html';
        });
    }
    
    if (donateHeroBtn) {
        donateHeroBtn.addEventListener('click', function() {
            window.location.href = 'donate.html';
        });
    }
}

// Form Submissions
function initForms() {
    // Volunteer Form
    const volunteerForm = document.querySelector('.volunteer-form');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateVolunteerForm(this)) {
                alert('Thank you for registering as a volunteer! We will contact you soon.');
                volunteerForm.reset();
            }
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
}

// Validate Volunteer Form
function validateVolunteerForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = '#ddd';
        }
    });
    
    if (!isValid) {
        alert('Please fill in all required fields.');
    }
    
    return isValid;
}

// Smooth Scrolling
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Logo Click Handler
function initLogoClick() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = 'home.html';
        });
    }
}

// Solid navbar after scrolling past hero on Home page
function initNavbarScroll() {
    const isHome = document.body.classList.contains('home');
    const navbar = document.querySelector('.navbar');
    if (!isHome || !navbar) return;

    const onScroll = () => {
        const threshold = 60;
        if (window.scrollY > threshold) {
            navbar.classList.add('navbar-solid');
        } else {
            navbar.classList.remove('navbar-solid');
        }
    };

    // Initial check and event binding
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
}

console.log('Pehchan website loaded successfully! 🎉');
