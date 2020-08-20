import React from 'react'
import Rate from './Rate'


function Search ({ setRatingSearch, ratingSearch,handleInput}) {
	return (
		<div className="searchbox-wrap">
			<input 
				type="text" 
				placeholder="Search for a movie..." 
				className="searchbox" 
				onChange={handleInput}
				
			/>
			<div className="ratingsearch">
			  <Rate 
          className='star-rating'
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
		</div>
			
		</div>
	)
}

export default Search