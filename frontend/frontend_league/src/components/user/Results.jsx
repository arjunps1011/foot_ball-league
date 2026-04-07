import { useState } from "react";
import styles from "../../css/Results.module.css";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

const RESULTS = [
  {
    id: 1,
    teamA: "FC United", teamB: "Blue Thunder",
    scoreA: 3, scoreB: 1,
    date: "Sun 06 Apr 2026", time: "17:00", venue: "Central Park",
    goals: [
      { player: "Arjun Menon",  team: "A", minute: 12 },
      { player: "Nikhil Raj",   team: "A", minute: 34 },
      { player: "Mbin Thomas",  team: "B", minute: 55 },
      { player: "Jijo Mathew",  team: "A", minute: 78 },
    ],
    cards: [
      { player: "Ebin P",       team: "B", type: "yellow", minute: 40 },
      { player: "Dinto Joseph", team: "A", type: "yellow", minute: 62 },
      { player: "Nbin Mathew",  team: "B", type: "red",    minute: 80 },
    ],
    stats: { possessionA: 58, possessionB: 42, shotsA: 14, shotsB: 7, foulsA: 9, foulsB: 13 },
    lineupA: [
      { name: "Arjun Menon",   pos: "GK", captain: true },
      { name: "Rahul Nair",    pos: "DF" },
      { name: "Sanjay Pillai", pos: "DF" },
      { name: "Vivek Menon",   pos: "DF" },
      { name: "Rohan Varma",   pos: "DF" },
      { name: "Kiran Das",     pos: "MF" },
      { name: "Amal Suresh",   pos: "MF" },
      { name: "Dinto Joseph",  pos: "MF" },
      { name: "Nikhil Raj",    pos: "FW" },
      { name: "Arun Thomas",   pos: "FW" },
      { name: "Jijo Mathew",   pos: "FW" },
    ],
    lineupB: [
      { name: "Dbin K",        pos: "GK", captain: true },
      { name: "Ebin P",        pos: "DF" },
      { name: "Fbin R",        pos: "DF" },
      { name: "Gbin Jose",     pos: "DF" },
      { name: "Hbin Raj",      pos: "MF" },
      { name: "Ibin Das",      pos: "MF" },
      { name: "Jbin Varma",    pos: "MF" },
      { name: "Kbin Nair",     pos: "MF" },
      { name: "Lbin Suresh",   pos: "MF" },
      { name: "Mbin Thomas",   pos: "FW" },
      { name: "Nbin Mathew",   pos: "FW" },
    ],
    subsA: ["Jithin K", "Lithin P", "Mithin R"],
    subsB: ["Obin K", "Pbin P", "Qbin R"],
  },
  {
    id: 2,
    teamA: "Red Eagles", teamB: "Green Rovers",
    scoreA: 2, scoreB: 2,
    date: "Sat 05 Apr 2026", time: "15:00", venue: "Eagle Arena",
    goals: [
      { player: "Sabin K",      team: "A", minute: 8  },
      { player: "Eebin Suresh", team: "B", minute: 22 },
      { player: "Bbin Thomas",  team: "A", minute: 67 },
      { player: "Ffbin Thomas", team: "B", minute: 89 },
    ],
    cards: [
      { player: "Xbin P",     team: "B", type: "yellow", minute: 35 },
      { player: "Wabin Raj",  team: "A", type: "yellow", minute: 71 },
    ],
    stats: { possessionA: 45, possessionB: 55, shotsA: 10, shotsB: 12, foulsA: 11, foulsB: 8 },
    lineupA: [
      { name: "Sabin K",      pos: "GK", captain: true },
      { name: "Tabin P",      pos: "DF" },
      { name: "Uabin R",      pos: "DF" },
      { name: "Vabin Jose",   pos: "DF" },
      { name: "Wabin Raj",    pos: "DF" },
      { name: "Xabin Das",    pos: "MF" },
      { name: "Yabin Varma",  pos: "MF" },
      { name: "Zabin Nair",   pos: "MF" },
      { name: "Abin Suresh",  pos: "MF" },
      { name: "Bbin Thomas",  pos: "FW" },
      { name: "Cbin Mathew",  pos: "FW" },
    ],
    lineupB: [
      { name: "Wbin K",        pos: "GK", captain: true },
      { name: "Xbin P",        pos: "DF" },
      { name: "Ybin R",        pos: "DF" },
      { name: "Zbin Jose",     pos: "DF" },
      { name: "Aabin Raj",     pos: "DF" },
      { name: "Bbbin Das",     pos: "MF" },
      { name: "Ccbin Varma",   pos: "MF" },
      { name: "Ddbin Nair",    pos: "MF" },
      { name: "Eebin Suresh",  pos: "FW" },
      { name: "Ffbin Thomas",  pos: "FW" },
      { name: "Ggbin Mathew",  pos: "FW" },
    ],
    subsA: ["Obin K", "Pbin P", "Qbin R"],
    subsB: ["Hhbin K", "Iibin P", "Jjbin R"],
  },
  {
    id: 3,
    teamA: "City Wolves", teamB: "Red Eagles",
    scoreA: 4, scoreB: 0,
    date: "Fri 04 Apr 2026", time: "19:30", venue: "Wolf Stadium",
    goals: [
      { player: "Hibin Thomas", team: "A", minute: 5  },
      { player: "Iben Mathew",  team: "A", minute: 29 },
      { player: "Gibin Suresh", team: "A", minute: 51 },
      { player: "Hibin Thomas", team: "A", minute: 88 },
    ],
    cards: [
      { player: "Uabin R",    team: "B", type: "yellow", minute: 44 },
      { player: "Vabin Jose", team: "B", type: "yellow", minute: 60 },
      { player: "Vabin Jose", team: "B", type: "red",    minute: 60 },
    ],
    stats: { possessionA: 63, possessionB: 37, shotsA: 18, shotsB: 4, foulsA: 7, foulsB: 15 },
    lineupA: [
      { name: "Sreejith K",   pos: "GK", captain: true },
      { name: "Midhun P",     pos: "DF" },
      { name: "Akhil R",      pos: "DF" },
      { name: "Bibin Jose",   pos: "DF" },
      { name: "Cibin Raj",    pos: "DF" },
      { name: "Dibin Das",    pos: "MF" },
      { name: "Ebin Varma",   pos: "MF" },
      { name: "Fibin Nair",   pos: "MF" },
      { name: "Gibin Suresh", pos: "MF" },
      { name: "Hibin Thomas", pos: "FW" },
      { name: "Iben Mathew",  pos: "FW" },
    ],
    lineupB: [
      { name: "Sabin K",      pos: "GK", captain: true },
      { name: "Tabin P",      pos: "DF" },
      { name: "Uabin R",      pos: "DF" },
      { name: "Vabin Jose",   pos: "DF" },
      { name: "Wabin Raj",    pos: "DF" },
      { name: "Xabin Das",    pos: "MF" },
      { name: "Yabin Varma",  pos: "MF" },
      { name: "Zabin Nair",   pos: "MF" },
      { name: "Abin Suresh",  pos: "FW" },
      { name: "Bbin Thomas",  pos: "FW" },
      { name: "Cbin Mathew",  pos: "FW" },
    ],
    subsA: ["Oithin Raj", "Pithin Das", "Qithin Varma"],
    subsB: ["Obin K", "Pbin P", "Qbin R"],
  },
];

