import "./App.css";
import React, {useState} from 'react';

function App() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="header">
      <div className="container">
        <h1>Logo</h1>
        <div className={menu ? "menu-section on":"menu-section"}>
          <div onClick={()=> setMenu(!menu)} className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contatos</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
