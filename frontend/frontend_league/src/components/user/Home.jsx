import { Link } from "react-router-dom";
import styles from "../../css/Homes.module.css";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

const UPCOMING = [
  { id: 1, home: "FC United",    away: "City Wolves",  date: "Thu 10 Apr", time: "19:30", venue: "Central Park"  },
  { id: 2, home: "Red Eagles",   away: "Blue Thunder", date: "Fri 11 Apr", time: "17:00", venue: "Eagle Arena"   },
  { id: 3, home: "Green Rovers", away: "FC United",    date: "Sun 13 Apr", time: "18:00", venue: "Rovers Ground" },
  { id: 4, home: "City Wolves",  away: "Red Eagles",   date: "Tue 15 Apr", time: "20:00", venue: "Wolf Stadium"  },
  { id: 5, home: "Blue Thunder", away: "Green Rovers", date: "Thu 17 Apr", time: "17:30", venue: "Thunder Dome"  },
];

const RESULTS = [
  { id: 1, home: "FC United",    hs: 3, away: "Blue Thunder",  as: 1 },
  { id: 2, home: "Red Eagles",   hs: 2, away: "Green Rovers",  as: 2 },
  { id: 3, home: "City Wolves",  hs: 4, away: "Red Eagles",    as: 0 },
  { id: 4, home: "Green Rovers", hs: 1, away: "FC United",     as: 3 },
  { id: 5, home: "Blue Thunder", hs: 0, away: "City Wolves",   as: 2 },
  { id: 6, home: "FC United",    hs: 1, away: "Red Eagles",    as: 1 },
];

const TABLE = [
  { pos: 1, team: "FC United",    mp: 12, w: 9, d: 2, l: 1, gf: 31, ga: 13, gd: "+18", pts: 29, form: ["W","W","W","D","W"] },
  { pos: 2, team: "City Wolves",  mp: 12, w: 8, d: 1, l: 3, gf: 26, ga: 15, gd: "+11", pts: 25, form: ["W","L","W","W","D"] },
  { pos: 3, team: "Red Eagles",   mp: 12, w: 5, d: 3, l: 4, gf: 18, ga: 16, gd: "+2",  pts: 18, form: ["D","W","L","W","D"] },
  { pos: 4, team: "Green Rovers", mp: 12, w: 4, d: 4, l: 4, gf: 14, ga: 17, gd: "-3",  pts: 16, form: ["D","D","L","W","L"] },
  { pos: 5, team: "Blue Thunder", mp: 12, w: 2, d: 2, l: 8, gf: 8,  ga: 22, gd: "-14", pts: 8,  form: ["L","L","D","L","L"] },
];

const TOP_SCORERS = [
  { rank: 1, name: "Arjun Menon",   team: "FC United",    goals: 14, apps: 12 },
  { rank: 2, name: "Kiran Das",     team: "City Wolves",  goals: 9,  apps: 11 },
  { rank: 3, name: "Sanjay Pillai", team: "Green Rovers", goals: 7,  apps: 12 },
  { rank: 4, name: "Rohan Varma",   team: "Red Eagles",   goals: 6,  apps: 10 },
  { rank: 5, name: "Amal Suresh",   team: "Blue Thunder", goals: 4,  apps: 11 },
];

const TOP_ASSISTS = [
  { rank: 1, name: "Rahul Nair",   team: "City Wolves",  assists: 9, apps: 12 },
  { rank: 2, name: "Vivek Menon",  team: "FC United",    assists: 7, apps: 11 },
  { rank: 3, name: "Dinto Joseph", team: "Red Eagles",   assists: 5, apps: 12 },
  { rank: 4, name: "Nikhil Raj",   team: "Green Rovers", assists: 4, apps: 10 },
  { rank: 5, name: "Arun Thomas",  team: "Blue Thunder", assists: 2, apps: 9  },
];

const initials = (n) => n.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
const formColor = (r) => (r === "W" ? "formW" : r === "D" ? "formD" : "formL");

const IconBall = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a10 10 0 0 1 6.5 2.5L12 12 5.5 4.5A10 10 0 0 1 12 2z"/>
    <path d="M2.5 8.5L12 12l3.5 9.5"/><path d="M21.5 8.5L12 12 8.5 21.5"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconClock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconTarget = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

function SectionHeader({ title, action, link }) {
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {action && <Link to={link} className={styles.seeAll}>{action} →</Link>}
    </div>
  );
}

