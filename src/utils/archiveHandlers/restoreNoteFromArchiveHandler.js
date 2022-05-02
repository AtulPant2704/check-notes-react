import { toast } from "react-toastify";
import { restoreNoteFromArchiveService } from "../../services";

const restoreNoteFromArchiveHandler = async (token, note, archiveDispatch) => {
  try {
    const response = await restoreNoteFromArchiveService(token, note);
    if (response.status === 201) {
      archiveDispatch({
        type: "REMOVE_NOTE_FROM_ARCHIVE",
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
