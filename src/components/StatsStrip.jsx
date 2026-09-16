import { stats } from "../assets/siteData";

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-item-bar">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
