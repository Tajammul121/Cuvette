/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
export default function MovieRow({ genre }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=english';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGQzZDc1MzczNDBkMGM4OGIxOGE5ZGU3YTc0OTZiYyIsInN1YiI6IjY1ZWIyNTZiOTk3NGVlMDE4NzhlZTEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZDl1tKFk6LSY40SlkY0H4Z1KpMq2hgx2nQv9gqb399A'
      }
    };
    

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div>
      <p
        style={{
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        {genre.name}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {movies.map((movies, index) => {
          return index >= 4 ? (
            <></>
          ) : (
            <div
              key={index}
              style={{
                display: "flex",
              }}
            >
              <div style={{ objectFit: "cover" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
                  alt={movies.title}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}