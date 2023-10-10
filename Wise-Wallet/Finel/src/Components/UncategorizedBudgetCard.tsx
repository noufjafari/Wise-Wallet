// import Card from "./Card";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./contexts/BudgetCont";

export default function UncategorizedBudgetCard() {
  const { getBudgetExpenses }: any = useBudgets();
  const money = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total: number, expense: any) => total + expense.amount,
    0
  );
  if (money == 0) return null;

  return;
}
