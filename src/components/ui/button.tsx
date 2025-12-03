// src/components/ui/Button.tsx
import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean; // opsional kalau mau render <a> atau custom element
}

export default function Button({
  className = '',
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? React.Fragment : 'button';

  return (
    <Comp
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50 ${className}`}
    />
  );
}
