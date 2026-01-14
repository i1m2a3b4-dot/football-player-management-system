const PlayersTable = ({ players }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>#</th>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Team</th>
          <th style={styles.th}>Position</th>
          <th style={styles.th}>Age</th>
        </tr>
      </thead>

      <tbody>
        {players.map((player, index) => (
          <tr key={player.id} style={styles.row}>
            <td style={styles.td}>{index + 1}</td>
            <td style={styles.td}>{player.name}</td>
            <td style={styles.td}>{player.team}</td>
            <td style={styles.td}>{player.postion}</td>
            <td style={styles.td}>{player.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    backgroundColor: "white",
  },
  th: {
    backgroundColor: "#1f5c6e",
    color: "white",
    padding: "12px",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  row: {
    cursor: "pointer",
  },
};

export default PlayersTable;
