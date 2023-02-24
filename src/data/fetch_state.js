import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getState } from "../reducers/state_slice";

const GetAllStates = async () => {
  const dispatch = useDispatch();
  try {
    const response = await axios.get("http://localhost:3000/api/get-states");

    dispatch(getState({ list: response.data.states }));
    return response.data.states;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export default GetAllStates;
