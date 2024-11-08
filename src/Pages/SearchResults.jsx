import SearchBar from '../Components/SearchBar';
import React, { useEffect, useState } from 'react';
import MovieList from '../Components/MovieList';
import { useLocation, Link } from 'react-router-dom'; // Routing for Movie detail page

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
  
function SearchResults() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);    
    const [page, setPage] = useState(1);
    const query = useQuery().get('query'); //get query from url info

    useEffect(() => {
        if (query) {
          setPage(1);  // Reset page to 1 whenever query changes
        }
    }, [query]); // Only depend on query here

    
    // Update movie's whenever query or page changed
    useEffect(() => {
        const fetchMovies = async () => {
            if (!query) return;

            setLoading(true); // Start loading
            try {
                //const apiKey = import.meta.env.VITE_TMDB_API_KEY; // Get API key from .env
                const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWZjNjY1MTdhZDgyYTA4MDU0MGQ3NzI0ZTA2MmI5NyIsIm5iZiI6MTczMDgzNjcyNy44NDY4NzcsInN1YiI6IjY3MjJhMzk1MWRmNzBmNzkyMGZlZGNlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOsYpQUD765ohRnbWJOgCzp0VExzbwQ4H7HN_H8HUWs';
                const url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=${page}`;
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${apiKey}`, // Authorization header with API key
                    },
                };

                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Failed to fetch movies');
                }

                const data = await response.json();
                setMovies(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchMovies();
    }, [query, page]); 

    
    // Page handling
    const handlePreviousPage = () => {
        if (page > 1) {
          setPage(page - 1);
        }
      };
    
      const handleNextPage = () => {
        setPage(page + 1);
      };

    // loading or error message
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
      
    return(
        <>
            <div>
                <SearchBar />

                <h2>
                    <strong style={{ color: 'white' }}>Search Results for "{query}"</strong>
                </h2>

                <MovieList movieList={movies} />

                {/* Paging */}
                <div className="pagination">
                    <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
                    <span>Page {page}</span>
                    <button onClick={handleNextPage}>Next</button>
                </div>
            </div>
        </>
    );
}

export default SearchResults