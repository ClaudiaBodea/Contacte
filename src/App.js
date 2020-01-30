import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacte: [
        { nume: "Ionescu", prenume: "Mircea", tel: "0745543432", id: 1 },
        { nume: "Avram", prenume: "Andreea", tel: "0723143768", id: 2 },
        { nume: "Popa", prenume: "Cristian", tel: "0761980654", id: 3 }
      ]
    };

    this.stergeContact = this.stergeContact.bind(this);
  }

  stergeContact(ev) {
    const idSup = parseInt(ev.target.id);
    const { contacte } = this.state;
    const sirNou = contacte.filter(item => {
      return item.id !== idSup;
    });
    this.setState({
      contacte: sirNou
    });
  }
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
