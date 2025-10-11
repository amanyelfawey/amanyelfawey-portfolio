# Email Setup Instructions

This portfolio includes a contact form that sends emails directly to your inbox using EmailJS. Follow these steps to set it up:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (also called User ID)

## Step 5: Update Configuration

1. Open `src/config/emailConfig.js`
2. Replace the placeholder values:

```javascript
export const emailConfig = {
  serviceId: 'service_xxxxxxxxx', // Your actual service ID
  templateId: 'template_xxxxxxxxx', // Your actual template ID
  publicKey: 'your_actual_public_key', // Your actual public key
};
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email inbox

## Troubleshooting

- **Form not sending**: Check that all IDs are correct in `emailConfig.js`
- **Emails not received**: Check your spam folder
- **Template errors**: Make sure template variables match the form fields

## Security Note

The public key is safe to use in frontend code, but for production, consider:
- Setting up rate limiting
- Adding CAPTCHA verification
- Using environment variables for sensitive data

## Alternative: Formspree

If you prefer not to use EmailJS, you can use Formspree instead:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create an account and get your form endpoint
3. Update the form action to use Formspree's endpoint
4. Remove EmailJS dependencies

Example Formspree integration:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response...
};
```
