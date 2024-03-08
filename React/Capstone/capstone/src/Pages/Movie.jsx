import { useState } from "react";
import "../Components/Moviecontent.css"
import action from "../assets/action.png";
import drama from "../assets/drama.png";
import fantasy from "../assets/fantasy.png";
import fiction from "../assets/fiction.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import western from "../assets/western.png";
import MovieBox from "../Components/Moviecontent";
import MovieChip from "../Components/MovieChip";
import { useNavigate } from "react-router-dom";
const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ marginTop:"25px", width: "10.5vw", height: "11vh", borderRadius: "11px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ marginTop:"25px", width: "10.5vw", height: "11vh", borderRadius: "11px" }} src={drama} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ marginTop:"25px", width: "10.5vw", height: "11vh", borderRadius: "11px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ marginTop:"25px", width: "10.5vw", height: "11vh", borderRadius: "11px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ marginTop:"25px", width: "10.5vw", height: "11vh", borderRadius: "11px" }} src={western} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ marginTop:"25px", width: "10.5vw", height: "11vh", borderRadius: "11px" }} src={horror} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ marginTop:"25px", width: "10.5vw", height: "11vh", borderRadius: "11px" }} src={fantasy} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ marginTop:"25px", width: "10.5vw", height: "11vh", borderRadius: "11px" }} src={music} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ marginTop:"25px", width: "10.5vw", height: "11vh", borderRadius: "11px" }} src={fiction} />,
  },
];
export default function Movies() {

  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    if (selected.length < 3) {
      return;
    } else {
      localStorage.setItem("movies", JSON.stringify(selected));
      navigate("/display");
    }
  };
  console.log(selected);
  return (
    <>
    <div className="movie">
    <div className="movie-left">
      <div className="movie-title">
        <h1>Super app</h1>
        <p>Choose your <br /> entertainment <br /> category</p>
      </div>
      <div className="movie-chips">
      <div
        style={{
          display: "flex",
          marginTop: "12px",
          marginBottom: "12px",
          gap: "12px",
        }}
      >
        {selected.map((item) => {
          return (
            <MovieChip
              key={item}
              data={item}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
      {selected.length < 3 ? <p style={{color:"#FF0000",fontFamily:"Roboto", fontWeight:'300',letterSpacing:"2%",lineHeight:"26px",fontSize:"20px"}}>Minimum 3 category required</p>: <></>}
      </div>
    </div>
    <div className="movie-right">
       <div className="movie-category">
       <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {genres.map((genres) => {
          return (
            <MovieBox
              key={genres}
              data={genres}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
       </div>
      
      <button onClick={handleClick} className="next-btn">Next Page</button></div>
    </div>
     
    </>
  );
}