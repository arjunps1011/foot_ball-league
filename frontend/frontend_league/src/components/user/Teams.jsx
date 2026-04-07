import { useState } from "react";
import styles from "../../css/Teams.module.css";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

const TEAMS = [
  {
    name: "FC United",
    ground: "Central Park",
    coach: "Rajan Mathew",
    founded: "2010",
    rank: 1,
    color: "#16a34a",
    stats: { mp: 12, w: 9, d: 2, l: 1, gf: 31, ga: 13, pts: 29 },
    form: ["W","W","W","D","W"],
    players: [
      { num: 1,  name: "Arjun Menon",   pos: "GK", captain: true  },
      { num: 2,  name: "Rahul Nair",    pos: "DF" },
      { num: 3,  name: "Sanjay Pillai", pos: "DF" },
      { num: 4,  name: "Vivek Menon",   pos: "DF" },
      { num: 5,  name: "Rohan Varma",   pos: "DF" },
      { num: 6,  name: "Kiran Das",     pos: "MF" },
      { num: 7,  name: "Amal Suresh",   pos: "MF" },
      { num: 8,  name: "Dinto Joseph",  pos: "MF" },
      { num: 9,  name: "Nikhil Raj",    pos: "FW" },
      { num: 10, name: "Arun Thomas",   pos: "FW" },
      { num: 11, name: "Jijo Mathew",   pos: "FW" },
      { num: 12, name: "Jithin K",      pos: "GK" },
      { num: 13, name: "Lithin P",      pos: "DF" },
      { num: 14, name: "Mithin R",      pos: "MF" },
      { num: 15, name: "Nithin Jose",   pos: "FW" },
    ],
    recent: [
      { opponent: "Blue Thunder",  score: "3 - 1", result: "W", date: "06 Apr" },
      { opponent: "Green Rovers",  score: "3 - 1", result: "W", date: "13 Apr" },
      { opponent: "Red Eagles",    score: "1 - 1", result: "D", date: "05 Mar" },
    ],
    topScorer:  { name: "Arjun Menon",  goals: 14 },
    topAssist:  { name: "Vivek Menon",  assists: 7 },
  },
  {
    name: "City Wolves",
    ground: "Wolf Stadium",
    coach: "Sreejith Kumar",
    founded: "2012",
    rank: 2,
    color: "#7c3aed",
    stats: { mp: 12, w: 8, d: 1, l: 3, gf: 26, ga: 15, pts: 25 },
    form: ["W","L","W","W","D"],
    players: [
      { num: 1,  name: "Sreejith K",    pos: "GK", captain: true },
      { num: 2,  name: "Midhun P",      pos: "DF" },
      { num: 3,  name: "Akhil R",       pos: "DF" },
      { num: 4,  name: "Bibin Jose",    pos: "DF" },
      { num: 5,  name: "Cibin Raj",     pos: "DF" },
      { num: 6,  name: "Dibin Das",     pos: "MF" },
      { num: 7,  name: "Ebin Varma",    pos: "MF" },
      { num: 8,  name: "Fibin Nair",    pos: "MF" },
      { num: 9,  name: "Gibin Suresh",  pos: "MF" },
      { num: 10, name: "Hibin Thomas",  pos: "FW" },
      { num: 11, name: "Iben Mathew",   pos: "FW" },
      { num: 12, name: "Rahul Nair",    pos: "MF" },
      { num: 13, name: "Oithin Raj",    pos: "DF" },
    ],
    recent: [
      { opponent: "Red Eagles",    score: "4 - 0", result: "W", date: "04 Apr" },
      { opponent: "FC United",     score: "1 - 3", result: "L", date: "10 Apr" },
      { opponent: "Blue Thunder",  score: "2 - 0", result: "W", date: "17 Apr" },
    ],
    topScorer: { name: "Hibin Thomas", goals: 9  },
    topAssist: { name: "Rahul Nair",   assists: 9 },
  },
  {
    name: "Red Eagles",
    ground: "Eagle Arena",
    coach: "Biju Thomas",
    founded: "2011",
    rank: 3,
    color: "#dc2626",
    stats: { mp: 12, w: 5, d: 3, l: 4, gf: 18, ga: 16, pts: 18 },
    form: ["D","W","L","W","D"],
    players: [
      { num: 1,  name: "Sabin K",       pos: "GK", captain: true },
      { num: 2,  name: "Tabin P",       pos: "DF" },
      { num: 3,  name: "Uabin R",       pos: "DF" },
      { num: 4,  name: "Vabin Jose",    pos: "DF" },
      { num: 5,  name: "Wabin Raj",     pos: "DF" },
      { num: 6,  name: "Xabin Das",     pos: "MF" },
      { num: 7,  name: "Yabin Varma",   pos: "MF" },
      { num: 8,  name: "Zabin Nair",    pos: "MF" },
      { num: 9,  name: "Abin Suresh",   pos: "MF" },
      { num: 10, name: "Bbin Thomas",   pos: "FW" },
      { num: 11, name: "Cbin Mathew",   pos: "FW" },
      { num: 12, name: "Dinto Joseph",  pos: "MF" },
    ],
    recent: [
      { opponent: "Green Rovers",  score: "2 - 2", result: "D", date: "05 Apr" },
      { opponent: "City Wolves",   score: "0 - 4", result: "L", date: "04 Apr" },
      { opponent: "FC United",     score: "1 - 1", result: "D", date: "05 Mar" },
    ],
    topScorer: { name: "Bbin Thomas",  goals: 6  },
    topAssist: { name: "Dinto Joseph", assists: 5 },
  },
  {
    name: "Green Rovers",
    ground: "Rovers Ground",
    coach: "Anoop Krishnan",
    founded: "2013",
    rank: 4,
    color: "#059669",
    stats: { mp: 12, w: 4, d: 4, l: 4, gf: 14, ga: 17, pts: 16 },
    form: ["D","D","L","W","L"],
    players: [
      { num: 1,  name: "Wbin K",        pos: "GK", captain: true },
      { num: 2,  name: "Xbin P",        pos: "DF" },
      { num: 3,  name: "Ybin R",        pos: "DF" },
      { num: 4,  name: "Zbin Jose",     pos: "DF" },
      { num: 5,  name: "Aabin Raj",     pos: "DF" },
      { num: 6,  name: "Bbbin Das",     pos: "MF" },
      { num: 7,  name: "Ccbin Varma",   pos: "MF" },
      { num: 8,  name: "Ddbin Nair",    pos: "MF" },
      { num: 9,  name: "Eebin Suresh",  pos: "FW" },
      { num: 10, name: "Ffbin Thomas",  pos: "FW" },
      { num: 11, name: "Ggbin Mathew",  pos: "FW" },
    ],
    recent: [
      { opponent: "Red Eagles",    score: "2 - 2", result: "D", date: "05 Apr" },
      { opponent: "FC United",     score: "1 - 3", result: "L", date: "13 Apr" },
      { opponent: "Blue Thunder",  score: "1 - 0", result: "W", date: "17 Apr" },
    ],
    topScorer: { name: "Eebin Suresh",  goals: 7  },
    topAssist: { name: "Nikhil Raj",    assists: 4 },
  },
  {
    name: "Blue Thunder",
    ground: "Thunder Dome",
    coach: "Manoj Pillai",
    founded: "2014",
    rank: 5,
    color: "#2563eb",
    stats: { mp: 12, w: 2, d: 2, l: 8, gf: 8, ga: 22, pts: 8 },
    form: ["L","L","D","L","L"],
    players: [
      { num: 1,  name: "Dbin K",        pos: "GK", captain: true },
      { num: 2,  name: "Ebin P",        pos: "DF" },
      { num: 3,  name: "Fbin R",        pos: "DF" },
      { num: 4,  name: "Gbin Jose",     pos: "DF" },
      { num: 5,  name: "Hbin Raj",      pos: "MF" },
      { num: 6,  name: "Ibin Das",      pos: "MF" },
      { num: 7,  name: "Jbin Varma",    pos: "MF" },
      { num: 8,  name: "Kbin Nair",     pos: "MF" },
      { num: 9,  name: "Lbin Suresh",   pos: "MF" },
      { num: 10, name: "Mbin Thomas",   pos: "FW" },
      { num: 11, name: "Nbin Mathew",   pos: "FW" },
    ],
    recent: [
      { opponent: "FC United",     score: "1 - 3", result: "L", date: "06 Apr" },
      { opponent: "Red Eagles",    score: "2 - 2", result: "D", date: "11 Apr" },
      { opponent: "Green Rovers",  score: "0 - 1", result: "L", date: "17 Apr" },
    ],
    topScorer: { name: "Mbin Thomas",  goals: 4  },
    topAssist: { name: "Arun Thomas",  assists: 2 },
  },
];

