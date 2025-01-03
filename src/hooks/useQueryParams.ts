import { useSearchParams } from 'next/navigation';

import { useCallback } from 'react';
export function useQueryParams() {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return { createQueryString };
}
