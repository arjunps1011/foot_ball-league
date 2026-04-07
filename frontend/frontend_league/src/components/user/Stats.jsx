import { useState } from "react";
import styles from "../../css/Stats.module.css";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

const PLAYERS = [
  { name: "Arjun Menon",   team: "FC United",    goals: 14, assists: 3, yellow: 1, red: 0, apps: 12 },
  { name: "Hibin Thomas",  team: "City Wolves",  goals: 9,  assists: 4, yellow: 3, red: 0, apps: 11 },
  { name: "Eebin Suresh",  team: "Green Rovers", goals: 7,  assists: 2, yellow: 2, red: 0, apps: 12 },
  { name: "Bbin Thomas",   team: "Red Eagles",   goals: 6,  assists: 1, yellow: 4, red: 1, apps: 10 },
  { name: "Mbin Thomas",   team: "Blue Thunder", goals: 4,  assists: 2, yellow: 2, red: 0, apps: 11 },
  { name: "Nikhil Raj",    team: "FC United",    goals: 3,  assists: 5, yellow: 1, red: 0, apps: 12 },
  { name: "Rahul Nair",    team: "City Wolves",  goals: 2,  assists: 9, yellow: 0, red: 0, apps: 12 },
  { name: "Vivek Menon",   team: "FC United",    goals: 1,  assists: 7, yellow: 2, red: 0, apps: 11 },
  { name: "Dinto Joseph",  team: "Red Eagles",   goals: 1,  assists: 5, yellow: 3, red: 1, apps: 12 },
  { name: "Nikhil Raj",    team: "Green Rovers", goals: 0,  assists: 4, yellow: 1, red: 0, apps: 10 },
  { name: "Vabin Jose",    team: "Red Eagles",   goals: 0,  assists: 1, yellow: 3, red: 2, apps: 9  },
  { name: "Arun Thomas",   team: "Blue Thunder", goals: 0,  assists: 2, yellow: 2, red: 0, apps: 9  },
  { name: "Xabin Das",     team: "Red Eagles",   goals: 0,  assists: 0, yellow: 4, red: 0, apps: 11 },
  { name: "Hbin Raj",      team: "Blue Thunder", goals: 0,  assists: 1, yellow: 3, red: 1, apps: 10 },
  { name: "Kiran Das",     team: "City Wolves",  goals: 2,  assists: 3, yellow: 1, red: 0, apps: 11 },
];

const IconBall = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a10 10 0 0 1 6.5 2.5L12 12 5.5 4.5A10 10 0 0 1 12 2z"/>
    <path d="M2.5 8.5L12 12l3.5 9.5"/><path d="M21.5 8.5L12 12 8.5 21.5"/>
  </svg>
);
const IconTarget = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconCardY = () => (
  <svg width="10" height="13" viewBox="0 0 10 13"><rect width="10" height="13" rx="1.5" fill="#EAB308"/></svg>
);
const IconCardR = () => (
  <svg width="10" height="13" viewBox="0 0 10 13"><rect width="10" height="13" rx="1.5" fill="#dc2626"/></svg>
);

const TABS = [
  { key: "goals",   label: "Top Scorers",  icon: <IconBall />,   stat: "goals",   unit: "Goals"   },
  { key: "assists", label: "Top Assists",  icon: <IconTarget />, stat: "assists", unit: "Assists" },
  { key: "yellow",  label: "Yellow Cards", icon: <IconCardY />,  stat: "yellow",  unit: "Yellow"  },
  { key: "red",     label: "Red Cards",    icon: <IconCardR />,  stat: "red",     unit: "Red"     },
];

const initials = (name) => name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

export default function StatsPage() {
  const [activeTab, setActiveTab]   = useState("goals");
  const [search, setSearch]         = useState("");
  const [teamFilter, setTeamFilter] = useState("All");

  const tab   = TABS.find((t) => t.key === activeTab);
  const teams = ["All", ...Array.from(new Set(PLAYERS.map((p) => p.team)))];

  const filtered = PLAYERS
    .filter((p) => teamFilter === "All" || p.team === teamFilter)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b[tab.stat] - a[tab.stat])
    .filter((p) => p[tab.stat] > 0);

  return (
    <>
      <Navbar />
      <div className={styles.page}>

        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Statistics</h1>
          <p className={styles.pageSubtitle}>Season 2025 / 26</p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`${styles.tab} ${activeTab === t.key ? styles.tabActive : ""}`}
              onClick={() => { setActiveTab(t.key); setSearch(""); setTeamFilter("All"); }}
            >
              <span className={styles.tabIcon}>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              className={styles.searchInput}
              placeholder="Search player..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={styles.teamPills}>
            {teams.map((t) => (
              <button
                key={t}
                className={`${styles.pill} ${teamFilter === t ? styles.pillActive : ""}`}
                onClick={() => setTeamFilter(t)}
              >{t}</button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className={styles.tableCard}>
          <div className={styles.tableHead}>
            <span className={styles.tableHeadTitle}>{tab.label}</span>
            <span className={styles.tableHeadSub}>Season 2025 / 26</span>
          </div>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thPos}>#</th>
                  <th className={styles.thPlayer}>Player</th>
                  <th className={styles.thTeam}>Club</th>
                  <th>Apps</th>
                  <th>{tab.unit}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={5} className={styles.empty}>No players found.</td></tr>
                ) : filtered.map((p, i) => (
                  <tr key={i}>
                    <td className={styles.posCell}>{i + 1}</td>
                    <td className={styles.playerCell}>
                      <div className={styles.playerRow}>
                        <div className={styles.playerCrest}>{initials(p.name)}</div>
                        <span className={styles.playerName}>{p.name}</span>
                      </div>
                    </td>
                    <td className={styles.teamCell}>{p.team}</td>
                    <td>{p.apps}</td>
                    <td className={styles.statCell}>{p[tab.stat]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <BottomNav />
    </>
  );
}
