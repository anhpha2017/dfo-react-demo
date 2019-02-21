import React from "react";
import "./FilterButton.css";

const FilterButton = ({ filter, text, onFilterButtonClick, currentFilter }) => {
    const cssClass = filter === currentFilter ? "filter-button-selected" : "filter-button";
    return (
        <button className={cssClass} onClick={() => onFilterButtonClick(filter)}>{text}</button>
    )
}
export default FilterButton;