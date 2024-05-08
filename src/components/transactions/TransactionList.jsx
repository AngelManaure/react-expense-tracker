import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

export default function TransactionList() {
  const { transactions } = useGlobalState();

  return (
    <div>
      <h3 className="text-slate-300 text-xl font-bold w-full">Historial</h3>
      <ul className="grid grid-cols-2 gap-1">
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
}
