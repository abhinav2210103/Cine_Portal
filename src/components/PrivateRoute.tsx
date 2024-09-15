"use client";

import { useRouter } from 'next/navigation';
import { useEffect, ReactNode, useState } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only run when mounted on the client
    if (typeof window !== "undefined") {
      setIsClient(true);
      const userId = localStorage.getItem('userId');

      if (!userId) {
        router.replace('/login');
      }
    }
  }, [router]);

  if (!isClient) {
    return null; 
  }

  const userId = localStorage.getItem('userId');
  if(!userId) return ; 
  return userId ? <>{children}</> : null;
};

export default PrivateRoute;