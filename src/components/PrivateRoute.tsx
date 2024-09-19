"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, ReactNode, useState } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);

      const checkDeviceView = () => {
        if (window.innerWidth < 768 || window.innerHeight > window.innerWidth) {
          router.replace("/error");
        } else {
          const userId = localStorage.getItem('userId');
          if (!userId) {
            router.replace('/login');
          }
        }
      };

      checkDeviceView();
      window.addEventListener("resize", checkDeviceView);
      return () => {
        window.removeEventListener("resize", checkDeviceView);
      };
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