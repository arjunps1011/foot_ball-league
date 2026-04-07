import { useState } from "react";
import styles from "../../css/Fixtures.module.css";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";
import MatchDetails from "./MatchDetails";

const FIXTURES = [
  {
    id: 1,
    teamA: "FC United", teamB: "City Wolves",
    date: "Thu 10 Apr 2026", time: "19:30", venue: "Central Park",
    status: "upcoming",
    formationA: "4-3-3", formationB: "4-4-2",
    lineupA: [
      { name: "Arjun Menon",    pos: "GK", captain: true },
      { name: "Rahul Nair",     pos: "DF" },
      { name: "Sanjay Pillai",  pos: "DF" },
      { name: "Vivek Menon",    pos: "DF" },
      { name: "Rohan Varma",    pos: "DF" },
      { name: "Kiran Das",      pos: "MF" },
      { name: "Amal Suresh",    pos: "MF" },
      { name: "Dinto Joseph",   pos: "MF" },
      { name: "Nikhil Raj",     pos: "FW" },
      { name: "Arun Thomas",    pos: "FW" },
      { name: "Jijo Mathew",    pos: "FW" },
    ],
    lineupB: [
      { name: "Sreejith K",     pos: "GK", captain: true },
      { name: "Midhun P",       pos: "DF" },
      { name: "Akhil R",        pos: "DF" },
      { name: "Bibin Jose",     pos: "DF" },
      { name: "Cibin Raj",      pos: "DF" },
      { name: "Dibin Das",      pos: "MF" },
      { name: "Ebin Varma",     pos: "MF" },
      { name: "Fibin Nair",     pos: "MF" },
      { name: "Gibin Suresh",   pos: "MF" },
      { name: "Hibin Thomas",   pos: "FW" },
      { name: "Iben Mathew",    pos: "FW" },
    ],
    subsA: ["Jithin K", "Lithin P", "Mithin R", "Nithin Jose"],
    subsB: ["Oithin Raj", "Pithin Das", "Qithin Varma", "Rithin Nair"],
  },
  {
    id: 2,
    teamA: "Red Eagles", teamB: "Blue Thunder",
    date: "Fri 11 Apr 2026", time: "17:00", venue: "Eagle Arena",
    status: "live",
    formationA: "4-4-2", formationB: "3-5-2",
    lineupA: [
      { name: "Sabin K",        pos: "GK", captain: true },
      { name: "Tabin P",        pos: "DF" },
      { name: "Uabin R",        pos: "DF" },
      { name: "Vabin Jose",     pos: "DF" },
      { name: "Wabin Raj",      pos: "DF" },
      { name: "Xabin Das",      pos: "MF" },
      { name: "Yabin Varma",    pos: "MF" },
      { name: "Zabin Nair",     pos: "MF" },
      { name: "Abin Suresh",    pos: "MF" },
      { name: "Bbin Thomas",    pos: "FW" },
      { name: "Cbin Mathew",    pos: "FW" },
    ],
    lineupB: [
      { name: "Dbin K",         pos: "GK", captain: true },
      { name: "Ebin P",         pos: "DF" },
      { name: "Fbin R",         pos: "DF" },
      { name: "Gbin Jose",      pos: "DF" },
      { name: "Hbin Raj",       pos: "MF" },
      { name: "Ibin Das",       pos: "MF" },
      { name: "Jbin Varma",     pos: "MF" },
      { name: "Kbin Nair",      pos: "MF" },
      { name: "Lbin Suresh",    pos: "MF" },
      { name: "Mbin Thomas",    pos: "FW" },
      { name: "Nbin Mathew",    pos: "FW" },
    ],
    subsA: ["Obin K", "Pbin P", "Qbin R", "Rbin Jose"],
    subsB: ["Sbin Raj", "Tbin Das", "Ubin Varma", "Vbin Nair"],
  },
  {
    id: 3,
    teamA: "Green Rovers", teamB: "FC United",
    date: "Sun 13 Apr 2026", time: "18:00", venue: "Rovers Ground",
    status: "completed",
    formationA: "4-3-3", formationB: "4-3-3",
    lineupA: [
      { name: "Wbin K",         pos: "GK", captain: true },
      { name: "Xbin P",         pos: "DF" },
      { name: "Ybin R",         pos: "DF" },
      { name: "Zbin Jose",      pos: "DF" },
      { name: "Aabin Raj",      pos: "DF" },
      { name: "Bbbin Das",      pos: "MF" },
      { name: "Ccbin Varma",    pos: "MF" },
      { name: "Ddbin Nair",     pos: "MF" },
      { name: "Eebin Suresh",   pos: "FW" },
      { name: "Ffbin Thomas",   pos: "FW" },
      { name: "Ggbin Mathew",   pos: "FW" },
    ],
    lineupB: [
      { name: "Arjun Menon",    pos: "GK", captain: true },
      { name: "Rahul Nair",     pos: "DF" },
      { name: "Sanjay Pillai",  pos: "DF" },
      { name: "Vivek Menon",    pos: "DF" },
      { name: "Rohan Varma",    pos: "DF" },
      { name: "Kiran Das",      pos: "MF" },
      { name: "Amal Suresh",    pos: "MF" },
      { name: "Dinto Joseph",   pos: "MF" },
      { name: "Nikhil Raj",     pos: "FW" },
      { name: "Arun Thomas",    pos: "FW" },
      { name: "Jijo Mathew",    pos: "FW" },
    ],
    subsA: ["Hhbin K", "Iibin P", "Jjbin R", "Kkbin Jose"],
    subsB: ["Jithin K", "Lithin P", "Mithin R", "Nithin Jose"],
  },
  {
    id: 4,
    teamA: "City Wolves", teamB: "Red Eagles",
    date: "Tue 15 Apr 2026", time: "20:00", venue: "Wolf Stadium",
    status: "upcoming",
    formationA: "4-4-2", formationB: "4-3-3",
    lineupA: [
      { name: "Sreejith K",     pos: "GK", captain: true },
      { name: "Midhun P",       pos: "DF" },
      { name: "Akhil R",        pos: "DF" },
      { name: "Bibin Jose",     pos: "DF" },
      { name: "Cibin Raj",      pos: "DF" },
      { name: "Dibin Das",      pos: "MF" },
      { name: "Ebin Varma",     pos: "MF" },
      { name: "Fibin Nair",     pos: "MF" },
      { name: "Gibin Suresh",   pos: "MF" },
      { name: "Hibin Thomas",   pos: "FW" },
      { name: "Iben Mathew",    pos: "FW" },
    ],
    lineupB: [
      { name: "Sabin K",        pos: "GK", captain: true },
      { name: "Tabin P",        pos: "DF" },
      { name: "Uabin R",        pos: "DF" },
      { name: "Vabin Jose",     pos: "DF" },
      { name: "Wabin Raj",      pos: "DF" },
      { name: "Xabin Das",      pos: "MF" },
      { name: "Yabin Varma",    pos: "MF" },
      { name: "Zabin Nair",     pos: "MF" },
      { name: "Abin Suresh",    pos: "FW" },
      { name: "Bbin Thomas",    pos: "FW" },
      { name: "Cbin Mathew",    pos: "FW" },
    ],
    subsA: ["Oithin Raj", "Pithin Das", "Qithin Varma", "Rithin Nair"],
    subsB: ["Obin K", "Pbin P", "Qbin R", "Rbin Jose"],
  },
  {
    id: 5,
    teamA: "Blue Thunder", teamB: "Green Rovers",
    date: "Thu 17 Apr 2026", time: "17:30", venue: "Thunder Dome",
    status: "upcoming",
    formationA: "3-5-2", formationB: "4-3-3",
    lineupA: [
      { name: "Dbin K",         pos: "GK", captain: true },
      { name: "Ebin P",         pos: "DF" },
      { name: "Fbin R",         pos: "DF" },
      { name: "Gbin Jose",      pos: "DF" },
      { name: "Hbin Raj",       pos: "MF" },
      { name: "Ibin Das",       pos: "MF" },
      { name: "Jbin Varma",     pos: "MF" },
      { name: "Kbin Nair",      pos: "MF" },
      { name: "Lbin Suresh",    pos: "MF" },
      { name: "Mbin Thomas",    pos: "FW" },
      { name: "Nbin Mathew",    pos: "FW" },
    ],
    lineupB: [
      { name: "Wbin K",         pos: "GK", captain: true },
      { name: "Xbin P",         pos: "DF" },
      { name: "Ybin R",         pos: "DF" },
      { name: "Zbin Jose",      pos: "DF" },
      { name: "Aabin Raj",      pos: "DF" },
      { name: "Bbbin Das",      pos: "MF" },
      { name: "Ccbin Varma",    pos: "MF" },
      { name: "Ddbin Nair",     pos: "MF" },
      { name: "Eebin Suresh",   pos: "FW" },
      { name: "Ffbin Thomas",   pos: "FW" },
      { name: "Ggbin Mathew",   pos: "FW" },
    ],
    subsA: ["Sbin Raj", "Tbin Das", "Ubin Varma", "Vbin Nair"],
    subsB: ["Hhbin K", "Iibin P", "Jjbin R", "Kkbin Jose"],
  },
];

