import { toast } from "react-toastify";
import { restoreNoteFromTrashService } from "../../services";

const restoreNoteFromTrashHandler = async (
  token,
  note,
  trashDispatch,
  notesDispatch
) => {
  try {
    const response = await restoreNoteFromTrashService(token, note);
    if (response.status === 200) {
      trashDispatch({
        type: "REMOVE_NOTE_FROM_TRASH",
        payload: response.data.trash,
      });
      notesDispatch({
        type: "ADD_NOTE",
        payload: response.data.notes,
      });
      toast.success("Note successfully restored");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { restoreNoteFromTrashHandler };
