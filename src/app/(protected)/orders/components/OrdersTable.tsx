'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Toman from '@/app/assets/icons/toman.svg';
import { GooshTable } from '@/components/GooshTable';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
} from '@tanstack/react-table';
import Image from 'next/image';
import { ReactNode, useMemo, useState } from 'react';
import { TOrder } from '@/types/orders';
import { Badge } from '@/components/ui/badge';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Route } from 'next';
import { useQueryParams } from '@/hooks/useQueryParams';
import { OrderDialog } from './OrderDialog';
import { ordersMock } from '@/mock/orders';

export function OrdersTable() {
  const data = ordersMock;
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const { createQueryString } = useQueryParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickRow = (rowId: string) => {
    setIsOpen((prev) => !prev);
    if (searchParams.has('order_id')) {
      navigate.push(pathname.split('?')[0] as Route);
    } else {
      navigate.push(
        (pathname + '?' + createQueryString('order_id', rowId)) as Route
      );
    }
  };

  const columns: ColumnDef<TOrder>[] = useMemo(
    () => [
      {
        accessorKey: 'brandName',
        header: 'مشتریان',
        cell: ({ row }) => {
          return (
            <div className='flex gap-2'>
              <Avatar className='w-8 h-8'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className='flex flex-col gap-1'>
                <span>{row.original.brandName}</span>
                <span className='text-xs text-neutral-400 '>
                  {row.original.email}
                </span>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: 'address',
        header: 'موقعیت مکانی',
      },
      {
        accessorKey: 'orders',
        header: 'تعداد سفارشات',
      },
      {
        accessorKey: 'settledInvoicePrices',
        header: 'مبالغ تسویه شده',
        cell: ({ getValue }) => {
          return (
            <span className='flex gap-1'>
              {Number(getValue()).toLocaleString('fa-IR')}{' '}
              <Image
                src={Toman}
                alt='persian tooman logo'
                width={16}
                height={16}
              />
            </span>
          );
        },
      },
      {
        accessorKey: 'status',
        header: 'وضعیت',
        cell: ({ getValue }) => {
          const color =
            getValue() === 'در انتظار تایید' ? 'bg-yellow-600' : 'bg-green-800';
          return (
            <Badge variant='outline' className={color}>
              {getValue() as ReactNode}
            </Badge>
          );
        },
      },
      {
        accessorKey: 'createdOn',
        header: 'تاریخ ثبت سفارش',
      },
    ],
    []
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    state: {
      columnVisibility: {
        createdOn: true,
        orders: !isMobile,
        settledInvoicePrices: !isMobile,
        status: true,
        email: true,
        address: !isMobile,
        brandName: true,
      },
    },
  });
  return (
    <>
      <GooshTable
        table={table}
        key={'recent-orders'}
        onClickRow={handleClickRow}
      />
      <OrderDialog open={isOpen} onOpenChange={() => setIsOpen(false)} />
    </>
  );
}
