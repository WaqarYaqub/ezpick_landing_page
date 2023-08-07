import axios from "axios";

const BASE_URL = "https://test.ezpick.co/";

const getPlans = async (planDuration) => {
  try {
    // get all plans
    const endpoint = BASE_URL + `plans?durationType=${planDuration}&lang=en`;

    const response = await axios.get(endpoint);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
const getCMS = async (lang) => {
  try {
    // get all plans
    const endpoint = BASE_URL + `cms?lang=${lang}`;

    const response = await axios.get(endpoint);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const createClient = async (data) => {
  try {
    // get all plans
    const endpoint = BASE_URL + `clients/create`;

    const response = await axios.put(endpoint, data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export { getPlans, createClient, getCMS };
