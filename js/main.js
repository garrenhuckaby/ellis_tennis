// Ellis Tennis - Main JavaScript

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarToggle = document.querySelector('.navbar-toggler');
        if (window.getComputedStyle(navbarToggle).display !== 'none') {
            navbarToggle.click();
        }
    });
});

// Smooth scroll for anchor links (Bootstrap already handles this, but ensure it works)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple form submission for contact form (uses Formspree)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Replace with your Formspree endpoint
        const formspreeURL = 'https://formspree.io/f/YOUR_FORM_ID';

        const formData = new FormData(this);

        fetch(formspreeURL, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Thanks for your message! I\'ll get back to you soon.');
                contactForm.reset();
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
        });
    });
}

// Update payment button links (replace with your Stripe Payment Links)
const paymentButtons = {
    single: document.getElementById('pay-single'),
    monthly: document.getElementById('pay-monthly')
};

if (paymentButtons.single) {
    paymentButtons.single.href = 'https://buy.stripe.com/YOUR_SINGLE_LESSON_LINK';
    paymentButtons.single.target = '_blank';
}

if (paymentButtons.monthly) {
    paymentButtons.monthly.href = 'https://buy.stripe.com/YOUR_MONTHLY_PACKAGE_LINK';
    paymentButtons.monthly.target = '_blank';
}

// Calendar subscription link (iCal)
const calendarSubscribe = document.getElementById('calendar-subscribe');
if (calendarSubscribe) {
    // This should point to your Google Calendar iCal feed
    // Example format: https://calendar.google.com/calendar/ical/YOUR_CALENDAR_ID/public/basic.ics
    calendarSubscribe.href = '#';
    calendarSubscribe.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Calendar subscription link will be configured in the README.');
    });
}

console.log('Ellis Tennis website loaded successfully!');
