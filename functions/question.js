import axios from "../utils/axios";

export const createQuestion = async (title, description, tags, options, correctOptions) => {
  const response = await axios.post("/api/questions", { title, description, tags, options, correctOptions }).then(res => res.data).catch(err => err.response.data);
  return response;
};