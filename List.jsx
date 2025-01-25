function List() {
  const fruit =
    [{ id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 54 },
    { id: 3, name: "cherry", calories: 45 },
    { id: 4, name: "coconut", calories: 66 },
    { id: 5, name: "elderberry", calories: 106 }];

  fruit.sort((a, b) => a.name.localeCompare(b.name));
  fruit.sort((a, b) => a.calories - b.calories);
  fruit.sort((a, b) => a.length - b.length);

  // const lowCalFruits = fruit.filter(fruit => fruit.id < 6); 
  
  
  
  const lowCalFruits = fruit.filter(fruit => fruit.calories < 100);
  const listItems = lowCalFruits.map(lowCalFruit =>
    <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp;
      <b>{lowCalFruit.calories}</b></li>);
  
  
  
  // const listItems = fruit.map(fruit => <li key={fruit.id}>{fruit.name}, &nbsp;<b>{fruit.calories}</b></li>);
  return (
    <>
      <ol>{listItems}</ol>
    </>
  );
}

export default List;
