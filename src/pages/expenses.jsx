import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpenses from "../components/Fragments/CardExpenses";

function ExpensesPage() {
  return (
    <MainLayout type="expenses">
      <div className="p-6 h-full">
        <CardExpenses />
      </div>
    </MainLayout>
  );
}

export default ExpensesPage;