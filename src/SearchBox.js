import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="ma3 pa2">
			<input className="pa3 ba" 
			type="search" 
			placeholder="Search robots..." 
			onChange = {searchChange}/>
		</div>

	)
}

export default SearchBox;