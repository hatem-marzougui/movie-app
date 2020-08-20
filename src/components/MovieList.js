import React,{useState} from 'react'
import MovieCard from './MovieCard'
import Modal from 'react-modal' 


Modal.setAppElement('#root')

function MovieList ({ results,movies,ratingSearch}) {

const [modalIsOpen, setmodalIsOpen] = useState(false);

  const AddMovie=()=>{ 
	setmodalIsOpen(false);
	results.push({Title:title,Poster:poster,rating:rating});

  }

const [poster, setposter] = useState("");
const [title, settitle] = useState("");
const [rating, setrating] = useState(5);
const handlePoster=(e)=>{setposter(e.target.value); }
const handleRating=(e)=>{setrating(e.target.value); }
const handleTitle=(e)=>{settitle(e.target.value)}



	return (
		<section className="results">
			{results
			.filter(result=>result.rating >= ratingSearch )
			.map(result => (
				<MovieCard key={Math.random()} result={result} />
				
			
			))}

			<div className="result"> 
			<i className="fas fa-plus-circle" style={{
				color:'yellow',
			   fontSize:'150px',
			   textAlign:'center',
			    paddingTop:'160px'}}
				
				onClick={()=>{
					setmodalIsOpen(true)}}
				/>

           <Modal   isOpen={modalIsOpen}>
			   <label> Enter src of the Poster</label>
			   <input  type="url" onChange={handlePoster} required/>
			   <label> Enter the movie Title</label>
			   <input type="text" onChange={handleTitle}/>
			   <label> Enter the rating</label>
			   <input type="number" onChange={handleRating} />
			   <button className="button"  onClick={AddMovie}>submit</button>
			   
             
              </Modal>				
		</div>
      
		</section>
	)
}

export default MovieList