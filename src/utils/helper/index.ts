export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    // Clear the previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    //new timeout with the delay
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
