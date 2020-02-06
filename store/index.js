import { sum } from 'ramda';

export const state = () => ({
  totalAssets: 0,
  totalLiabilities: 0,
  totalMonthlyIncome: 0,
  totalMonthlyExpenses: 0,
});

export const mutations = {
  SUM_ASSETS(state, value) {
    state.totalAssets = sum([state.totalAssets, value]).toFixed(2);
  },
  SUM_LIABILITIES(state, value) {
    state.totalLiabilities = sum([state.totalLiabilities, value]).toFixed(2);
  },
  SUM_MONTHLY_INCOME(state, value) {
    state.totalMonthlyIncome = sum([state.totalMonthlyIncome, value]).toFixed(2);
  },
  SUM_MONTHLY_EXPENSES(state, value) {
    state.totalMonthlyExpenses = sum([state.totalMonthlyExpenses, value]).toFixed(2);
  },
};
