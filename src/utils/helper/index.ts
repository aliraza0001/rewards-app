const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout | null = null;
  return (...args: any) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export {delay, debounce};
