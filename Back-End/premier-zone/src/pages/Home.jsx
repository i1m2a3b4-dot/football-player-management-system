// const Home = () => {
//     return (
//         <div style={{ padding: "40px" }}>
//             <h1>Welcome to Premier Zone</h1>
//             <p>Your home for everything Premier League!</p>
//         </div>
//     );
// };

// export default Home;

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to Premier Zone</h1>
        <p style={styles.description}>
          Your ultimate destination for Premier League statistics, players, and teams!
        </p>
        <div style={styles.features}>
          <div style={styles.card}>
            <h3>📊 Live Stats</h3>
            <p>Real-time player and team statistics</p>
          </div>
          <div style={styles.card}>
            <h3>⚽ Player Profiles</h3>
            <p>Detailed information about your favorite players</p>
          </div>
          <div style={styles.card}>
            <h3>🏆 Team Analysis</h3>
            <p>Complete team data and performance</p>
          </div>
        </div>
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
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "48px",
    color: "#1f5c6e",
    marginBottom: "20px",
    textAlign: "center",
  },
  description: {
    fontSize: "20px",
    color: "#666",
    textAlign: "center",
    marginBottom: "60px",
  },
  features: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    maxWidth: "300px",
    textAlign: "center",
  },
};

export default Home;