import { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom';

function SearchBar(){
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate(); // for page move

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };


    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        if (inputValue.trim()) {
            // move to SearchResult and pass user input to url query
            navigate(`/search-result?query=${encodeURIComponent(inputValue)}`);
        }
    };
      

    return (
        <div>
            <label className='searchBar'>
                <form method="post" onSubmit={handleSearch}>
                <span className="search-label">Search: </span><input name='Search' value={inputValue} defaultValue={'Howl\'s moving castle'} onChange={handleInputChange}/>
                    <button type='submit' to="/search-result">Submit</button>
                </form>
            </label>
        </div>
    )
}

export default SearchBar;