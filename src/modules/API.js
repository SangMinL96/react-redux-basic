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

export const getSearchs = async (text) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=cc3aed3fa1f0feef67c25879a942c3db&language=en-US&query=${text}&page=1&include_adult=false`
  );
  return data;
};
