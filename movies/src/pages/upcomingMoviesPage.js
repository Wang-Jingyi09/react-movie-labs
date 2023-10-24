import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";

const UpcomingMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=f84d47c06e7e7fc9b52da9eb26d58210&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results);
        })
        .catch(error => {
            console.error("There was an error fetching the movies:", error);
        });
    }, []);


    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
            
        />
    );
};

export default UpcomingMoviesPage;
