import React, { useContext } from 'react';

import Store, { Filter } from "../context"
import FilterButton from "../components/FilterButton"


const Footer = () => {

    const { todoDispatch } = useContext(Store);
    const { filterDispatch } = useContext(Filter);

    const handleFilterChange = (filter) => filterDispatch({ type: "SET_VISIBILITY_FILTER", filter });

    return (
        <div>
            <div>
                <button onClick={() => todoDispatch({ type: "TOGGLE_ALL_TODOS" })}>Toggle All</button>
            </div>
            <div>
                <label>Filter</label>
                <FilterButton onFilterButtonClick={() => handleFilterChange("SHOW_ALL")} text="All" />
                <FilterButton onFilterButtonClick={() => handleFilterChange("SHOW_COMPLETED")} text="Done" />
                <FilterButton onFilterButtonClick={() => handleFilterChange("SHOW_ACTIVE")} text="Active" />
            </div>
        </div>
    );
}

export default Footer;