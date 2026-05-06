// Ellis Tennis - Main JavaScript

// STRIPE INTEGRATION CONFIGURATION
// To add Stripe payment links, replace these with your actual Stripe Payment Link URLs
// You can generate these at: https://dashboard.stripe.com/payment-links
const STRIPE_CONFIG = {
    register: '' // TODO: Replace with your Stripe Payment Link URL
};

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarToggle = document.querySelector('.navbar-toggler');
        if (window.getComputedStyle(navbarToggle).display !== 'none') {
            navbarToggle.click();
        }
    });
});

// Update Stripe payment button if configured
const stripeRegisterBtn = document.getElementById('stripe-register-btn');
if (stripeRegisterBtn && STRIPE_CONFIG.register) {
    stripeRegisterBtn.href = STRIPE_CONFIG.register;
    stripeRegisterBtn.target = '_blank';
}

console.log('Ellis Tennis website loaded successfully!');
