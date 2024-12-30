import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Input = forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & {
    icon: ReactNode;
  }
>(({ className, type, icon, ...props }, ref) => {
  return (
    <div
      className={cn(
        'flex h-8 items-center rounded-md border border-input  pr-2 text-sm  focus-within:border-gray-300 ',
        className
      )}
    >
      {icon}
      <input
        {...props}
        type={type}
        ref={ref}
        className='w-full  p-1 placeholder:text-muted-foreground placeholder:text-gray-300 placeholder:font-light placeholder:text-xs focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      />
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
