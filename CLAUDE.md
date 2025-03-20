# CLAUDE.md - Codebase Guide

## Build Commands
- `npm start`: Start development server
- `npm run build`: Build production bundle
- `npm run serve`: Serve production build
- `npm run typecheck`: Run TypeScript type checking
- `npm run clear`: Clear cache
- `npm run swizzle`: Customize Docusaurus components
- `npm run deploy`: Deploy to GitHub Pages

## Code Style Guidelines
- **TypeScript**: Use TypeScript for all components and pages
- **Imports**: Group imports - React, dependencies, then local
- **Components**: Use functional components with typed props
- **Naming**: PascalCase for components, camelCase for functions/variables
- **CSS**: Use CSS modules with camelCase class names
- **Formatting**: 2-space indentation, single quotes
- **Types**: Define explicit types for component props using interfaces/types
- **Error Handling**: Use try/catch for async operations
- **Documentation**: Comment complex logic and use JSDoc for functions

## Project Structure
This is a Docusaurus v2 site with Markdown/MDX content in `/docs` and `/blog` directories.