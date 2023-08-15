import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getPlans = async (planDuration, selectedLanguage) => {
  try {
    // get all plans
    const endpoint =
      BASE_URL + `plans?durationType=${planDuration}&lang=${selectedLanguage}`;

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

const verify = async (data) => {
  try {
    // get all plans
    const endpoint = BASE_URL + `clients/verifyUser`;

    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const sendEmail = async (data) => {
  try {
    // get all plans
    const endpoint = BASE_URL + `clients/sendEmail`;

    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const updateClient = async (data) => {
  try {
    const endpoint = BASE_URL + `clients/update`;

    const response = await axios.patch(endpoint, data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export { getPlans, createClient, getCMS, updateClient, verify, sendEmail };
