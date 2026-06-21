import apiClient from "./apiClient.js";

export const getAdminStats = async () => {
  const response = await apiClient.get("/admin/stats");
  return response.data;
};

export const getProspects = async (filters = {}) => {
  const response = await apiClient.get("/admin/prospects", {
    params: filters,
  });

  return response.data;
};

export const getProspectById = async (id) => {
  const response = await apiClient.get(`/admin/prospects/${id}`);
  return response.data;
};

export const updateProspectStatus = async (id, status) => {
  const response = await apiClient.patch(`/admin/prospects/${id}/status`, {
    status,
  });

  return response.data;
};

export const addProspectNote = async (id, content) => {
  const response = await apiClient.post(`/admin/prospects/${id}/notes`, {
    content,
  });

  return response.data;
};

export const deleteProspect = async (id) => {
  const response = await apiClient.delete(`/admin/prospects/${id}`);
  return response.data;
};

export const getProspectsExportUrl = (filters = {}) => {
  const searchParams = new URLSearchParams(filters);

  return `${apiClient.defaults.baseURL}/admin/prospects/export?${searchParams.toString()}`;
};