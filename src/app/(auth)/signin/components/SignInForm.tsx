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
import React from 'react';
import { CheckIcon } from 'lucide-react';

export const formSchema = z.object({
  username: z
    .string()
    .min(2, 'نام کاربری حداقل باید 3 کاراکتر باشد')
    .max(50, 'نام کاربری حداکر باید 50 کاراکتر باشد'),
  password: z.string(),
});
export function SignInForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <>
      {' '}
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
                <FormLabel className='text-xs'>آدرس ایمیل</FormLabel>
                <FormControl>
                  <Input
                    className='w-full'
                    placeholder='example@gmail.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className='w-11/12  max-w-72 rounded-full mt-2' type='submit'>
            ادامه
            <CheckIcon />
          </Button>
        </form>
      </Form>
    </>
  );
}
