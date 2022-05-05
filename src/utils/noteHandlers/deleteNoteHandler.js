import { toast } from "react-toastify";
import { deleteNoteService } from "../../services";

const deleteNoteHandler = async (
  token,
  note,
  notesDispatch,
  trashDispatch,
  setDeleteBtnDisable
) => {
  try {
    setDeleteBtnDisable(true);
    const response = await deleteNoteService(token, note);
    if (response.status === 200) {
      notesDispatch({ type: "REMOVE_NOTE", payload: response.data.notes });
      trashDispatch({
        type: "ADD_NOTE_TO_TRASH",
        payload: response.data.trash,
      });
      toast.success("Note added to Trash");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  } finally {
    setDeleteBtnDisable(false);
  }
};

export { deleteNoteHandler };
