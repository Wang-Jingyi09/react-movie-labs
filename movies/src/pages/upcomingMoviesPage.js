import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { MoviesContext } from "../contexts/moviesContext"; 
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'; 

const UpcomingMoviesPage = () => {
    const {data, error, isLoading, isError }  = useQuery("upcoming", getUpcomingMovies);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <h1>{`Error: ${error.message}`}</h1>;
    }
    
    const movies = data.results;
    const mustWatch = movies.filter(m => m.mustWatch)

    
    localStorage.setItem('favorites', JSON.stringify(mustWatch))




    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
            action={movie => {
                return <AddToMustWatchIcon movie={ movie }/>
            }}
        />
    );
};

export default UpcomingMoviesPage;
