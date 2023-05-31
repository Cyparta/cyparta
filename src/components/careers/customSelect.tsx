import Image from 'next/image';
import React, { useState } from 'react';
import selectIcon from '../../assets/icons/select-icon.png'
interface CustomSelectProps {
    options : string[];
    defaultValue?: string;
    icon: any
}

const CustomSelect = ({options, defaultValue, icon}:CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

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
            <div className="selected-option" onClick={toggleSelect} style={{height:"auto", padding:"20px"}}>
                {selectedOption || defaultValue}
            </div>
            <span style={{ position: "absolute", top: "20px", right: "20px", cursor:"pointer" }} onClick={toggleSelect}>
                {/* <Image src={icon} alt="select icon" width="10" height="10" />
                 */}
                 {icon}
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