import { useEffect, useState } from "react";

import { getAdminStats } from "../../api/admin.api";

import AdminPageHeader from "../../components/admin/AdminPageHeader.jsx";
import AdminStateMessage from "../../components/admin/AdminStateMessage.jsx";
import AdminStatCard from "../../components/admin/AdminStatCard.jsx";

import { adminContent } from "../../content/admin.content.js";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { dashboard } = adminContent;

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getAdminStats();
        setStats(data);
      } catch (err) {
        console.error(err);
        setError(dashboard.error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, [dashboard.error]);

  if (isLoading) {
    return <AdminStateMessage>{dashboard.loading}</AdminStateMessage>;
  }

  if (error) {
    return <AdminStateMessage type="error">{error}</AdminStateMessage>;
  }

  if (!stats) {
    return <AdminStateMessage>{dashboard.empty}</AdminStateMessage>;
  }

  return (
    <section className="admin-dashboard">
      <AdminPageHeader
        title={dashboard.title}
        description={dashboard.description}
      />

      <div className="admin-stats-grid">
        <AdminStatCard
          label={dashboard.cards.totalProspects}
          value={stats.totalProspects}
        />

        <AdminStatCard
          label={dashboard.cards.newLeads}
          value={stats.newLeads}
        />

        <AdminStatCard
          label={dashboard.cards.contactedLeads}
          value={stats.contactedLeads}
        />

        <AdminStatCard
          label={dashboard.cards.bookedCalls}
          value={stats.bookedCalls}
        />
      </div>

      <section className="admin-dashboard__section">
        <h2>{dashboard.profileSectionTitle}</h2>

        <div className="admin-stats-grid">
          {(stats.topProfiles || []).map((profile) => (
            <AdminStatCard
              key={profile.profile}
              label={
                adminContent.labels.profiles[profile.profile] || profile.profile
              }
              value={profile.count}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
