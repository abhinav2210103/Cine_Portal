import Image from 'next/image';

const NotFound = () => {
  return (
     <div className='flex justify-center items-center h-screen'>
      <Image src="/404error.png" alt="" width={500} height={500} />
    </div>
  );
};

export default NotFound;