type InputTypes = 'combo-box' | 'text' | 'date-picker' | 'switch';

export interface IInputProps<T> {
  name: keyof T;
  label: string;
  type: InputTypes;
  placeholder?: string;
}
