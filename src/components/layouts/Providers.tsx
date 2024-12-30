'use client';
import { SidebarProvider } from '../ui/sidebar';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ProvidersLayout({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
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
