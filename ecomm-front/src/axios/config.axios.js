import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const signIn = (rowData) => {
  try {
    return axios.post(`${BASE_URL}/auth/signin`, rowData)
      .then(response => {
        return response
      });
  } catch (error) {
    return error.response
  };
};

const signUp = (rowData) => {
  try {
    return axios.post(`${BASE_URL}/auth/signup`, rowData)
      .then(response => {
        return response
      });
  } catch (error) {
    return error.response
  };
};

const getAllProducts = (page) => {
  try {
    return axios.get(`${BASE_URL}/product`, {params: {page: page} })
      .then(response => {
        return response
      });
  } catch (error) {
    return error.response
  };
};

const getProductById = (id) => {
  try {
    return axios.get(`${BASE_URL}/product/${id}`)
      .then(response => {
        return response
      })
  } catch (error) {
    return error.response
  }
}

export {
  signIn,
  signUp,
  getAllProducts,
  getProductById
};