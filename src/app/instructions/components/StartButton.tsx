// // // // 'use client'
// // // // import React, { ChangeEvent, useState } from 'react';
// // // // import Link from 'next/link';

// // // // export default function StartButton() {
// // // //     const [start, setStart] = useState<string>("");
// // // //     const [isChecked, setIsChecked] = useState<boolean>(false);

// // // //     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
// // // //         setStart(event.target.value);
// // // //     }
// // // //         const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
// // // //             setIsChecked(event.target.checked);
// // // //     };

    
// // // //   return (<>
// // // //     <div className='flex text-base mb-5 mt-5 pl-3 pr-4 font-bold'>
// // // //     <input type='checkbox' className='rounded w-5 h-5 mt-0.5' onChange={handleCheckboxChange} />
// // // //     <span className='pl-2'>
// // // //         I hereby confirm that I have read all the instructions and am ready to begin my test. Write START in the Text Box to enable Start Button
// // // //     </span>
    
// // // // </div>

// // // //  <div className='flex justify-end mr-20 mb-8 pr-8'>
// // // //     <input
// // // //         className='w-[20%] border border-black focus:outline-none rounded-lg p-3 text-center bg-transparent placeholder-gray-500'
// // // //         type="text"
// // // //         value={start}
// // // //         onChange={handleChange}
// // // //         placeholder="START"
// // // //     />
// // // //     <Link href="/start">
// // // //     <button
// // // //         disabled={!(start === "START" && isChecked)}
// // // //         className={`${!(start === "START" && isChecked) ? 'bg-gray-300 text-gray-600' : 'bg-[#546CFF] text-white'} w-[195%] rounded-xl p-3  ml-4 text-lg`}
// // // //     >
// // // //         Start
// // // //     </button></Link>
// // // // </div> 

// // // // </>

// // // //   )
// // // // }

// // // 'use client'
// // // import React, { ChangeEvent, useState, useEffect } from 'react';
// // // import Link from 'next/link';

// // // interface StartButtonProps {
// // //     selectedLanguage: string;
// // // }

// // // export default function StartButton({ selectedLanguage }: StartButtonProps) {
// // //     const [start, setStart] = useState<string>("");
// // //     const [isChecked, setIsChecked] = useState<boolean>(false);
// // //     const [userId, setUserId] = useState<string>('');

// // //     useEffect(() => {
// // //         const storedUserId = localStorage.getItem('userId');
// // //         if (storedUserId) {
// // //             setUserId(storedUserId);
// // //         }
// // //     }, []);

// // //     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
// // //         setStart(event.target.value);
// // //     };

// // //     const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
// // //         setIsChecked(event.target.checked);
// // //     };

// // //     const handleStart = async () => {
// // //         if (selectedLanguage) {
// // //             try {
// // //                 const response = await fetch('https://cine-student.onrender.com/student/preferences', {
// // //                     method: 'POST',
// // //                     headers: {
// // //                         'Content-Type': 'application/json'
// // //                     },
// // //                     body: JSON.stringify({ userId: userId, preference: selectedLanguage })
// // //                 });
// // //                 if (!response.ok) {
// // //                     throw new Error('Network response was not ok');
// // //                 }
// // //                 const data = await response.json();
// // //                 console.log('Success:', data);
// // //             } catch (error) {
// // //                 console.error('Error:', error);
// // //             }
// // //         }
// // //     };

// // //     return (
// // //         <>
// // //             <div className='flex text-base mb-5 mt-5 pl-3 pr-4 font-bold'>
// // //                 <input type='checkbox' className='rounded w-5 h-5 mt-0.5' onChange={handleCheckboxChange} />
// // //                 <span className='pl-2'>
// // //                     I hereby confirm that I have read all the instructions and am ready to begin my test. Write START in the Text Box to enable Start Button
// // //                 </span>
// // //             </div>

