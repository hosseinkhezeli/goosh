import { AppHeader } from '../AppHeader';
import { AppSidebar } from '../AppSidebar';

export function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppSidebar />
      <div className='flex flex-col w-full'>
        <header className='w-full '>
          <AppHeader />
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
