import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CompositionExample from "../Elements/CompositionExample";
import CircularProgress from '@mui/material/CircularProgress';

function CardGoal(props) {
  const { data } = props;
  const chartValue = (data.present_amount / data.target_amount) * 100;

  const chartData = (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold me-4 text-gray-900 dark:text-white transition-colors duration-300">
            ${data.target_amount}
          </span>
          <div className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md box-border transition-colors duration-300">
            <Icon.Edit size={16} />
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Nov, 2023</div>
      </div>
      
      <div className="border-b-2 border-gray-200 dark:border-gray-700 my-4 transition-colors duration-300"></div>
      
      <div className="flex justify-between">
        <div>
          <div className="flex mt-3 mb-10 text-gray-500 dark:text-gray-400 transition-colors duration-300">
            <Icon.Award />
            <div className="ms-2">
              <div>Target Achieved</div>
              <div className="font-bold text-xl text-gray-900 dark:text-white transition-colors duration-300">
                ${data.present_amount}
              </div>
            </div>
          </div>
          
          <div className="flex text-gray-500 dark:text-gray-400 transition-colors duration-300">
            <Icon.Target />
            <div className="ms-2">
              <div>This Month Target</div>
              <div className="font-bold text-xl text-gray-900 dark:text-white transition-colors duration-300">
                ${data.target_amount}
              </div>
            </div>
          </div>
        </div>
        
        <div className="ms-4 text-center">
          <CompositionExample data={chartValue} />
          <div className="flex justify-between mt-2">
            <span className="text-gray-400 dark:text-gray-500 transition-colors duration-300">$0</span>
            <span className="font-bold text-2xl text-gray-900 dark:text-white transition-colors duration-300">12K</span>
            <span className="text-gray-400 dark:text-gray-500 transition-colors duration-300">$20K</span>
          </div>
          <div className="mt-1 text-gray-500 dark:text-gray-400 transition-colors duration-300">Target vs Achievement</div>
        </div>
      </div>
    </div>
  );
  
  return (
    <>
      <Card 
        title="Goals" 
        desc={
          Object.keys(data).length === 0 ? (
            <div className="flex flex-col justify-center items-center h-full text-primary min-h-[200px]">
              <CircularProgress color="inherit" size={50} enableTrackSlot />
              <span className="mt-2 font-medium">Loading Data...</span>
            </div>
          ) : (
            chartData
          )
        } 
      /> 
    </>
  );
}

export default CardGoal;