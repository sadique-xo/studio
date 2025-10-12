# **App Name**: Sadique Portfolio Pro

## Core Features:

- Project Management (Admin): Admin panel to create, edit, and manage portfolio projects with details like title, description, images, and SEO metadata. Includes Firestore integration.
- Testimonial Management (Admin): Admin interface to add, update, and manage client testimonials. Utilizes Firestore for storage.
- Public Portfolio Display: Display portfolio projects on the frontend with SEO-friendly static pages.
- Contact Form with Email Notifications: A contact form that sends submissions to Firestore and dispatches email notifications via SendGrid after reCAPTCHA verification.
- Admin Authentication: Secure admin login using Firebase Authentication with email/password and custom admin claims.
- Settings Management (Admin): Admin area to configure site settings such as title, tagline, and social links using a single Firestore document.
- AI-powered image resizing tool: Admin function to use an AI model, accessed as a tool, to create social media-friendly renditions of images as new projects are uploaded. These new files will automatically follow naming conventions so that social sharing automatically uses them. 

## Style Guidelines:

- Primary color: Deep blue (#30475E) to evoke trust and sophistication in real estate web design.
- Background color: Light gray (#F0F0F0) for a clean, professional backdrop.
- Accent color: Soft orange (#F05454) to highlight key interactive elements and calls to action.
- Body: 'PT Sans', a warm sans-serif.
- Headline: 'Playfair', a modern serif
- Use clean, minimalist icons for navigation and key features.
- Modern, grid-based layout optimized for showcasing visual content (project images).
- Subtle animations and transitions to enhance user experience, such as fading in elements on scroll.