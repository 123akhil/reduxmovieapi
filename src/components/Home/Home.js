import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
// import movieApi from "../../common/apis/movieApi";
// import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../redux/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  // const movieText = "Harry";
  // api call using sychronus action creator but we will be using thunk middleware to make it async action creator
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    // const fetchMovies = async () => {
    // const response = await movieApi
    //   .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //   .catch((err) => {
    //     console.log("Err :", err);
    //   });
    // dispatch(addMovies(response.data));
    // };
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
