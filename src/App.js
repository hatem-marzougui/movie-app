import React, { useState } from 'react'
import Search from './components/Search'
import MovieList from './components/MovieList'
import './App.css';

function App() {
  
  const movies=[
    {Title: "Fury" ,
    rating:1,
    Poster:"https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_SX300.jpg"},
  

    {Title:"Baywatch",
    rating:3,
    Poster:"https://i.pinimg.com/originals/6d/ef/9b/6def9b2a1a2eed138ae793c1149e92f1.jpg"},
    
    {Title:"Jumanji: Welcome to the Jungle",
    rating:3,
    Poster:"https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},

    {Title:"Grown ups",
    rating:4.5,
    Poster:"https://image.tmdb.org/t/p/w500/cQGM5k1NtU85n4TUlrOrwijSCcm.jpg"},

    {Title:"The Hangover", 
    rating:2,
    Poster:"https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},

    
    
    
    
    {Title:"Wild",
    rating:2,
    Poster:"https://m.media-amazon.com/images/M/MV5BMGMzZmYzYmUtNTJiYi00MjZjLTkyZmMtZGJhYWRlMDBkMDIyXkEyXkFqcGdeQXVyNjA5MDIyMzU@._V1_SX300.jpg"},
    
    {Title:"The Bucket List",
    rating:1,
    Poster:"https://s27135.pcdn.co/wp-content/uploads/2016/10/The-Bucket-List.jpg.optimal.jpg"},
   
    
  
    {Title:"Pirate",
    rating:5,
    Poster:"https://i0.wp.com/www.orphicpixel.com/wp-content/uploads/2012/03/image025.jpg?resize=550%2C787&ssl=1"},
  
  ];

const [results, setResults] = useState(movies);
const [ratingSearch, setRatingSearch] = useState(1);
//const [searchValue, setSearchValue] = useState('');

const handleInput =  (e) =>{
 // setSearchValue(e.target.value);
  setResults(movies.filter(
    (result)=>
    result.Title.toLowerCase().trim().includes(e.target.value) 
    ));
  
}
  


  return (
    <div className="App">
      <header>
        <h1>Movie App</h1>
      </header>
      <main>
        <Search handleInput={handleInput}  
                setRatingSearch={setRatingSearch}
                ratingSearch={ratingSearch}  />

        <MovieList results={results} movies={movies} ratingSearch={ratingSearch} />
      

       
      </main>
    </div>
  );
}

export default App