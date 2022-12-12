import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="centered-main">
      <h1>Ready to start investing?</h1>
      <h4>Run a custom scenario now:</h4>
      <form className="calc-inputs">
        <div className="row">
          <div className="col">
            <input type="number" className="form-control monthly-input" placeholder="Monthly investment (USD)" />
          </div>
          <div className="col">
            <input type="number" className="form-control year-input" placeholder="Year started" min="1990" max="2022"/>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-dark submit-button">Run Scenario</button>
          </div>
        </div>
      </form>
    </div>
  );
};
