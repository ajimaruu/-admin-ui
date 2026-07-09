import React, { useEffect, useState } from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon"; 
import CircularProgress from '@mui/material/CircularProgress';
import { expenseService } from "../../services/dataService";

function CardExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        setIsLoading(true);
        const data = await expenseService();
        setExpenses(data);
      } catch (error) {
        console.error("Gagal mengambil data expenses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  const getTrendStyle = (trend) => {
    if (trend === 'up') return { color: 'text-red-500', icon: <Icon.ArrowUp size={16} className="text-red-500" /> };
    if (trend === 'down') return { color: 'text-green-500', icon: <Icon.ArrowDown size={16} className="text-green-500" /> };
    return { color: 'text-gray-500', icon: null };
  };

  const categoryIcons = {
    housing: Icon.House,
    food: Icon.Food,
    transportation: Icon.Transport,
    entertainment: Icon.Movie, 
    shopping: Icon.Shopping,
    others: Icon.Other,
  };

  const getCategoryIcon = (category) => {
    const Component = categoryIcons[category.toLowerCase()];
    return Component ? <Component size={24} /> : <span className="font-bold text-xl uppercase">{category?.charAt(0) || '-'}</span>;
  };

  const expenseData = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
      {expenses && expenses.map((item, index) => {
        const trendData = getTrendStyle(item.trend); 
        
        return (
          <div key={index} className="flex flex-col rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-[#404040] transition-colors duration-300">
            
            <div className="bg-gray-50 dark:bg-[#202020] p-5 flex justify-between items-center border-b border-gray-100 dark:border-[#404040] transition-colors duration-300">
              <div className="flex items-center gap-4">
                
                <div className="p-3 bg-gray-200 dark:bg-[#333333] rounded-lg text-gray-500 dark:text-gray-300 flex items-center justify-center w-12 h-12 transition-colors duration-300">
                   {getCategoryIcon(item.category)}
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-bold capitalize transition-colors duration-300">{item.category}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">${item.amount}</p>
                </div>
              </div>

              <div className="text-right">
                <span className={`text-base font-bold flex justify-end items-center gap-1 ${trendData.color}`}>
                  {item.percentage}% {trendData.icon}
                </span>
                <p className="text-[10px] text-gray-400 dark:text-gray-400 mt-1 transition-colors duration-300">Compare to last month</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#292929] px-5 pb-5 pt-3 flex flex-col transition-colors duration-300 h-full">
              {item.detail && item.detail.map((d, idx) => (
                <div key={idx} className="flex justify-between items-center py-4 border-b last:border-b-0 border-gray-100 dark:border-[#404040] transition-colors duration-300">
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300">{d.item}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900 dark:text-white transition-colors duration-300">${d.amount}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-400 mt-1 transition-colors duration-300">{d.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        );
      })}
    </div>
  );

  return (
    <Card 
      title="Expenses Comparison" 
      desc={
        isLoading || !expenses || expenses?.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-full text-primary min-h-[300px]">
            <CircularProgress color="inherit" size={50} enableTrackSlot />
            <span className="mt-2 font-medium">Loading Data...</span>
          </div>
        ) : (
          expenseData
        )
      } 
    /> 
  );
}

export default CardExpenses;