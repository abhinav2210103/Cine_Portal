"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Error() {
  useEffect(() => {
    if (window.innerWidth < 768 || window.innerHeight > window.innerWidth) {
      toast.error('Please use a desktop/laptop for a better experience.');
    }
  }, []);

  return (
    <div className="md:w-2/3 w-full h-screen flex justify-center items-center mx-auto">
      <Image src="/404error.svg" alt="404 error" width={500} height={500} />
      <ToastContainer />
    </div>
  );
};

