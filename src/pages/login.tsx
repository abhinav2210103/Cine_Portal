"use client";
import React, { useState, useEffect } from "react";
import "../app/globals.css";
import { FaEye, FaEyeSlash, FaUser, FaKey } from "react-icons/fa";
import { useFormik } from "formik";
import validationSchema from "@/app/constants/validationSchema";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login(): React.ReactElement {
  return (
    <>
      <LoginComponent />
      <ToastContainer />
    </>
  );
}

const LoginComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState<boolean>(false);
  const router = useRouter();


  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkDeviceView = () => {
        if (window.innerWidth < 768 || window.innerHeight > window.innerWidth) {
          router.replace("/error");
        }
      };

      checkDeviceView(); 
      window.addEventListener("resize", checkDeviceView);
      return () => {
        window.removeEventListener("resize", checkDeviceView);
      };
    }
  }, [router]);


  useEffect(() => {
    if (typeof window === "undefined") return;
    const userId = localStorage.getItem("userId");
    const language = localStorage.getItem("language");
    if (userId && !language) {
      router.replace("/instructions");
    } else if (userId && language) {
      router.replace("/start");
    }

    const Backgroundimage = new Image();
    Backgroundimage.src = "./cine-bg.png";
    Backgroundimage.onload = () => {
      setBackgroundLoaded(true);
    };
  }, []);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      studentNumber: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setDisabled(true);
      try {
        const loginResponse = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...values }),
        });
        if(loginResponse.status === 500) {
          toast.error("Error logging in. Please try again.");
          return;
        }        
        const loginData = await loginResponse.json();
        if(loginData.message === "Invalid credentials") {
          toast.error("Invalid credentials. Please try again.");
          return;
        }
        if(loginData.message === "Test already submitted") {
          toast.error("Test already submitted. Please contact the invigilator.");
          return;
        }
        if (typeof window !== "undefined") {
          localStorage.setItem('userId', loginData.userId);
          localStorage.setItem('TREM', loginData.remainingTime);
        }
        resetForm();
        if (loginData.language === "Invalid preference number") {
            router.push("/instructions");
        } else {
            router.push("/start");
        }
      } catch (error : any ) { } 
      finally {
        setDisabled(false);
      }
    },
  });

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative w-full">
      {backgroundLoaded ? (
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: 'url("cine-bg.png")' }}
        >
          <div className="relative bg-white bg-opacity-50 h-[13vh] w-full flex items-center justify-center gap-5">
            <img src="./Csilogo.png" />
            <div className="font-medium text-4xl">CSI Exam Portal</div>
          </div>

          <div className="flex items-center justify-center mt-[13vh]">
            <div
              className="relative flex flex-col justify-between items-center gap-5 p-16 rounded-2xl bg-cover bg-center h-max-[65vh] w-[27rem]"
              style={{ backgroundImage: 'url("./inputbg.svg")' }}
            >
              <div>
                <p className="font-semibold text-4xl">Cine-2024</p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5 items-center"
              >
                <div className="flex flex-col">
                  <label htmlFor="studentNumber" className="font-semibold mb-2">
                    Student Number:
                  </label>
                  <div className="border-2 border-black py-3 px-2 rounded-lg flex gap-4 w-[20rem]">
                    <div className="ml-2">
                      <FaUser size={24} />
                    </div>
                    <input
                      id="studentNumber"
                      type="number"
                      name="studentNumber"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.studentNumber}
                      className="bg-transparent border-none outline-none w-[17rem]"
                    />
                  </div>
                  {touched.studentNumber && errors.studentNumber ? (
                    <div className="text-red-500">{errors.studentNumber}</div>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="font-semibold mb-2">
                    Password:
                  </label>
                  <div className="border-2 border-black py-3 px-2 rounded-lg flex gap-2 w-[20rem] justify-evenly">
                    <div className="ml-2">
                      <FaKey size={24} />
                    </div>
                    <input
                      id="password"
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="bg-transparent border-none outline-none w-[14rem] focus:bg-transparent"
                    />
                    <div className="cursor-pointer" onClick={togglePassword}>
                      {passwordVisible ? (
                        <FaEyeSlash size={24} />
                      ) : (
                        <FaEye size={24} />
                      )}
                    </div>
                  </div>
                  {touched.password && errors.password ? (
                    <div className="text-red-500">{errors.password}</div>
                  ) : null}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={disabled}
                    className="m-5 px-5 rounded-lg h-[3rem] bg-[#546CFF] w-[20rem] py-3 text-[#EAEEFF] font-medium flex items-center justify-center"
                  >
                    {disabled ? (
                      <ClipLoader color="#EAEEFF" size={30} />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ClipLoader color="#546CFF" size={80} />
        </div>
      )}
    </div>
  );
};
