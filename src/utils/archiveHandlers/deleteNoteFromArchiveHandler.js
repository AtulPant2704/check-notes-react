import { toast } from "react-toastify";
import { deleteNoteFromArchiveService } from "../../services";

const deleteNoteFromArchiveHandler = async (
  token,
  note,
  archiveDispatch,
  trashDispatch,
  setDeleteBtnDisable
) => {
  try {
    setDeleteBtnDisable(true);
    const response = await deleteNoteFromArchiveService(token, note);
    if (response.status === 200) {
      trashDispatch({
        type: "ADD_NOTE_TO_TRASH",
        payload: response.data.trash,
      });
      archiveDispatch({
        type: "REMOVE_NOTE_FROM_ARCHIVE",
        payload: response.data.archives,
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

export { deleteNoteFromArchiveHandler };
