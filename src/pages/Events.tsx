import { ChangeEvent, useEffect, useState } from 'react';
import EventList from '../components/EventList';
import { Event } from '../types';
import { fetchEventsWithFilters } from '../api/requests';
import classNames from 'classnames';

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState('');
  const [isBlock, setIsBlock] = useState(false);
  const [city, setCity] = useState('');

  const handleFetchEvents = () => {
    fetchEventsWithFilters({ name: search, city })
      .then((events) => setEvents(events._embedded.events || []))
      .catch(console.error);
  };
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsBlock(true);
    } else {
      setIsBlock(false);
    }
    setSearch(e.target.value);
  };
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsBlock(true);
    } else {
      setIsBlock(false);
    }
    setCity(e.target.value);
  };

  useEffect(() => {
    if (events.length) return;
    handleFetchEvents();
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-semibold text-white text-center mb-4">Filter Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="eventName" className="block text-sm font-medium text-white">
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            placeholder="Enter event name"
            value={search}
            onChange={handleSearchChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-white">
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={handleCityChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          disabled={isBlock}
          onClick={handleFetchEvents}
          className={classNames(
            'w-full h-[38px] self-end bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded shadow-lg focus:outline-none focus:shadow-outline',
            {
              'bg-slate-400 hover:bg-slate-400': isBlock,
            },
          )}
        >
          Apply Filters
        </button>
      </div>
      <EventList events={events} />
    </div>
  );
};

export default Events;
