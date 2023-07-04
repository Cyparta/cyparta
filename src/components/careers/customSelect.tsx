import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import selectIcon from '../../assets/icons/select-icon.png'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setFilter } from '@/store/careers/careersSlice';
interface CustomSelectProps {
    options: {title:string, val: string}[];
    defaultValue?: string;
    icon: any;
    handleSelect?: any
    type?: string;
}

const CustomSelect = ({ options, defaultValue, icon, type, handleSelect }: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const selectRef = useRef<HTMLDivElement>(null);

    const lang = useSelector((state: RootState) => state.lang.value.lang)


    // const options = ['Option 1', 'Option 2', 'Option 3'];

    // const handleOptionClick = (option: string) => {
    //     setSelectedOption(option);
    //     setIsOpen(false);
    // };

    const handleOptionClick = (val: string, title: string) => {
        setSelectedOption(title);
        handleSelect(val)
        setIsOpen(false);
    };

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className={`custom-select ${isOpen ? 'open' : ''}`} ref={selectRef} style={{ position: "relative" }}>
            <div className="selected-option" onClick={toggleSelect} style={{ height: "auto", padding: "20px" }}>
                {selectedOption || defaultValue}
            </div>
            <span style={{ position: "absolute", top: "20px", right: lang === 'en' ? "20px" : "auto", left: lang === 'ar' ? "20px" : "auto", cursor: "pointer" }} onClick={toggleSelect}>
                {/* <Image src={icon} alt="select icon" width="10" height="10" />
                 */}
                {icon}
            </span>
            {isOpen && (
                <ul className="options">
                    {options.map((option) => (
                        <li key={option.val} onClick={() => handleOptionClick(option.val, option.title)}>
                            {option.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;