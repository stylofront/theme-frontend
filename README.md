# @stylofront/theme

A complete theme package for Next.js applications with Google Fonts integration, CSS variables, and a React font provider component.

## Features

- 🎨 **CSS Variables**: Comprehensive theme system with light and dark mode support
- 🌙 **Dark Mode**: Built-in dark mode CSS variables
- 📦 **Zero Config**: Works out of the box with Next.js

## Installation

```bash
npm install @stylofront/theme
# or
yarn add @stylofront/theme
# or
pnpm add @stylofront/theme
```

## Prerequisites

This package requires:
- Next.js 13.0.0 or higher
- React 18.0.0 or higher

## Usage

### 1. Import CSS in your Next.js app

Add the theme CSS to your root layout or `_app.tsx`:

**For App Router (Next.js 13+):**

```tsx
// app/layout.tsx
import '@stylofront/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

**For Pages Router:**

```tsx
// pages/_app.tsx
import '@stylofront/theme';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

### 2. Use CSS Variables in your components

The theme provides CSS variables that you can use throughout your application:

```tsx
// Example component
export default function MyComponent() {
  return (
    <div style={{ 
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      padding: '1rem'
    }}>
      <h1 style={{ color: 'var(--primary)' }}>Hello World</h1>
      <p style={{ color: 'var(--gray-500)' }}>This is a paragraph</p>
    </div>
  );
}
```

### 3. Use with Tailwind CSS

If you're using Tailwind CSS, the theme variables are automatically mapped:

```tsx
// Example with Tailwind
export default function MyComponent() {
  return (
    <div className="bg-background text-foreground p-4">
      <h1 className="text-primary">Hello World</h1>
      <p className="text-gray-500">This is a paragraph</p>
    </div>
  );
}
```

### 4. Dark Mode

Toggle dark mode by adding the `dark` class to your root element:

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <FontProvider>
          {children}
        </FontProvider>
      </body>
    </html>
  );
}
```

Or use a theme toggle component:

```tsx
'use client';

import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? 'Light' : 'Dark'} Mode
    </button>
  );
}
```

## Available CSS Variables

### Base Colors
- `--background`: Background color
- `--foreground`: Text color

### Primary Colors
- `--primary`: Primary color
- `--primary-dark`: Darker primary variant
- `--primary-light`: Lighter primary variant

### Secondary Colors
- `--secondary`: Secondary color
- `--secondary-dark`: Darker secondary variant

### Accent Colors
- `--accent`: Accent color

### Neutral Colors
- `--gray-900`, `--gray-800`, `--gray-700`, `--gray-500`, `--gray-300`, `--gray-50`

### Status Colors
- `--success`: Success state color
- `--warning`: Warning state color
- `--error`: Error state color

### Font Variables
- `--font-outfit`: Outfit font family (for headings)
- `--font-space-grotesk`: Space Grotesk font family (for body)

## Fonts

The package includes two Google Fonts:

1. **Outfit** - Used for headings
   - Weights: 400, 600, 700
   - Variable: `--font-outfit`

2. **Space Grotesk** - Used for body text
   - Weights: 400, 500, 600, 700
   - Variable: `--font-space-grotesk`


## Development

To use this package locally during development:

```bash
# In the theme directory
npm link

# In your Next.js project
npm link @stylofront/theme
```

## License

MIT

## Support

For issues and questions, please open an issue on the repository.

