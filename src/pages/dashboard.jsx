import React , {useContext, useEffect, useState}from 'react';
import Mainlayout from '../components/Layouts/MainLayout';
import CardBalance from '../components/Fragments/CardBalance';
import CardGoals from '../components/Fragments/CardGoals';
import CardRecentTransactions from '../components/Fragments/CardRecentTransactions';
import CardStatistic from '../components/Fragments/CardStatistic';
import CardExpenseBreakdown from '../components/Fragments/CardExpenseBreakdown';
import CardUpcomingBill from '../components/Fragments/CardUpcomingBill';
import { 
  transactions, 
  bills, 
  expensesBreakdowns,
  balances,
  goals,
  expensesStatistics, 
} from '../data';
import { goalService} from '../services/dataService';
import { AuthContext } from '../context/authContext';

function dashboard() {  
  const [goals, setGoals] = useState({});
  const { logout } = useContext(AuthContext);
  
  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      console.error("Gagal mengambil data goals:", err);
      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);
  
  console.log(goals);

  return (
    <>
    <Mainlayout>
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:col-span-4">
            <CardBalance data={balances} />
         </div>
          <div className="sm:col-span-4">
            <CardGoals data={goals} />
          </div> 
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills} />
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransactions data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistic data={expensesStatistics} />
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