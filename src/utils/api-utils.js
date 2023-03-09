// This API may sometimes be down due to too many requests. 100% not the fault of our group.
const API_URL = "https://week-7-plants.onrender.com";
const API_KEY = "?api_key=123";

export const getPlantsEndpoint = () => API_URL + "/plants" + API_KEY;
export const getPlantByIdEndpoint = (id) => API_URL + "/plants/" + id + API_KEY;