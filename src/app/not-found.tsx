import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#EAEEFF]">
      <div className="flex flex-col items-center">
        <Image src="/404error.svg" alt="404 error" width={500} height={500} />
        <Link href="/login">
          <div style={{ color: '#546CFF', textDecoration: 'underline', marginTop: '20px', fontSize:'20px' }}>
          Click here to return to the Login Page.
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;