import React from "react";


export const Card = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="card">
          <img
            src="https://www.hemomadrid.com/wp-content/uploads/2015/09/imagen-vacia.jpg"
            className="card-img-top"
          />
        </div>
        <div style={{ textAlign: "center", width: 300 }}>
          <h1>Luke Skywalker</h1>
          <p>
            Luke Skywalker was a Tatooine farmboy who rose from humble
            beginnings to become one of the greatest Jedi the galaxy has ever
            known. Along with his friends Princess Leia and Han Solo, Luke
            battled the evil Empire, discovered the truth of his parentage, and
            ended the tyranny of the Sith.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <hr style={{ color: "red", width: 850, height: 3 }} />
      </div>
      <div style={{display: 'flex',gap: 50, justifyContent:'center', color: 'red' }}>
        <p >Name <br/> Luke Skywalker</p>
        <p>BirthYear <br/> 19BBY</p>
        <p> Gender<br/> male</p>
        <p>Height<br/> 172</p>
        <p>SkinColor<br/> fair</p>
        <p>Eye Color<br/> blue</p>
      </div>
    </>
  );
};
