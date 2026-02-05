# Mock Frontend

A simple Vite React app demonstrating how to consume design tokens from the [mock-design-system](https://github.com/Dessert-Labs/mock-design-system) using [Clafoutis](https://github.com/Dessert-Labs/clafoutis).

## Getting Started

### Prerequisites

- Node.js 22+
- npm 10+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
npm run build
```

## Design Tokens

This project uses design tokens synced from `Dessert-Labs/mock-design-system` via Clafoutis.

### Syncing Tokens

To manually sync the latest design tokens:

```bash
npx clafoutis sync
```

The tokens are automatically synced via GitHub Actions when:
- The design system publishes a new release
- Manually triggered via workflow dispatch

### Token Files

| File | Description |
|------|-------------|
| `src/styles/css/base.css` | Base CSS variables |
| `src/styles/css/dark.css` | Dark mode overrides |
| `src/styles/tailwind.base.js` | Tailwind theme extension |
| `src/styles/figma-variables.json` | Figma variables (for reference) |

### Configuration

The Clafoutis consumer configuration is in `.clafoutis/consumer.json`:

```json
{
  "repo": "Dessert-Labs/mock-design-system",
  "version": "latest",
  "files": {
    "tailwind.base.js": "src/styles/tailwind.base.js",
    "base.css": "src/styles/css/base.css",
    "dark.css": "src/styles/css/dark.css",
    "variables.json": "src/styles/figma-variables.json"
  }
}
```

## Using Design Tokens with Tailwind

The synced `tailwind.base.js` extends your Tailwind config with design system colors, spacing, typography, etc. Use them as standard Tailwind utility classes:

```tsx
// Colors
<div className="bg-primary-500 text-neutral-900">
<div className="bg-success-500 text-error-500">

// Dark mode
<div className="bg-neutral-50 dark:bg-neutral-900">

// Typography  
<p className="text-lg font-semibold">

// Spacing
<div className="p-4 m-2 gap-6">
```

## Project Structure

```
mock-frontend/
├── .clafoutis/
│   └── consumer.json       # Clafoutis consumer config
├── .github/
│   └── workflows/
│       └── sync-tokens.yml # Auto-sync workflow
├── src/
│   ├── components/         # React components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ThemeToggle.tsx
│   ├── styles/
│   │   ├── css/           # Synced CSS tokens
│   │   │   ├── base.css
│   │   │   └── dark.css
│   │   ├── tailwind.base.js
│   │   └── figma-variables.json
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
└── package.json
```

## Features Demonstrated

- **Design Token Consumption**: CSS variables from the design system
- **Tailwind Integration**: Using token-based Tailwind utility classes (`bg-primary-500`, `text-neutral-900`)
- **Dark Mode**: Theme toggle using CSS variables with `.dark` class
- **Component Library**: Button and Card components styled with design tokens
- **Typography Scale**: Font sizes from the design system
- **Color Palette**: Primary and neutral color scales
- **Status Colors**: Success, warning, and error colors

## License

MIT
