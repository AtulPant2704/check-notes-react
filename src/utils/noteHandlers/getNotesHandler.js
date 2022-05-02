import { getNotesService } from "../../services";

const getNotesHandler = async (token, notesDispatch) => {
  try {
    const response = await getNotesService(token);
    if (response.status === 200) {
      notesDispatch({ type: "GET_NOTES", payload: response.data.notes });
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { getNotesHandler };
