import React, { useEffect, useState } from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from '@mui/material/CircularProgress';
import { billService } from "../../services/dataService";

function CardUpcomingBill() {
  const [bills, setBills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        setIsLoading(true);
        const data = await billService();
        setBills(data);
      } catch (error) {
        console.error("Gagal mengambil data bills:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBills();
  }, []);

  const getBillIcon = (name) => {
    const billName = name.toLowerCase();
    if (billName.includes("figma")) return <Icon.Figma width={84} height={28} />;
    if (billName.includes("adobe")) return <Icon.Adobe width={84} height={28} />;
    return <Icon.Detail size={28} />; 
  };

  const billData = (
    <div className="flex flex-col h-full justify-around gap-4 mt-2">
      {bills && bills.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center w-16 h-16 transition-colors duration-300 shadow-sm border border-transparent dark:border-gray-700 shrink-0">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">{item.month}</span>
              <span className="text-xl font-bold text-gray-900 dark:text-white leading-none">{item.date}</span>
            </div>
            
            <div className="flex flex-col justify-center gap-1">
              
              <div className="flex-shrink-0">
                {getBillIcon(item.name)}
              </div>
              
              <span className="font-bold text-lg text-gray-900 dark:text-white leading-tight">
                {item.name}
              </span>
              
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Last Charge - {item.lastCharge}
              </span>
              
            </div>
          </div>
          
          <div className="flex items-center shrink-0">
            <span className="py-2 px-4 border border-gray-200 dark:border-gray-600 rounded-lg font-bold text-gray-900 dark:text-white transition-colors duration-300">
              ${item.amount}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Card
      title="Upcoming Bill"
      link="/bill"
      desc={
        isLoading || !bills || bills.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-full text-primary min-h-[200px]">
            <CircularProgress color="inherit" size={50} enableTrackSlot />
          </div>
        ) : (
          billData
        )
      }
    />
  );
}

export default CardUpcomingBill;