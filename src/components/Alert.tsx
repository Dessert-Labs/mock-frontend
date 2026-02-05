import { type HTMLAttributes, forwardRef } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
}

const variantStyles: Record<AlertVariant, string> = {
  info: 'bg-primary-50 border-primary-500 text-primary-800 dark:bg-primary-900 dark:border-primary-400 dark:text-primary-100',
  success: 'bg-success-50 border-success-500 text-success-800 dark:bg-success-900 dark:border-success-400 dark:text-success-100',
  warning: 'bg-warning-50 border-warning-500 text-warning-800 dark:bg-warning-900 dark:border-warning-400 dark:text-warning-100',
  error: 'bg-error-50 border-error-500 text-error-800 dark:bg-error-900 dark:border-error-400 dark:text-error-100',
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className = '', variant = 'info', title, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={`p-4 rounded-md border-l-4 ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {title && <p className="font-semibold mb-1">{title}</p>}
        <p className="text-sm">{children}</p>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
