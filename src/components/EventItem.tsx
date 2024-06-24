import { Link } from 'react-router-dom';
import { useFavoriteStore } from '../store/useFavoriteStore';
import { Event } from '../types';

interface EventItemProps {
  event: Event;
}

const EventItem = ({ event }: EventItemProps) => {
  const { favorites, addFavorite, removeFavorite } = useFavoriteStore((state) => ({
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
  }));

  const isFavorite = favorites.some((f) => f.id === event.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(event.id);
    } else {
      addFavorite({ ...event, liked: true });
    }
  };
  return (
    <Link
      className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300"
      to={`/event/${event.id}`}
    >
      <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
      <img src={event.images[0].url} alt={event.name} className="w-auto h-25" />

      <p className="text-gray-600">{event.dates.start.dateTime}</p>
      <p className="text-gray-600">{event.dates.timezone}</p>
      <button
        className={`mt-2 px-4 py-2 rounded ${event.liked ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
        onClick={() => handleToggleFavorite()}
      >
        {event.liked ? 'Unlike' : 'Like'}
      </button>
    </Link>
  );
};

export default EventItem;
