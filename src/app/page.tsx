import { Button } from '@/components/ui/button';
import {
  CassetteTape,
  ListMusic,
  Plus,
  ShoppingCart,
  Users,
} from 'lucide-react';
import { DashboardCard } from './components/DashboardCard';
import { RecentOrdersTable } from './components/RecentOrdersTable';

export default function Home() {
  const briefInfo = [
    {
      label: 'مجموع سفارشات',
      icon: <ShoppingCart className='stroke-white' />,
      description: '12 سفارش',
    },
    {
      label: 'مجموع مشتریان',
      icon: <Users className='stroke-white' />,
      description: '12 مشتری',
    },
    {
      label: 'مجموع پلی لیست ها',
      icon: <ListMusic className='stroke-white' />,
      description: '12 پلی لیست',
    },
    {
      label: 'مجموع میکس تیپ ها',
      icon: <CassetteTape className='stroke-white' />,
      description: '12 میکس تیپ',
    },
  ];
  return (
    <div className='p-4 pt-6 flex flex-col gap-6'>
      <div className='flex justify-between'>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          داشبورد
        </h3>
        <Button size={'sm'}>
          سفارش جدید
          <Plus />
        </Button>
      </div>
      <div className='grid gap-4 grid-cols-2'>
        {briefInfo.map((info) => {
          return (
            <DashboardCard key={info.label} label={info.label} icon={info.icon}>
              {info.description}
            </DashboardCard>
          );
        })}
      </div>
      <RecentOrdersTable />
    </div>
  );
}
