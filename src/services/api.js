import axios from "axios";

export const getProgramGrid = () =>
  axios.get(`${process.env.REACT_APP_BASE_API_URL}/epg`);

export const getProgramDetails = (id) =>
  axios.get(`${process.env.REACT_APP_BASE_API_URL}/program/${id}`);
