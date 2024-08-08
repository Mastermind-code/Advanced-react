import { useState } from "react";
import { data } from "../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeAllItems = () => {
    setPeople([]);
  };
  const removeItem = (id) => {
    const newProple = people.filter((person) => person.id !== id);
    setPeople(newProple);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              onClick={() => {
                removeItems(id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        onClick={() => removeAllItems()}
        style={{ marginTop: "2rem" }}
      >
        Remove all
      </button>
      ;
    </>
  );
};

export default UseStateArray;
