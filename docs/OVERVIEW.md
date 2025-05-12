# Portfolio Site Documentation

## Project Overview
This is a modern, responsive portfolio site built with Astro, MDX, and Tailwind CSS, specifically designed to showcase AI-focused work, including projects, products, and conceptual explorations.

### Core Technologies
- **Framework**: Astro v5
- **Runtime**: Bun
- **Content**: MDX integration (`@astrojs/mdx`)
- **Styling**: Tailwind CSS with Typography plugin
- **Components**: React + shadcn/ui
- **Theme**: Dark/Light mode support

## Architecture

### Key Features
- Responsive Design (mobile-first approach)
- Dark Mode Support with persistent preferences
- MDX Content with component support
- Project Showcase with filtering
- Media Embeds support
- Accessibility-focused design

### Project Structure
```
src/
├── components/
│   ├── mdx/           # MDX-specific components
│   ├── ui/            # shadcn/ui components
│   └── ProjectCard.tsx # Project display components
├── layouts/
│   └── Layout.astro   # Base layout with theme support
├── pages/
│   ├── projects/      # Auto-generated project pages
│   └── *.mdx         # Content pages
├── scripts/
│   └── generate-project-pages.js # Project page generator
└── styles/
    └── global.css    # Global styles and utilities
```

### Content Management
- Projects are managed through a combination of MDX files and JSON data
- Automatic project page generation from data
- Support for various media types and embeds
- Category-based project organization (AI, Products, Concepts)

### Build & Development
```bash
# Install dependencies
bun install

# Development server
bun run dev        # Runs on localhost:4321

# Build for production
bun run build      # Outputs to ./dist/

# Preview build
bun run preview
```

## Project Categories
The site organizes content into three main categories:
- **AI Projects**: Machine learning and artificial intelligence work
- **Products**: Real-world applications and tools
- **Concepts**: Experimental and theoretical work

## Component System
- Uses shadcn/ui for consistent design
- Custom components for project display:
  - `ProjectCard`: Individual project display
  - `ProjectGrid`: Responsive project layout
  - `FilterableProjectGrid`: Category-based filtering

## Styling System
- Tailwind CSS for utility-first styling
- Custom utilities for project grid layouts
- Responsive design breakpoints
- Dark/Light theme support with system preference detection

## Automation
- Automatic project page generation
- Build-time content processing
- Theme preference persistence
- Responsive image optimization

## Future Enhancements
- GitHub Actions integration for automated deployment
- Enhanced media embed support
- Improved project filtering and search
- Additional content type support

## Development Guidelines
- MDX files for content
- Tailwind for styling
- Component-first architecture
- Accessibility considerations
- Performance optimization

This documentation will be expanded as the project evolves.