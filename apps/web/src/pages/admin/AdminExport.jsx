import { getProspectsExportUrl } from "../../api/admin.api";

import AdminPageHeader from "../../components/admin/AdminPageHeader.jsx";
import AdminPanel from "../../components/admin/AdminPanel.jsx";

import { adminContent } from "../../content/admin.content.js";

export default function AdminExport() {
  const exportUrl = getProspectsExportUrl();
  const { export: exportContent } = adminContent;

  return (
    <section className="admin-export">
      <AdminPageHeader
        title={exportContent.title}
        description={exportContent.description}
      />

      <AdminPanel title={exportContent.panelTitle}>
        <p>{exportContent.panelDescription}</p>

        <a href={exportUrl} className="btn-primary">
          {exportContent.button}
        </a>
      </AdminPanel>
    </section>
  );
}