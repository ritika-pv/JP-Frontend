import axios from "axios";

export const GetAllStates = async () => {
  try {
    const response = await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states');
    const states = response.data.states;
    return states.map(state => state.state_name);
  } catch (error) {
    console.error(error);
    return null;
  }
};
