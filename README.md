# AI Portfolio Site

A modern, responsive portfolio site built with Astro, MDX, and Tailwind CSS. This site is specifically designed to showcase AI-focused work, including projects, products, and conceptual explorations.

## Features

- **Responsive Design**: Built with a mobile-first approach using Tailwind CSS
- **Dark Mode Support**: Toggle between light and dark themes
- **MDX Content**: Write content using Markdown with JSX components
- **Project Showcase**: Categorized project cards with filtering
- **Media Embeds**: Support for various media types (images, videos, tweets, GitHub repos, etc.)
- **Accessible**: Built with accessibility in mind

## 🚀 Project Structure

```text
/
├── public/
│   ├── assets/
│   │   └── images/       # Place your images here
│   └── favicon.svg
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layouts
│   └── pages/            # Pages and MDX content
│       ├── index.mdx     # Home page
│       ├── about.mdx     # About page
│       └── projects.mdx  # Projects page
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Customization Guide

### 1. Personal Information

Update your personal information in the following files:

- **src/pages/index.mdx**: Home page content and featured projects
- **src/pages/about.mdx**: Your bio, experience, and social links
- **src/pages/projects.mdx**: Detailed project listings

### 2. Images

1. Add your images to the `public/assets/images/` directory
2. Update image references in the MDX files and components

### 3. Styling

This site uses Tailwind CSS for styling. The main color scheme can be customized in the `tailwind.config.js` file.

### 4. Projects

Projects are displayed using the `ProjectCard` component. Each project can include:

- Title and description
- Image
- Category (ai, product, concept, other)
- Tags
- Links (project URL, GitHub, demo)
- Date

### 5. Media Embeds

Use the `MediaEmbed` component to embed various types of media:

```jsx
<MediaEmbed 
  type="youtube" 
  src="https://www.youtube.com/watch?v=your-video-id" 
  caption="Your caption here" 
/>
```

Supported types: `image`, `video`, `youtube`, `tweet`, `github`, `figma`, `sandbox`

## Deployment

This site can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Connect your GitHub repository or use `bun run build` and upload the `dist` directory
- **GitHub Pages**: Use GitHub Actions to build and deploy to GitHub Pages

## Need Help?

Refer to the [Astro documentation](https://docs.astro.build) for more information on Astro features and customization.
