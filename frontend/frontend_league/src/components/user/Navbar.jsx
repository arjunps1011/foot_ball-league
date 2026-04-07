import { Link, useLocation } from "react-router-dom";
import styles from "../../css/Homes.module.css";

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>
        <Link to="/" className={styles.navBrand}>
          <div className={styles.navLogo}><IconShield /></div>
          <div>
            <div className={styles.navName}>Football League</div>
            <div className={styles.navSub}>Season 2025 / 26</div>
          </div>
        </Link>
        <ul className={styles.navLinks}>
          <li><Link to="/"         className={`${styles.navLink} ${pathname === "/"         ? styles.navLinkActive : ""}`}>Home</Link></li>
          <li><Link to="/fixtures" className={`${styles.navLink} ${pathname === "/fixtures" ? styles.navLinkActive : ""}`}>Fixtures</Link></li>
          <li><Link to="/results"  className={`${styles.navLink} ${pathname === "/results"  ? styles.navLinkActive : ""}`}>Results</Link></li>
          <li><Link to="/table"    className={`${styles.navLink} ${pathname === "/table"    ? styles.navLinkActive : ""}`}>Table</Link></li>
          <li><Link to="/teams"    className={`${styles.navLink} ${pathname === "/teams"    ? styles.navLinkActive : ""}`}>Teams</Link></li>
          <li><Link to="/stats"    className={`${styles.navLink} ${pathname === "/stats"    ? styles.navLinkActive : ""}`}>Stats</Link></li>
        </ul>
      </div>
    </nav>
  );
}
