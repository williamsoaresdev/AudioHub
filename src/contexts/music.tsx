import React, { createContext, useContext } from "react";

type TypeMusic = {
  children: React.ReactNode;
};

export interface IItem {
  id: string;
  album: string;
  img: string;
}

interface IMusic {
  musics: IItem[];
  setMusics: (value: any) => void;
  findMusic: (id: string) => IItem;
}

const initialValue = {
  musics: [],
  setMusics: () => {},
};

export const MusicContext = createContext<IMusic>(initialValue as any);

function MusicProvider({ children }: TypeMusic) {
  const [musics, setMusics] = React.useState<any>(initialValue.musics);
  const findMusic = (id: string): IItem => {
    return musics.find((x: IItem) => x.id === id);
  };

  return (
    <MusicContext.Provider value={{ musics, setMusics, findMusic }}>
      {children}
    </MusicContext.Provider>
  );
}

const useMusics = () => useContext(MusicContext);

export { MusicProvider, useMusics };
