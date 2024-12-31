import React from 'react';

export function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='flex flex-col justify-center w-full min-h-svh bg-gradient-to-b from-neutral-900 to-neutral-950'>
        <div className='w-full min-h-svh md:max-w-3xl  md:min-h-max bg-gradient-to-t from-neutral-900 to-black  rounded-3xl mx-auto px-8 py-12'>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
