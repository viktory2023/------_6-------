import client from "./client";

const getToken = () => localStorage.getItem('token');

export const getProfile = async () => {
  const res =
      await client
          .get('/auth/profile', {headers: {Authorization: 'Bearer ' + getToken()}})
          .catch((e) => console.log(e));
  return res?.data || null
}

export const getSentDocs = async () => {
  const res = await client
                  .get(
                      '/document/get/all/sender',
                      {headers: {Authorization: 'Bearer ' + getToken()}})
                  .catch((e) => console.log(e));
  return res?.data || null
}

export const getReceivedDocs = async () => {
  const res = await client
                  .get(
                      '/document/get/all/recipient',
                      {headers: {Authorization: 'Bearer ' + getToken()}})
                  .catch((e) => console.log(e));
  return res?.data || null
}

