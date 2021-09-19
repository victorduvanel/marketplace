import axios from "axios";

export const createProduct = async (token, data) =>
  await axios.post(`${process.env.REACT_APP_API}/create-product`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const allProducts = async () =>
  await axios.get(`${process.env.REACT_APP_API}/products`);
