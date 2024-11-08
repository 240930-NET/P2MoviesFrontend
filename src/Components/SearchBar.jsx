import { useState } from 'react'
import './SearchBar.css'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

function SearchBar(){
    //const history = useHistory();
    const [movieTitle, setMovieTitle] = useState('Howl\'s moving castle')

    const handleChange = (e) => {
        // Ensure that we're setting only the string value of the input field
        setMovieTitle(e.target.value);
      };

    return (
        <Container 
            fluid 
            className="d-flex justify-content-center align-items-center"
            style={{marginTop: '20px' }}
            >
            <label className='searchBar'>
                <form method="post">
                    Search: <input name='Search' value={movieTitle} 
                        onChange={handleChange}/>
                    <Link 
                        to = {{
                            pathname: `/search-result/${movieTitle}/1`,  // Adjust route as necessary
                        }} 
                    >
                        <button type='submit' >Submit</button>
                    </Link>
                    
                </form>
            </label>
        </Container>
    )
}

export default SearchBar;