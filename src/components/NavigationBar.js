import React, { useState } from "react";

const NavigationBar = () => {
  const [myAccountOpen, setMyAccountOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Logo Placeholder (Replace with your logo image) */}
      <a className="navbar-brand" href="#">
        <span>SecureVision</span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mainNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              How It Works
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              onClick={() => setMyAccountOpen(!myAccountOpen)}
            >
              <i className="fas fa-user"></i> My Account
            </a>
            <div className={`dropdown-menu ${myAccountOpen ? "show" : ""}`}>
              <a className="dropdown-item" href="#">
                Dashboard
              </a>
              <a className="dropdown-item" href="#">
                Account
              </a>
              <a className="dropdown-item" href="#">
                Get Help
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
            >
              <i className="fas fa-sign-in-alt"></i> Sign In / Login
            </a>
            <div className="dropdown-menu">
              {/* Placeholder options for Sign In methods (Replace with functionality later) */}
              <a className="dropdown-item" href="#">
                <i className="fab fa-google"></i> Google
              </a>
              <a className="dropdown-item" href="#">
                <i className="fab fa-apple"></i> Apple
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-phone"></i> Phone Number
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-envelope"></i> Email
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
