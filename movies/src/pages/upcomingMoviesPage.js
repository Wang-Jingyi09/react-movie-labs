import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const UpcomingMoviesPage = () => {
    const {data: movies, error, isLoading}  = useQuery("upcoming", getUpcomingMovies);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <h1>{`Error: ${error.message}`}</h1>;
    }

    // useEffect(() => {

    //     fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setMovies(data.results);
    //         })
    //         .catch(error => {
    //             console.error("There was an error fetching the movies:", error);
    //         });
    // }, []);


    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies.results}
            action={movie => {
                return <PlaylistAddIcon/>
            }}
        />
    );
};

export default UpcomingMoviesPage;
