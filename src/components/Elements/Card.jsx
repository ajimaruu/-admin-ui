import React from "react";

function Card(props) {
  const { title, link = false, desc } = props;

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-300">
        <div className="text-2xl font-semibold">{title}</div>
        {link && <div className="text-xs font-bold text-primary cursor-pointer hover:underline">View All</div>}
      </div>
      
        <div className="flex-1 bg-white dark:bg-[#292929] text-gray-900 dark:text-white rounded-lg px-6 py-5 shadow-sm transition-colors duration-300">        {desc}
      </div>
    </div>
  );
}

export default Card;