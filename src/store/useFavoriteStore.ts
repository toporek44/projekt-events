import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Event } from '../types';

interface FavoriteState {
  favorites: Event[];
  addFavorite: (event: Event) => void;
  removeFavorite: (id: number) => void;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (event) => {
        const { favorites } = get();
        if (!favorites.some((f) => f.id === event.id)) {
          const newFavorites = [...favorites, event];
          set({ favorites: newFavorites });
        }
      },

      removeFavorite: (id) => {
        const { favorites } = get();
        const newFavorites = favorites.filter((f) => f.id !== id);
        set({ favorites: newFavorites });
      },
    }),
    {
      name: 'favorites-storage', // unique name for localStorage key
      getStorage: () => localStorage, // specify localStorage as the storage option
    },
  ),
);