const FILTERS = ["all", "upcoming", "live", "completed"];

const initials = (name) =>
  name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

const posColor = (pos) => {
  if (pos === "GK") return styles.posGK;
  if (pos === "DF") return styles.posDF;
  if (pos === "MF") return styles.posMF;
  return styles.posFW;
};

/* ── Icons ── */
const IconCalendar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
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
const IconBack = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const IconShirt = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
  </svg>
);


export default function FixturesPage() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "all" ? FIXTURES : FIXTURES.filter((m) => m.status === filter);

  return (
    <>
      <Navbar />
      {selected ? (
        <MatchDetails match={selected} onBack={() => setSelected(null)} />
      ) : (
        <div className={styles.page}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Fixtures</h1>
            <p className={styles.pageSubtitle}>Upcoming and scheduled matches</p>
          </div>
          <div className={styles.filterTabs}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`${styles.filterTab} ${filter === f ? styles.filterTabActive : ""}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
                {f !== "all" && (
                  <span className={styles.filterCount}>
                    {FIXTURES.filter((m) => m.status === f).length}
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className={styles.cardsGrid}>
            {filtered.length === 0 ? (
              <div className={styles.empty}>No matches found.</div>
            ) : (
              filtered.map((m) => (
                <div key={m.id} className={styles.matchCard} onClick={() => setSelected(m)}>
                  <div className={styles.cardTop}>
                    <span className={`${styles.statusBadge} ${styles[`status_${m.status}`]}`}>
                      {m.status === "live" && <span className={styles.liveDot} />}
                      {m.status.charAt(0).toUpperCase() + m.status.slice(1)}
                    </span>
                    <span className={styles.cardVenue}><IconPin /> {m.venue}</span>
                  </div>
                  <div className={styles.cardMatchup}>
                    <div className={styles.cardTeam}>
                      <div className={styles.cardAvatar}>{initials(m.teamA)}</div>
                      <span className={styles.cardTeamName}>{m.teamA}</span>
                    </div>
                    <div className={styles.cardVS}>VS</div>
                    <div className={styles.cardTeam}>
                      <div className={styles.cardAvatar}>{initials(m.teamB)}</div>
                      <span className={styles.cardTeamName}>{m.teamB}</span>
                    </div>
                  </div>
                  <div className={styles.cardMeta}>
                    <span><IconCalendar /> {m.date}</span>
                    <span><IconClock /> {m.time}</span>
                  </div>
                  <div className={styles.cardCta}>View Details →</div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      <BottomNav />
    </>
  );
}
