import axios from "axios";

const getArchiveService = (token) => {
  return axios.get("/api/archives", { headers: { authorization: token } });
};

export { getArchiveService };
