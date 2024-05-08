import { useGlobalState } from "../context/GlobalState";

export default function IncomeExpenses() {
  const divClass = "flex justify-between my-2"
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1;
  return (
    <>
      <div className={divClass}>
        <h4>ingresos</h4>
        <p>{income}</p>
      </div>
      <div className={divClass}>
        <h4>gastos</h4>
        <p>{expense}</p>
      </div>
    </>
  );
}
