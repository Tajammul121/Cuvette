import News from "../Components/News";
import Notes from "../Components/Notes";
import Timer from "../Components/Timer";
import UserInfo from "../Components/UserInfo";
import Weather from "../Components/Weather";
import '../Components/display.css'
import { Link } from "react-router-dom";

export default function Display() {
  return (
    <div className="display">

      <div className="display-left">

        <div className="left-up">

          <div className="up-left">
            <div className="profile"><UserInfo /></div>
            <div className="weather"><Weather /></div>
          </div>

          <div className="up-right">
            <div className="notes"> 
            <Notes />
            </div>
          </div>
        </div>


        <div className="left-down">
          <div className="timer"> <Timer /></div>
        </div>

        <div className="btn">
  <button><Link to='/browser' style={{textDecoration:'none'}}>Browser</Link></button>
</div>

      </div>


      <div className="display-right">
        <div className="news"> <News /> </div>
      </div>

    </div>
  );
}