/* eslint-disable react/prop-types */
export default function MovieBox({ data, selected, setSelected }) {
  const isSelected = selected.includes(data.id);
  const handleClick = () => {
    if (selected.includes(data.id)) {
      setSelected((prev) => prev.filter((item) => item !== data.id));
    } else {
      setSelected((prev) => {
        return [...prev, data.id];
      });
    }
  };
  return (
    <div
      onClick={handleClick}
      style={{
        background: data.color,
        display:"flex",
        flexDirection:"column",
        width: "12vw",
        border: isSelected ? "6px solid green" : "",
        height:"25vh",
        borderRadius: "20px",
      }}
    >
      <p style={{float:"left", padding:"10px", fontSize:"2vw", fontFamily: "DM Sans"}}>{data.id}</p>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", }}>{data.image}</div>
    </div>
  );
}