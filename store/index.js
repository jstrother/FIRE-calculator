import { add, multiply, divide, reverse, join, splitEvery, toString } from 'ramda';

const addsComma = (num) => {
  if (num.length > 3) {
    return reverse(join(',', splitEvery(3, reverse(toString(num.toFixed(2))))));
  }
  return num;
};

export const state = () => ({
  totalAssets: '0.00',
  totalLiabilities: '0.00',
  totalMonthlyIncome: '0.00',
  totalMonthlyExpenses: '0.00',
  amountNeededForFire: '0.00',
  annualPostFireIncome: '0.00',
});

export const mutations = {
  TOTAL_ASSETS(state, value) {
    state.totalAssets = addsComma(add(+state.totalAssets, +value));
    // state.totalAssets = add(+state.totalAssets, +value)
    //   .toFixed(2)
    //   .toString();
  },
  TOTAL_LIABILITIES(state, value) {
    state.totalLiabilities = add(+state.totalLiabilities, value)
      .toFixed(2)
      .toString();
  },
  TOTAL_MONTHLY_INCOME(state, value) {
    state.totalMonthlyIncome = add(+state.totalMonthlyIncome, value)
      .toFixed(2)
      .toString();
  },
  TOTAL_MONTHLY_EXPENSES(state, value) {
    state.totalMonthlyExpenses = add(+state.totalMonthlyExpenses, value)
      .toFixed(2)
      .toString();

    state.amountNeededForFire = divide(multiply(+state.totalMonthlyExpenses, 12), 0.04)
      .toFixed(2)
      .toString();

    state.annualPostFireIncome = multiply(+state.amountNeededForFire, 0.04)
      .toFixed(2)
      .toString();
  },
};
