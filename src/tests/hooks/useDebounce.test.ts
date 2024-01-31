import {renderHook, act} from '@testing-library/react-hooks';
import useDebounce from '../../hooks/useDebounce';

// Mocking the setTimeout function
jest.useFakeTimers();

describe('useDebounce', () => {
  it('should debounce the value', () => {
    const {result, rerender} = renderHook(
      ({value, delay}) => useDebounce(value, delay),
      {
        initialProps: {value: 'initial', delay: 1000},
      },
    );

    // Asserting the initial state
    expect(result.current).toBe('initial');

    // Changing the value and waiting for debounce to complete
    act(() => {
      rerender({value: 'updated', delay: 1000});
      jest.advanceTimersByTime(500); // Moving the time forward by 500 milliseconds
    });

    // The value shouldn't have changed yet
    expect(result.current).toBe('initial');

    // Fast-forwarding to the end of the debounce duration
    act(() => {
      jest.advanceTimersByTime(1000); // Adjust the timing to match the debounce duration
    });

    // Now the debounced value should be the updated one
    expect(result.current).toBe('updated');
  });
});
