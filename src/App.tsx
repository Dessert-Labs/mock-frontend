import { Button, Card, CardHeader, CardTitle, CardContent, ThemeToggle } from './components';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 p-6 transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            Mock Frontend
          </h1>
          <ThemeToggle />
        </header>

        {/* Hero Section */}
        <section className="text-center py-12 mb-8">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Design System Demo
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-6">
            This is a simple Vite React app demonstrating how to consume design
            tokens from the <strong>mock-design-system</strong> via Clafoutis.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Color Palette
          </h2>
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Primary Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-md shadow-sm bg-primary-50" />
                  <span className="text-xs text-neutral-500">50</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-md shadow-sm bg-primary-100" />
                  <span className="text-xs text-neutral-500">100</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-md shadow-sm bg-primary-200" />
                  <span className="text-xs text-neutral-500">200</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-md shadow-sm bg-primary-300" />
                  <span className="text-xs text-neutral-500">300</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-md shadow-sm bg-primary-400" />
                  <span className="text-xs text-neutral-500">400</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-md shadow-sm bg-primary-500" />
                  <span className="text-xs text-neutral-500">500</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-md shadow-sm bg-primary-600" />
                  <span className="text-xs text-neutral-500">600</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-md shadow-sm bg-primary-700" />
                  <span className="text-xs text-neutral-500">700</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-md shadow-sm bg-primary-800" />
                  <span className="text-xs text-neutral-500">800</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-md shadow-sm bg-primary-900" />
                  <span className="text-xs text-neutral-500">900</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Components Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Components
          </h2>

          {/* Buttons */}
          <Card variant="bordered" className="mb-4">
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </CardContent>
          </Card>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
              </CardHeader>
              <CardContent>
                This card uses the default shadow variant with design tokens
                for colors and spacing.
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Bordered Card</CardTitle>
              </CardHeader>
              <CardContent>
                This card uses the bordered variant with the neutral border color
                from our design system.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded text-sm text-white bg-success-500">
                    Success
                  </span>
                  <span className="px-2 py-1 rounded text-sm text-white bg-warning-500">
                    Warning
                  </span>
                  <span className="px-2 py-1 rounded text-sm text-white bg-error-500">
                    Error
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Typography
          </h2>
          <Card variant="bordered">
            <CardContent>
              <div className="space-y-2">
                <p className="text-4xl font-bold">4xl - The quick brown fox</p>
                <p className="text-3xl font-bold">3xl - The quick brown fox</p>
                <p className="text-2xl font-semibold">2xl - The quick brown fox</p>
                <p className="text-xl font-semibold">xl - The quick brown fox</p>
                <p className="text-lg">lg - The quick brown fox jumps over the lazy dog</p>
                <p className="text-base">base - The quick brown fox jumps over the lazy dog</p>
                <p className="text-sm">sm - The quick brown fox jumps over the lazy dog</p>
                <p className="text-xs">xs - The quick brown fox jumps over the lazy dog</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-neutral-500 py-6 border-t border-neutral-200 dark:border-neutral-700">
          <p>
            Powered by{' '}
            <a
              href="https://github.com/Dessert-Labs/clafoutis"
              className="text-primary-500 hover:underline"
            >
              Clafoutis
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
