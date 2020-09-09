import React from "react";
import logo from "../../images/fb.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 d-flex align-items-center header-logo">
            <img src={logo} alt="" />
            <input
              class="form-control ml-4"
              type="text"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="form-control btn-go" type="submit">
              Go
            </button>
          </div>
          <div className="col-md-6 text-right">
            <nav>
              <a href="/home">Home</a>
              <a href="/friends">Friend</a>
              <a href="/messages">Message</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
