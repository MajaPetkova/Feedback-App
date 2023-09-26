import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const expenses = [
    { id: 123456789, name: "Shopping", cost: 50 },
    { id: 123456789, name: "Holiday", cost: 350 },
    { id: 123456789, name: "Transportation", cost: 78 },
    { id: 123456789, name: "Fuel", cost: 60 },
    { id: 123456789, name: "Child Care", cost: 500 },
  ];
  return (
    <ul>
      {expenses.map((x) => (
        <ExpenseItem key={x.id} name={x.name} cost={x.cost}/>
      ))}
    </ul>
  );
}

export default ExpenseList;
