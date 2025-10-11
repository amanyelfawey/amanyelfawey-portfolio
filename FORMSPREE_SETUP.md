# Formspree Setup for amanyelfawey5@gmail.com

## Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Get Started" or "Sign Up"
3. Use your email: **amanyelfawey5@gmail.com**
4. Verify your email address

### Step 2: Create New Form
1. After logging in, click "New Form"
2. Give it a name: "Portfolio Contact Form"
3. Set the email to receive submissions: **amanyelfawey5@gmail.com**
4. Click "Create Form"

### Step 3: Get Your Form Endpoint
1. After creating the form, you'll see a form endpoint like:
   `https://formspree.io/f/xpzqkqkq`
2. Copy this URL

### Step 4: Update the Code
1. Open `src/components/contact/Contact.jsx`
2. Find this line:
   ```javascript
   const response = await fetch('https://formspree.io/f/xpzqkqkq', {
   ```
3. Replace `xpzqkqkq` with your actual form ID from Step 3

### Step 5: Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email: **amanyelfawey5@gmail.com**

## What You'll Receive

When someone submits the contact form, you'll receive an email like this:

```
From: Portfolio Contact Form <noreply@formspree.io>
To: amanyelfawey5@gmail.com
Subject: New submission from Portfolio Contact Form

Name: John Doe
Email: john@example.com
Message: Hi, I'm interested in working with you on a project...

---
This message was sent from your portfolio contact form.
```

## Formspree Features

✅ **Free Plan**: 50 submissions per month
✅ **Spam Protection**: Built-in spam filtering
✅ **Email Notifications**: Instant email alerts
✅ **Form Analytics**: See submission statistics
✅ **Easy Setup**: No complex configuration needed

## Troubleshooting

- **Form not sending**: Check that the form endpoint URL is correct
- **Emails not received**: Check spam folder, verify email address
- **Too many submissions**: Upgrade to paid plan if needed

## Alternative: Direct Email Link

If you prefer a simple email link instead of a form, you can replace the entire form with:

```html
<a href="mailto:amanyelfawey5@gmail.com?subject=Portfolio Contact&body=Hi Amani," 
   className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg">
   Send Email Directly
</a>
```

But the form is more professional and user-friendly!
