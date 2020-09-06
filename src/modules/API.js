import axios from "axios";

export const getApiPosts = async () => {
  const data = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return data;
};
export const getApiPostId = async (id) => {
  const data = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return data;
};
