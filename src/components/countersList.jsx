import React, { useState } from "react";
import Counter from "./counter";
const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (iden) => {
    const newCountersOne = counters.map((obj) => {
      if (obj.id === iden) {
        obj.value += 1;
      }
      return obj;
    });
    setCounters(newCountersOne);
  };

  const handleDencrement = (iden) => {
    const newCountersTwo = counters.map((objtwo) => {
      if (objtwo.id === iden) {
        objtwo.value = objtwo.value - 1;
      }
      return objtwo;
    });
    setCounters(newCountersTwo);
  };

  return (
    <>
      {counters.map((count) => {
        return (
          <Counter
            key={count.id}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDencrement}
            {...count}
          />
        );
      })}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CountersList;
