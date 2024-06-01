import React from 'react';

const Action = () => {
    return (
        <>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
            <form class="d-flex me-2" role="search">
              <input class="form-control me-2" type="search" placeholder="Search"  aria-label="Search"/>
              <button class="btn btn-success" type="submit">Search</button>
            </form>
            <div class="me-2">
              <button class="btn btn-success" type="submit">+Add</button>
            </div>
            <div class="position-relative" role="button">
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-success"
                >+99</span
              >
              <i class="bi bi-cart2 bg-success p-2 rounded-2 text-white"></i>
            </div>
          </div>
            
        </>
    );
}

export default Action;
