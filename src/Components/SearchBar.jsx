import { useState } from 'react'
import './SearchBar.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

function SearchBar(){
    //const history = useHistory();
    const [movieTitle, setMovieTitle] = useState('Howl\'s moving castle')
    const [movieData, setMovieData] = useState(undefined)
    const [moviePoster, setMoviePoster] = useState(undefined)
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();
        const apiKEY= import.meta.env.OMDB_API_KEY;

        const form = e.target;
        const formData = new FormData(form);

        if (movieTitle != '')
        {
            fetch('http://www.omdbapi.com/?apikey=${apiKEY}&t=${movieTitle}', {})
            .then(res => {
                if(res.ok){
                    //console.log(res);
                    return res.json();
                }
                else{
                    console.log("Something went wrong");
                }
            })
            .then(data => {
                console.log(data);
                setMovieData(data);
            }
            )
            .catch(err => {
                console.log(err);
            })

            fetch('http://img.omdbapi.com/?apikey=${apiKEY}&t=${movieTitle}', {})
            .then(res => {
                if(res.ok){
                    //console.log(res);
                    return res.json();
                }
                else{
                    console.log("Something went wrong");
                }
            })
            .then(data => {
                console.log(data);
                setMoviePoster(data);
            }
            )
            .catch(err => {
                console.log(err);
            })

            navigate("/search-result/${movieTitle}", {state:{title:movieTitle}});
            //history.push({pathname: "/search-result", state: [movieData, moviePoster]});
        }
    }

    return (
        <div>
            <label className='searchBar'>
                <form method="post" onSubmit={handleSearch}>
                    Search: <input name='Search' value={movieTitle} onChange={(value)=>setMovieTitle(value)}/>
                    <button type='submit'>Submit</button>
                </form>
            </label>
        </div>
    )
}

export default SearchBar;