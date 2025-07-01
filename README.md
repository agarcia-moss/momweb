# MOM - Mechanical Operations Manual Website

A modern, responsive website for the Mechanical Operations Manual (MOM) built with Next.js and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with Tailwind CSS
- Interactive components
- Dark mode toggle (ready for implementation)
- Clean, professional layout

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
momweb/
├── app/                    # Next.js app directory
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.jsx         # Navigation header
│   ├── MOMSiteLayoutLightMode.jsx  # Main layout component
│   ├── ProcessSteps.jsx   # Process steps section
│   ├── ContentSection.jsx # Reusable content section
│   ├── ApprovalSection.jsx # Approval section
│   └── ReferenceSection.jsx # Reference materials section
├── public/                # Static assets
├── package.json          # Project dependencies
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm start` - Runs the built app in production mode
- `npm run lint` - Runs the linter

## Technologies Used

- **Next.js 14** - React framework for production
- **React 18** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS preprocessor
- **Autoprefixer** - PostCSS plugin to parse CSS and add vendor prefixes

## Customization

### Colors

The main brand color is defined in `tailwind.config.js`:
- Brand Color Light Mode: `#006B35`

### Adding New Pages

To add new pages, create new files in the `app` directory. Next.js uses file-based routing.

### Modifying Components

All components are in the `components` directory and can be modified as needed.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is private and proprietary. 