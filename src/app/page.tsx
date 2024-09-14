"use client";
import Loader from "@/components/Loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type DeviceStatus = 'checking' | 'mobile' | 'desktop';

export default function Home() {
  const router = useRouter();
  const [deviceStatus, setDeviceStatus] = useState<DeviceStatus>('checking');

  useEffect(() => {
    const checkDeviceView = () => {
      if (window.innerWidth <= 768 || window.innerHeight > window.innerWidth) {
        setDeviceStatus('mobile');
        toast.error("Open in Laptop/Desktop!", {
          autoClose: 5000,
        });
      } else {
        setDeviceStatus('desktop');
      }
    };

    checkDeviceView();
    window.addEventListener("resize", checkDeviceView);

    return () => {
      window.removeEventListener("resize", checkDeviceView);
    };
  }, []);

  useEffect(() => {
    if (deviceStatus === 'checking') return;

    if (deviceStatus === 'desktop') {
      router.replace("/login");
    } else if (deviceStatus === 'mobile') {
      router.replace("/error");
    }
  }, [deviceStatus, router]);

  return (
    <>
      <Loader />
      <ToastContainer />
    </>
  );
}