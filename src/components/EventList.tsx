import { Event } from '../types';
import EventItem from './EventItem';

interface EventListProps {
  events: Event[];
}

const EventList = ({ events }: EventListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
