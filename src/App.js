import "./App.css";
import JSONDATA from "./Data1.json"
import {useState} from 'react'
import EnterKeypress from "./components/enterkeypress"
import Card from "./components/Card"
import Clicked from "./components/clicked"
import clicked from "./components/clicked";

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return(
    <div className="App">
      <input 
      style={{border: 0, backgroundColor: "#E8E8E8", width:"100%"}}
      className="searchbox"
      type="text" 
      placeholder="Search id, name, address, pincode ..." 
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
      onKeyPress=
      {(event) => {
        if (event.key === 'Enter') 
        {EnterKeypress()}
        }}
        />
    

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



// import React, {Component} from "react"
// class App extends Component{
//   constructor() {
//     super()
//     this.state = {
//       loading: false,
//       character: {}
//     }
//   }

//   componentDidMount(){
//     this.setState({loading: true})
//     fetch("http://www.mocky.io/v2/5ba8efb23100007200c2750c")
//     .then(response => response.json())
//     .then(data => {
//       this.setState({
// 		loading: false,
//         character: data,
//       })
// 	})
// 	console.log("Changed",this.state.character.id)
//   }

//   render(){
//     const text = this.state.loading? "Loading..." : this.state.character.id
//     return(
//       <div>
//         <h1>{text}</h1>
//       </div>
//     )
//   }

// }
// export default App 




//mapping=============================================================================================================
// class App extends React.Component{
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(id) {
//     //console.log("Changed",id)
//     this.setState(prevState => {
//       const updatedTodos = prevState.todos.map(todo => {
//         if (todo.id ===id) {
//           todo.completed = !todo.completed
//         }
//         return todo
//       })
//       return {
//         todos: updatedTodos
//       }
//     })
//   }