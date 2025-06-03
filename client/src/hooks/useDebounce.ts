import { useRef, useEffect, useCallback } from "react";

export function useDebounce<Args extends unknown[]>(callback: (...args: Args) => void, delay: number = 300) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timer.current !== null) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  useEffect(() => clearTimer(), [clearTimer]);

  return useCallback((...args: Args) => {
    clearTimer();
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay, clearTimer]);
}