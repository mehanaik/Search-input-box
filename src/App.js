import "./App.css";
import JSONDATA from "./Data1.json"
import {useState} from 'react'
import EnterKeypress from "./components/enterkeypress"
import Card from "./components/Card"
import Clicked from "./components/clicked"
import clicked from "./components/clicked";

//App function
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const empt="No User Found"
  return(
    <div className="App">
      <input 
      style={{border: 0, backgroundColor: "#E8E8E8", width:"100%"}}
      className="searchbox"
      type="text" 
      placeholder="Search id, name, address, pincode ..." 
      //onchange event
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
      onKeyPress=
      {(event) => {
        if (event.key === 'Enter') 
        {EnterKeypress()}
        }}
        />

      {/* filtering out data from the database */}
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.id.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        } else if (val.address.toLowerCase().includes(searchTerm.toLowerCase())) {
          return (val)
        } else if (val.pincode.toLowerCase().includes(searchTerm.toLowerCase())) {
          return (val)
        } 
      }).map((val,key) => {
        return(
          <div 
          className="user" 
          key={key}
          onClick={clicked}
          >
            <Card id= {val.id} name={val.name} address={val.address} pincode={val.pincode}/>
            <hr />
          </div>
        );
      })}

    </div>
  );
};

// const Handlekeypress = (event) => {
//   if (event.key === 'Enter') {
//     console.log("enter key pressed")
//     // let notesArr = this.state.notes;
//     // notesArr.push(this.state.noteText);
//     // this.setState({noteText:''});
//   }
// }

export default App;