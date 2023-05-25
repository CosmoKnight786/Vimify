import React from 'react'
import {Link } from 'react-router-dom';

export default function Navbar(props) {
  const mode = props.mode === "dark" ? "dark" : "light";
  const bgColor = mode === "dark" ? "#000" : "light";

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${bgColor} px-2`} style={mode === "dark" ? { border: "1px solid #fff" } : {}}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
    </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

        </ul>
        <div className="form-check form-inline form-switch ms-auto">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label className={`form-check-label text-${mode === "light" ? "dark" : "light"}`} htmlFor='flexSwitchCheckDefault' >Enable DarkMode</label>
        </div>

        {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      </div>
    </nav>
  )
}
