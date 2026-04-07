import { useState } from "react";
import styles from "../../css/Fixtures.module.css";

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
const IconShirt = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
  </svg>
);

export default function MatchDetails({ match, onBack }) {
  const [tab, setTab] = useState("lineup");

  return (
    <div className={styles.detailsPage}>
      <button className={styles.backBtn} onClick={onBack}>
        <IconBack /> Back to Fixtures
      </button>

      <div className={styles.detailsHeader}>
        <span className={`${styles.statusBadge} ${styles[`status_${match.status}`]}`}>
          {match.status === "live" && <span className={styles.liveDot} />}
          {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
        </span>
        <div className={styles.detailsMatchup}>
          <div className={styles.detailsTeam}>
            <div className={styles.detailsAvatar}>{initials(match.teamA)}</div>
            <span className={styles.detailsTeamName}>{match.teamA}</span>
          </div>
          <div className={styles.detailsVS}>VS</div>
          <div className={styles.detailsTeam}>
            <div className={styles.detailsAvatar}>{initials(match.teamB)}</div>
            <span className={styles.detailsTeamName}>{match.teamB}</span>
          </div>
        </div>
        <div className={styles.detailsMeta}>
          <span><IconCalendar /> {match.date}</span>
          <span><IconClock /> {match.time}</span>
          <span><IconPin /> {match.venue}</span>
        </div>
      </div>

      <div className={styles.detailsTabs}>
        <button className={`${styles.detailsTab} ${tab === "lineup" ? styles.detailsTabActive : ""}`} onClick={() => setTab("lineup")}>
          Starting XI
        </button>
        <button className={`${styles.detailsTab} ${tab === "subs" ? styles.detailsTabActive : ""}`} onClick={() => setTab("subs")}>
          Substitutes
        </button>
      </div>

      {tab === "lineup" ? (
        <div className={styles.lineupWrapper}>
          {[
            { team: match.teamA, lineup: match.lineupA, formation: match.formationA },
            { team: match.teamB, lineup: match.lineupB, formation: match.formationB },
          ].map(({ team, lineup, formation }) => (
            <div key={team} className={styles.lineupTeam}>
              <div className={styles.lineupTeamHeader}>
                <div className={styles.lineupAvatar}>{initials(team)}</div>
                <div>
                  <div className={styles.lineupTeamName}>{team}</div>
                  <div className={styles.lineupFormation}>{formation}</div>
                </div>
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
      ) : (
        <div className={styles.subsWrapper}>
          {[
            { team: match.teamA, subs: match.subsA },
            { team: match.teamB, subs: match.subsB },
          ].map(({ team, subs }) => (
            <div key={team} className={styles.subsTeam}>
              <div className={styles.subsTeamHeader}>
                <IconShirt />
                <span>{team} — Substitutes</span>
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
  );
}
