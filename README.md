# Felix Dela Fuente - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project showcases my work as a Full Stack Developer, including projects, certifications, and professional experience.

## 🚀 Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.0.5
- **Language**: TypeScript 5.6.2
- **Styling**: SCSS
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/felixdelafuente/felixdelafuente.github.io.git

# Navigate to project directory
cd me

# Install dependencies
npm install
```

## 📖 Available Scripts

| Command           | Description                                       |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start development server at http://localhost:5173 |
| `npm run build`   | Build for production to `dist/` folder            |
| `npm run preview` | Preview production build locally                  |
| `npm run lint`    | Run ESLint to check code quality                  |
| `npm run deploy`  | Deploy to GitHub Pages                            |

## 🏗️ Project Structure

```
me/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── manifest.json
│   └── CNAME
├── src/
│   ├── assets/            # Images, icons, fonts
│   ├── components/        # React components
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Form.tsx
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   ├── Socials.tsx
│   │   ├── Tab.tsx
│   │   ├── Tabs.tsx
│   │   └── [button components]
│   ├── content/          # Data/content files
│   │   └── Portfolio.ts
│   ├── stylesheets/      # SCSS styles
│   │   ├── index.scss
│   │   └── variables.scss
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── vite-env.d.ts     # TypeScript declarations
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

| Color      | Hex       | Usage                 |
| ---------- | --------- | --------------------- |
| Black      | `#000000` | Primary text, buttons |
| White      | `#FFFFFF` | Backgrounds           |
| Gray       | `#808080` | Secondary text        |
| Light Gray | `#F3F4F6` | Backgrounds           |

### Typography

- **Headings**: Poppins (Bold)
- **Body**: Roboto (Regular)

## 🔧 Configuration

### Vite Configuration

The project uses Vite with React plugin. Key configurations:

- **Base URL**: `/` (for GitHub Pages deployment)
- **Output Directory**: `dist/`
- **Dev Server Port**: 5173

### TypeScript Configuration

Strict mode is disabled for compatibility. The project uses:

- ES2020 target
- DOM and DOM.Iterable libraries
- Bundler module resolution

## 📝 Adding New Projects

To add a new project to the portfolio, edit `src/content/Portfolio.ts`:

```typescript
{
  title: 'Project Name',
  description: 'Project description',
  img: projectImage,
  link: 'https://project-link.com',
  tools: [
    { icon: reactIcon, name: 'React' },
    { icon: nodeIcon, name: 'Node.js' }
  ]
}
```

## 🐛 Troubleshooting

### Build Issues

If you encounter build errors:

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues

Ensure your `package.json` has the correct homepage:

```json
{
  "homepage": "https://felixdelafuente.dev"
}
```

## 📄 License

This project is for personal use. All rights reserved.

## 👤 Contact

- Email: hello.felixdelafuente@gmail.com
- LinkedIn: [delafuentefelix](https://www.linkedin.com/in/delafuentefelix/)
- GitHub: [felixdelafuente](https://github.com/felixdelafuente)
