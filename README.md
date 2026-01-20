# Newsletter Sign-Up Form

A responsive email newsletter subscription form with built-in validation and success confirmation flow.

## Features

- **Responsive Design** – Mobile-first layout that adapts seamlessly from 375px to 1440px+ viewports
- **Email Validation** – Client-side validation with visual error states for invalid or empty emails
- **Success Flow** – Modal-style confirmation panel showing the submitted email address
- **Accessible** – Semantic HTML with ARIA labels, form error announcements, and keyboard navigation support
- **Modern Styling** – Custom CSS with CSS variables, gradients, and smooth transitions
- **Clean Architecture** – Separated HTML structure, external stylesheet, and modular JavaScript

## Tech Stack

- **HTML5** – Semantic markup with form elements and accessibility features
- **CSS3** – Custom properties, Grid/Flexbox layout, responsive media queries
- **JavaScript** – Form handling, validation, and DOM manipulation
- **Local Fonts** – Roboto (400, 700) bundled locally

## Project Structure

```
├── index.html          # Form markup and success confirmation panel
├── styles.css          # Responsive layout and component styling
├── main.js             # Form validation and interaction logic
├── assets/
│   ├── fonts/          # Roboto TTF files
│   └── images/         # Icons and illustrations (mobile/desktop)
├── style-guide.md      # Design tokens (colors, typography)
└── .gitignore          # Excludes design/ folder
```

## Git Workflow

Implemented with feature branch strategy:
- `main` – Production-ready code
- `dev` – Integration branch for features
- `feature/layout-styles` – Layout and CSS implementation
- `feature/validation-success` – Form validation and success flow

All features merged into `dev`, then into `main` with merge commits.

## Quick Start

1. Clone the repository
2. Open `index.html` in a modern browser
3. Test form submission with valid/invalid email addresses

## Browser Support

Chrome, Firefox, Safari, Edge (modern versions with ES6+ support)
