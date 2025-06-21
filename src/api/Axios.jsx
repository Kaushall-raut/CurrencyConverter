import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
});


//! fetching api data

export const getData = async (from, to, amount) => {
  try {
    const res = await api.get(`/pair/${from}/${to}/${amount}`);
 
    return res.data.conversion_result;
  } catch (error) {
    console.log(error.message);
  }
};
