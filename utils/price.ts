export const priceFormat = (prices: object) => {
  const price = prices.filter((price) => price.currency_code === "usd");

  return `$ ${(price[0].amount / 100).toFixed(2)}`;
};
