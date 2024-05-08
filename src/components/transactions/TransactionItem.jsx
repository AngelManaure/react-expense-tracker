import { useGlobalState } from "../../context/GlobalState";

export default function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="">{transaction.description}</p>
      <div>
        <span>${transaction.amount}</span>
        <button
          className="text-white px-2 rounded-full mx-1 bg-red-600"
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          X
        </button>
      </div>
    </li>
    
  );
}
