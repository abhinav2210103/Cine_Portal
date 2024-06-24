'use client';
import React, { useState } from 'react';
import axios from 'axios';
import "../app/globals.css";
import RootLayout from '@/app/layout';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useFormik } from 'formik';
import validationSchema from '@/app/constants/validationSchema';

export default function Login(): React.ReactElement {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={"6LduePwpAAAAAPSYw03svKMQfz93zdOgQJl5r6ZN"} scriptProps={{ async: true }}>
      <LoginComponent />
    </GoogleReCaptchaProvider>
  );
}

const LoginComponent = () => {
  const [passwardVisible , setpasswordVisible] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [disabled, setDisabled] = useState(false);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  } = useFormik({
    initialValues: {
      studentNumber: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setDisabled(true);
      try {
        if (!executeRecaptcha) {
          console.error('ReCAPTCHA not available');
          return;
        }
        const token = await executeRecaptcha('Login');
        const response = await axios.post(
          'https://cine-student.onrender.com/student/login',
          { ...values, token },
          {
            withCredentials: true,
          }
        );

        console.log('Login successful:', response);
        resetForm();
      } catch (error) {
        console.error('Login failed:', error);
      } finally {
        setDisabled(false);
      }
    },
  });
  const togglepassword = () => {
    setpasswordVisible(!passwardVisible);
  }
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
            <p className='font-semibold text-4xl'>Cine-2024</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 items-center">
            <div className='flex flex-col'>
              <label htmlFor="studentNumber" className='font-semibold mb-2'>Student Number:</label>
              <div className='border-2 border-black py-3 px-2 rounded-lg flex gap-4 w-[20rem]'>
                <div className='ml-2'><img src='./student-icon.svg'/></div>
                <input
                  id="studentNumber"
                  type="text"
                  name="studentNumber"
                  placeholder="Enter Your Student No"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.studentNumber}
                  style={{ backgroundColor: 'transparent', border: 'none', outline: 'none'}}
                  className='w-[17rem]'
                />
              </div>
              {touched.studentNumber && errors.studentNumber ? (
                <div className="text-red-500">{errors.studentNumber}</div>
              ) : null}
            </div>
            <div className='flex flex-col'>
              <label htmlFor="password" className='font-semibold mb-2'>Password:</label>
              <div className='border-2 border-black py-3 px-2 rounded-lg flex gap-2 w-[20rem] justify-evenly'>
                <div><img src='./passward-icon.svg'/></div>
                <input
                  id="password"
                  type={passwardVisible? 'text':'password'}
                  name="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  style={{ backgroundColor: 'transparent', border: 'none', outline: 'none'}}
                />
                <div className='cursor-pointer' onClick={togglepassword}><img src='./passward-eye.svg'/></div>
              </div>
              {touched.password && errors.password ? (
                <div className="text-red-500">{errors.password}</div>
              ) : null}
            </div>
            <div>
              <button
                type="submit"
                disabled={disabled}
                className='m-5 px-5 rounded-lg bg-[#546CFF] w-[20rem] py-3 text-[#EAEEFF] font-medium'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
