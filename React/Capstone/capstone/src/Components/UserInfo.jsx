import profile from "../assets/profile.png";

export default function UserInfo() {
  const info = JSON.parse(localStorage.getItem("userInfo"));
  const movies = JSON.parse(localStorage.getItem("movies"));
  return (
    <div
      className="userinfo"
      style={{
        background: " #5746EA ",
        width: "60%",
        height: "85%",
        padding: "3vw",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2vw",
        borderRadius: "15px",
      }}
    >
      <div className="userinfo-left">
        <img
          style={{
            height: "23vh",
            width:'4.5vw',
            borderRadius: "20px",
            border: "3px solid white ",

          }}
          src={profile}
          alt=""
        />
      </div>

      <div className="userinfo-right">
       
       <div 
       style={{
        marginBottom:'10px'
       }}
       className="profile-data"
       >
       <p style={{
        fontFamily:'"DM Sans", sans-serif',
        fontWeight:'400',

       }} >{info.name}</p>
        <p>{info.email}</p>
        <p style={{
          fontFamily:"Roboto",
        }}>{info.username}</p>
       </div>

        <div 
        style={{
          display:"grid",
          gridTemplateColumns:"auto auto",
          gap: "5px"
        }}
        >
        {movies.map((item) => {
          return (
            <div
              style={{
                background: "#9F94FF",
                borderRadius: "12px",
                marginBottom: "8px",
                padding: "6px",
                textAlign: "center",
              }}
              key={item}
            >
              { item}
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
