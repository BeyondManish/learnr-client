import axios from 'axios';

export const loadYoutubePlaylist = async (playlistId) => {
  const response = await axios.get(`/youtube/playlist/${playlistId}`);
  console.log(response.data);
  return response.data;
};