import { toast } from "react-toastify";
import { deleteNoteFromArchiveService } from "../../services";

const deleteNoteFromArchiveHandler = async (
  token,
  note,
  archiveDispatch,
  trashDispatch
) => {
  try {
    const response = await deleteNoteFromArchiveService(token, note);
    if (response.status === 200) {
      archiveDispatch({
        type: "REMOVE_NOTE_FROM_TRASH",
        payload: response.data.archive,
      });
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
  }
};

export { deleteNoteFromArchiveHandler };
