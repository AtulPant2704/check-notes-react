import axios from "axios";

const editNoteService = (token, note) => {
  return axios.post(
    `/api/notes/${note._id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { editNoteService };
