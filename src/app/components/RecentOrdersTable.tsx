'use client';

import Toman from '../../../public/toman.svg';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/use-mobile';
import { ReactNode, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';

type TRecentOrder = {
  brandName: string;
  address: string;
  orders: string;
  settledInvoicePrices: number;
  status: string;
  createdOn: string | Date;
  email: string;
};

const data = [
  {
    brandName: 'کافه رستوران',
    address: 'فرمانیه',
    orders: '4',
    settledInvoicePrices: 4500000,
    status: 'در انتظار تایید',
    createdOn: new Date(Date.now()).toLocaleDateString('fa-IR'),
    email: 'abcxyz@gnail.com',
  },
  {
    brandName: ' رستوران',
    address: 'شمشک',
    orders: '1',
    settledInvoicePrices: 54500000,
    status: 'تایید شده',
    createdOn: new Date(Date.now()).toLocaleDateString('fa-IR'),
    email: 'shemshak@gnail.com',
  },
];
export function RecentOrdersTable() {
  const isMobile = useIsMobile();
  console.log(isMobile);

  const columns: ColumnDef<TRecentOrder>[] = useMemo(
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
                <span className='text-xs text-gray-400 '>
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
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className='text-right'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
