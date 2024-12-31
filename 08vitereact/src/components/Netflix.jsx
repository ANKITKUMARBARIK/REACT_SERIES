import React from "react";
import seriesData from "../api/seriesData.json";

// return (
//     <ul>
//         {students.map((student) => (
//             <li key={student}>{student}</li>
//         ))}
//     </ul>
// )
// React.js will complain if you don't pass key prop to < li>.
function Netflix() {

    return (
        <>
            {seriesData.map((e) => {
                // using ternary operators
                const ratingClass = `${e.rating >= 8.5 ? "super_hit" : "average"}`;
                const btn_style = {
                    padding: '1.2rem 2.4rem',
                    border: 'none',
                    fontSize: '1.6rem',
                    fontWeight: '500',
                    backgroundColor: `${e.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
                    cursor: 'pointer',
                    color: 'black'
                }

                return (
                    <li className="card" key={e.id} style={{ marginBottom: "20px" }}>
                        <div>
                            <img src={e.img_url} width="40%" height="40%" alt="Series Thumbnail" />
                        </div>
                        <div className="card-content">
                            <h2>Name : {e.name}</h2>
                            {/* Conditional styling using ternary operators */}
                            <h3>Rating: <span className={`ratingcss ${ratingClass}`}>{e.rating}</span></h3>
                            <p>Summary : {e.description}</p>
                            <p>Cast : {e.cast}</p>
                            <p>Genre : {e.genre}</p>
                            <a href={e.watch_url} target="_blank" rel="noopener noreferrer">
                                <button style={btn_style}>Watch Now</button>
                            </a>
                        </div>
                    </li>
                )
            })}
        </>
    );
}


export default Netflix;