import { GlobalProvider } from "./context/GlobalState";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenceChart from "./components/ExpenceChart";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/5">
          <Header />

          <div className="bg-zinc-800 p-10 rounded-b-lg flex gap-x-5">
            <div>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
              <ExpenceChart />
            </div>
        <TransactionList />

          </div>
        </div>

      </div>
    </GlobalProvider>
  );
}

export default App;
