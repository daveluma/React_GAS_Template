import { useLayoutEffect, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  // Determine which Nav item is active
  // Get all buttons with className="btn" inside the container
  let btns = document.getElementsByClassName("nav-link");
  const [darkOn, setDarkOn] = useState(false);

  //Nav parts
  const navTitles = ["Home", "About Me"];
  const navLinks = ["home", "about"];

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");

      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }

  useLayoutEffect(() => {
    if (localStorage.getItem('color_mode') == "dark") {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      setDarkOn(true);
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      setDarkOn(false);
    }
  }, []);

  useEffect(() => {
  }, [darkOn]);

  function toDark() {
    // dark theme
    localStorage.setItem('color_mode', 'dark');
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    setDarkOn(true);
  }

  function toLight() {
    // dark theme
    localStorage.setItem('color_mode', 'light');
    document.documentElement.setAttribute('data-bs-theme', 'light');
    setDarkOn(false);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <a className="navbar-brand">
            <img src="" alt="place_logo" width="30" height="30" className="d-inline-block align-text-top mx-2" />
            React GAS Template
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* part that will collapse when the navbar gets too small */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navTitles.map((title, index) => {
                        return <li className="nav-item">
                            <Link to={navLinks[index]} className="nav-link" aria-current="automations">{title}</Link>
                        </li>
                })}
            </ul>

            <p className="mx-2 mb-2 mb-lg-0"></p>
            {(darkOn == true) ?
              //light mode icon
              <button className="btn bg-secondary" title="Change to light mode" aria-label="Change to light mode" onClick={() => toLight()} onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // console.log("e.key", e.key)
                  toLight();
                } else {
                  // console.log("e.key", e.key)
                }
              }} >
                <><svg className="dark-mode-size" aria-current="light-mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFFFFF" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" /></svg></>
              </button>

              :
              //dark mode icon
              <button className="btn bg-secondary" title="Change to dark mode" aria-label="Change to dark mode" onClick={() => toDark()} onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // console.log("e.key", e.key)
                  toDark();
                } else {
                  // console.log("e.key", e.key)
                }
              }} >
                <><svg className="dark-mode-size" aria-current="dark-mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z" /></svg></>
              </button>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar