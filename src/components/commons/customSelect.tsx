import Image from 'next/image';
import React, { useState } from 'react';
import selectIcon from '../../assets/icons/select-icon.png'

interface CustomSelectProps {
    options: string[];
    defaultValue?: string;
}

const CustomSelect = ({ options, defaultValue }: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    // const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`custom-select ${isOpen ? 'open' : ''}`} style={{ position: "relative" }}>
            <div className="selected-option" onClick={toggleSelect}>
                {selectedOption || defaultValue}
            </div>
            <span style={{ position: "absolute", top: "8px", right: "15px", cursor: "pointer" }} onClick={toggleSelect}>
                <Image src={selectIcon} alt="select icon" width="10" height="10" />
            </span>
            {isOpen && (
                <ul className="options">
                    {options.map((option) => (
                        <li key={option} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;







