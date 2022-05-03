import axios from "axios";

const deleteNoteService = (token, note) => {
  return axios.delete(`/api/notes/${note._id}`, {
    headers: { authorization: token },
  });
};

export { deleteNoteService };
