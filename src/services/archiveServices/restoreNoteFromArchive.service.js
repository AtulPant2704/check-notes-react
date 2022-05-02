import axios from "axios";

const restoreNoteFromArchiveService = (token, note) => {
  return axios.post(
    `/api/notes/archives/${note._id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { restoreNoteFromArchiveService };
