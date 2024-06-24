import EventList from '../components/EventList';
import { useFavoriteStore } from '../store/useFavoriteStore';

const FavoritesEvents = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4 text-white text-center">Favorite Events</h1>
      <EventList events={favorites} />
    </div>
  );
};

export default FavoritesEvents;
