import './App.css';
import { useState} from "react";

function App() {
  const [name, setName] = useState("");
 const [surname, setSurname] = useState("");
 const [age, setAge] = useState("");
 const [list, setList] = useState([]);

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name,surname,age);
  if (name && surname && age) {
    setList((ls) => [...list]);
    setName("");
    setSurname("");
    setAge("");

  }
 }

  return (
    <div className="form">
       <div>
     <input placeholder="Name" type="text"></input>
     </div>
     <div>
     <input placeholder="Surname" type="text"></input>
     </div>
     <div>
     <input placeholder="Age" type="number" id="age"></input>
     <button id="submit" id="submit">Submit</button>
     </div>
    </div>
  );
}

export default App;
