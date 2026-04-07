import { Link, useLocation } from "react-router-dom";
import styles from "../../css/Homes.module.css";

export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className={styles.bottomNav}>
      <Link to="/"         className={`${styles.bottomNavItem} ${pathname === "/"         ? styles.bottomNavActive : ""}`}><span className={styles.bottomNavLabel}>Home</span></Link>
      <Link to="/fixtures" className={`${styles.bottomNavItem} ${pathname === "/fixtures" ? styles.bottomNavActive : ""}`}><span className={styles.bottomNavLabel}>Fixtures</span></Link>
      <Link to="/results"  className={`${styles.bottomNavItem} ${pathname === "/results"  ? styles.bottomNavActive : ""}`}><span className={styles.bottomNavLabel}>Results</span></Link>
      <Link to="/table"    className={`${styles.bottomNavItem} ${pathname === "/table"    ? styles.bottomNavActive : ""}`}><span className={styles.bottomNavLabel}>Table</span></Link>
      <Link to="/teams"    className={`${styles.bottomNavItem} ${pathname === "/teams"    ? styles.bottomNavActive : ""}`}><span className={styles.bottomNavLabel}>Teams</span></Link>
      <Link to="/stats"    className={`${styles.bottomNavItem} ${pathname === "/stats"    ? styles.bottomNavActive : ""}`}><span className={styles.bottomNavLabel}>Stats</span></Link>
    </nav>
  );
}
