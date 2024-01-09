import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IContextType {
  categoryFilters: any[];
  setCategoryFilters: Dispatch<SetStateAction<string[]>>;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
}

export const INITIAL_FILTER_DATA: IContextType = {
  categoryFilters: [],
  setCategoryFilters: () => {},
  sort: "",
  setSort: () => "",
};

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("-createdAt");

  return (
    <FilterContext.Provider
      value={{
        categoryFilters,
        setCategoryFilters,
        sort,
        setSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
