import { toast } from "react-toastify";
import { getTrashService } from "../../services";

const getTrashHandler = async (token, trashDispatch) => {
  try {
    const response = await getTrashService(token);
    if (response.status === 200) {
      trashDispatch({ type: "GET_TRASH", payload: response.data.trash });
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { getTrashHandler };
