import { Link } from 'react-router-dom';
import { useFavoriteStore } from '../store/useFavoriteStore';
import { Event } from '../types';
import { SyntheticEvent } from 'react';

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

  const handleToggleFavorite = (e: SyntheticEvent) => {
    e.preventDefault();
    if (isFavorite) {
      removeFavorite(event.id);
    } else {
      addFavorite({ ...event, liked: true });
    }
  };
  return (
    <Link
      className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
      to={`/event/${event.id}`}
    >
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
        <img src={event.images[0].url} alt={event.name} className="w-full h-25 mb-4 rounded" />
      </div>

      <div>
        <p className="text-gray-600"><span className="font-bold">Time of the event:</span> {event.dates.start.dateTime}</p>
        <p className="text-gray-600"><span className="font-bold">Location of the event:</span> {event.dates.timezone}</p>
        <button
          className={`mt-2 px-4 py-2 rounded w-20 duration-500 active:scale-75 ${event.liked ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
          onClick={(e) => handleToggleFavorite(e)}
        >
          {event.liked ? 'Unlike' : 'Like'}
        </button>
      </div>
    </Link>
  );
};

export default EventItem;
