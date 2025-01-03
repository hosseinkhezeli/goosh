import { Button } from '@/components/ui/button';
import React from 'react';
import { Plus } from 'lucide-react';
import { OrdersTable } from './components/OrdersTable';

const Page = () => {
  return (
    <div className='p-4 pt-6 flex flex-col gap-6'>
      <div className='flex justify-between'>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          سفارشات
        </h3>
        <Button size={'sm'}>
          سفارش جدید
          <Plus />
        </Button>
      </div>
      <p className='text-sm text-muted-foreground'>
        ثبت , ویرایش , حذف و مدیریت سفارشات
      </p>
      <OrdersTable />
    </div>
  );
};

export default Page;
