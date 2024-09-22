import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{name: 'Art Helios', id:1}]);
  const [newName, setNewName] = useState("");

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handleButClick = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, id:persons.length+1};
    setPersons([...persons, newPerson]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {persons.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}

      <form onSubmit={handleButClick}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
    </div>
  );
};

export default App;