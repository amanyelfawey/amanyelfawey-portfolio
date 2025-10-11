// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below with your actual IDs

export const emailConfig = {
  serviceId: 'service_your_service_id', // Replace with your EmailJS service ID
  templateId: 'template_your_template_id', // Replace with your EmailJS template ID
  publicKey: 'your_public_key', // Replace with your EmailJS public key
};

// Email template variables that will be sent:
// - from_name: User's name
// - from_email: User's email
// - message: User's message
// - to_email: Your email address (set in template)
