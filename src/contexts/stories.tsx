import React, { createContext, useContext } from "react";

type TypeStories = {
  children: React.ReactNode;
};

export interface IItem {
  id: string;
  name: string;
  img: string;
}

interface IStories {
  stories: IItem[];
  setStories: (value: any) => void;
  findStorie: (id: string) => IItem;
}

const initialValue = {
  stories: [],
  setStories: () => {},
};

export const StoriesContext = createContext<IStories>(initialValue as any);

function StoriesProvider({ children }: TypeStories) {
  const [stories, setStories] = React.useState<any>(initialValue.stories);
  const findStorie = (id: string): IItem => {
    return stories.find((x: IItem) => x.id === id);
  };

  return (
    <StoriesContext.Provider value={{ stories, setStories, findStorie }}>
      {children}
    </StoriesContext.Provider>
  );
}

const useStories = () => useContext(StoriesContext);

export { StoriesProvider, useStories };
