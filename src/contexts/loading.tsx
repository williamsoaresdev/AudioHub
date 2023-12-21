import React, { createContext, useContext } from "react";
import Loading from "../components/Loading";

type TypeLoading = {
  children: React.ReactNode;
};

interface ILoading {
  isLoading: boolean;
  setLoading: (value: any) => void;
}

const initialValue = {
  isLoading: false,
  setLoading: () => {},
};

export const LoadingContext = createContext<ILoading>(initialValue);

function LoadingProvider({ children }: TypeLoading) {
  const [isLoading, setLoading] = React.useState(initialValue.isLoading);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {isLoading ? <Loading /> : null}
      {children}
    </LoadingContext.Provider>
  );
}

const useLoading = () => useContext(LoadingContext);

export { LoadingProvider, useLoading };
