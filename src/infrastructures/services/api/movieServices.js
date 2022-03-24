import axios from "axios";

const BASE_API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0e7274f05c36db12cbe71d9ab0393d47';

export const getNowPlaying = async (page = 1) => {
  const res = await axios.get(`${BASE_API_URL}/movie/now_playing?page=${page}&api_key=${API_KEY}`);

  if (res.status === 200) return res.data
  return {}
}

export const getPopular = async (page = 1) => {
  const res = await axios.get(`${BASE_API_URL}/movie/popular?page=${page}&api_key=${API_KEY}`);

  if (res.status === 200) return res.data
  return {}
}

export const getTopRated = async (page = 1) => {
  const res = await axios.get(`${BASE_API_URL}/movie/top_rated?page=${page}&api_key=${API_KEY}`);

  if (res.status === 200) return res.data
  return {}
}

export const getUpcoming = async (page = 1) => {
  const res = await axios.get(`${BASE_API_URL}/movie/upcoming?page=${page}&api_key=${API_KEY}`);

  if (res.status === 200) return res.data
  return {}
}

export const getMovieGenres = async () => {
  const res = await axios.get(`${BASE_API_URL}/genre/movie/list?language=US&api_key=${API_KEY}`);

  if (res.status === 200) return res.data
  return {}
}

export const getMovieDetail = async (movieId) => {
  const res = await axios.get(`${BASE_API_URL}/movie/${movieId}?api_key=${API_KEY}`);

  if (res.status === 200) return res.data
  return {}
}

const exportedObject = {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
  getMovieGenres,
  getMovieDetail
};

export default exportedObject;
