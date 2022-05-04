import { useState } from "react";
import { useLabels } from "../../context";
import "./AddLabelModal.css";

const AddLabelModal = ({ showLabelModal, setShowLabelModal }) => {
  const { labelsDispatch } = useLabels();
  const [newLabel, setNewLabel] = useState("");

  const addNewLabel = () => {
    labelsDispatch({ type: "ADD_NEW_LABEL", payload: newLabel });
    setShowLabelModal(false);
  };

  return (
    <>
      {showLabelModal ? (
        <section
          className="label-backdrop"
          onClick={() => setShowLabelModal(false)}
        ></section>
      ) : null}
      <section className="label-modal">
        <h3>Add new Label</h3>
        <input
          type="text"
          placeholder="Enter Label Name"
          className="input-label"
          autoFocus
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
        />
        <button
          className="btn btn-solid-primary btn-save-label"
          onClick={addNewLabel}
        >
          Submit
        </button>
      </section>
    </>
  );
};

export { AddLabelModal };
