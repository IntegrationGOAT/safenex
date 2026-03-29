# SafeNex

SafeNex is an innovative fire safety technology that utilizes emulsification to reduce fuel flammability and prevent vehicle fires. This repository contains the official SafeNex web application built with React and Vite.

##  About SafeNex

SafeNex addresses the critical issue of vehicle fires by employing emulsification technology to reduce fuel flammability. Using principles of chemistry such as saponification and emulsification, SafeNex creates a safer fuel mixture that is less prone to ignition.

### Key Concepts

- **Emulsification**: The process of mixing two immiscible liquids (like oil and water) into a stable mixture
- **Saponification**: Alkaline hydrolysis of fats/oils with NaOH to produce soap and glycerol, which acts as an emulsifier
- **Advanced Technology**: Integration of Arduino Mega, flame sensors, AI, and IoT for comprehensive fire safety

##  Tech Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.1
- **Animation Libraries**:
  - GSAP 3.14.2
  - Motion 12.38.0
- **3D Graphics**: OGL 1.0.11
- **Language**: JavaScript (JSX)

##  Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher recommended)
- npm or bun package manager

##  Installation

1. Clone the repository:
```bash
git clone https://github.com/IntegrationGOAT/safenex.git
cd safenex
```

2. Install dependencies:
```bash
npm install
```

or if using bun:
```bash
bun install
```

##  Development

Start the development server:

```bash
npm run dev
```

or with bun:
```bash
bun run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

## Build

Create a production build:

```bash
npm run build
```

or with bun:
```bash
bun run build
```

##  Preview

Preview the production build locally:

```bash
npm run preview
```

or with bun:
```bash
bun run preview
```

##  Project Structure

```
safenex/
├── src/
│   ├── assets/          # Static assets (images, videos)
│   ├── component/       # React components
│   │   ├── BorderGlow.jsx
│   │   ├── Counter.jsx
│   │   ├── FatalitiesCounter.jsx
│   │   ├── Navbar.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── SpotlightCard.jsx
│   │   └── TeamSection.jsx
│   ├── main.jsx        # Application entry point
│   └── style.css       # Global styles
├── public/             # Public assets
├── index.html          # HTML template
├── package.json        # Project dependencies
└── vite.config.js      # Vite configuration
```

##  Features

- **Interactive Hero Section**: Video background with smooth transitions
- **Educational Content**: Information about emulsification and saponification
- **Fatalities Counter**: Visual representation of fire-related statistics
- **Services Showcase**: Highlighting SafeNex's capabilities and features
- **Team Section**: Meet the team behind SafeNex
- **Responsive Design**: Optimized for various screen sizes
- **Smooth Animations**: Enhanced user experience with GSAP and Motion

##  Working Equations

The science behind SafeNex:

1. **Saponification**: Triglyceride + 3NaOH → Glycerol + Soap
2. **Soap Dissociation**: RCOONa → RCOO⁻ + Na⁺
3. **Emulsification**: Fuel + Water + Emulsifier → Emulsion
4. **Combustion**: 2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O

##  Future Prospects

- Smart vehicle integration
- Industrial safety applications
- Development of better emulsifiers
- Cost optimization strategies

##  License

This project is private and proprietary.

##  Team

For team information and contributions, please visit the application's Team section.

##  Contact

© SafeNex. All rights reserved 2026.

---

Built with ❤️ by the SafeNex Team
