import axios from "axios";

const getNotesService = (token) => {
  return axios.get("/api/notes", { headers: { authorization: token } });
};

export { getNotesService };
