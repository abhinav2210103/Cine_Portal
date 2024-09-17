"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

export default function Error() {
  useEffect(() => {
    if (window.innerWidth < 768 || window.innerHeight > window.innerWidth) {
      toast.error('Please use a desktop/laptop for a better experience.');
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-[#EAEEFF]">
      <div className="flex flex-col items-center">
        <Image src="/404error.svg" alt="404 error" width={500} height={500} />
        <Link href="/login">
          <div style={{ color: '#546CFF', textDecoration: 'underline', marginTop: '20px', fontSize:'20px' }}>
          Click here to return.
          </div>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

