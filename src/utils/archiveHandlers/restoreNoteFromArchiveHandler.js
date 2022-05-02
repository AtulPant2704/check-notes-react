import { toast } from "react-toastify";
import { restoreNoteFromArchiveService } from "../../services";

const restoreNoteFromArchiveHandler = async (
  token,
  note,
  archiveDispatch,
  notesDispatch
) => {
  try {
    const response = await restoreNoteFromArchiveService(token, note);
    if (response.status === 200) {
      archiveDispatch({
        type: "REMOVE_NOTE_FROM_ARCHIVE",
        payload: response.data.archives,
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

export { restoreNoteFromArchiveHandler };
