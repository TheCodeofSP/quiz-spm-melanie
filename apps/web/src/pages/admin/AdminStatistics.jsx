import { useEffect, useState } from "react";

import { getAdminStats } from "../../api/admin.api";

import AdminPageHeader from "../../components/admin/AdminPageHeader.jsx";
import AdminStateMessage from "../../components/admin/AdminStateMessage.jsx";
import AdminStatsSection from "../../components/admin/AdminStatsSection.jsx";

import { adminContent } from "../../content/admin.content.js";

export default function AdminStatistics() {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { statistics, labels } = adminContent;

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getAdminStats();
        setStats(data);
      } catch (err) {
        console.error(err);
        setError(statistics.error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, [statistics.error]);

  if (isLoading) {
    return <AdminStateMessage>{statistics.loading}</AdminStateMessage>;
  }

  if (error) {
    return <AdminStateMessage type="error">{error}</AdminStateMessage>;
  }

  if (!stats) {
    return <AdminStateMessage>{statistics.empty}</AdminStateMessage>;
  }

  return (
    <section className="admin-statistics">
      <AdminPageHeader
        title={statistics.title}
        description={statistics.description}
      />

      <AdminStatsSection
        title={statistics.sections.profiles}
        data={stats.profiles}
        labels={labels.profiles}
      />

      <AdminStatsSection
        title={statistics.sections.statuses}
        data={stats.statuses}
        labels={labels.statuses}
      />

      <AdminStatsSection
        title={statistics.sections.contraception}
        data={stats.contraception}
        labels={labels.boolean}
      />

      <AdminStatsSection
        title={statistics.sections.ageGroups}
        data={stats.ageGroups}
        labels={labels.ageGroups}
      />

      <AdminStatsSection
        title={statistics.sections.contactPermission}
        data={stats.contactPermission}
        labels={labels.boolean}
      />
    </section>
  );
}
