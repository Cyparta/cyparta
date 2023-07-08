import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import selectIcon from '../../assets/icons/select-icon.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

import { countries } from '@/data/countries';


interface CustomSelectProps {
    options?: string[];
    defaultValue?: string;
    handleSelect: any
}

const CustomSelect = ({ options, defaultValue, handleSelect }: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const selectRef = useRef<HTMLDivElement>(null);

    const lang = useSelector((state: RootState) => state.lang.value.lang)

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        handleSelect(option)
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
        <div className={`custom-select ${isOpen ? 'open' : ''}`} ref={selectRef} style={{ position: 'relative' }}>
            <div className="selected-option" onClick={toggleSelect}>
                {selectedOption || defaultValue}
            </div>
            <span
                style={{ position: 'absolute', top: '8px', right: lang === 'en' ? "15px" : "auto", left: lang === 'ar' ? "15px" : "auto", cursor: 'pointer' }}
                onClick={toggleSelect}
            >
                <Image src={selectIcon} alt="select icon" width="10" height="10" />
            </span>
            {isOpen && (
                <ul className="options" style={{ height: "300px", overflowY: "scroll" }}>
                    {countries.map((option, index) => {
                        const countryCode = Object.keys(option)[0] as keyof typeof option;
                        const country:any = option[countryCode]?.country;

                        return (
                            <li key={index} onClick={() => handleOptionClick(country)}>
                                {country}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
