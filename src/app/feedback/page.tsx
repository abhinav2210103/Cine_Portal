'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FeedbackSlider from '@/components/FeedbackSlider';

export default function Page() {
  const [userId, setUserId] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [error, setError] = useState('');
  const [slider1, setSlider1] = useState('1');
  const [slider2, setSlider2] = useState('1');

  useEffect(() => {
    if (typeof window !== 'undefined') { 
      const storedUserId = localStorage.getItem('userId') || '6676a99b91436f80e4dd9821';
      setUserId(storedUserId);
    }
  }, []);

  const handleSlider1Change = (value: number) => {
    setSlider1(value.toString());
  };

  const handleSlider2Change = (value: number) => {
    setSlider2(value.toString());
  };

  const handleSubmit = async () => {
    if (suggestion.trim() === '') {
      setError('Please enter a suggestion.');
    } else {
      setError('');
      const feedbackData = {
        userId,
        response: [
          {
            question: 'How was the level of questions in the exam?',
            ans: slider1,
          },
          {
            question: 'How was the level of questions in the exam?',
            ans: slider2,
          },
          {
            question: 'Your Suggestion',
            ans: suggestion,
          },
        ],
      };

      try {
        const response = await fetch('https://cine-student.onrender.com/student/submitFeedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(feedbackData),
        });

        if (!response.ok) {
          throw new Error('Network error');
        }

        const data = await response.json();
        console.log('Submitted:', data);
      } catch (error) {
        console.error('Error submitting feedback:', error);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSuggestion(e.target.value);
    if (e.target.value.trim() !== '') {
      setError('');
    }
  };

  return (
    <div className='bg-[#EAEEFF] h-screen relative'>
      <div className='bg-[#546CFF] w-full flex justify-between items-center px-6 py-4 text-white font-semibold'>
        <div className='flex justify-center items-center'>
          <Image src="/icons/csi_logo.svg" width={50} height={50} alt="csiLogo" className='px-3' />
          <h1 className='text-xl font-medium pl-5'>CSI Exam Portal</h1>
        </div>
      </div>
      <div className='w-[94%] mt-8 m-auto flex justify-center items-center'>
        <Image src="/icons/bg_logo.svg" alt="bgLogo" width={10} height={10} className='absolute z-0 top-[50%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[22%]' />
        <div className='w-[98%] h-[84vh] flex flex-col items-center px-14 bg-[#FFFFFF] backdrop-filter backdrop-blur-[6px] rounded-md bg-opacity-30 z-10'>
          <div className='font-bold mb-4 text-4xl mt-5'>FEEDBACK</div>
          <div className='w-[60rem] pb-5 bg-white rounded-3xl border p-2 border-black bg-opacity-50 flex flex-col gap-1rem justify-center items-center'>
            <div className='text-2xl font-medium text-black text-center'>
              How was the level of questions in the exam???
            </div>
            <div>
              <FeedbackSlider onSliderChange={handleSlider1Change} />
            </div>
          </div>
          <div className='w-[60rem] pb-5 bg-white rounded-3xl border p-2 mt-5 border-black bg-opacity-50 flex flex-col gap-1rem justify-center items-center'>
            <div className='text-2xl font-medium text-black text-center'>
              How was the level of questions in the exam???
            </div>
            <div>
              <FeedbackSlider onSliderChange={handleSlider2Change} />
            </div>
          </div>
          <div className='w-[60rem] pb-5 bg-white rounded-3xl border p-2 mt-5 border-black bg-opacity-50 flex flex-col gap-1rem justify-center items-center'>
            <div className='text-2xl font-medium text-black text-center'>
              Your Suggestion
            </div>
            <div className='w-full flex flex-col items-center'>
              <textarea
                className='w-full h-[80%] p-2 mt-2 bg-transparent rounded-md focus:outline-none'
                placeholder='Enter your suggestion here...'
                value={suggestion}
                onChange={handleInputChange}
                onFocus={() => setError('')}
              />
              {error && <div className='text-red-500 mt-2'>{error}</div>}
              <button
                className='mt-4 px-4 py-2 bg-[#546CFF] text-white font-semibold rounded-md'
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
