export default function AdminPanel({ title, children }) {
  return (
    <article className="admin-panel">
      {title && <h2>{title}</h2>}
      {children}
    </article>
  );
}