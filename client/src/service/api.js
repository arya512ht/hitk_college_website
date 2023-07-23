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
}


export const getUsersdata = async (data) => {
  try {
    const response = await axios.post(`${URL}/getUser`, data);
    return response; // Return the entire response object
  } catch (error) {
    console.log('Error While Fetching Data', error);
    throw error; // Rethrow the error so it can be caught in the calling function
  }
}


export const getUsers = async() =>{
  try{
      return await axios.get(`${URL}/all`);
  }catch(error){
      console.log('Error While Fetching Data', error);
  }
}