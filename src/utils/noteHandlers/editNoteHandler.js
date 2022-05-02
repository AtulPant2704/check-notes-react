import { toast } from "react-toastify";
import { editNoteService } from "../../services";

const editNoteHandler = async (token, note, notesDispatch) => {
  try {
    const response = await editNoteService(token, note);
    if (response.status === 201) {
      console.log(response);
      notesDispatch({ type: "EDIT_NOTE", payload: response.data.notes });
      toast.success("Note edited successfully");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { editNoteHandler };
