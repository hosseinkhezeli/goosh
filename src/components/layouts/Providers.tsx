'use client';
import { useState, useEffect } from 'react';
import { SidebarProvider } from '../ui/sidebar';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ProvidersLayout({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>; // Render children without ThemeProvider during SSR
  }

  return (
    <NextThemesProvider
      {...props}
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>{children}</SidebarProvider>
    </NextThemesProvider>
  );
}
