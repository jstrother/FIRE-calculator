import { sum } from 'ramda';

export const state = () => ({
  totalAssets: '0.00',
  totalLiabilities: '0.00',
  totalMonthlyIncome: '0.00',
  totalMonthlyExpenses: '0.00',
});

export const mutations = {
  SUM_ASSETS(state, value) {
    state.totalAssets = sum([+state.totalAssets, value])
      .toFixed(2)
      .toString();
  },
  SUM_LIABILITIES(state, value) {
    state.totalLiabilities = sum([+state.totalLiabilities, value])
      .toFixed(2)
      .toString();
  },
  SUM_MONTHLY_INCOME(state, value) {
    state.totalMonthlyIncome = sum([+state.totalMonthlyIncome, value])
      .toFixed(2)
      .toString();
  },
  SUM_MONTHLY_EXPENSES(state, value) {
    state.totalMonthlyExpenses = sum([+state.totalMonthlyExpenses, value])
      .toFixed(2)
      .toString();
  },
};
