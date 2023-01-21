import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import ScrollEfect from "../Data/Script";
import images from "../assets/img/logo.png";
import "../Pages/Home/mainstyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/navstyle.css";

export function Navbar() {

  //

  return (
    <div className="head">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" id="cambio" href="/">
            <img src='https://i.imgur.com/HU3q40M.png' height={60} alt="logo" className='ms-5' id='logo'/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 me-5">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={"/"}>
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item dropdown ms-2">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to={"/catalogo"}
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pasteles
                  </NavLink>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        href="/Principal/indexprofile.html"
                      >
                        Pastel 1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to={"/catalogo"}>
                        Pastel 2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to={"/catalogo"}>
                        Pastel 3
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ms-2">
                  <NavLink className="nav-link" to={"/historia"}>
                    Historia
                  </NavLink>
                </li>
                <li className="nav-item ms-2">
                  <NavLink className="nav-link" to={"/contacto"}>
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
