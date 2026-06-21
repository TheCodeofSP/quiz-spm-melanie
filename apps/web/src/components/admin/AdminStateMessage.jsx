export default function AdminStateMessage({ type = "default", children }) {
  const className = type === "error" ? "form-error" : "";

  return <p className={className}>{children}</p>;
}