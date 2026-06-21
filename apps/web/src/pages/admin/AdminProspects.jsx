import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getProspects } from "../../api/admin.api";

import AdminPageHeader from "../../components/admin/AdminPageHeader.jsx";
import AdminStateMessage from "../../components/admin/AdminStateMessage.jsx";

import { adminContent } from "../../content/admin.content.js";

export default function AdminProspects() {
  const [prospects, setProspects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { prospects: prospectsContent, labels, common } = adminContent;

  useEffect(() => {
    const fetchProspects = async () => {
      try {
        const data = await getProspects();
        setProspects(Array.isArray(data) ? data : data.prospects || []);
      } catch (err) {
        console.error(err);
        setError(prospectsContent.error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProspects();
  }, [prospectsContent.error]);

  if (isLoading) {
    return <AdminStateMessage>{prospectsContent.loading}</AdminStateMessage>;
  }

  if (error) {
    return <AdminStateMessage type="error">{error}</AdminStateMessage>;
  }

  return (
    <section className="admin-prospects">
      <AdminPageHeader
        title={prospectsContent.title}
        description={prospectsContent.description}
      />

      {prospects.length === 0 ? (
        <AdminStateMessage>{prospectsContent.empty}</AdminStateMessage>
      ) : (
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>{prospectsContent.tableHeaders.firstName}</th>
                <th>{prospectsContent.tableHeaders.email}</th>
                <th>{prospectsContent.tableHeaders.profile}</th>
                <th>{prospectsContent.tableHeaders.status}</th>
                <th>{prospectsContent.tableHeaders.date}</th>
                <th>{prospectsContent.tableHeaders.actions}</th>
              </tr>
            </thead>

            <tbody>
              {prospects.map((prospect) => (
                <tr key={prospect._id}>
                  <td>{prospect.firstName}</td>
                  <td>{prospect.email}</td>
                  <td>{prospect.profiles?.join(" + ") || common.emptyValue}</td>
                  <td>
                    {labels.statuses[prospect.status] ||
                      prospect.status ||
                      common.emptyValue}
                  </td>
                  <td>
                    {prospect.quizDate
                      ? new Date(prospect.quizDate).toLocaleDateString("fr-FR")
                      : common.emptyValue}
                  </td>
                  <td>
                    <Link
                      to={`/admin/participantes/${prospect._id}`}
                      className="admin-table__link"
                    >
                      {prospectsContent.detailLink}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
