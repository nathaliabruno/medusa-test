export const priceFormat = (amount: number) => {
  return `$ ${(amount / 100).toFixed(2)}`;
};
