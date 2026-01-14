// const Teams = () => {
//     return (
//         <div style={{ padding: "40px" }}>
//             <h1>Teams Page</h1>
//             <p>All Premier League teams will appear here</p>
//         </div>
//     );
// };

// export default Teams;

const Teams = () => {
  // بيانات مؤقتة للفرق
  const sampleTeams = [
    { id: 1, name: "Liverpool", wins: 18, draws: 4, losses: 3, points: 58 },
    { id: 2, name: "Man City", wins: 17, draws: 5, losses: 3, points: 56 },
    { id: 3, name: "Arsenal", wins: 16, draws: 6, losses: 3, points: 54 },
    { id: 4, name: "Chelsea", wins: 14, draws: 7, losses: 4, points: 49 },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Premier League Teams</h1>
        <p style={styles.subtitle}>Current season standings and statistics</p>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Team</th>
              <th style={styles.th}>W</th>
              <th style={styles.th}>D</th>
              <th style={styles.th}>L</th>
              <th style={styles.th}>Points</th>
            </tr>
          </thead>
          <tbody>
            {sampleTeams.map((team, index) => (
              <tr key={team.id} style={styles.tableRow}>
                <td style={styles.td}>{index + 1}</td>
                <td style={styles.teamName}>{team.name}</td>
                <td style={styles.td}>{team.wins}</td>
                <td style={styles.td}>{team.draws}</td>
                <td style={styles.td}>{team.losses}</td>
                <td style={styles.points}>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "calc(100vh - 70px)",
    backgroundColor: "#f5f5f5",
    padding: "40px 20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "42px",
    color: "#1f5c6e",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
  },
  tableContainer: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    backgroundColor: "#1f5c6e",
    color: "white",
  },
  th: {
    padding: "15px",
    textAlign: "left",
    fontWeight: "bold",
  },
  tableRow: {
    borderBottom: "1px solid #e0e0e0",
  },
  td: {
    padding: "15px",
    color: "#555",
  },
  teamName: {
    padding: "15px",
    fontWeight: "bold",
    color: "#1f5c6e",
    fontSize: "16px",
  },
  points: {
    padding: "15px",
    fontWeight: "bold",
    color: "#56b79b",
    fontSize: "18px",
  },
};

export default Teams;