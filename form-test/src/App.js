// import { useState } from "react";
// import './App.css';

// function App() {
//  const [form,setform] = useState({firstName:'',surname:'',age:'',trasport:''})
//  const [list, setList] = useState([]);


// const handlechange = (e) =>{
//   setform({...form,[e.target.name]:e.target.value})
// }

//  const handleSubmit = (e) => {
//   e.preventDefault();
//     setList([...list, form]);
//     setform({
//       firstName:"",
//       surname:"",
//       age:"",
//       trasport:"",
//     });
//  }

// console.log(list)


//   return (
//     <div className="form">
//       <h1>React Form</h1>
//        <div>
//      <input placeholder="Name" type="text" name={'firstName'} value={form.firstName} onChange={handlechange} ></input>
//      </div>
//      <div>
//      <input placeholder="Surname" type="text" name={'surname'} value={form.surname} onChange={handlechange}></input>
//      </div>
//      <div>
//      <input placeholder="Age" type="number" id="age" name={'age'} value={form.age} onChange={handlechange}></input>
//      </div>

//      <div>
//      <div>
//       <p>Do You Have Transport</p>
//     </div>

//     <div>
//       <input type="checkbox" value="yes" name={"trasport"} onChange={handlechange} checked={form.trasport ==="yes"}></input>
//       <label>Yes</label>
//     </div>

//     <div>
//      <input type="checkbox" value="no" name={"trasport"} onChange={handlechange} checked={form.trasport ==="no"}></input>
//      <label>No</label>
//     </div>
//    </div>

//    <div>
//      <button id="submit" onClick={handleSubmit}>Submit</button>
//      </div>

 
    
//     </div>
//   );
// }

// export default App;

import Timer from "../src/Timer"
import { useState } from "react";
import './App.css';


function App() {
 

  return (
    <div className="form">
    
    < Timer />
    </div>
  );
}

export default App;
