export const SeriesCard =({data})=>{
    const {id ,img_url,name,rating,description,cast,genre,Watch_url}= data;
    const btn_style={
      padding:"1.2rem 2.4rem",
      border:"none",
      fontsize:"1.6rem",
      backgroundColor:"var (--bnt-hover-bg-color)",
      color:"var(--bg-color)",
    }
    return (
        <li className="card">
         <div>
           <img src={img_url} alt={name} width="40%" height="40%"/>
         </div>
         <div className="card-content">
         <h2>Name: {name}</h2>
         <h3>ID:{id}</h3>
           <h3 >Rating:{rating}</h3>
           <p >Summary :{description}</p>
           <p  >Cast:{cast.join(", ")}</p>
           <p  >Genre:{genre.join(", ")}</p>
           <a href={Watch_url} target="_blank">
   
           <button style={btn_style}>Watch Now</button>
           </a>
           </div>
           </li>
        );
}