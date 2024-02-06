import React, {useState} from "react";
import "./Dropdown.css";


interface DropdownProps {
    options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({options}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className={`grid-container dropdown ${isOpen? "active" : ""}`}>
            <button className="dropdown-button" onClick={toggleDropdown}>
                {selectedOption || "Select an Option"}
            </button>
            <ul className="dropdown-list">
                {options.map((option)=>(
                    <li key={option} onClick={()=>handleOptionClick(option)}>
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;