import React from 'react'
import Rate from './Rate'

function MovieCard({result}) {
	
	return (
		
     
		<div className="result" > 
			<img src={result.Poster} alt="poster"/>
			<h3 >{result.Title} </h3>
			<div className="ratingcard"><Rate rating={result.rating} /></div>
			
			
			
        </div>
			   
	  	    
	)
}

export default MovieCard