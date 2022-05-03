import axios from "axios";

const getTrashService = (token) => {
  return axios.get("/api/trash", { headers: { authorization: token } });
};

export { getTrashService };
