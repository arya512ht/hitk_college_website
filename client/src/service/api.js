// api.js
import axios from "axios";

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/add`, data);
    return response.data; // Return only the data from the response
  } catch (error) {
    console.log("Error While Create Api", error);
    throw error; // Rethrow the error so it can be caught in the calling function
  }
};

export const getUsersdata = async (data) => {
  try {
    const response = await axios.post(`${URL}/getUser`, data);
    return response; // Return the entire response object
  } catch (error) {
    console.log('Error While Fetching Data', error);
    throw error; // Rethrow the error so it can be caught in the calling function
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log('Error While Fetching Data', error);
  }
};

export const checkUsernameAvailability = async (data) => {
  try {
    const response = await axios.post(`${URL}/checkUsername`, data);
    return response.data;
  } catch (error) {
    console.log('Error While Checking Username Availability', error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
      const response = await axios.delete(`${URL}/deleteUser/${userId}`);
      return response.data;
  } catch (error) {
      console.log("Error while deleting user", error);
      throw error;
  }
};

export const editUser = async (userId, data) => {
  try {
    const response = await axios.put(`${URL}/editUser/${userId}`, data);
    return response.data;
  } catch (error) {
    console.log("Error while editing user", error);
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${URL}/getUser/${userId}`);
    return response.data; // Assuming the API returns the user details as response.data
  } catch (error) {
    console.log("Error while fetching user details", error);
    throw error;
  }
};