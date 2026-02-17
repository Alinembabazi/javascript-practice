const pricesUSD = [10.50, 20.00, 5.25];
const exchangeRate = 1.3; 
const pricesLocal = pricesUSD.map(price => price * exchangeRate);
console.log(pricesLocal);
const formattedPrices = pricesUSD.map(price => `Item price: $${price.toFixed(2)}`);
console.log(formattedPrices);
