"use client";

import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        router.replace('/login');
      }
    }
  }, [router]);

  if (typeof window === undefined) {
    return null;
  }

  const userId = localStorage.getItem('userId');
  return userId ? <>{children}</> : null;
};

export default PrivateRoute;