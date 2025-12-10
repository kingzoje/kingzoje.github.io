# Portfolio Website

## Overview
A professional portfolio website showcasing a software engineer's expertise in fullstack development, game development, and mobile development. Built with React, TypeScript, and Express.

## Design System
- **Theme**: GitHub Dark inspired
- **Colors**: 
  - Primary: `#58A6FF` (GitHub Blue)
  - Background: `#0D1117` (GitHub Dark)
  - Secondary: `#21262D` (Code Grey)
  - Destructive: `#F85149` (GitHub Red)
- **Typography**: Inter (Sans), JetBrains Mono (Code)
- **Style**: Clean, professional, developer-focused with smooth animations

## Features
- Responsive navigation with mobile menu
- Hero section with custom abstract tech background
- Project showcase with filtering (Fullstack, Game Dev, Mobile)
- Skills display organized by category
- Professional experience timeline
- Contact form with backend validation

## Architecture
- **Frontend**: React + TypeScript + Tailwind CSS + Framer Motion
- **Backend**: Express.js with API routes
- **No Database**: Portfolio is static content, no persistence needed
- **Contact Form**: Currently logs submissions to console (email integration available if needed)

## Future Enhancements
### Email Integration (Optional)
The contact form is ready for email integration. To enable actual email sending:
1. Set up Resend integration via Replit UI, OR
2. Add email service credentials as secrets
3. Uncomment email sending code in `/server/routes.ts`

Note: User dismissed Resend integration setup for now - form works without it.

## Recent Changes (Dec 8, 2024)
- Created complete portfolio website design
- Implemented contact form with backend API validation
- Added data-testid attributes for testing
- Set up GitHub Dark theme with custom CSS variables
