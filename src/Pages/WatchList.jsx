import MovieDisplay from "../Components/MovieDisplay"

function WatchList() {
    return(
        <>
            <h1>Movies i want to watch</h1>
            <ul>
                <MovieDisplay/>
                <MovieDisplay/>
                <MovieDisplay/>
            </ul>
        </>
    );
}

export default WatchList