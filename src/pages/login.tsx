import React, { useState } from 'react';
import axios from 'axios';
import GoogleCaptchaWrapper from '@/app/GoogleCaptchaWrapper';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const Login = () => {
  const [studentNumber, setStudentNumber] = useState('');
  const [password, setPassword] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [disabled, setDisabled] = useState(false);
  const handleLogin = async () => {
    try {
      if (!executeRecaptcha) {
        throw new Error('reCAPTCHA not initialized');
      }

      const token = await executeRecaptcha('login');
      const item = { studentNumber, password , token };
      const response = await axios.post(
        'https://cineregister.onrender.com/login',
        item,
        {
            withCredentials: true,
        }
    );
      console.log('Login successful:', response.data);
      setStudentNumber('');
      setPassword('');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
    }
  };

  return (
    <>
    <GoogleCaptchaWrapper>
    <div className='flex w-full min-h-[500vh] items-center justify-center'>
        <div>
          <div>
            <label htmlFor="studentNumber">Student Number:</label>
            <input
              id="studentNumber"
              type="text"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            >
              Submit
            </button>
          </div>
        </div>
        </div>
         </GoogleCaptchaWrapper>
         </>
  );
};

export default Login;
