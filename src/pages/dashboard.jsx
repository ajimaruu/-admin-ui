import React from 'react';
import Mainlayout from '../components/Layouts/MainLayout';
import CardBalance from '../components/Fragments/CardBalance';
import CardGoals from '../components/Fragments/CardGoals';
import CardRecentTransactions from '../components/Fragments/CardRecentTransactions';
import CardStatistic from '../components/Fragments/CardStatistic';
import CardExpenseBreakdown from '../components/Fragments/CardExpenseBreakdown';
import CardUpcomingBill from '../components/Fragments/CardUpcomingBill';
import { transactions, bills, expensesBreakdowns } from '../data';

function dashboard() {  
  return (
    <>
    <Mainlayout>
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:col-span-4">
            <CardBalance />
         </div>
          <div className="sm:col-span-4">
            <CardGoals />
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills} />
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransactions data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistic />
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBreakdown data={expensesBreakdowns} />
          </div>
        </div>
    </Mainlayout>
    </>
  );
}

export default dashboard