import React from 'react';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const handleModeToggle = () => {
    props.toggleMode();
    props.showAlert(
      `${props.mode === 'light' ? 'Dark' : 'Light'} Mode enabled`,
      'info'
    );
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${
          props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TextUtils
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li> */}
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === 'light' ? 'dark' : 'light'
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={handleModeToggle}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}
              </label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className={`btn ${
                  props.mode === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'
                }`}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
