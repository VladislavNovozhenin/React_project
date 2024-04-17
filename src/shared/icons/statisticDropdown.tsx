import React from "react";

interface IStatisticDropdownProps {
    isDropdownOpen: boolean
}

export function StatisticDropdown({isDropdownOpen}: IStatisticDropdownProps) {

    const rotate = {
        transform: 'rotate(180deg)',
    }

    const normal = {
        transform: 'none',
    }

    return (
        <svg style={isDropdownOpen ? rotate : normal} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1L8 8L1 1" stroke="#B7280F" strokeWidth="2" />
        </svg>

    );
}

