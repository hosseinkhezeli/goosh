'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon, LogInIcon } from 'lucide-react';

export const formSchema = z.object({
  username: z
    .string()
    .min(2, 'نام کاربری حداقل باید 3 کاراکتر باشد')
    .max(50, 'نام کاربری حداکر باید 50 کاراکتر باشد'),
  password: z.string(),
});

export function LoginForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [visiblePassword, setVisiblePassword] = useState(false);
  const togglePassword = () => {
    setVisiblePassword((prev) => !prev);
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full flex flex-col items-center gap-2'
        >
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className='w-11/12  max-w-72'>
                <FormLabel className='text-xs'>نام کاربری یا ایمیل</FormLabel>
                <FormControl>
                  <Input
                    className='w-full'
                    placeholder='نام کاربری یا ایمیل'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='w-11/12  max-w-72'>
                <FormLabel className='text-xs'>رمز ورود</FormLabel>
                <FormControl>
                  <Input
                    {...(!visiblePassword && {
                      type: 'password',
                    })}
                    className='w-full'
                    placeholder='رمز ورود'
                    icon={
                      visiblePassword ? (
                        <EyeIcon onClick={togglePassword} />
                      ) : (
                        <EyeOffIcon onClick={togglePassword} />
                      )
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-11/12  max-w-72 rounded-full mt-2' type='submit'>
            ورود
            <LogInIcon />
          </Button>
        </form>
      </Form>
    </>
  );
}
