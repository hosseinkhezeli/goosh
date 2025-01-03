import { CheckIcon, TrashIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { AvatarUploader } from '@/components/ui/avatar-uploader';

export const orderFormSchema = z.object({
  address: z.string(),
  brandName: z.string(),
  brandProfilePic: z.string(),
  brandModel: z.string(),
  phoneNumber: z.string(),
  email: z.string(),
  isHandled: z.boolean(),
  planId: z.string(),
  createdOn: z.string(),
  status: z.string(),
});

export type TOrderForm = {
  form: UseFormReturn<z.infer<typeof orderFormSchema>>;
};
export function OrderForm({ form }: TOrderForm) {
  function onSubmit(values: z.infer<typeof orderFormSchema>) {
    console.log(values);
  }

  const inputList = [
    {
      name: 'brandName',
      label: 'نام مشتری',
      type: 'text',
    },
    {
      name: 'brandModel',
      label: 'برند مشتری',
      type: 'text',
    },
    {
      name: 'phoneNumber',
      label: 'شماره تماس',
      type: 'phone',
    },
    {
      name: 'email',
      label: 'ایمیل',
      type: 'email',
    },
    {
      name: 'address',
      label: 'آدرس',
      type: 'text-area',
    },
    {
      name: 'planId',
      label: 'طرح',
      type: 'combo-box',
    },
    {
      name: 'createdOn',
      label: 'تاریخ',
      type: 'date-picker',
    },
    // {
    //   name: 'isHandled',
    //   label: 'انجام شده',
    //   type: 'switch',
    // },
    // {
    //   name: 'status',
    //   label: 'وضعیت',
    //   type: 'combo-box',
    // },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex'>
        <AvatarUploader />
        <div className=' flex flex-col items-center gap-2 basis-5/6'>
          {inputList.map((input) => {
            return (
              <FormField
                key={input.name}
                control={form.control}
                name={
                  input.name as
                    | 'address'
                    | 'brandName'
                    | 'brandProfilePic'
                    | 'brandModel'
                    | 'phoneNumber'
                    | 'email'
                    | 'isHandled'
                    | 'planId'
                    | 'createdOn'
                    | 'status'
                }
                render={({ field }) => (
                  <FormItem className='w-11/12  max-w-72'>
                    <FormLabel className='text-xs'>{input.label}</FormLabel>
                    <FormControl>
                      <Input
                        className='w-full'
                        placeholder='example@gmail.com'
                        {...field}
                        value={field.value?.toString() ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}
          <div className={'w-11/12  max-w-72  mt-2 flex gap-3'}>
            <Button className='rounded-full w-1/2' type='submit'>
              ثبت
              <CheckIcon />
            </Button>
            <Button
              variant={'destructive'}
              className='rounded-full w-1/2'
              type='submit'
            >
              حذف
              <TrashIcon />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
