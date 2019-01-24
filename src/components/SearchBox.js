import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa3 bg-lightest-grey">
            <input 
                type="search" 
                placeholder="search family"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;