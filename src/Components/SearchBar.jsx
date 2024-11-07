import { useState } from 'react'
import './SearchBar.css'

function SearchBar(){
    function handleSearch(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <div>
            <label className='searchBar'>
                <form method="post" onSubmit={handleSearch}>
                    Search: <input name='Search' defaultValue={'Howl\'s moving castle'}/>
                    <button type='submit' to="/search-result">Submit</button>
                </form>
            </label>
        </div>
    )
}

export default SearchBar;