import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export default function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const inputClass =
    "bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full";

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)}
          className={inputClass}
        />
        <input
          type="number"
          step="0.01"
          placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)}
          className={inputClass}
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
          Add transaction
        </button>
      </form>
    </div>
  );
}
