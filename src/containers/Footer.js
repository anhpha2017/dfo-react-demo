import React from 'react';

import { Filter } from "../context"
import FilterButton from "../components/FilterButton"
import { setVisibilityFilter } from "../actions/visibleFilterActionCreator";

import "./Footer.css";

const allowedFilters = [
    { filter: "SHOW_ALL", text: "All" },
    { filter: "SHOW_COMPLETED", text: "Done" },
    { filter: "SHOW_ACTIVE", text: "Active" }];

class Footer extends React.Component {

    static contextType = Filter;

    handleFilterChange = (filter) =>
        this.context.filterDispatch(setVisibilityFilter(filter));

    render() {
        const filterButtons = allowedFilters.map(f =>
            <FilterButton key={`VISIBLE_FILTER_${f.filter}`}
                currentFilter={this.context.filterState} filter={f.filter}
                onFilterButtonClick={this.handleFilterChange} text={f.text} />)

        return (
            <div>

                <div className="footer-row">
                    <label>Filter</label>
                    {filterButtons}
                </div>
            </div>
        );
    }
}

// const Footer = React.memo(({ selectedFilter, dispatch }) => {

//     console.log("Re-render Footer: ");
//     // const { todoDispatch } = useContext(Store);
//     const { filterState, filterDispatch } = useContext(Filter);

//     const handleFilterChange = (filter) => filterDispatch({ type: "SET_VISIBILITY_FILTER", filter });

//     const filterButtons = allowedFilters.map(f =>
//         <FilterButton key={`VISIBLE_FILTER_${f.filter}`} currentFilter={filterState} filter={f.filter} onFilterButtonClick={handleFilterChange} text={f.text} />)

//     return (
//         <div>

//             <div className="footer-row">
//                 <label>Filter</label>
//                 {filterButtons}
//             </div>
//         </div>
//     );
// })

export default Footer;