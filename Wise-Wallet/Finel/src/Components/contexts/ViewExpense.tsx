import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./BudgetCont";
import { Currency } from "../Intlinfo";


export default function ViewExpense({ budgetId, handleClose }: any) {

  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense }: any =
  useBudgets();

  const expenses = getBudgetExpenses(budgetId);
  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b: any) => b.id === budgetId);


  return (
    <>
      {budgetId != null && (
        <div
          id="defaultModal"
          aria-hidden="true"
          className="flex justify-center fixed bg-black/25 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full"
        >
          <div className=" relative w-full max-w-2xl max-h-full">
            <div className="mt-40 ml-20 max-sm:ml-0  max-sm:w-auto h-fit w-[30rem] relative bg-white rounded-lg shadow">
              <div className="flex p-4  rounded-t ">
                <h3 className="m-5 text-3xl max-sm:text-xl max-sm:ml-0 max-sm:mt-0 font-semibold  text-gray-400 ">
                  Expenses - {budget?.name}
                </h3>
                <button
                  onClick={handleClose}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="h-[10rem] overflow-auto ">
                <div className="cursor-vertical-text gap-3 mt-12">
                  {expenses.map((expense: any) => (
                    <div className="flex p-4" key={expense.id}>
                      <div className="me-auto ml-2 text-xl font-bold ">
                        {expense.description}
                      </div>
                      <div className="mt-1 text-sm font-medium">
                        {Currency.format(expense.amount)}
                      </div>
                      <button
                        onClick={() => deleteExpense(expense)}
                        className="hover:scale-90 border-2 bg-red-600 ml-5 px-2 pb-1 font-bold text-white border-red-600 rounded-sm"
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-end my-10">
                {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                  <button
                    data-modal-hide="defaultModal"
                    onClick={() => {
                      deleteBudget(budget);
                      handleClose();
                    }}
                    className="hover:scale-90 ml-5 mb-10 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Delete
                  </button>
                )}
              </div>
              <p></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
