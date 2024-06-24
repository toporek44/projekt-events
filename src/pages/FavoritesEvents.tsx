import EventList from '../components/EventList';
import { useFavoriteStore } from '../store/useFavoriteStore';

const FavoritesEvents = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-white">Favorite Events</h2>
      <EventList events={favorites} />
    </div>
  );
};

export default FavoritesEvents;
