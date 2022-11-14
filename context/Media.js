import { createContext, useState } from 'react';

export const MediaContext = createContext();

export function MediaProvider({ children }) {
  const [media, setMedia] = useState({
    images: [],
    selected: "",
    showMediaModal: false,
  });

  return (
    <MediaContext.Provider value={[media, setMedia]}>
      {children}
    </MediaContext.Provider>
  );
}