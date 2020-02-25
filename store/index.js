import { add, multiply, divide } from 'ramda';

const yearlyTotal = multiply(12);

export const state = () => ({
  totalAssets: '0.00',
  totalLiabilities: '0.00',
  totalMonthlyIncome: '0.00',
  totalMonthlyExpenses: '0.00',
  totalAnnualIncome: '0.00',
  totalAnnualExpenses: '0.00',
  amountNeededForFire: '0.00',
  annualPostFireIncome: '0.00',
  estimatedWithdrawlRate: '0.04',
  totalInvestments: '0.00',
  monthlyInvestmentContribution: '0.00',
  estimatedInvestmentInterestRate: '0.00',
  compoundingPeriod: 'Annually',
});

export const mutations = {
  TOTAL_ASSETS(state, value) {
    state.totalAssets = add(+state.totalAssets, value)
      .toFixed(2)
      .toString();
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
  },
  TOTAL_ANNUAL_INCOME(state) {
    state.totalAnnualIncome = yearlyTotal(+state.totalMonthlyIncome)
      .toFixed(2)
      .toString();
  },
  TOTAL_ANNUAL_EXPENSES(state) {
    state.totalAnnualExpenses = yearlyTotal(+state.totalMonthlyExpenses)
      .toFixed(2)
      .toString();
  },
  AMOUNT_NEEDED_FOR_FIRE(state) {
    state.amountNeededForFire = divide(+state.totalAnnualIncome, +state.estimatedWithdrawlRate)
      .toFixed(2)
      .toString();
  },
  ANNUAL_POST_FIRE_INCOME(state) {
    state.annualPostFireIncome = multiply(+state.amountNeededForFire, +state.estimatedWithdrawlRate)
      .toFixed(2)
      .toString();
  },
};
