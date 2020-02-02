import * as R from 'ramda';

export const state = () => ({
  totalAssets: 0,
  totalLiabilities: 0,
  totalWorth: 0,
  totalMonthlyIncome: 0,
  totalMonthlyExpenses: 0,
  totalMonthlyVariance: 0,
  fireNumber: 0,
});

export const mutations = {
  SUM_ASSETS(state, value) {
    state.totalAssets = R.sum([state.totalAssets, value]).toFixed(2);
  },
  SUM_LIABILITIES(state, value) {
    state.totalLiabilities = R.sum([state.totalLiabilities, value]).toFixed(2);
  },
  SUM_WORTH(state) {
    state.totalWorth = R.subtract(state.totalAssets, state.totalLiabilities).toFixed(2);
  },
  SUM_MONTHLY_INCOME(state, value) {
    state.totalMonthlyIncome = R.sum([state.totalMonthlyIncome, value]).toFixed(2);
  },
  SUM_MONTHLY_EXPENSES(state, value) {
    state.totalMonthlyExpenses = R.sum([state.totalMonthlyExpenses, value]).toFixed(2);
  },
  SUM_MONTHLY_VARIANCE(state) {
    state.totalMonthlyVariance = R.subtract(
      state.totalMonthlyIncome,
      state.totalMonthlyExpenses,
    ).toFixed(2);
  },
  CALCULATE_FIRE_NUMBER(state) {
    state.fireNumber = R.multiply(25, state.totalMonthlyExpenses);
  },
};
