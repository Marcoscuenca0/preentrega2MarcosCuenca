import React from 'react';

import { Link } from 'react-router-dom';
import CartWidget from './Cartwidget';

function ColorSchemesExample() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Celutronic</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categoria/celulares">Celulares</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categoria/notebook">Notebook</Link>
        </li>
      <CartWidget/>
      </ul>
    </div>
  </div>
</nav>


    </>
)  
}

export default ColorSchemesExample;