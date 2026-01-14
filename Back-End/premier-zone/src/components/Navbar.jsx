// const Navbar = () => {
//   return (
//     <nav style={{ 
//       height: "70px",
//       backgroundColor: "#1f5c6e",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       padding: "0 40px",
//       color: "white"
//     }}>
//       <div style={{ fontSize: "22px", fontWeight: "bold" }}>
//         Premier<span style={{ color: "#f5c518" }}>Zone</span>
//       </div>

//       <ul style={{ 
//         display: "flex",
//         listStyle: "none",
//         gap: "25px"
//       }}>
//         <li>Home</li>
//         <li>Players</li>
//         <li>Teams</li>
//         <li>Fantasy</li>
//         <li>Search</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        Premier<span style={{ color: "#f5c518" }}>Zone</span>
      </div>
      <ul style={styles.links}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/players" style={styles.link}>Players</Link></li>
        <li><Link to="/teams" style={styles.link}>Teams</Link></li>
        <li><Link to="/fantasy" style={styles.link}>Fantasy</Link></li>
        <li><Link to="/search" style={styles.link}>Search</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    height: "70px",
    backgroundColor: "#1f5c6e",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    color: "white",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    listStyle: "none",
    gap: "25px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default Navbar;