# RustChat Marketing Website

This is a high-performance, modern marketing website for RustChat, built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm

### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
To create an optimized production build:
```bash
npm run build
```

## Project Structure

- `app/`: Contains the Next.js App Router files.
  - `layout.tsx`: The global layout, including Google Analytics and metadata.
  - `page.tsx`: The main landing page content (single-file implementation).
  - `globals.css`: Global styles and Tailwind directives.
- `public/`: Static assets like images and icons.
- `tailwind.config.js`: Tailwind CSS configuration (theme, colors, etc.).

## How to Update Website Contents

### Updating Text and Sections
Most of the website content is located in `app/page.tsx`. To update text, features, or sections:
1. Open `app/page.tsx`.
2. Locate the relevant component or constant (e.g., `navLinks`, `IconCuts`, or the `RustChatLanding` state).
3. Modify the JSX/TypeScript directly.
4. Changes will hot-reload in development mode.

### Updating the Global Layout
To update the navigation bar shell, footer (shared parts), or metadata:
1. Open `app/layout.tsx`.
2. Update the `metadata` object for SEO titles and descriptions.
3. Update the `RootLayout` component for structural changes.

### Google Analytics
GA is managed in `app/layout.tsx` using the `next/script` component. To change the tracking ID, update the `src` and `config` lines in the `<Script>` tags.

### Styling and Theme
- The site uses **Tailwind CSS**. You can use utility classes directly in the components.
- Custom colors and theme variables (like `midnight`, `accent-purple`, `accent-teal`) are defined in `tailwind.config.js`.
- Global styles and animations are defined in `app/globals.css` and the `<style>` block at the bottom of `app/page.tsx`.

### Adding Images
1. Place new images in the `/public` directory.
2. Reference them in your components using absolute paths (e.g., `<img src="/your-image.png" />`).

## Deployment
The site is configured for containerization. Use the provided `Dockerfile` and `docker-compose.yml` for deployment.
