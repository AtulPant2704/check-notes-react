import axios from "axios";

const restoreNoteFromTrashService = (token, note) => {
  return axios.post(
    `/api/trash/restore/${note._id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export { restoreNoteFromTrashService };
