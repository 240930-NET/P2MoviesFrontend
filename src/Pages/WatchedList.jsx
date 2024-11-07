import MovieDisplay from "../Components/MovieDisplay"

function WatchedList() {
    return(
        <>
            <h1>Movies i have seen</h1>
            <ul>
                <MovieDisplay/>
                <MovieDisplay/>
                <MovieDisplay/>
            </ul>
        </>
    );
}

export default WatchedList