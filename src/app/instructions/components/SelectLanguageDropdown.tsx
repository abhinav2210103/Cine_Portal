'use client'
import React, { ChangeEvent, useState } from 'react';

export default function SelectLanguageDropdown() {
    const [open, setOpen] = useState<boolean>(false);
    const languages = [
        { value: "", label: "" },
        { value: "c++", label: "C++" },
        { value: "c", label: "C" },
        { value: "py", label: "Python" },
        { value: "java", label: "Java" }
    ];
    

  return (
    <>
    <select
                                    className='p-3 mb-12 px-8 w-[80%] rounded-xl bg-[#EAEEFF] appearance-none cursor-pointer focus:outline-none font-medium'
                                    onClick={() => setOpen(!open)}
                                >
                                    {languages.map((language, index) => (
                                        <option key={index} value={language.value}>{language.label}</option>
                                    ))}
                                </select>
                                <div className={`absolute transition-all duration-300 left-[22%] mt-24 transform ${open ? 'rotate-180' : 'rotate-0'}`}>
                                    <img src='/icons/DropDown.png' />
                                </div></>
  )
}


                            
