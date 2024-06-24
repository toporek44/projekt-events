export interface Event {
  id: number;
  name: string;
  dates: {
    start: {
      dateTime: string;
    };
    timezone: string;
  };
  liked: boolean;
  images: {
    ratio: string;
    url: string;
  }[];
  info?: string;
  pleaseNote?: string;
  priceRanges?: {
    min: string;
    max: string;
    currency: string;
  }[];
  url: string;
}
export interface Filters {
  search: string;
  category: string;
}
