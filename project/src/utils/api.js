import client from "./client";
import fileDownload from 'js-file-download'

const getToken = () => localStorage.getItem('token');

export const getProfile =
    async () => {
  const res =
      await client
          .get('/auth/profile', {headers: {Authorization: 'Bearer ' + getToken()}})
          .catch((e) => console.log(e));
  return res?.data || null
}

export const getSentDocs =
    async () => {
  const res = await client
                  .get(
                      '/document/get/all/sender',
                      {headers: {Authorization: 'Bearer ' + getToken()}})
                  .catch((e) => console.log(e));
  return res?.data || null
}

export const getReceivedDocs =
    async () => {
  const res = await client
                  .get(
                      '/document/get/all/recipient',
                      {headers: {Authorization: 'Bearer ' + getToken()}})
                  .catch((e) => console.log(e));
  return res?.data || null
}

export const downloadDoc =
    async ({path, filename}) => {
  await client
      .get(
          '/document/get/' + path,
          {headers: {Authorization: 'Bearer ' + getToken()}})
      .then(({data}) => fileDownload(data, filename))
      .catch(e => console.log(e))
}


export const getUsers =
    async (name) => {
  const res = await client
                  .get(
                      '/users/find',
                      {
                        headers: {Authorization: 'Bearer ' + getToken()},
                        params: {name: name}
                      }
                    )
                  .catch((e) => console.log(e));
  return res?.data || null
}

export const sendDoc = async ({file, type, description, recipient}) => {
  const form = new FormData();
  console.log(typeof(file));
  // form.append('file', file)
  const data = {
    file: file,
    type: type,
    description: description,
    recipient: recipient
  };
  console.log(data);
  await client
      .post('/document/send', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + getToken()
        }
      })
      .then(() => alert('Документ отправлен'))
      .catch((e) => {
        console.log(e);
        alert('Документ не отправлен, проверьте данные');
      })
}