import { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState("");
 const [surname, setSurname] = useState("");
 const [age, setAge] = useState("");
 const [radioButtons, setRadioButtons] = useState("");
 const [list, setList] = useState([]);


const nameHandler = (e) => {
  setName(e.target.value)
}

const surnameHandler = (e) => {
  setSurname(e.target.value)
}

const ageHandler = (e) => {
  setAge(e.target.value)
}

const radiobuttonHandler = (e) => {
  setRadioButtons(e.target.value)
}



 const handleSubmit = (e) => {
  e.preventDefault();
    setList([...list, {firstname: name},{lastname: surname},{age: age},{trans: radioButtons}]);
    setName("");
    setSurname("");
    setAge("");
    setRadioButtons("");
 }

console.log(list)


  return (
    <div className="form">
      <h1>React Form</h1>
       <div>
     <input placeholder="Name" type="text" name={name} onChange={nameHandler} ></input>
     </div>
     <div>
     <input placeholder="Surname" type="text" name={surname} onChange={surnameHandler}></input>
     </div>
     <div>
     <input placeholder="Age" type="number" id="age" name={age} onChange={ageHandler}></input>
     <button id="submit" onClick={handleSubmit}>Submit</button>
     </div>


    <div>
     <div>
      <p>Do You Have Transport</p>
    </div>

    <div>
      <input type="checkbox" name={radioButtons} onChange={radiobuttonHandler}></input>
      <label>Yes</label>
    </div>

    <div>
     <input type="checkbox" name={radioButtons} onChange={radiobuttonHandler}></input>
     <label>No</label>
    </div>
   </div>
    </div>
  );
}

export default App;
