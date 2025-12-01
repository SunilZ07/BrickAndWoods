const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const contactForm = document.getElementById('contact-form');
        const successMessage = document.getElementById('success-message');

        // Toggle Mobile Menu
        function toggleMenu() {
            mobileMenu.classList.toggle('hidden');
        }
        mobileMenuButton.addEventListener('click', toggleMenu);

        // WhatsApp Form Submission Handler
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const project = document.getElementById('project').value;
            const submitButton = contactForm.querySelector('button[type="submit"]');

            // Construct the detailed message for WhatsApp
            const message = `*Quote Request from Bricks & Woods Landing Page*\n\n*Client Name:* ${name}\n*Phone:* ${phone}\n\n*Project Details:*\n${project}`;
            
            // WhatsApp phone number
            const phoneNumber = '7039664698'; 

            // Encode the message for the URL
            const encodedMessage = encodeURIComponent(message);
            
            // Construct the WhatsApp URL
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // UX feedback before redirection
            const originalText = submitButton.textContent;
            submitButton.textContent = "Opening WhatsApp...";
            submitButton.disabled = true;

            // Open the WhatsApp URL in a new tab
            window.open(whatsappUrl, '_blank');

            // Reset UX feedback and form after a short delay
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                contactForm.reset();
            }, 1500);
            
            // Note: The form fields are reset after redirection.
        });