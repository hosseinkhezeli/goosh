import {
  FormMessage,
  FormItem,
  FormControl,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FormField } from '@/components/ui/form';
import { FieldValues, UseFormReturn } from 'react-hook-form';

import { IInputProps } from '../types';

interface ITextInput<T extends FieldValues> extends IInputProps<T> {
  form: UseFormReturn<T>;
}

export function TextInput<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
}: ITextInput<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='w-11/12  max-w-72'>
          <FormLabel className='text-xs'>{label}</FormLabel>
          <FormControl>
            <Input className='w-full' placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
