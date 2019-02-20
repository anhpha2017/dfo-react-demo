import React from "react";

const FilterButton = ({ filter, text, onFilterButtonClick, active }) => {
    return (
        <button onClick={() => onFilterButtonClick(filter)}>{text}</button>
    )
}
export default FilterButton;