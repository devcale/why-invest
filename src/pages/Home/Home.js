import React, { useState } from "react";
import "./Home.css";

export const Home = () => {
  const [data, setData] = useState({
    monthly: "10",
    year: "1990",
    rate: "5",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const getInvestment = (monthly, year, rate) => {
    let result = 0;
    if (year >= 1990) {
      let yearly = monthly * 12;
      result = yearly;
      let increment = 1 + rate / 100;
      let periods = new Date().getFullYear() - year;
      for (let i = 0; i < periods; i++) {
        result = (result * increment) + yearly;
        
      }
      result = result.toFixed(2);
    }
    return result;
    // let yearlyInvestment = data.monthly*12;
    // let totalInvestment = 0;
    // let currentYear = new Date().getFullYear();
    // let periods = currentYear - data.year();

    // for (let year = 0; year < periods; year++) {
    //     totalInvestment = totalInvestment*(1+(data.rate/100)) + yearlyInvestment;

    // }
    // return totalInvestment;
  };

  return (
    <div className="centered-main">
      <h1>Ready to start investing?</h1>
      <h4>Run a custom scenario now:</h4>
      <form className="calc-inputs">
        <div className="row">
          <div className="col-md-5">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">$</div>
              </div>
              <input
                type="number"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Monthly investment (USD)"
                min={0}
                name="monthly"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">%</div>
              </div>
              <input
                type="number"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Rate"
                min={0}
                name="rate"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Year started"
              min="1990"
              max="2022"
              name="year"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>

      <div className="results">
        {" "}
        If you had started investing ${data.monthly} every month in {data.year}{" "}
        with {data.rate}% interest rate, you would have $
        {getInvestment(data.monthly, data.year, data.rate)} by now.
      </div>
      <div className="results">
        {" "}
        If you had started saving up ${data.monthly} every month in {data.year},
        you would have ${data.monthly * 12 * (2023 - data.year)} by now.
      </div>
    </div>
  );
};
