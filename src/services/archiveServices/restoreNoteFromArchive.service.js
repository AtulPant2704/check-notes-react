import axios from "axios";

const restoreNoteFromArchiveService = (token, note) => {
  return axios.post(
    `/api/archives/restore/${note._id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export { restoreNoteFromArchiveService };
