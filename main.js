'use strict';
// $ Current Conversion Rate for $ to €
const dollarToEuro = 0.97434895;

// $ An array of transactions.
const transactions = [
  650.6, -24.54, -300.12, 986.17, 1000, -65.43, 250, -118.46,
];

// $ USD International Number Format options
const usNumOptions = {
  style: 'currency',
  currency: 'USD',
};

// $ German Euro International Number Format Options
const deNumOptions = {
  style: 'currency',
  currency: 'EUR',
};

// $ Using the .map() method to create an array where the numbers are converted
// $to strings that are formatted to USD.

const transactionsUSD = transactions.map((transaction) =>
  new Intl.NumberFormat('en-US', usNumOptions).format(transaction)
);
console.log(
  `An array of transactions converted to strings and converted to USD currency format.`
);
console.log(transactionsUSD);

// $ Using the .map() to create an array of transaction amounts converted from dollars to euros.
const transactionsEuro = transactions.map((transaction) =>
  new Intl.NumberFormat('de-DE', deNumOptions).format(
    transaction * dollarToEuro
  )
);
console.log(
  `An array of transactions that have been converted to strings and formatted to German Euros.`
);
console.log(transactionsEuro);

// $ Using the .filter() method to create an array of only the withdrawals.
const withdrawals = transactions.filter((transaction) => transaction < 0);
console.log(`An array of negative transactions.`);
console.log(withdrawals);

// $ Using the .map() method to convert the withdrawals to Euros.
const withdrawalsEuro = withdrawals.map((withdrawal) =>
  new Intl.NumberFormat('de-DE', deNumOptions).format(withdrawal * dollarToEuro)
);
console.log(
  `An array withdrawals that have been converted to strings and properly formatted to German Euros.`
);
console.log(withdrawalsEuro);

// $ You can chain the .filter() method and the .map() method to create an array
// $ of deposits and that have been converted to euros.
const depositsEuro = transactions
  .filter((transaction) => transaction > 0)
  .map((transaction) =>
    new Intl.NumberFormat('de-DE', deNumOptions).format(
      transaction * dollarToEuro
    )
  );
console.log(
  `An array of deposits that have been converted Euros, and formatted as German Euros.`
);
console.log(depositsEuro);

// $ Use the reduce method to sum the value of all of the transactions.
const balance = transactions.reduce((acc, cur) => acc + cur, 0);
const balanceUS = new Intl.NumberFormat('en-US', usNumOptions).format(balance);
console.log('Balance in US Dollars ($).');
console.log(balanceUS);

//$ Chaining the .filter(), .map() and .reduce() methods to get the balance of
//$ all of the deposits.
const sumDepositsEuro = new Intl.NumberFormat('de-EU', deNumOptions).format(
  transactions
    .filter((transaction) => transaction > 0)
    .map((transaction) => transaction * dollarToEuro)
    .reduce((acc, cur) => acc + cur)
);

console.log('Sum of all deposits converted to Euros.');
console.log(sumDepositsEuro);
