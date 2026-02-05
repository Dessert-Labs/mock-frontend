import {
  Alert,
  Badge,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  ThemeToggle,
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 p-6 transition-colors">
      <div className="max-w-5xl mx-auto">
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
            This app demonstrates how to consume design tokens from{' '}
            <strong>mock-design-system</strong> via Clafoutis and use them as
            Tailwind utility classes.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </section>

        {/* Color Palettes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Color Palettes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Primary Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1 flex-wrap">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                    <div key={shade} className="text-center">
                      <div
                        className={`w-10 h-10 rounded shadow-sm bg-primary-${shade}`}
                      />
                      <span className="text-xs text-neutral-500">{shade}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Neutral Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1 flex-wrap">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                    <div key={shade} className="text-center">
                      <div
                        className={`w-10 h-10 rounded shadow-sm bg-neutral-${shade}`}
                      />
                      <span className="text-xs text-neutral-500">{shade}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spacing Scale */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Spacing Scale
          </h2>
          <Card variant="bordered">
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: '1', value: '0.25rem' },
                  { name: '2', value: '0.5rem' },
                  { name: '3', value: '0.75rem' },
                  { name: '4', value: '1rem' },
                  { name: '5', value: '1.25rem' },
                  { name: '6', value: '1.5rem' },
                  { name: '8', value: '2rem' },
                  { name: '10', value: '2.5rem' },
                  { name: '12', value: '3rem' },
                ].map(({ name, value }) => (
                  <div key={name} className="flex items-center gap-4">
                    <span className="w-8 text-sm font-mono text-neutral-500">{name}</span>
                    <div
                      className={`h-4 bg-primary-500 rounded w-${name}`}
                      style={{ width: value }}
                    />
                    <span className="text-xs text-neutral-400">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Typography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Font Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-4xl">4xl - Display</p>
                  <p className="text-3xl">3xl - Heading 1</p>
                  <p className="text-2xl">2xl - Heading 2</p>
                  <p className="text-xl">xl - Heading 3</p>
                  <p className="text-lg">lg - Lead text</p>
                  <p className="text-base">base - Body text</p>
                  <p className="text-sm">sm - Small text</p>
                  <p className="text-xs">xs - Caption text</p>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Font Weights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-lg">
                  <p className="font-normal">Normal (400) - Regular text</p>
                  <p className="font-medium">Medium (500) - Slightly bold</p>
                  <p className="font-semibold">Semibold (600) - Emphasis</p>
                  <p className="font-bold">Bold (700) - Strong emphasis</p>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Font Families</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">font-sans</p>
                    <p className="font-sans text-lg">The quick brown fox jumps over the lazy dog</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">font-serif</p>
                    <p className="font-serif text-lg">The quick brown fox jumps over the lazy dog</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">font-mono</p>
                    <p className="font-mono text-lg">The quick brown fox jumps over</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Line Heights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">leading-tight (1.25)</p>
                    <p className="leading-tight text-sm bg-neutral-100 dark:bg-neutral-800 p-2 rounded">
                      This paragraph has tight line height. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">leading-normal (1.5)</p>
                    <p className="leading-normal text-sm bg-neutral-100 dark:bg-neutral-800 p-2 rounded">
                      This paragraph has normal line height. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">leading-relaxed (1.75)</p>
                    <p className="leading-relaxed text-sm bg-neutral-100 dark:bg-neutral-800 p-2 rounded">
                      This paragraph has relaxed line height. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Buttons */}
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Button variant="primary" size="sm">Small</Button>
                    <Button variant="primary" size="md">Medium</Button>
                    <Button variant="primary" size="lg">Large</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Inputs */}
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Inputs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input label="Email" placeholder="you@example.com" type="email" />
                  <Input
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    error="Password is required"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Cards */}
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Card Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-neutral-800 rounded-md shadow">
                    <p className="text-sm font-medium">Default (shadow)</p>
                    <p className="text-xs text-neutral-500">With drop shadow</p>
                  </div>
                  <div className="p-3 border border-neutral-200 dark:border-neutral-700 rounded-md">
                    <p className="text-sm font-medium">Bordered</p>
                    <p className="text-xs text-neutral-500">With border</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Alerts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Alerts
          </h2>
          <div className="space-y-3">
            <Alert variant="info" title="Information">
              This is an informational alert using primary colors.
            </Alert>
            <Alert variant="success" title="Success">
              Your changes have been saved successfully.
            </Alert>
            <Alert variant="warning" title="Warning">
              Please review your input before proceeding.
            </Alert>
            <Alert variant="error" title="Error">
              Something went wrong. Please try again.
            </Alert>
          </div>
        </section>

        {/* Status Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Status Colors
          </h2>
          <Card variant="bordered">
            <CardContent>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-success-500 mb-2" />
                  <p className="text-sm font-medium">Success</p>
                  <p className="text-xs text-neutral-500">#22c55e</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-warning-500 mb-2" />
                  <p className="text-sm font-medium">Warning</p>
                  <p className="text-xs text-neutral-500">#f59e0b</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-error-500 mb-2" />
                  <p className="text-sm font-medium">Error</p>
                  <p className="text-xs text-neutral-500">#ef4444</p>
                </div>
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
