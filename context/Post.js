import { createContext, useState } from 'react';

export const PostContext = createContext();

export default function PostDataProvider({ children }) {
  const [postData, setPostData] = useState({
    posts: [],
    categories: [],
  });

  return (
    <PostContext.Provider value={[postData, setPostData]}>
      {children}
    </PostContext.Provider>
  );
}