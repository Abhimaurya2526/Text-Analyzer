import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header">
      <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="">
            Text Analyzer
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/editor">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <div className="form-check form-switch d-flex flex-wrap">
              <input
                onClick={props.toggle}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
