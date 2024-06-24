import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchEventDetails } from '../api/requests';
import { Event } from '../types';
import Spinner from '../components/Spinner';

const EventDetailPage = () => {
  const { id } = useParams<'id'>();
  const [event, setEvent] = useState<Event | null>(null); // Specify null for initial state

  useEffect(() => {
    if (!id) return;
    fetchEventDetails(id)
      .then((eventDetails) => {
        setEvent(eventDetails);
      })
      .catch(console.error);
  }, [id]);

  if (!event) {
    return <Spinner />;
  }

  return (
    <div
      className="relative flex flex-col event-detail-page text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 min-h-[100%]">
      <h1 className="text-3xl font-bold mb-4 text-center">{event.name}</h1>
      <img src={event.images[0].url} alt={event.name} className="max-w-[800px] mx-auto mb-4 w-full rounded" />
      <p className="text-xl mt-2">
        <strong>Start Time: </strong> {new Date(event.dates.start.dateTime).toLocaleString()}
      </p>
      <p className="text-xl mt-2">
        <strong>Timezone:</strong> {event.dates.timezone}
      </p>
      {event.info && <p className="mt-2">{event.info}</p>}
      {event.pleaseNote && <p className="mt-2 text-red-600">{event.pleaseNote}</p>}
      {event.priceRanges && (
        <p className="mt-2 text-xl">
          <strong>Price Range:</strong> {event.priceRanges[0].min} - {event.priceRanges[0].max}{' '}
          {event.priceRanges[0].currency}
        </p>
      )}
      <a
        href={event.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
      >
        Buy Tickets
      </a>
    </div>
  );
};

export default EventDetailPage;
