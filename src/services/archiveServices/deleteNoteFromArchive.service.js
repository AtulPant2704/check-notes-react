import axios from "axios";

const deleteNoteFromArchiveService = (token, note) => {
  return axios.delete(`/api/archives/delete/${note._id}`, {
    headers: { authorization: token },
  });
};

export { deleteNoteFromArchiveService };
