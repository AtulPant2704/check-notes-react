import axios from "axios";

const deleteNoteFromTrashService = (token, note) => {
  return axios.delete(`/api/trash/delete/${note._id}`, {
    headers: { authorization: token },
  });
};

export { deleteNoteFromTrashService };