const initials = (name) => name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
const posStyle = (pos) => {
  if (pos === "GK") return styles.posGK;
  if (pos === "DF") return styles.posDF;
  if (pos === "MF") return styles.posMF;
  return styles.posFW;
};
const formStyle = (r) => (r === "W" ? styles.formW : r === "D" ? styles.formD : styles.formL);
const resultStyle = (r) => (r === "W" ? styles.resultW : r === "D" ? styles.resultD : styles.resultL);

const IconBack = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const IconPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconUser = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconBall = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a10 10 0 0 1 6.5 2.5L12 12 5.5 4.5A10 10 0 0 1 12 2z"/>
    <path d="M2.5 8.5L12 12l3.5 9.5"/><path d="M21.5 8.5L12 12 8.5 21.5"/>
  </svg>
);

export default function TeamsPage() {
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState("squad");

  return (
    <>
      <Navbar />

      {selected ? (
        <div className={styles.page}>
          {/* Hero Banner */}
          <div className={styles.heroBanner} style={{ "--team-color": selected.color }}>
            <div className={styles.heroBannerBg} />
            <div className={styles.heroBannerContent}>
              <button className={styles.backBtn} onClick={() => setSelected(null)}>
                <IconBack /> All Teams
              </button>
              <div className={styles.heroMain}>
                <div className={styles.heroCrest} style={{ borderColor: selected.color }}>
                  {initials(selected.name)}
                </div>
                <div className={styles.heroInfo}>
                  <div className={styles.heroRankBadge}>#{selected.rank} in League</div>
                  <h1 className={styles.heroTeamName}>{selected.name}</h1>
                  <div className={styles.heroMeta}>
                    <span><IconUser /> {selected.coach}</span>
                    <span><IconCalendar /> Est. {selected.founded}</span>
                  </div>
                  <div className={styles.heroForm}>
                    <span className={styles.heroFormLabel}>Form</span>
                    {selected.form.map((r, i) => (
                      <span key={i} className={`${styles.formDot} ${formStyle(r)}`}>{r}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            {["squad", "performers"].map((t) => (
              <button
                key={t}
                className={`${styles.tab} ${tab === t ? styles.tabActive : ""}`}
                style={tab === t ? { "--tab-color": selected.color } : {}}
                onClick={() => setTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Squad Tab */}
          {tab === "squad" && (
            <div className={styles.squadSection}>
              {["GK", "DF", "MF", "FW"].map((pos) => {
                const group = selected.players.filter((p) => p.pos === pos);
                if (!group.length) return null;
                const posLabels = { GK: "Goalkeepers", DF: "Defenders", MF: "Midfielders", FW: "Forwards" };
                return (
                  <div key={pos} className={styles.posGroup}>
                    <div className={styles.posGroupHeader}>
                      <span className={`${styles.posGroupBadge} ${posStyle(pos)}`}>{pos}</span>
                      <span className={styles.posGroupLabel}>{posLabels[pos]}</span>
                      <span className={styles.posGroupCount}>{group.length} players</span>
                    </div>
                    <div className={styles.playerCards}>
                      {group.map((p) => (
                        <div key={p.num} className={styles.playerCard}>
                          <div className={styles.playerCardNum} style={{ color: selected.color }}>#{p.num}</div>
                          <div className={styles.playerCardAvatar} style={{ borderColor: selected.color }}>
                            {initials(p.name)}
                          </div>
                          <div className={styles.playerCardName}>
                            {p.name}
                            {p.captain && <span className={styles.captainBadge}>C</span>}
                          </div>
                          <span className={`${styles.posBadge} ${posStyle(p.pos)}`}>{p.pos}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Performers Tab */}
          {tab === "performers" && (
            <div className={styles.performersSection}>
              {[
                { type: "Top Scorer",  icon: <IconBall />,  name: selected.topScorer.name,  value: `${selected.topScorer.goals} Goals`,   color: "#16a34a" },
                { type: "Top Assists", icon: <IconStar />,  name: selected.topAssist.name,  value: `${selected.topAssist.assists} Assists`, color: "#f59e0b" },
              ].map((p) => (
                <div key={p.type} className={styles.performerCard} style={{ "--p-color": p.color }}>
                  <div className={styles.performerCardTop}>
                    <span className={styles.performerIcon} style={{ color: p.color }}>{p.icon}</span>
                    <span className={styles.performerType}>{p.type}</span>
                  </div>
                  <div className={styles.performerAvatar} style={{ borderColor: p.color }}>
                    {initials(p.name)}
                  </div>
                  <div className={styles.performerName}>{p.name}</div>
                  <div className={styles.performerTeam}>{selected.name}</div>
                  <div className={styles.performerValue} style={{ background: `${p.color}18`, color: p.color }}>{p.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.page}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Teams</h1>
            <p className={styles.pageSubtitle}>All {TEAMS.length} clubs in Season 2025 / 26</p>
          </div>

          <div className={styles.teamsList}>
            {TEAMS.map((t) => (
              <div key={t.name} className={styles.teamCard} onClick={() => { setSelected(t); setTab("squad"); }}>
                <div className={styles.teamCardHeader}>
                  <div className={styles.teamCardCrest} style={{ background: `${t.color}22`, border: `2px solid ${t.color}44`, color: t.color }}>
                    {initials(t.name)}
                  </div>
                  <div className={styles.teamCardHeaderInfo}>
                    <span className={styles.teamCardRank} style={{ color: t.color }}>#{t.rank}</span>
                    <span className={styles.teamCardName}>{t.name}</span>
                  </div>
                </div>
                <div className={styles.teamCardDivider} />
                <div className={styles.teamCardMeta}>
                  <div className={styles.teamCardMetaItem}>
                    <span className={styles.teamCardMetaLabel}>Manager</span>
                    <span className={styles.teamCardMetaVal}>{t.coach}</span>
                  </div>
                  <div className={styles.teamCardMetaItem}>
                    <span className={styles.teamCardMetaLabel}>Squad</span>
                    <span className={styles.teamCardMetaVal}>{t.players.length} Players</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <BottomNav />
    </>
  );
}
