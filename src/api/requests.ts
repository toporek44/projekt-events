const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchAllEvents = async () => {
  const url = `${BASE_URL}/events?apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch events');
    const data = await response.json();
    return data._embedded.events;
  } catch (error) {
    console.error('Error fetching all events:', error);
  }
};

export const fetchEventsByCity = async (city: string) => {
  const url = `${BASE_URL}/events?apikey=${API_KEY}&city=${city}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch events');
    const data = await response.json();
    return data._embedded.events;
  } catch (error) {
    console.error(`Error fetching events for city ${city}:`, error);
  }
};

export const fetchEventDetails = async (eventId: string) => {
  const url = `${BASE_URL}/events/${eventId}.json?apikey=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch event details');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching details for event ID ${eventId}:`, error);
  }
};

export const fetchEventsWithFilters = async ({ name = '', city = '' }) => {
  const url = `${BASE_URL}/events?apikey=${API_KEY}&keyword=${encodeURIComponent(name)}&city=${encodeURIComponent(city)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch event details');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all events:', error);
  }
};
