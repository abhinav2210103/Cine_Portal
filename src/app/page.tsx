"use client";
import Loader from "@/components/Loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const router = useRouter();
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const checkDeviceView = () => {
      if (window.innerWidth <= 768 || window.innerHeight > window.innerWidth) {
        toast.error("Open in Laptop/Desktop!", {
          autoClose: 5000,
        });
        setIsMobileDevice(true);
      } else {
        setIsMobileDevice(false);
      }
    };

    checkDeviceView();
    window.addEventListener("resize", checkDeviceView);

    return () => {
      window.removeEventListener("resize", checkDeviceView);
    };
  }, []);

  useEffect(() => {
    if (!isMobileDevice) {
      router.replace("/login");
    }
  }, [isMobileDevice, router]);

  return (
    <>
      <Loader />
      <ToastContainer/>
    </>
  );
}