import { toast } from "react-toastify";
import {} from "../../services";

const getArchiveHandler = async (token, archiveDispatch) => {
  try {
    const response = await getArchiveService(token);
    if (response.status === 200) {
      archiveDispatch({ type: "GET_ARCHIVE", payload: response.data.archives });
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { getArchiveHandler };
