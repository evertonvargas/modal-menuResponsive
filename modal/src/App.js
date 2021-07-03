import "./App.css";
import React, { useState } from "react";
import { Modal } from "./components/Modal"

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <h1>Vamos fazer um modal</h1>
      <button onClick={() => setModal(!modal)}>Open Modal</button>
      {modal && <Modal setModal={setModal}/>}
    </div>
  );
}

export default App;
