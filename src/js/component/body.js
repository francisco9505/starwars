import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Body = () => {
  const [iluminar, setIluminar] = useState("");
  const [starwars, setStarWars] = useState([]);
  const [planets, setPlanets] = useState([]);

  const { actions } = useContext(Context);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch("https://www.swapi.tech/api/planets", {
        method: "GET",
      });
      const data = await response.json();
      setPlanets(data.results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://www.swapi.tech/api/people", {
        method: "GET",
      });
      const data = await response.json();
      setStarWars(data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 style={{ marginLeft: 70, color: "red" }}>Characters</h1>
      <div className="container mb-3 mt-3">
        {starwars.map((character, index) => (
          <div className="card" key={index}>
            <img
              src={
                character.image ||
                "https://www.hemomadrid.com/wp-content/uploads/2015/09/imagen-vacia.jpg"
              }
              className="card-img-top"
              alt={character.name}
            />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">
                Gender: {character.gender}
                <br />
                Height: {character.height} cm
                <br />
                Mass: {character.mass} kg
              </p>
              
              <div style={{ justifyContent: "space-around", display: "flex" }}>
                
                <Link to="/c">
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </Link>
                <button
                  className={`heart ${iluminar} `}
                  onClick={() => actions.addFavorite(character)}
                >
                  {" "}
                  <i className="icon fa fa-heart text-danger" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 style={{ marginLeft: 70, color: "red" }}>Planets</h1>
      <div className="container ">
        {console.log(planets)}
        {planets.map((planet) => (
          <div className="card" key={planet.name}>
            <img
              src="https://www.hemomadrid.com/wp-content/uploads/2015/09/imagen-vacia.jpg"
              className="card-img-top"
              alt={planet.name}
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text">
                Population: {planet.population}
                <br />
                Terrain: {planet.terrain}
                <br />
              </p>
              <div style={{ justifyContent: "space-around", display: "flex" }}>
              <Link to="/u">
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </Link>
                <button
                  className={`heart ${iluminar} `}
                  onClick={() => actions.addFavorite(planet)}
                >
                  {" "}
                  <i className="icon fa fa-heart text-danger" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
