// // // const Players = () => {
// // //     return (
// // //         <div style={{ padding: "40px" }}>
// // //             <h1>Players Page</h1>
// // //             <p>All Premier League players will appear here</p>
// // //         </div>
// // //     );
// // // };

// // // export default Players;

// // const Players = () => {
// // //   // دي بيانات مؤقتة (dummy data) لحد ما نربط بـ Spring Boot
// // //   const samplePlayers = [
// // //     { id: 1, name: "Mohamed Salah", team: "Liverpool", position: "Forward", goals: 18 },
// // //     { id: 2, name: "Erling Haaland", team: "Man City", position: "Forward", goals: 25 },
// // //     { id: 3, name: "Bruno Fernandes", team: "Man United", position: "Midfielder", goals: 8 },
// // //     { id: 4, name: "Bukayo Saka", team: "Arsenal", position: "Forward", goals: 12 },
// // //   ];

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.header}>
// //         <h1 style={styles.title}>Premier League Players</h1>
// //         <p style={styles.subtitle}>Browse all players and their statistics</p>
// //       </div>

// //       <div style={styles.grid}>
// //         {samplePlayers.map((player) => (
// //           <div key={player.id} style={styles.card}>
// //             <div style={styles.cardHeader}>
// //               <h3 style={styles.playerName}>{player.name}</h3>
// //               <span style={styles.position}>{player.position}</span>
// //             </div>
// //             <div style={styles.cardBody}>
// //               <p style={styles.info}>
// //                 <strong>Team:</strong> {player.team}
// //               </p>
// //               <p style={styles.info}>
// //                 <strong>Goals:</strong> {player.goals}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Players = () => {
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/premier-zone/api/players")
//       .then(response => {
//         setPlayers(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Players</h2>

//       {players.map(player => (
//         <div key={player.id}>
//           <strong>{player.name}</strong> - {player.team}
//         </div>
//       ))}
//     </div>
//   );
// };

// // const styles = {
// //   container: {
// //     minHeight: "calc(100vh - 70px)",
// //     backgroundColor: "#f5f5f5",
// //     padding: "40px 20px",
// //   },
// //   header: {
// //     textAlign: "center",
// //     marginBottom: "40px",
// //   },
// //   title: {
// //     fontSize: "42px",
// //     color: "#1f5c6e",
// //     marginBottom: "10px",
// //   },
// //   subtitle: {
// //     fontSize: "18px",
// //     color: "#666",
// //   },
// //   grid: {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
// //     gap: "25px",
// //     maxWidth: "1200px",
// //     margin: "0 auto",
// //   },
// //   card: {
// //     backgroundColor: "white",
// //     borderRadius: "10px",
// //     padding: "20px",
// //     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
// //     transition: "transform 0.2s",
// //     cursor: "pointer",
// //   },
// //   cardHeader: {
// //     borderBottom: "2px solid #56b79b",
// //     paddingBottom: "15px",
// //     marginBottom: "15px",
// //   },
// //   playerName: {
// //     fontSize: "22px",
// //     color: "#1f5c6e",
// //     marginBottom: "8px",
// //   },
// //   position: {
// //     backgroundColor: "#f5c518",
// //     color: "#1f5c6e",
// //     padding: "5px 12px",
// //     borderRadius: "15px",
// //     fontSize: "12px",
// //     fontWeight: "bold",
// //   },
// //   cardBody: {
// //     marginTop: "10px",
// //   },
// //   info: {
// //     fontSize: "16px",
// //     color: "#555",
// //     marginBottom: "8px",
// //   },
// // };

// export default Players;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from "react";
import axios from "axios";
import PlayersTable from "../components/PlayersTable";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/premier-zone/api/players")
      .then((res) => setPlayers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Premier League Players</h2>
      <PlayersTable players={players} />
    </div>
  );
};

export default Players;
