import axios from "axios";

export async function getAllStates() {
  try {
    const response = await axios
      .get("http://localhost:3003/api/get-states");
      

  return response.data.states;
  } catch (error) {
    console.error(error);
    return null;
  }
}
