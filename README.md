# Weather App

This is a React Native project for a simple weather application using the OpenWeatherMap API.

## Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till the "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, start **Metro**, the JavaScript bundler that ships with React Native.

To start Metro, run the following command from the root of your React Native project:

```bash
yarn start
```

### Step 2: Start Your Application

Let Metro Bundler run in its own terminal. Open a new terminal from the root of your React Native project. Run the following command to start your Android or iOS app:

### For Android

```bash
yarn android
```

## Folder structure
- `src`: This folder is the main container of all the code inside your application.
   - `api`: Folder to store all axios rest apis.
   - `ui-components`: Folder to store any common component that you use through your app.
   - `hooks`: Folder to store custom hooks.
   - `utils`: Folder to store utilities.
   - `App.tsx`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.



## Test
The test specific file can be executed with yarn test `yarn test src/tests/hooks/useWeatherData.test.ts` or all test can be executed with `yarn test`

1. `useDateTime.test.ts` In this test suite for the `useDateTime` hook:
- `getCurrentHour`: It checks whether the getCurrentHour method of the useDateTime hook returns a number, indicating the current hour.
- `getHourFromTime`: It verifies that the getHourFromTime method correctly extracts the hour from a given time string and returns it.
- `calculateStartIndex`: It tests whether the calculateStartIndex method of the useDateTime hook returns the correct start index based on the provided mock weather data.
2. `useDebounce.test.ts` In this test suite for the `useDebounce` hook:
- should debounce the value: It verifies that the useDebounce hook correctly debounces the input value. It sets an initial value, updates it, waits for half of the debounce delay, and ensures that the debounced value hasn't changed yet. Then, it fast-forwards to the end of the debounce duration and checks if the debounced value has been updated to the new value.
3. `useForecastData.test.ts` In this test suite for the `useForecastData` hook:
- should return the correct forecast data based on index: It tests whether the hook returns the correct forecast data based on the provided index. It initializes the hook with undefined weather data and an index of 0, then updates it with mock weather data and an index of 0. The test asserts that the returned forecast data matches the expected slice of the first 5 elements from the mock data. Additional test cases for different scenarios, such as using nextDayForecast or when the index is at the end of the day, are suggested but not implemented in the provided code.
3. `useWeatherData.test.ts` In this test suite for the `useWeatherData` hook:
- should fetch weather data and update state variables: It tests whether the hook fetches weather data correctly and updates state variables accordingly. It uses renderHook to initialize the hook with a city ('MockCity') and asserts that the loading state is initially true, then becomes false after the asynchronous data fetching is complete. It further checks if the returned state variables match the expected values from the mocked weather response.
- should handle no location found error: This test ensures that the hook properly handles the scenario where the location is not found. It mocks the Axios behavior to simulate an error response with the message 'No location found'. It then asserts that the hook's state variables, specifically noLocation and loading, are updated accordingly after the asynchronous operation.
- Note: The beforeEach function is used to clear all mocks before each test, and the afterEach function restores all mocks after each test to prevent interference between test cases.
