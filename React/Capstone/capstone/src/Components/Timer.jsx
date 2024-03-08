import { CountdownCircleTimer } from "react-countdown-circle-timer";
import uparrow from "../assets/up-arrow.png"
import downarrow from '../assets/down-arrow.png'
import React, { useState } from "react";
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [counter, setConter] = useState(0)

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between",
    }}>
      <div className="left" style={{}}><CountdownCircleTimer
        isPlaying={isPlaying}
        duration={seconds}
        colors={["#FF6A6A"]}
        
      >
        {({ remainingTime }) => {
          if (remainingTime === 0) {
            setIsPlaying(false);
            return <div>Time is up!</div>;
          } else {
            return (
              <>
                <div>{Math.floor(remainingTime / 3600)} hours</div>{" "}
                {/* 1 hour = 3600 seconds */}{" "}
                {/* 3661 secodonds = 1 hour 1 minute 1 second */}
                <div> {Math.floor((remainingTime % 3600) / 60)} minutes</div>
                <div>{remainingTime % 60} seconds</div>
              </>
            );
          }
        }}
      </CountdownCircleTimer>
      </div>
      <div className="right">
     <div  style={{display:"flex", alignItems:"center", justifyContent:"center", gap:'2rem',marginRight:'2rem' }}>
     <div className="hour">
        <h2 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Hour</h2>
      <img style={{height:'4rem',width:'4rem'}} src={uparrow} alt="" onClick={() => setSeconds((prev) => prev + 3600)}/>

      <h1 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>{seconds/3600}</h1>

      <img src={downarrow} alt=""  style={{height:'4rem',width:'4rem'}}
        onClick={() => {
          if (seconds >= 3600) {
            setSeconds((prev) => prev - 3600);
          }
        }}
      />
      </div>
      <div className="minute">
        <h2 style={{display:"flex", alignItems:"center", justifyContent:"center",}}>Minute</h2>
      <img style={{height:'4rem',width:'4rem', filter:'grayscale(100%'}} src={uparrow} alt="" onClick={() => setSeconds((prev) => prev + 60)}/>
      <h1 style={{display:"flex", alignItems:"center", justifyContent:"center",}}>{seconds / 60}</h1>
       <img src={downarrow} alt=""  style={{height:'4rem',width:'4rem'}}
        onClick={() => {
          if (seconds >= 60) {
            setSeconds((prev) => prev - 60);
          }
        }}
      />
      
      </div>
      <div className="secound">
        <h2 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Secound</h2>

          <img style={{height:'4rem',width:'4rem'}} src={uparrow} alt="" onClick={() => setSeconds((prev) => {
            prev + 1
          })}/>
       
          <h1 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>{seconds}</h1>

        <img src={downarrow} alt=""  style={{height:'4rem',width:'4rem'}}
        onClick={() => {
          if (seconds > 0) {
            setSeconds((prev) => prev - 1);
          }
        }}/>
     
      </div>
     </div>
     <div>
     <button disabled={isPlaying} onClick={() => setIsPlaying(true)}>
        Start
      </button>
     </div>


      </div>
     
    
    </div>
     


  );
}