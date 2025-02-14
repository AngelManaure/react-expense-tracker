import { useGlobalState } from "../context/GlobalState";

export default function Balance() {
  const {transactions} = useGlobalState();

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className="flex justify-between">
      <h3 className="text-2xl">Balance</h3>
      <h1 className="text-2xl font-bold">${total}</h1>
    </div>
  );
}
