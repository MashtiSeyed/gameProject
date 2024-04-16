import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (searchGenre: number) => void;
  setPlatformId: (searchPlatform: number) => void;
  setOrder: (searchOrder: string) => void;
}

const gameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (search) => set(() => ({ gameQuery: { search } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setOrder: (ordering) => set(() => ({ gameQuery: { ordering } })),
}));

export default gameQueryStore;
