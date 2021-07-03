import React from "react";
import "./modal.css";

export function Modal({ setModal }) {
  return (
    <div className="container">
      <div className="Modal">
        <span onClick={() => setModal(false)}>X</span>
        <div className="inline">
          <h2>Você tem certeza que deseja continuar?</h2>
          <p>A próxima página é incrível. Acredito que você quer ir lá!</p>
          <div className="buttonsModal">
            <button onClick={() => setModal(false)} className="cancelModal">
              Cancel
            </button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
