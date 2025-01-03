import { TOrder } from '@/types/orders';

export const ordersMock: TOrder[] = [
  {
    brandName: 'کافه رستوران',
    address: 'فرمانیه',
    email: 'hiva@gnail.com',
    createdOn: new Date(Date.now()).toLocaleDateString('fa-IR'),
    brandModel: 'هیوا',
    brandProfilePic: 'https://github.com/shadcn.png',
    isHandled: false,
    id: '1',
    status: 'در انتظار تایید',
    phoneNumber: '+98992554488',
    planId: 'plan-1',
    planName: 'Premium Jazz',
  },
  {
    brandName: ' رستوران',
    address: 'شمشک',
    email: 'shemshak@gnail.com',
    createdOn: new Date(Date.now()).toLocaleDateString('fa-IR'),
    brandModel: 'ویونا',
    brandProfilePic: 'https://github.com/shadcn.png',
    isHandled: true,
    id: '2',
    status: 'تایید شده',
    phoneNumber: '09124565987',
    planId: 'plan-2',
    planName: 'Premium Khaal',
  },
];