const FILTERS = ["All", "Today", "This Week", "By Date"];

const initials = (name) => name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

const posColor = (pos) => {
  if (pos === "GK") return styles.posGK;
  if (pos === "DF") return styles.posDF;
  if (pos === "MF") return styles.posMF;
  return styles.posFW;
};

const IconBack = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconShirt = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
  </svg>
);

export default function ResultsPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState("timeline");

  return (
    <>
      <Navbar />

      {selected ? (
        <div className={styles.detailsPage}>
          <button className={styles.backBtn} onClick={() => { setSelected(null); setTab("timeline"); }}>
            <IconBack /> Back to Results
          </button>

          {/* Header */}
          <div className={styles.detailsHeader}>
            <span className={styles.detailsStatusBadge}>Full Time</span>
            <div className={styles.detailsMatchup}>
              <div className={styles.detailsTeam}>
                <div className={styles.detailsAvatar}>{initials(selected.teamA)}</div>
                <span className={styles.detailsTeamName}>{selected.teamA}</span>
              </div>
              <div className={styles.detailsScoreBlock}>
                <span className={styles.detailsScore}>{selected.scoreA} — {selected.scoreB}</span>
                <span className={styles.detailsFt}>Full Time</span>
              </div>
              <div className={styles.detailsTeam}>
                <div className={styles.detailsAvatar}>{initials(selected.teamB)}</div>
                <span className={styles.detailsTeamName}>{selected.teamB}</span>
              </div>
            </div>
            <div className={styles.detailsMeta}>
              <span><IconCalendar /> {selected.date} · {selected.time}</span>
              <span><IconPin /> {selected.venue}</span>
            </div>
          </div>

          {/* Tabs */}
          <div className={styles.detailsTabs}>
            {["timeline", "stats", "lineup", "subs"].map((t) => (
              <button
                key={t}
                className={`${styles.detailsTab} ${tab === t ? styles.detailsTabActive : ""}`}
                onClick={() => setTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Timeline */}
          {tab === "timeline" && (
            <div className={styles.timelineSection}>
              <div className={styles.timelineHeader}>Match Events</div>
              <div className={styles.timelineList}>
                {[...selected.goals.map(g => ({ ...g, kind: "goal" })),
                  ...selected.cards.map(c => ({ ...c, kind: "card" }))]
                  .sort((a, b) => a.minute - b.minute)
                  .map((e, i) => (
                    <div key={i} className={styles.timelineItem}>
                      <div className={styles.timelineLeft}>
                        {e.team === "A" && (
                          <>
                            <span className={styles.timelinePlayerName}>{e.player}</span>
                            <span className={styles.timelineEventIcon}>
                              {e.kind === "goal" ? "⚽" : e.type === "yellow" ? "🟨" : "🟥"}
                            </span>
                          </>
                        )}
                      </div>
                      <div className={styles.timelineMinute}>{e.minute}'</div>
                      <div className={styles.timelineRight}>
                        {e.team === "B" && (
                          <>
                            <span className={styles.timelineEventIcon}>
                              {e.kind === "goal" ? "⚽" : e.type === "yellow" ? "🟨" : "🟥"}
                            </span>
                            <span className={styles.timelinePlayerName}>{e.player}</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Stats */}
          {tab === "stats" && (
            <div className={styles.statsSection}>
              <div className={styles.statsHeader}>Match Statistics</div>
              <div className={styles.statsList}>
                {[
                  { label: "Possession", a: selected.stats.possessionA, b: selected.stats.possessionB, pct: true },
                  { label: "Shots",      a: selected.stats.shotsA,      b: selected.stats.shotsB },
                  { label: "Fouls",      a: selected.stats.foulsA,      b: selected.stats.foulsB },
                ].map((s) => {
                  const total = s.a + s.b;
                  const pctA = s.pct ? s.a : Math.round((s.a / total) * 100);
                  const pctB = s.pct ? s.b : Math.round((s.b / total) * 100);
                  return (
                    <div key={s.label} className={styles.statRow}>
                      <div className={styles.statRowLabels}>
                        <span>{s.a}{s.pct ? "%" : ""}</span>
                        <span className={styles.statRowLabel}>{s.label}</span>
                        <span>{s.b}{s.pct ? "%" : ""}</span>
                      </div>
                      <div className={styles.statBarTrack}>
                        <div className={styles.statBarA} style={{ width: `${pctA}%` }} />
                        <div className={styles.statBarB} style={{ width: `${pctB}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Lineup */}
          {tab === "lineup" && (
            <div className={styles.lineupWrapper}>
              {[
                { team: selected.teamA, lineup: selected.lineupA },
                { team: selected.teamB, lineup: selected.lineupB },
              ].map(({ team, lineup }) => (
                <div key={team} className={styles.lineupTeam}>
                  <div className={styles.lineupTeamHeader}>
                    <div className={styles.lineupAvatar}>{initials(team)}</div>
                    <div className={styles.lineupTeamName}>{team}</div>
                  </div>
                  <div className={styles.lineupList}>
                    {lineup.map((p, i) => (
                      <div key={i} className={styles.playerRow}>
                        <span className={styles.playerNum}>{i + 1}</span>
                        <span className={`${styles.posBadge} ${posColor(p.pos)}`}>{p.pos}</span>
                        <span className={styles.playerName}>
                          {p.name}
                          {p.captain && <span className={styles.captainBadge}>C</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Subs */}
          {tab === "subs" && (
            <div className={styles.subsWrapper}>
              {[
                { team: selected.teamA, subs: selected.subsA },
                { team: selected.teamB, subs: selected.subsB },
              ].map(({ team, subs }) => (
                <div key={team} className={styles.subsTeam}>
                  <div className={styles.subsTeamHeader}>
                    <IconShirt /> {team} — Substitutes
                  </div>
                  <div className={styles.subsList}>
                    {subs.map((s, i) => (
                      <div key={i} className={styles.subRow}>
                        <span className={styles.subNum}>{i + 1}</span>
                        <span className={styles.subName}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.page}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Match Results</h1>
            <p className={styles.pageSubtitle}>Completed matches and final scores</p>
          </div>

          <div className={styles.filterTabs}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`${styles.filterTab} ${filter === f ? styles.filterTabActive : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className={styles.cardsGrid}>
            {RESULTS.map((r) => (
              <div key={r.id} className={styles.resultCard} onClick={() => setSelected(r)}>
                <div className={styles.cardTop}>
                  <span className={styles.ftBadge}>Full Time</span>
                  <span className={styles.cardVenue}><IconPin /> {r.venue}</span>
                </div>

                <div className={styles.scoreRow}>
                  <div className={styles.cardTeam}>
                    <div className={styles.cardAvatar}>{initials(r.teamA)}</div>
                    <span className={styles.cardTeamName}>{r.teamA}</span>
                  </div>
                  <div className={styles.scoreBlock}>
                    <span className={styles.score}>{r.scoreA} — {r.scoreB}</span>
                    <span className={styles.scoreDash}>Full Time</span>
                  </div>
                  <div className={styles.cardTeam}>
                    <div className={styles.cardAvatar}>{initials(r.teamB)}</div>
                    <span className={styles.cardTeamName}>{r.teamB}</span>
                  </div>
                </div>

                <div className={styles.scorersRow}>
                  <div className={styles.scorersSide}>
                    {r.goals.filter(g => g.team === "A").map((g, i) => (
                      <span key={i} className={styles.scorerItem}>⚽ {g.player} {g.minute}'</span>
                    ))}
                  </div>
                  <div className={`${styles.scorersSide} ${styles.scorersSideRight}`}>
                    {r.goals.filter(g => g.team === "B").map((g, i) => (
                      <span key={i} className={`${styles.scorerItem} ${styles.scorerItemRight}`}>{g.player} {g.minute}' ⚽</span>
                    ))}
                  </div>
                </div>

                {r.cards.length > 0 && (
                  <div className={styles.cardsInfoRow}>
                    {r.cards.map((c, i) => (
                      <span key={i} className={styles.cardInfoItem}>
                        {c.type === "yellow" ? "🟨" : "🟥"} {c.player} {c.minute}'
                      </span>
                    ))}
                  </div>
                )}

                <div className={styles.cardMeta}>
                  <span><IconCalendar /> {r.date} · {r.time}</span>
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
