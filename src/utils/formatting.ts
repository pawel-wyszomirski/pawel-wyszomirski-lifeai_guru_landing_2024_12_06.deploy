export const formatPrice = (price: number, currency: string = 'PLN'): string => {
  return `${price} ${currency}`;
};

export const formatPercentage = (value: number): string => {
  return `${value}%`;
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
};