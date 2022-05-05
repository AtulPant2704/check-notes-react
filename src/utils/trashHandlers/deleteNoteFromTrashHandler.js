import { toast } from "react-toastify";
import { deleteNoteFromTrashService } from "../../services";

const deleteNoteFromTrashHandler = async (
  token,
  note,
  trashDispatch,
  setDeleteBtnDisable
) => {
  try {
    setDeleteBtnDisable(true);
    const response = await deleteNoteFromTrashService(token, note);
    if (response.status === 200) {
      trashDispatch({
        type: "REMOVE_NOTE_FROM_TRASH",
        payload: response.data.trash,
      });
      toast.success("Note successfully removed");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  } finally {
    setDeleteBtnDisable(false);
  }
};

export { deleteNoteFromTrashHandler };
