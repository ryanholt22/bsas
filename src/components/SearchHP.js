import React from "react"
import '../App.css';


function SearchHP() {
    return (
      <div>
      <div className="gb">Google Books</div>
      <button className="gb"><strong>Search</strong></button>
      <button className="gb">Saved</button>
      <hr></hr>
      <br></br>
      <div className="App">
        <h1 className="introone">(React) Google Book Search</h1>
        <h3>Search for and Save Books of Interest</h3>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <div id="seconddiv">
        <h3 className="inside">Book Search</h3>
        <p className="inside">Book</p>
        <input className="inside" id="book"></input>
        <button className="inside" id="srch">Search</button>
        <br></br>
        <br></br>
      </div>
      <div id="results">
        <h3>Results</h3>
        <div id="BookHere">
        <p>.</p>
        </div>
        <br></br>
      </div>
      </div>
    );
  }
  
  export default SearchHP;