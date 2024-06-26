import { useEffect, useState } from 'react';
import EventList from '../components/EventList';
import { Event } from '../types';
import { fetchAllEvents } from '../api/requests';
import { useFavoriteStore } from '../store/useFavoriteStore';

const HomePage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const favorites = useFavoriteStore((state) => state.favorites);

  useEffect(() => {
    fetchAllEvents().then((events) => {
      setEvents(
        events.map((event: Event) => {
          const isFavorited = favorites.find((favEvent) => favEvent.id === event.id)?.liked || false;
          return { ...event, liked: isFavorited };
        }),
      );
    });
  }, []);

  useEffect(() => {
    const updatedEvents =
      events.map((event: Event) => ({
        ...event,
        liked: favorites.some((fav) => fav.id === event.id),
      })) || events;
    setEvents(updatedEvents);
  }, [favorites]);

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-2 text-[#fff]">Events overview</h1>
      <p className="mb-8 text-[#fff] text-lg">Below you can find last added events</p>
      <EventList events={events} />
    </div>
  );
};

export default HomePage;
