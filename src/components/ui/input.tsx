import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Input = forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & {
    icon?: ReactNode;
  }
>(({ className, type, icon, ...props }, ref) => {
  return (
    <div
      className={cn(
        'flex h-8 items-center rounded-sm border border-input  pr-2 text-sm  focus-within:border-neutral-300 ',
        className
      )}
    >
      {icon}
      <input
        {...props}
        type={type}
        ref={ref}
        className='w-full rounded-sm p-1 bg-transparent placeholder:text-neutral-500 placeholder:font-light placeholder:text-xs focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      />
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
