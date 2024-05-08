import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

export default function ExpenceChart() {
  const { transactions } = useGlobalState();
  // const total = transactions.reduce(
  //   (acc, transaction) => (acc += transaction.amount),
  //   0
  // );

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentage = Math.round((totalExpense / totalIncome) * 100);

  const totalIncomePercentage = 100 - totalExpensesPercentage

  return (
    <VictoryPie
      height={400}
      colorScale={["#e76c13", "#2ecc71"]}
      data={[
        { x: "Gastos", y: totalExpensesPercentage },
        { x: "Ingresos", y: totalIncomePercentage },
      ]}
      animate={{
        duration: 200,
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
}
