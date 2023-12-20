export const saveDataToLS = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadDataFromLS = <T>(key: string): T | null => {
  const data: string | null = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});
