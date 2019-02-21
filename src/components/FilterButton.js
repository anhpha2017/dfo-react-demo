import React from "react";
import "./FilterButton.css";

const isActive = (props) => props.currentFilter === props.filter;

class FilterButton extends React.Component {
    handleButtonClick = () => this.props.onFilterButtonClick(this.props.filter);
    shouldComponentUpdate(nextProps) {
        if (isActive(this.props) !== isActive(nextProps)) {
            return true;
        }
        return false;
    }
    render() {
        const { filter, currentFilter, text } = this.props;
        const cssClass = filter === currentFilter ? "filter-button-selected" : "filter-button";
        return (
            <button className={cssClass} onClick={this.handleButtonClick}>{text}</button>
        )
    }
}

// const FilterButton = React.memo(({ filter, text, onFilterButtonClick, currentFilter }) => {
//     const cssClass = filter === currentFilter ? "filter-button-selected" : "filter-button";
//     return (
//         <button className={cssClass} onClick={() => onFilterButtonClick(filter)}>{text}</button>
//     )
// })
export default FilterButton;