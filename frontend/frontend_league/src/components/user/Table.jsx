import styles from "../../css/Table.module.css";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

const TABLE = [
  { team: "FC United",    mp: 12, w: 9, d: 2, l: 1, gf: 31, ga: 13, gd: "+18", pts: 29, form: ["W","W","W","D","W"] },
  { team: "City Wolves",  mp: 12, w: 8, d: 1, l: 3, gf: 26, ga: 15, gd: "+11", pts: 25, form: ["W","L","W","W","D"] },
  { team: "Red Eagles",   mp: 12, w: 5, d: 3, l: 4, gf: 18, ga: 16, gd: "+2",  pts: 18, form: ["D","W","L","W","D"] },
  { team: "Green Rovers", mp: 12, w: 4, d: 4, l: 4, gf: 14, ga: 17, gd: "-3",  pts: 16, form: ["D","D","L","W","L"] },
  { team: "Blue Thunder", mp: 12, w: 2, d: 2, l: 8, gf: 8,  ga: 22, gd: "-14", pts: 8,  form: ["L","L","D","L","L"] },
];

const SUMMARY = [
  { num: "5",   label: "Clubs",        sub: "In the league"      },
  { num: "60",  label: "Matches",      sub: "Total this season"  },
  { num: "47",  label: "Goals",        sub: "Scored this season" },
  { num: "3.9", label: "Goals / Game", sub: "Average per match"  },
];

const initials = (name) => name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

const gdStyle = (gd) => {
  const n = Number(gd);
  if (n > 0) return styles.gdPos;
  if (n < 0) return styles.gdNeg;
  return styles.gdNeu;
};

const formStyle = (r) => (r === "W" ? styles.formW : r === "D" ? styles.formD : styles.formL);

export default function TablePage() {
  return (
    <>
      <Navbar />

      <div className={styles.page}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>League Table</h1>
          <p className={styles.pageSubtitle}>Season 2025 / 26 — Matchday 12 of 20</p>
        </div>

        <div className={styles.tableCard}>
          {/* Head bar */}
          <div className={styles.tableHead}>
            <span className={styles.tableHeadTitle}>League Standings</span>
            <span className={styles.tableHeadSub}>Updated after matchday 12</span>
          </div>

          {/* Scrollable table */}
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thPos}>#</th>
                  <th className={styles.thClub}>Club</th>
                  <th title="Matches Played">MP</th>
                  <th title="Wins">W</th>
                  <th title="Draws">D</th>
                  <th title="Losses">L</th>
                  <th title="Goals For">GF</th>
                  <th title="Goals Against">GA</th>
                  <th title="Goal Difference">GD</th>
                  <th title="Points">Pts</th>
                  <th className={styles.thForm} title="Last 5 matches">Form</th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map((t, i) => (
                  <tr key={t.team}>
                    <td className={styles.posCell}>{i + 1}</td>
                    <td className={styles.teamCell}>
                      <div className={styles.teamRow}>
                        <div className={styles.teamCrest}>{initials(t.team)}</div>
                        <span className={styles.teamName}>{t.team}</span>
                      </div>
                    </td>
                    <td>{t.mp}</td>
                    <td className={styles.wCell}>{t.w}</td>
                    <td>{t.d}</td>
                    <td className={styles.lCell}>{t.l}</td>
                    <td>{t.gf}</td>
                    <td>{t.ga}</td>
                    <td className={gdStyle(t.gd)}>{t.gd}</td>
                    <td className={styles.ptsCell}>{t.pts}</td>
                    <td>
                      <div className={styles.formRow}>
                        {t.form.map((r, j) => (
                          <span key={j} className={`${styles.formDot} ${formStyle(r)}`}>{r}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className={styles.tableFooter}>
            <span className={styles.legendItem}>
              <span className={styles.legendBar} style={{ background: "#16a34a" }} /> Top of table
            </span>
            <span className={styles.legendItem}>
              <span className={styles.legendBar} style={{ background: "#ef4444" }} /> Bottom of table
            </span>
            <span className={styles.legendItem}>
              <span className={styles.legendBar} style={{ background: "#94a3b8" }} /> Mid table
            </span>
          </div>
        </div>

        {/* Summary */}
        <div className={styles.summaryGrid}>
          {SUMMARY.map((s) => (
            <div key={s.label} className={styles.summaryCard}>
              <div className={styles.summaryNum}>{s.num}</div>
              <div className={styles.summaryLabel}>{s.label}</div>
              <div className={styles.summarySub}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </>
  );
}
