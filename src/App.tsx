import React from 'react';
import './App.css';
import {Form} from "./Form";
import FormStore from "./store/form";

function App() {
  return (
      <div className="App">
        <Form FormStore={FormStore}/>
      </div>
  )
}

export default App;
