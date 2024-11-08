import SearchBar from '../Components/SearchBar';
import MovieList from "../Components/MovieList"
import { useLocation } from 'react-router-dom';

function SearchResults() {
    const location = useLocation();

    return(
        <>
            <SearchBar></SearchBar>
            <div>
                {location.title}
            </div>
            <MovieList/>
        </>
    );
}

export default SearchResults