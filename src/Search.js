import React, { Component } from "react"
import JSONDATA from "./Data1.json"
import {useState} from 'react'

function Search () {
const [searchTerm, setSearchTerm] = useState('')
  return(
    <div className="App">
      <input 
      style={{border: 0, backgroundColor: "#E8E8E8"}}
      className="searchbox"
      type="text" 
      placeholder="Search id, name, address ..." 
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
      />

      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val } 
          else if (val.id.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val } 
          else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val} 
          else if (val.address.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val }
      }).map((val,key) => {
        return(
          <div 
          className="user" 
          key={key}
          >
            <h3>{val.id}</h3>
            <p><i>{val.name}</i></p>
            <p>{val.address}</p>
            <p>{val.pincode}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Search






// import React from 'react';
// import '../Style.css';

// class Search extends React.Component {
// 	constructor( props ) {
// 		super( props );
// 		this.state = {
// 			query: '',
// 			results: {},
// 			loading: false,
// 			message: '',
// 		};
// 	}
// 	render() {
// 		return (
// 			<div className="container">
// 				{/*Heading*/}
// 				<h2 className="heading">Search React Application</h2>
// 				{/*Search Input*/}
// 				<label className="search-label" htmlFor="search-input">
// 					<input
// 						type="text"
// 						value=""
// 						id="search-input"
// 						placeholder="Search..."
// 					/>
// 				</label>
// 			</div>
// 			)
// 	}
// }
// export default Search;