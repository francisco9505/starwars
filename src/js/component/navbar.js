import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const favoritos = store.favoritos;

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-"
        style={{ justifyContent: "space-around", height: 100 }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbar-brand" href="#">
            Star Wars
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu">
            {favoritos.map((favorito, index) => (
              <li key={index}>
                <a className="dropdown-item" href="#">
                  {favorito.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
