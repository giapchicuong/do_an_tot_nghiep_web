import React, { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const ButtonCalendar = ({
    startDate: initialStartDate = new Date(),
    onDateChange = () => { },
    buttonLabel = "Hôm nay",
    selectRange = false,
    viewYear = false,
    isCanDropdown = true
}) => {
    const [startDate, setStartDate] = useState(initialStartDate);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Xử lý toggle dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Xử lý click bên ngoài
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Lắng nghe sự kiện click bên ngoài
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Xử lý khi chọn ngày mới
    const handleDateChange = (date) => {
        setStartDate(date);
        onDateChange(date);
    };



    return (
        <div className='relative z-10' ref={dropdownRef}>
            <button onClick={toggleDropdown}>
                <div className="flex items-center justify-between rounded border-stroke bg-inputPlaceholder border px-1">
                    <div className="text-xs whitespace-nowrap font-semibold text-stroke">
                        {buttonLabel}
                    </div>
                    {!isOpen ? (
                        <RiArrowDropDownLine className="text-3xl font-semibold text-stroke" />
                    ) : (
                        <RiArrowDropUpLine className="text-3xl font-semibold text-stroke" />
                    )}
                </div>
            </button>


            {isOpen && isCanDropdown && (
                <div className="absolute top-full right-0 z-0">
                    <Calendar
                        locale="en-VN"
                        className="p-5 rounded-[10px]"
                        value={startDate}
                        onChange={!viewYear ? handleDateChange : null}
                        onClickMonth={viewYear ? handleDateChange : null}
                        selectRange={selectRange}
                        view={viewYear ? "year" : ''}
                    />
                </div>
            )}
        </div>
    );
};

export default ButtonCalendar;
