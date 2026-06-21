import AdminPanel from "./AdminPanel.jsx";
import AdminStatCard from "./AdminStatCard.jsx";

export default function AdminStatsSection({ title, data = {}, labels = {} }) {
  return (
    <AdminPanel title={title}>
      <div className="admin-statistics__grid">
        {Object.entries(data).map(([key, value]) => (
          <AdminStatCard key={key} label={labels[key] || key} value={value} />
        ))}
      </div>
    </AdminPanel>
  );
}