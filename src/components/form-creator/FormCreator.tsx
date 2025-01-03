import { ReactNode } from 'react';
import { Form, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { IInputProps } from './types';
import { TextInput } from './components/TextInput';
import { PhoneInput } from './components/PhoneInput';

export type TFormCreator<T extends z.ZodType> = {
  form: UseFormReturn<z.infer<T>>;
  onSubmit: (values: z.infer<T>) => void;
  formActions: ReactNode;
  inputList: IInputProps<T>[];
};

export function FormCreator<T extends z.ZodType>({
  form,
  onSubmit,
}: TFormCreator<T>) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}></form>
    </Form>
  );
}

const InputList = {
  text: TextInput,
  phone: PhoneInput,
  
};
