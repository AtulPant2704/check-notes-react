import { toast } from "react-toastify";
import { addNoteToArchiveService } from "../../services";

const addNoteToArchiveHandler = async (token, note, archiveDispatch) => {
  try {
    const response = await addNoteToArchiveService(token, note);
    if (response.status === 201) {
      archiveDispatch({
        type: "ADD_NOTE_TO_ARCHIVE",
        payload: response.data.notes,
      });
      toast.success("Note added to Archive");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { addNoteToArchiveHandler };
