import { GooshDialog } from '@/components/GooshDialog';
import { ordersMock } from '@/mock/orders';
import { useSearchParams } from 'next/navigation';
import { OrderForm, orderFormSchema } from './OrderForm';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type TOrderDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function OrderDialog({ open, onOpenChange }: TOrderDialogProps) {
  const searchParams = useSearchParams();
  const selectedOrder = ordersMock?.[Number(searchParams.get('order_id')) || 0];
  const orderForm = useForm<z.infer<typeof orderFormSchema>>({
    // defaultValues: selectedOrder,
  });

  return (
    <GooshDialog
      open={open}
      onOpenChange={onOpenChange}
      title={selectedOrder?.brandModel}
      description={selectedOrder?.address}
    >
      <OrderForm form={orderForm} />
    </GooshDialog>
  );
}
