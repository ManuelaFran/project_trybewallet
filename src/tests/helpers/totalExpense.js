const totalExpense = (expenses) => expenses.reduce(
  (acc, exp) => acc + Number(exp.value * Number(exp.exchangeRates[exp.currency].ask)),
  0,
);

export default totalExpense;