import client from "./client";

export const isAuthed = async () => {
  const token = localStorage.getItem('token');
  // console.log(token)
  if (token === null) {
    localStorage.setItem('isAdmin', false)
    return false;
  }
  const res =
      await client
          .get('/auth/profile', {headers: {Authorization: 'Bearer ' + token}})
          .catch((e) => console.log(e));
  // console.log(res)
  // console.log(res?.data.role === 'ADMIN')
  if (res?.data.role === "ADMIN") {
    localStorage.setItem("isAdmin", true)
  } else {
    localStorage.setItem("isAdmin", false)
  }
  return res?.status === 200 || false;
}