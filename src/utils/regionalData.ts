const regionalData: { [key: string]: {
  currency: string,
  speed_unit: string,
  distance_unit: string,
  volume_unit: string,
  timezones: string,
} } = {
  India: {
    currency: 'Indian Rupee',
    speed_unit: 'kilometers per hour',
    distance_unit: 'kilometers',
    volume_unit: 'liters',
    timezones: 'UTC+05:30',
  },
  United_States: {
    currency: 'US Dollar',
    speed_unit: 'miles per hour',
    distance_unit: 'miles',
    volume_unit: 'gallons',
    timezones: 'UTC-04:00, UTC-05:00, UTC-06:00, UTC-07:00, UTC-08:00, UTC-09:00, UTC-10:00, UTC-11:00',
  },
  United_Kingdom: {
    currency: 'British Pound',
    speed_unit: 'miles per hour',
    distance_unit: 'miles',
    volume_unit: 'liters',
    timezones: 'UTC+00:00, UTC+01:00',
  },
};

export type RegionalDatatype = {
  currency: string,
  speed_unit: string,
  distance_unit: string,
  volume_unit: string,
  timezones: string,
};

export default regionalData;
