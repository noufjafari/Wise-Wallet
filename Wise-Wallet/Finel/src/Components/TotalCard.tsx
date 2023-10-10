import { useBudgets } from "./contexts/BudgetCont";
import { Currency } from "./Intlinfo";
import { useEffect, useState } from "react";
import CustomAlert from "./CustomAlert";

export default function TotalCard() {
  const [showAlert, setShowAlert] = useState(false);

  function progressPar(money: number, max_money: number) {
    const progress = money / max_money;
    if (progress < 0.5) return "bg-green-600 ";
    if (progress < 0.75) return "bg-yellow-400 ";
    return "bg-red-600";
  }

  ////////////////////////////////////////////////////////
  const { budgets }: any = useBudgets();

  const max = budgets.reduce(
    (total: number, budgets: any) => total + budgets.max,
    0
  );

  const total: any = localStorage.getItem("rest");
  ////////////////////////////////////////////////
  const classNames = [];
  if (max > total) {
    classNames.push("bg-red-600/60");
  }
  //////////////////////////////////////////////////////
  useEffect(() => {
    // Show a custom alert when money exceeds max_money
    if (max > total) {
      setShowAlert(true);
    } else {
      setShowAlert(false); // Close the alert when money is within the limit
    }
  }, [max, total]);
  return (
    <div
      className={`mt-4 mx-10 py-5 max-sm:mx-1   bg-white rounded-3xl px-10  ${classNames.join(
        " "
      )}`}
    >
      <div className="flex justify-between max-sm:text-sm items-baseline ">
        <h1 className="me-2 text-xl max-sm:text-sm font-semibold">
          Rest of Salary
        </h1>
        <div className="flex items-baseline">
          {Currency.format(max)}
          {total && (
            <span className="text-black/50 text-xs ms-1">
              / {Currency.format(total)}
            </span>
          )}
        </div>
      </div>
      {total && (
        <div
          className={`w-full bg-gray-200 rounded-full h-2.5 overflow-hidden mt-5`}
        >
          <div
            className={`h-2.5 rounded-full transition-all duration-300 ease-in-out ${progressPar(
              max,
              total
            )}`}
            style={{
              width: `${(max / total) * 100}%`,
            }}
          ></div>
        </div>
      )}{" "}
      {showAlert && (
        <div className="mt-2">
          <CustomAlert message={`Total budget has exceeded its limit!`} />
        </div>
      )}
    </div>
  );
}
