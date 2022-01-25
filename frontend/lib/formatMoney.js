export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractonDigits: 2,
  };

  // check if amount is a clean dollar amount
  if (amount % 100 === 0) {
    options.minimumFractonDigits = 0;
  }

  const formatter = Intl.NumberFormat('en-us', options);

  return formatter.format(amount / 100);
}
