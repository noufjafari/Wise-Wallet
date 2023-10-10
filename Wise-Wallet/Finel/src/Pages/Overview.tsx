// import React from "react";
import Card from "../Components/Card";
import SidePar from "../Components/SidePar";
// import AddBudget from "../Components/contexts/AddBudget";
import {
  useBudgets,
  // UNCATEGORIZED_BUDGET_ID,
} from "../Components/contexts/BudgetCont";
// import AddExpense from "../Components/contexts/AddExpense";
// import UncategorizedBudgetCard from "../Components/UncategorizedBudgetCard";
// import ViewExpense from "../Components/contexts/ViewExpense";
import TotalCard from "../Components/TotalCard";
import Chart from "../Components/Chart";

export default function InfoPage() {
  // const [Btn, setBtn] = React.useState(false);
  // const [showAddExpenseModal, setShowAddExpenseModal] = React.useState(false);
  // const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] =
  //   React.useState();
  // const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] =
  //   React.useState();
  const { budgets, getBudgetExpenses }: any = useBudgets();
  // const UncategorizedId: any = UNCATEGORIZED_BUDGET_ID;
  // function openAddExpenseModal(budgetId: any) {
  //   setShowAddExpenseModal(true);
  //   setAddExpenseModalBudgetId(budgetId);
  // }
  const login = localStorage.getItem("active");
  if (login != "true") {
    window.location.href = "/Login";
  }
  return (
    <>
      <div className="h-[55rem] max-sm:h-full flex justify-center items-center bg-[url('https://cdn.discordapp.com/attachments/1145734750921838642/1150502190297907361/Group_86.png')] bg-white bg-cover">
        <div className="h-[50rem] w-[90rem] max-sm:h-[100rem] max-sm:w-screen bg-[#d9d9d9] bg-opacity-30 rounded-3xl max-sm:rounded-none">
          {" "}
          <div className=" grid grid-cols-5 h-screen max-sm:flex max-sm:flex-col">
            <div className="  h-screen ">
              <SidePar />
            </div>
            <div className=" h-screen col-start-2 col-end-6 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:ml-0 ml-4 mb-40">
              <div className="flex">
                <h1 className="me-auto text-5xl my-10 ml-10 max-sm:ml-0 max-sm:me-0 max-sm:text-center">
                  Overview
                </h1>
              </div>

              <div className="flex flex-row max-sm:flex-col max-sm:items-center justify-evenly w-[70rem] max-sm:w-full   ">
                <div className=" w-[35rem] max-sm:w-full msx-sm:text-sm  ">
                  <TotalCard />

                  <div className="h-[23rem] w-[32rem] max-sm:w-full mt-8 overflow-auto">
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill,minmax(300px,1fr))",
                        gap: "1rem",
                        alignItems: "flex-start",
                      }}
                    >
                      {budgets.map((budget: any) => {
                        const money = getBudgetExpenses(budget.id).reduce(
                          (total: number, expense: any) =>
                            total + expense.amount,
                          0
                        );
                        return (
                          <div className="ml-16 max-sm:w-[20rem] max-sm:ml-10 w-[26rem]">
                            <Card
                              key={budget.id}
                              bg=""
                              name={budget.name}
                              money={money}
                              max_money={budget.max}
                              AddExOnCard={""}
                              ViewExpense={""}
                              hideBtn="True"
                            />{" "}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className=" w-[35rem] max-sm:w-[24rem]">
                  <div className="mt-4 mx-10 max-sm:mx-0 py-9 bg-white rounded-3xl px-10 flex justify-evenly max-sm:justify-around items-center max-sm:mt-10 gap-5 max-sm:gap-3">
                    <div className="flex hover:scale-110 flex-col justify-center text-center gap-5">
                      <p className=" text-gray-500  text-lg max-sm:text-sm ">
                        Your Salary
                      </p>
                      <p className=" text-xl font-semibold">
                        {localStorage.getItem("salary")}
                      </p>
                    </div>

                    <div className="flex flex-col hover:scale-110 justify-center text-center gap-5">
                      <p className=" text-gray-500 text-lg max-sm:text-sm ">
                        Saving Amount
                      </p>
                      <p className=" text-xl font-semibold">
                        {localStorage.getItem("saving")}
                      </p>
                    </div>

                    <div className="flex flex-col hover:scale-110 justify-center text-center gap-5">
                      <p className=" text-gray-500 text-lg max-sm:text-sm ">
                        Rest of Salary
                      </p>
                      <p className=" text-xl font-semibold">
                        {localStorage.getItem("rest")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 mx-16 max-sm:mx-0 bg-white rounded-3xl text-center">
                    <Chart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <AddBudget show={Btn} handleClose={() => setBtn(false)} />
      <AddExpense
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
      <ViewExpense
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId(undefined)}
      /> */}
    </>
  );
}
