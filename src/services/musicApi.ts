import axios from "axios";
const MUSIC_API_URL = "https://musicapi-w7kn.onrender.com";

const instance = axios.create({
  baseURL: MUSIC_API_URL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return await instance.post(`/user/login`, { username, password });
};

const register = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return await instance.post(`/user/register`, {
    username,
    password,
  });
};

const getAlbums = async (token: string) => {
  return await instance.get(`/albums`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

const getStories = async (token: string) => {
  return await instance.get(`/stories`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export { login, register, getAlbums, getStories };
