import useDateTime from '../../utils/useDateTime.ts';
describe('useDateTime Hook', () => {
  const mockWeatherData = {
    forecastday: [
      {
        hour: [
          {time: '2024-01-30 15:00'},
          {time: '2024-01-30 16:00'},
          {time: '2024-01-30 17:00'},
          {time: '2024-01-30 18:00'},
          {time: '2024-01-30 19:00'},
          {time: '2024-01-30 20:00'},
          {time: '2024-01-30 21:00'},
          {time: '2024-01-30 22:00'},
          {time: '2024-01-30 23:00'},
        ],
      },
    ],
  };

  describe('getCurrentHour', () => {
    it('should return the current hour', () => {
      const dateTime = useDateTime();
      const currentHour = dateTime.getCurrentHour();
      expect(typeof currentHour).toBe('number');
    });
  });

  describe('getHourFromTime', () => {
    it('should return the hour from a given time string', () => {
      const dateTime = useDateTime();
      const hour = dateTime.getHourFromTime('2024-01-30T15:30:00');
      expect(hour).toBe(15);
    });
  });

  describe('calculateStartIndex', () => {
    it('should return the correct start index based on current hour', () => {
      const dateTime = useDateTime();
      const startIndex = dateTime.calculateStartIndex(mockWeatherData);
      expect(startIndex).toBe(0);
    });
  });
});
