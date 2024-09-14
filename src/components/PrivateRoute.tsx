"use client";

import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        router.replace('/login');
      }
    }
  }, [router]);

  return typeof window !== 'undefined' && localStorage.getItem('userId') ? <>{children}</> : null;
};

export default PrivateRoute;