import "./AddLabelModal.css";

const AddLabelModal = ({ showLabelModal, setShowLabelModal }) => {
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
        />
        <button
          className="btn btn-solid-primary btn-save-label"
          onClick={() => setShowLabelModal(false)}
        >
          Submit
        </button>
      </section>
    </>
  );
};

export { AddLabelModal };
