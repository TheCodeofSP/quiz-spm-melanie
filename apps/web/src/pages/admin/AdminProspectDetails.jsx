import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  addProspectNote,
  getProspectById,
  updateProspectStatus,
} from "../../api/admin.api";

import AdminPageHeader from "../../components/admin/AdminPageHeader.jsx";
import AdminPanel from "../../components/admin/AdminPanel.jsx";
import AdminStateMessage from "../../components/admin/AdminStateMessage.jsx";

import { adminContent } from "../../content/admin.content.js";

export default function AdminProspectDetails() {
  const { prospectId } = useParams();

  const [prospect, setProspect] = useState(null);
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSavingStatus, setIsSavingStatus] = useState(false);
  const [isSavingNote, setIsSavingNote] = useState(false);
  const [error, setError] = useState("");

  const { prospectDetails, statusOptions, labels, common } = adminContent;

  const fetchProspect = async () => {
    try {
      setError("");
      const data = await getProspectById(prospectId);
      setProspect(data);
    } catch (err) {
      console.error(err);
      setError(prospectDetails.loadError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProspect();
  }, [prospectId]);

  const handleStatusChange = async (event) => {
    const nextStatus = event.target.value;

    try {
      setIsSavingStatus(true);
      await updateProspectStatus(prospectId, nextStatus);

      setProspect((current) => ({
        ...current,
        status: nextStatus,
      }));
    } catch (err) {
      console.error(err);
      setError(prospectDetails.statusUpdateError);
    } finally {
      setIsSavingStatus(false);
    }
  };

  const handleAddNote = async (event) => {
    event.preventDefault();

    if (!note.trim()) return;

    try {
      setIsSavingNote(true);
      await addProspectNote(prospectId, note.trim());
      setNote("");
      await fetchProspect();
    } catch (err) {
      console.error(err);
      setError(prospectDetails.noteAddError);
    } finally {
      setIsSavingNote(false);
    }
  };

  const getHormonalContraceptionLabel = () => {
    if (prospect?.participantInfo?.hasHormonalContraception === true) {
      return common.yes;
    }

    if (prospect?.participantInfo?.hasHormonalContraception === false) {
      return common.no;
    }

    return common.unknown;
  };

  if (isLoading) {
    return <AdminStateMessage>{prospectDetails.loading}</AdminStateMessage>;
  }

  if (error) {
    return <AdminStateMessage type="error">{error}</AdminStateMessage>;
  }

  if (!prospect) {
    return <AdminStateMessage>{prospectDetails.notFound}</AdminStateMessage>;
  }

  return (
    <section className="admin-prospect-details">
      <AdminPageHeader title={prospect.firstName} description={prospect.email} />

      <div className="admin-prospect-grid">
        <AdminPanel title={prospectDetails.sections.general}>
          <ul className="admin-details-list">
            <li>
              <strong>{prospectDetails.labels.profile}</strong>{" "}
              {prospect.profiles?.join(" + ") || common.emptyValue}
            </li>

            <li>
              <strong>{prospectDetails.labels.quizDate}</strong>{" "}
              {prospect.quizDate
                ? new Date(prospect.quizDate).toLocaleString("fr-FR")
                : common.emptyValue}
            </li>

            <li>
              <strong>{prospectDetails.labels.age}</strong>{" "}
              {prospect.participantInfo?.age ?? common.unknown}
            </li>

            <li>
              <strong>{prospectDetails.labels.hormonalContraception}</strong>{" "}
              {getHormonalContraceptionLabel()}
            </li>

            <li>
              <strong>{prospectDetails.labels.hormonalContraceptionName}</strong>{" "}
              {prospect.participantInfo?.hormonalContraceptionName ||
                prospectDetails.empty.contraceptionName}
            </li>
          </ul>
        </AdminPanel>

        <AdminPanel title={prospectDetails.sections.followUp}>
          <label className="form-label" htmlFor="prospect-status">
            {prospectDetails.labels.status}
          </label>

          <select
            id="prospect-status"
            className="form-select"
            value={prospect.status || "NEW_LEAD"}
            onChange={handleStatusChange}
            disabled={isSavingStatus}
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </AdminPanel>
      </div>

      <AdminPanel title={prospectDetails.sections.answers}>
        {prospect.answers?.length ? (
          <ul className="admin-answer-list">
            {prospect.answers.map((answer) => (
              <li key={`${answer.questionId}-${answer.answerKey}`}>
                <strong>{answer.questionId}</strong> — {answer.answerLabel}
              </li>
            ))}
          </ul>
        ) : (
          <AdminStateMessage>{prospectDetails.empty.answers}</AdminStateMessage>
        )}
      </AdminPanel>

      <AdminPanel title={prospectDetails.sections.history}>
        {prospect.history?.length ? (
          <ul className="admin-history-list">
            {prospect.history.map((item) => (
              <li key={item._id}>
                <strong>
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleString("fr-FR")
                    : common.emptyValue}
                </strong>
                <span>{item.action}</span>
              </li>
            ))}
          </ul>
        ) : (
          <AdminStateMessage>{prospectDetails.empty.history}</AdminStateMessage>
        )}
      </AdminPanel>

      <AdminPanel title={prospectDetails.sections.notes}>
        <form className="admin-note-form" onSubmit={handleAddNote}>
          <textarea
            className="form-textarea"
            rows="4"
            placeholder={prospectDetails.noteForm.placeholder}
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />

          <button type="submit" className="btn-primary" disabled={isSavingNote}>
            {isSavingNote
              ? prospectDetails.noteForm.submitting
              : prospectDetails.noteForm.submit}
          </button>
        </form>

        {prospect.notes?.length ? (
          <ul className="admin-history-list">
            {prospect.notes.map((item) => (
              <li key={item._id}>
                <strong>
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleString("fr-FR")
                    : common.emptyValue}
                </strong>
                <span>{item.content}</span>
              </li>
            ))}
          </ul>
        ) : (
          <AdminStateMessage>{prospectDetails.empty.notes}</AdminStateMessage>
        )}
      </AdminPanel>
    </section>
  );
}