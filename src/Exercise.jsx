import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <UserCard 
            name="aji"
            email="aji@example.com"
            street="123 Main St"
            city="New York"
            />
            <UserCard 
            name="bayu"
            email="bayu@example.com"
            street="456 Oak Ave"
            city="Los Angeles"
            />
            <UserCard 
            name="seno"
            email="seno@example.com"
            street="789 Pine Rd"
            city="Chicago"
            />
        </div>
      </div>
    </>
  );
}

export default Exercise;    