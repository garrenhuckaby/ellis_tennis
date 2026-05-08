// Ellis Tennis - Main JavaScript

// STRIPE INTEGRATION CONFIGURATION
// To add Stripe payment links, replace these with your actual Stripe Payment Link URLs
// You can generate these at: https://dashboard.stripe.com/payment-links
const STRIPE_CONFIG = {
    register: '' // TODO: Replace with your Stripe Payment Link URL
};

// Add active class to current page nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
    }
});

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

// Monitor Google Forms submission and collapse container
const googleFormsIframe = document.querySelector('iframe[src*="docs.google.com/forms"]');
if (googleFormsIframe) {
    googleFormsIframe.addEventListener('load', () => {
        const observer = new MutationObserver(() => {
            const container = googleFormsIframe.closest('.bg-light') || googleFormsIframe.parentElement;
            if (container && container.innerText.includes('Your response has been recorded') ||
                container.innerText.includes('you\'ve already responded')) {
                if (!container.classList.contains('form-submitted')) {
                    container.classList.add('form-submitted');
                }
            }
        });
        observer.observe(googleFormsIframe.parentElement, { childList: true, subtree: true });
    });
}

console.log('Ellis Tennis website loaded successfully!');