// // //             <div className='flex justify-end mr-20 mb-8 pr-8'>
// // //                 <input
// // //                     className='w-[20%] border border-black focus:outline-none rounded-lg p-3 text-center bg-transparent placeholder-gray-500'
// // //                     type="text"
// // //                     value={start}
// // //                     onChange={handleChange}
// // //                     placeholder="START"
// // //                 />
// // //                 <Link href="/start">
// // //                     <button
// // //                         disabled={!(start === "START" && isChecked)}
// // //                         onClick={handleStart}
// // //                         className={`${!(start === "START" && isChecked) ? 'bg-gray-300 text-gray-600' : 'bg-[#546CFF] text-white'} w-[195%] rounded-xl p-3 ml-4 text-lg`}
// // //                     >
// // //                         Start
// // //                     </button>
// // //                 </Link>
// // //             </div>
// // //         </>
// // //     );
// // // }

// // 'use client'
// // import React, { ChangeEvent, useState, useEffect } from 'react';
// // import { useRouter } from 'next/navigation'; // Use 'next/navigation' for correct client-side router

// // interface StartButtonProps {
// //     selectedLanguage: string;
// // }

// // export default function StartButton({ selectedLanguage }: StartButtonProps) {
// //     const [start, setStart] = useState<string>("");
// //     const [isChecked, setIsChecked] = useState<boolean>(false);
// //     const [userId, setUserId] = useState<string>('');
// //     const router = useRouter(); // Use 'next/navigation' for correct client-side router

// //     useEffect(() => {
// //         const storedUserId = localStorage.getItem('userId');
// //         if (storedUserId) {
// //             setUserId(storedUserId);
// //         }
// //     }, []);

// //     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
// //         setStart(event.target.value);
// //     };

// //     const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
// //         setIsChecked(event.target.checked);
// //     };

// //     const handleStart = async () => {
// //         if (selectedLanguage) {
// //             try {
// //                 const response = await fetch('https://cine-student.onrender.com/student/preferences', {
// //                     method: 'POST',
// //                     headers: {
// //                         'Content-Type': 'application/json'
// //                     },
// //                     body: JSON.stringify({ userId: userId, preference: selectedLanguage })
// //                 });
// //                 if (!response.ok) {
// //                     throw new Error('Network response was not ok');
// //                 }
// //                 const data = await response.json();
// //                 console.log('Success:', data);
// //                 // Redirect to the next page upon success
// //                 router.push('/start');
// //             } catch (error) {
// //                 console.error('Error:', error);
// //             }
// //         }
// //     };

// //     return (
// //         <>
// //             <div className='flex text-base mb-5 mt-5 pl-3 pr-4 font-bold'>
// //                 <input type='checkbox' className='rounded w-5 h-5 mt-0.5' onChange={handleCheckboxChange} />
// //                 <span className='pl-2'>
// //                     I hereby confirm that I have read all the instructions and am ready to begin my test. Write START in the Text Box to enable Start Button
// //                 </span>
// //             </div>

// //             <div className='flex justify-end mr-22 mb-8 pr-8'>
// //                 <input
// //                     className='w-[20%] border border-black focus:outline-none rounded-lg p-3 text-center bg-transparent placeholder-gray-500'
// //                     type="text"
// //                     value={start}
// //                     onChange={handleChange}
// //                     placeholder="START"
// //                 />
// //                 <button
// //                     disabled={!(start === "START" && isChecked)}
// //                     onClick={handleStart}
// //                     className={`${!(start === "START" && isChecked) ? 'bg-gray-300 text-gray-600' : 'bg-[#546CFF] text-white'} w-[22%] rounded-xl p-2 pl-5 pr-5 ml-4 text-lg`}
// //                 >
// //                     Start
// //                 </button>
// //             </div>
// //         </>
// //     );
// // }

// 'use client'
// import React, { ChangeEvent, useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Use 'next/navigation' for correct client-side router
// import ClipLoader from 'react-spinners/ClipLoader'; // Import ClipLoader

// interface StartButtonProps {
//     selectedLanguage: string;
// }

