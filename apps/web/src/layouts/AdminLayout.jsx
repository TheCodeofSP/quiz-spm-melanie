import { NavLink, Outlet } from "react-router-dom";

import { adminContent } from "../content/admin.content.js";

export default function AdminLayout() {
  const { layout } = adminContent;

  return (
    <main className="admin-layout">
      <aside className="admin-layout__sidebar">
        <div className="admin-layout__brand">
          <span>{layout.brand.eyebrow}</span>
          <strong>{layout.brand.title}</strong>
        </div>

        <nav className="admin-layout__nav">
          {layout.nav.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <section className="admin-layout__content">
        <Outlet />
      </section>
    </main>
  );
}
