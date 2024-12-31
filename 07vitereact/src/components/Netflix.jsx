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
                return (
                    <div key={e.id} style={{ marginBottom: "20px" }}>
                        <img src={e.img_url} width="40%" height="40%" alt="Series Thumbnail" />
                        <h2>{e.name}</h2>
                        <h2>Rating: {e.rating}</h2>
                        <h3>{e.description}</h3>
                        <h3>Cast: {e.cast}</h3>
                        <h3>Genre: {e.genre}</h3>
                        <button>
                            <a href={e.watch_url} target="_blank" rel="noopener noreferrer">
                                Watch Now
                            </a>
                        </button>
                    </div>
                )
            })}
        </>
    );
}


export default Netflix;