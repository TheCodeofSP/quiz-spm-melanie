export default function AdminStatCard({ label, value }) {
  return (
    <article className="admin-stat-card">
      <span>{label}</span>
      <strong>{value ?? 0}</strong>
    </article>
  );
}