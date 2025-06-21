import axios from "axios";

const api = axios.create({
  baseURL: import.meta.VITE_API_KEY,
});

//! fetching api data

export const getData = async (fromCurrency, toCurrency, amount) => {
  try {
    const res = await api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);

    return res;
  } catch (error) {
    console.log(error.message);
  }
};
