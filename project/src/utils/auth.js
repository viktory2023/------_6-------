import client from "./client";

export const isAuthed = async () => {
  const token = localStorage.getItem('token');
  // console.log(token)
  if (token === null) {
    return false;
  }
  const res =
      await client
          .get('/auth/profile', {headers: {Authorization: 'Bearer ' + token}})
          .catch((e) => console.log(e))
  return res?.status === 200 || false;
}