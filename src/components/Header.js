import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
          <a class="navbar-brand text-white font-weight-bold" href="#" style = {{paddingRight  : "20px" }}>
            CovidTracker
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent" style= {{float : "right"}} >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white"
                  href="https://www.linkedin.com/in/arghyadev-sarkar/"
                >
                  My LinkedIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
