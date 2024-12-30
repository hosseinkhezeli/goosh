import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ReactNode } from 'react';

type TDashboardCard = {
  label: ReactNode;
  children: ReactNode;
  icon: ReactNode;
};

export function DashboardCard({ children, icon, label }: TDashboardCard) {
  return (
    <Card className='w-full p-4 min-h-24 '>
      <CardHeader className='flex flex-row-reverse justify-between items-start p-0'>
        <CardTitle className='rounded-full w-max min-w-8 min-h-8 bg-primary  p-2'>
          {icon}
        </CardTitle>
        <CardDescription className='font-bold text-primary'>
          {label}
        </CardDescription>
      </CardHeader>
      <CardContent className='text-xs p-0'>{children}</CardContent>
    </Card>
  );
}
