import React from "react";
import { v4 as uuidv4 } from "uuid";
import UseLocalSrorage from "./UseLocalSrorage";
import Swal from "sweetalert2";

const BudgetCont = React.createContext({});
export function useBudgets() {
  return React.useContext(BudgetCont);
}

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

// {
//     id:
//     name:
//     max:
// }
// {
//     id:
//     budgetId:
//     amount:
//     description:
// }

export const BudgetProv = ({ children }: { children: React.ReactNode }) => {
  const [budgets, setBudgets] = UseLocalSrorage("budgets", []);
  const [expenses, setExpenses] = UseLocalSrorage("expenses", []);
  function getBudgetExpenses(budgetId: any) {
    return expenses.filter(
      (expense: { budgetId: any }) => expense.budgetId === budgetId
    );
  }
  function addExpenses(description: any, amount: any, budgetId: any) {
    setExpenses((prevExpenses: any) => {
      return [...prevExpenses, { id: uuidv4(), description, amount, budgetId }];
    });
  }
  function addBudget(name: any, max: any) {
    setBudgets((prevBudgets: any[]) => {
      if (prevBudgets.find((budget: { name: any }) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidv4(), name, max }];
    });
  }
  function deleteBudget({ id }: any) {
    Swal.fire({
      title: "Are you sure you want to delete a budget?",
      showCancelButton: true,
      confirmButtonColor: "#be4141",
      cancelButtonColor: "#3E68AE",
      confirmButtonText: " Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        setExpenses((prevExpenses: any) => {
          return prevExpenses.map((expense: any) => {
            if (expense.budgetId !== id) return expense;
            return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID };
          });
        });
        setBudgets((prevBudgets: any[]) => {
          return prevBudgets.filter(
            (budget: { id: string }) => budget.id !== id
          );
        });
      }
    });
  }
  function deleteExpense({ id }: any) {
    Swal.fire({
      title: "Are you sure you want to delete?",
      showCancelButton: true,
      confirmButtonColor: "#be4141",
      cancelButtonColor: "#3E68AE",
      confirmButtonText: " Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        setExpenses((prevExpenses: any) => {
          return prevExpenses.filter((expenses: any) => expenses.id !== id);
        });
      }
    });
  }

  return (
    <div className="">
      <BudgetCont.Provider
        value={{
          budgets,
          expenses,
          getBudgetExpenses,
          addExpenses,
          addBudget,
          deleteBudget,
          deleteExpense,
        }}
      >
        {children}
      </BudgetCont.Provider>
    </div>
  );
};
