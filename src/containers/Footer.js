import React, { useContext } from 'react';

import Store, { Filter } from "../context"
import FilterButton from "../components/FilterButton"

import "./Footer.css";


const Footer = () => {

    const { todoDispatch } = useContext(Store);
    const { filterState, filterDispatch } = useContext(Filter);

    const handleFilterChange = (filter) => filterDispatch({ type: "SET_VISIBILITY_FILTER", filter });

    const allowedFilters = [
        { filter: "SHOW_ALL", text: "All" },
        { filter: "SHOW_COMPLETED", text: "Done" },
        { filter: "SHOW_ACTIVE", text: "Active" }];
    const filterButtons = allowedFilters.map(f =>
        <FilterButton key={`VISIBLE_FILTER_${f.filter}`} currentFilter={filterState} filter={f.filter} onFilterButtonClick={handleFilterChange} text={f.text} />)

    return (
        <div>
            <div className="footer-row">
                <button className="btn-main" onClick={() => todoDispatch({ type: "TOGGLE_ALL_TODOS" })}>Toggle All</button>
            </div>
            <div className="footer-row">
                <label>Filter</label>
                {filterButtons}
            </div>
        </div>
    );
}

export default Footer;