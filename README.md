# Fatemeh Esmailzadeh — Front End Developer Portfolio

A modern, responsive single-page portfolio built with **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Features a clean white/grey minimalist design, dark mode toggle, smooth scrolling, and accessibility-friendly structure.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** (with dark mode)
- **Framer Motion** (animations)
- **React Icons**
- **React Router** (single-page with hash/smooth scroll)

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Install and run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

Output is in the `dist` folder. Preview the build locally:

```bash
npm run preview
```

## Project structure

```
src/
├── components/     # Section components (Hero, About, Skills, etc.)
├── context/        # DarkModeContext for theme toggle
├── App.jsx
├── main.jsx
└── index.css
```

## Features

- **Sections**: Hero, About, Skills, Education, Languages, Experience, Projects, Other Knowledges, Contact, Footer
- **Dark mode**: Toggle with persistence (localStorage + system preference)
- **Responsive**: Mobile-first, works on all screen sizes
- **Accessibility**: Semantic HTML, ARIA labels, focus styles
- **SEO**: Meta tags and descriptive titles in `index.html`
- **Animations**: Section reveal and hover effects via Framer Motion

## Customization

- **Resume PDF**: Replace the Hero “Download Resume” link (`/resume.pdf` or add your file in `public/`).
- **Contact form (EmailJS)**:
  1. Sign up at [EmailJS](https://www.emailjs.com/), add an email service (e.g. Gmail), and create a template.
  2. In the template, use variables: `{{name}}`, `{{email}}`, `{{message}}` (they match the form field names).
  3. Copy `.env.example` to `.env` and set:
     - `VITE_EMAILJS_PUBLIC_KEY` — from EmailJS Account → API Keys
     - `VITE_EMAILJS_SERVICE_ID` — from Email Services
     - `VITE_EMAILJS_TEMPLATE_ID` — from Email Templates
  4. Restart the dev server after changing `.env`.

## License

Private portfolio. All rights reserved.
