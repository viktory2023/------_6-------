import client from "./client";

const getToken = () => localStorage.getItem('token');

export const getProfile = async () => {
  const res =
      await client
          .get('/auth/profile', {headers: {Authorization: 'Bearer ' + getToken()}})
          .catch((e) => console.log(e))
  return res?.data || null
}