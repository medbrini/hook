import React from "react";

const Filter = ({onFilterChange, RatingFilter, TitleFilter }) => {
    const filterStyle = {
        margin: '20px 0',
      };
    return (
        <div style={filterStyle}>
            <input type="text" placeholder="Filter by title" value={TitleFilter} onChange={(e) => onFilterChange('title',e.target.value)}/>
            <input type="number" placeholder="Filter by Rating" value={RatingFilter} onChange={(e) => onFilterChange('rating',e.target.value)}/>
        </div>
    );
};

export default Filter;