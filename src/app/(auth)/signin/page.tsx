import { Button } from '@/components/ui/button';
import SvgGoogle from '@/app/assets/icons/google.svg';
import Image from 'next/image';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { SignInForm } from './components/SignInForm';

const Login = () => {
  return (
    <>
      <div className='w-full flex flex-col items-center gap-8'>
        <header className='flex flex-col items-center gap-4 my-4'>
          GOOSH
          <h3 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            توی گوش ثبت نام کن
          </h3>
        </header>
        <SignInForm />
        <Separator className='max-w-[80%]' />
        <Button
          variant={'secondary'}
          className='w-11/12 max-w-72 gap-4 rounded-full text-md'
        >
          ثبت نام با گوگل
          <Image src={SvgGoogle} alt='google logo' height={28} />
        </Button>
        <p className='leading-7 text-sm [&:not(:first-child)]:mt-6'>
          قبلا توی گوش ثبت نام کردی؟{' '}
          <Link
            href={'/login'}
            className='text-sm underline underline-offset-4 border-neutral-300'
          >
            از اینجا وارد شو
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
