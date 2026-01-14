const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg"
          alt="Premier League"
          style={styles.logo}
        />

        <h1 style={styles.title}>
          Welcome to <br /> Premier Zone Fantasy!
        </h1>

        <p style={styles.text}>
          Your home for everything Premier League related!
        </p>

        <button style={styles.button}>GET STARTED</button>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    height: "calc(100vh - 70px)",
    backgroundColor: "#56b79b",
    display: "flex",
    alignItems: "center",
    paddingLeft: "80px",
  },
  content: {
    maxWidth: "600px",
  },
  logo: {
    width: "150px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "48px",
    color: "white",
    marginBottom: "15px",
  },
  text: {
    color: "#e0f2ec",
    marginBottom: "25px",
    fontSize: "16px",
  },
  button: {
    background: "transparent",
    border: "2px solid #f5c518",
    color: "#f5c518",
    padding: "12px 28px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Hero;
