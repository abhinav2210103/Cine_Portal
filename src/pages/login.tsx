'use client';
import React, { useState } from 'react';
import axios from 'axios';
import "../app/globals.css"
import RootLayout from '@/app/layout';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function login(): React.ReactElement {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={"6LduePwpAAAAAPSYw03svKMQfz93zdOgQJl5r6ZN"} scriptProps={{ async: true }}>
      <LoginComponent/>
    </GoogleReCaptchaProvider>
  );
}

const LoginComponent = () => {
  const [studentNumber, setStudentNumber] = useState('');
  const [password, setPassword] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [disabled, setDisabled] = useState(false);

  const handleLogin = async () => {
    try {
      if (!executeRecaptcha) {
        console.error('ReCAPTCHA not available');
        return;
      }
      const token = await executeRecaptcha('Login');
      const response = await axios.post(
        'https://cine-student.onrender.com/student/login',
        { studentNumber, password, token},
        {
          withCredentials: true,
        }
      );

      console.log('Login successful:', response);
      setStudentNumber('');
      setPassword('');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className='relative min-h-[100vh] w-full'
      style={{
        backgroundImage: 'url("cine-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className='relative bg-[#ffffff] bg-opacity-50 h-[10vh] w-full flex items-center justify-center gap-5'>
        <img src='./csilogo.svg'/>
      <div className='font-medium text-4xl'>CSI Exam Portal</div>  
      </div>   

      <div className='flex items-center justify-center min-h-[85vh]'>
        <div className='relative flex flex-col justify-between items-center gap-5 p-16 px-25' style={{
          backgroundImage:'url("./inputbg.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height:'60vh',
          width:'25vw'
        }}>
          <div>
            <p className='font-semibold text-3xl'>Cine-2024</p>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="studentNumber">Student Number:</label>
            <div className='border-4'>
            <input
              id="studentNumber"
              type="number"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
            />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='border-4'
            />
          </div>
          <div>
            <button
              onClick={() => {
                if (!disabled) {
                  setDisabled(true);
                  handleLogin();
                }
              }}
              disabled={disabled}
              className='border-2 m-5 px-5 py-1'
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