function StubPage({ title }) {
  return (
    <div className={styles.stubPage}>
      <div className={styles.stubIconWrap}><IconShield /></div>
      <h2 className={styles.stubTitle}>{title}</h2>
      <p className={styles.stubSub}>This section is coming soon.</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Season 2025 / 26</span>
          <h1 className={styles.heroTitle}>Local Football<br />League</h1>
          <p className={styles.heroSub}>Live scores, fixtures, standings &amp; player stats — all in one place.</p>
          <div className={styles.heroBtns}>
            <Link to="/fixtures" className={styles.heroBtn}>View Fixtures</Link>
            <Link to="/table" className={styles.heroBtnOutline}>League Table</Link>
          </div>
        </div>
      </section>

    

      <section className={styles.section}>
        <SectionHeader title="Upcoming Fixtures" action="All Fixtures" onAction={() => {}} link="/fixtures" />
        <div className={styles.fixtureScroll}>
          {UPCOMING.map((m) => (
            <div key={m.id} className={styles.fixtureCard}>
              <div className={styles.fixtureTop}>
                <span className={styles.fixtureDateBadge}><IconCalendar /> {m.date}</span>
                <span className={styles.fixtureTime}><IconClock /> {m.time}</span>
              </div>
              <div className={styles.fixtureMatchup}>
                <div className={styles.fixtureTeamBlock}>
                  <div className={styles.teamAvatar}>{initials(m.home)}</div>
                  <span className={styles.fixtureTeam}>{m.home}</span>
                </div>
                <div className={styles.fixtureVsBadge}>VS</div>
                <div className={styles.fixtureTeamBlock}>
                  <div className={styles.teamAvatar}>{initials(m.away)}</div>
                  <span className={styles.fixtureTeam}>{m.away}</span>
                </div>
              </div>
              <div className={styles.fixtureVenue}><IconPin /> {m.venue}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeader title="Latest Results" action="All Results" onAction={() => {}} link="/results" />
        <div className={styles.resultsGrid}>
          {RESULTS.map((r) => (
            <div key={r.id} className={styles.resultCard}>
              <div className={styles.resultTeamBlock}>
                <div className={styles.teamAvatarSm}>{initials(r.home)}</div>
                <span className={styles.resultTeam}>{r.home}</span>
              </div>
              <div className={styles.resultScoreBlock}>
                <span className={styles.resultScore}>{r.hs} – {r.as}</span>
                <span className={styles.resultFt}>FT</span>
              </div>
              <div className={`${styles.resultTeamBlock} ${styles.resultTeamRight}`}>
                <span className={styles.resultTeam}>{r.away}</span>
                <div className={styles.teamAvatarSm}>{initials(r.away)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeader title="League Standings" action="Full Table" onAction={() => {}} link="/table" />
        <div className={styles.homeTableCard}>
          <div className={styles.homeTableHead}>
            <span className={styles.homeTableHeadTitle}>League Standings</span>
            <span className={styles.homeTableHeadSub}>Matchday 12 of 20</span>
          </div>
          <div className={styles.homeTableScroll}>
            <table className={styles.homeTable}>
              <thead>
                <tr>
                  <th className={styles.htPos}>#</th>
                  <th className={styles.htClub}>Club</th>
                  <th>MP</th><th>W</th><th>D</th><th>L</th>
                  <th>GF</th><th>GA</th><th>GD</th><th>Pts</th>
                  <th className={styles.htForm}>Form</th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map((t) => (
                  <tr key={t.pos}>
                    <td className={styles.htPosCell}>{t.pos}</td>
                    <td className={styles.htTeamCell}>
                      <div className={styles.htTeamRow}>
                        <div className={styles.htCrest}>{initials(t.team)}</div>
                        <span className={styles.htTeamName}>{t.team}</span>
                      </div>
                    </td>
                    <td>{t.mp}</td>
                    <td className={styles.htW}>{t.w}</td>
                    <td>{t.d}</td>
                    <td className={styles.htL}>{t.l}</td>
                    <td>{t.gf}</td><td>{t.ga}</td>
                    <td className={Number(t.gd) >= 0 ? styles.htGdPos : styles.htGdNeg}>{t.gd}</td>
                    <td className={styles.htPts}>{t.pts}</td>
                    <td>
                      <div className={styles.htFormRow}>
                        {t.form.map((r, i) => (
                          <span key={i} className={`${styles.htFormDot} ${styles[formColor(r)]}`}>{r}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeader title="Top Performers" />
        <div className={styles.performersLayout}>
          {[
            { title: "Top Scorers", icon: <IconBall />, data: TOP_SCORERS, key: "goals", label: "Goals" },
            { title: "Top Assists", icon: <IconTarget />, data: TOP_ASSISTS, key: "assists", label: "Assists" },
          ].map(({ title, icon, data, key, label }) => (
            <div key={title} className={styles.performerTable}>
              <div className={styles.performerTableHeader}>
                <span className={styles.performerTableIconWrap}>{icon}</span>
                <span className={styles.performerTableTitle}>{title}</span>
              </div>
              <div className={styles.performerTableScroll}>
              <table className={styles.statTable}>
                <thead>
                  <tr><th>#</th><th>Player</th><th>Club</th><th>Apps</th><th>{label}</th></tr>
                </thead>
                <tbody>
                  {data.map((p) => (
                    <tr key={p.rank} className={p.rank === 1 ? styles.statTopRow : ""}>
                      <td className={styles.statRank}>
                        {p.rank === 1 ? <span className={styles.rankGold}>1</span> : p.rank}
                      </td>
                      <td className={styles.statPlayer}>
                        <div className={styles.statPlayerInner}>
                          <div className={styles.statAvatar}>{initials(p.name)}</div>
                          <span>{p.name}</span>
                        </div>
                      </td>
                      <td className={styles.statClub}>{p.team}</td>
                      <td>{p.apps}</td>
                      <td className={styles.statValue}>{p[key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: "3rem" }} />
      <BottomNav />
    </div>
  );
}



