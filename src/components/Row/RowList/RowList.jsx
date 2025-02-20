// import  from "react";
import Row from "../Row/Row";
import requests from "../../utils/requests";

const RowList = () => {
    return (
        <div>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
                isLargeRow={false}
            />
            <Row
                title="Top Rated"
                fetchUrl={requests.fetchTopRatedMovies}
                isLargeRow={true}
            />
        </div>
    );
};

export default RowList;
