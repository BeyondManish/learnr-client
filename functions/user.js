import axios from 'axios';

export const deleteUser = async (username) => {
  console.log(username);
  await axios.delete(`/user/${username}`).then((res) => res.data);
};