// export default function StartButton({ selectedLanguage }: StartButtonProps) {
//     const [start, setStart] = useState<string>("");
//     const [isChecked, setIsChecked] = useState<boolean>(false);
//     const [userId, setUserId] = useState<string>('');
//     const [loading, setLoading] = useState<boolean>(false); // New state for loading
//     const router = useRouter(); // Use 'next/navigation' for correct client-side router

//     useEffect(() => {
//         const storedUserId = localStorage.getItem('userId');
//         if (storedUserId) {
//             setUserId(storedUserId);
//         }
//     }, []);

//     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//         setStart(event.target.value);
//     };

//     const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
//         setIsChecked(event.target.checked);
//     };

//     const handleStart = async () => {
//         if (selectedLanguage) {
//             setLoading(true); // Set loading to true
//             try {
//                 const response = await fetch('https://cine-student.onrender.com/student/preferences', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({ userId: userId, preference: selectedLanguage })
//                 });
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 console.log('Success:', data);
//                 router.push('/start');
//             } catch (error) {
//                 console.error('Error:', error);
//             } finally {
//                 setLoading(false); // Set loading to false after request is complete
//             }
//         }
//     };

//     return (
//         <>
//             <div className='flex text-base mb-5 mt-5 pl-3 pr-4 font-bold'>
//                 <input type='checkbox' className='rounded w-5 h-5 mt-0.5' onChange={handleCheckboxChange} />
//                 <span className='pl-2'>
//                     I hereby confirm that I have read all the instructions and am ready to begin my test. Write START in the Text Box to enable Start Button
//                 </span>
//             </div>

//             <div className='flex justify-end mr-22 mb-8 pr-8'>
//                 <input
//                     className='w-[20%] border border-black focus:outline-none rounded-lg p-3 text-center bg-transparent placeholder-gray-500'
//                     type="text"
//                     value={start}
//                     onChange={handleChange}
//                     placeholder="START"
//                 />
//                 <button
//                     disabled={!(start === "START" && isChecked) || loading}
//                     onClick={handleStart}
//                     className={`${!(start === "START" && isChecked) || loading ? 'bg-gray-300 text-gray-600' : 'bg-[#546CFF] text-white'} w-[22%] rounded-xl p-2 pl-5 pr-5 ml-4 text-lg`}
//                 >
//                     {loading ? <ClipLoader color="blue" size={24} /> : 'Start'}
//                 </button>
//             </div>
//         </>
//     );
// }

'use client'
import React, { ChangeEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ClipLoader from 'react-spinners/ClipLoader';

interface StartButtonProps {
    selectedLanguage: string;
}

export default function StartButton({ selectedLanguage }: StartButtonProps) {
    const [start, setStart] = useState<string>("");
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStart(event.target.value);
    };

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const handleStart = async () => {
        if (selectedLanguage) {
            setLoading(true);
            try {
                const response = await fetch('https://cine-student.onrender.com/student/preferences', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ userId: userId, preference: selectedLanguage })
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Success:', data);
                router.push('/start');
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <>
            <div className='flex text-base mb-5 mt-5 pl-3 pr-4 font-bold'>
                <input type='checkbox' className='rounded w-5 h-5 mt-0.5' onChange={handleCheckboxChange} />
                <span className='pl-2'>
                    I hereby confirm that I have read all the instructions and am ready to begin my test. Write START in the Text Box to enable Start Button
                </span>
            </div>

            <div className='flex justify-end mr-22 mb-8 pr-8'>
                <input
                    className='w-[20%] border border-black focus:outline-none rounded-lg p-3 text-center bg-transparent placeholder-gray-500'
                    type="text"
                    value={start}
                    onChange={handleChange}
                    placeholder="START"
                />
                <button
                    disabled={!(start === "START" && isChecked && selectedLanguage) || loading}
                    onClick={handleStart}
                    className={`${!(start === "START" && isChecked && selectedLanguage) || loading ? 'bg-gray-300 text-gray-600' : 'bg-[#546CFF] text-white'} w-[22%] rounded-xl p-2 pl-5 pr-5 ml-4 text-lg`}
                >
                    {loading ? <ClipLoader color="blue" size={24} /> : 'Start'}
                </button>
            </div>
        </>
    );
}
