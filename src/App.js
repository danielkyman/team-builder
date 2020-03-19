import React from 'react';
import {useState} from 'react';
import Form from "./Form";
import './App.css';

function App() {

  const [users, setUsers] = useState({});

  return (
    <div className="App">
        <h1>Hello</h1>
        <Form addUser={setUsers} users={users}/>
    </div>
  );
}

export default App;
