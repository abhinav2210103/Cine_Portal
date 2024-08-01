// 'use client'
// import React, { ChangeEvent, useState } from 'react';

// interface SelectLanguageDropdownProps {
//     selectedLanguage: string;
//     setSelectedLanguage: (language: string) => void;
// }

// export default function SelectLanguageDropdown({ selectedLanguage, setSelectedLanguage }: SelectLanguageDropdownProps) {
//     const [open, setOpen] = useState<boolean>(false);

//     const languages = [
//         { value: "", label: "" },
//         { value: "4", label: "C++" },
//         { value: "3", label: "C" },
//         { value: "2", label: "Python" },
//         { value: "1", label: "Java" }
//     ];

//     const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
//         setSelectedLanguage(event.target.value);
//     };

//     return (
//         <>
//             <select
//                 className='p-3 mb-12 px-8 w-[80%] rounded-xl bg-[#EAEEFF] appearance-none cursor-pointer focus:outline-none font-medium'
//                 onClick={() => setOpen(!open)}
//                 onChange={handleChange}
//                 value={selectedLanguage}
//             >
//                 {languages.map((language, index) => (
//                     <option key={index} value={language.value}>{language.label}</option>
//                 ))}
//             </select>
//             <div className={`absolute transition-all duration-300 left-[22%] mt-24 transform ${open ? 'rotate-180' : 'rotate-0'}`}>
//                 <img src='/icons/DropDown.png' />
//             </div>
//         </>
//     );
// }

'use client'
import React, { ChangeEvent, useState } from 'react';

interface SelectLanguageDropdownProps {
    selectedLanguage: string;
    setSelectedLanguage: (language: string) => void;
}

export default function SelectLanguageDropdown({ selectedLanguage, setSelectedLanguage }: SelectLanguageDropdownProps) {
    const [open, setOpen] = useState<boolean>(false);

    const languages = [
        { value: "", label: "" },
        { value: "4", label: "C++" },
        { value: "3", label: "C" },
        { value: "2", label: "Python" },
        { value: "1", label: "Java" }
    ];

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <>
            <select
                className='p-3 mb-12 px-8 w-[80%] rounded-xl bg-[#EAEEFF] appearance-none cursor-pointer focus:outline-none font-medium'
                onClick={() => setOpen(!open)}
                onChange={handleChange}
                value={selectedLanguage}
            >
                {languages.map((language, index) => (
                    <option key={index} value={language.value}>{language.label}</option>
                ))}
            </select>
            <div className={`absolute transition-all duration-300 left-[22%] mt-24 transform ${open ? 'rotate-180' : 'rotate-0'}`}>
                <img src='/icons/DropDown.png' />
            </div>
        </>
    );
}
