import React, { useState } from "react";
import "./Home.css";

export const Home = () => {
  const [data, setData] = useState({
    monthly: "10",
    startYear: "1990",
    endYear: new Date().getFullYear(),
    rate: "5",
  });

  const sp500 = {
    1990: -6.56,
    1991: 26.31,
    1992: 4.46,
    1993: 7.06,
    1994: -1.54,
    1995: 34.11,
    1996: 20.26,
    1997: 31.01,
    1998: 26.67,
    1999: 19.53,
    2000: -10.14,
    2001: -13.04,
    2002: -23.37,
    2003: 26.38,
    2004: 8.99,
    2005: 3.0,
    2006: 13.62,
    2007: 3.53,
    2008: -38.49,
    2009: -23.45,
    2010: 12.78,
    2011: 0,
    2012: 13.41,
    2013: 29.6,
    2014: 11.39,
    2015: -0.73,
    2016: 9.54,
    2017: 19.42,
    2018: -6.24,
    2019: 28.88,
    2020: 16.26,
    2021: 26.89,
    2022: -17.45,
  };

  const handleInputChange = (event) => {
    let checks = true;
    if (
      event.target.name === "startYear" &&
      (event.target.value < 1990 ||
        event.target.value > new Date().getFullYear())
    ) {
      checks = false;
    }
    if (event.target.name === "monthly" && event.target.value < 0) {
      checks = false;
    }

    if (checks) {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    }
  };

  const getInvestment = (monthly, startYear, endYear, rate) => {
    let result = 0;
    let yearly = monthly * 12;
      result = yearly;
      let increment = 1 + rate / 100;
      for (let i = startYear; i < endYear; i++) {
        result = result * increment + yearly;
      }
      result = result.toFixed(2);
    return result;
  };

  const getSP = (monthly, startYear, endYear) => {
    let result = 0;
    let actualYear = new Date().getFullYear();

    if(endYear>actualYear)
    {
        endYear = actualYear
    }
    
    let yearly = monthly * 12;
    result = yearly;
    let increment = 0;
    for (let i = startYear; i < endYear; i++) {
      increment = 1 + sp500[i] / 100;
      result = result * increment + yearly;
    }
    result = result.toFixed(2);

    return result;
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <div className="centered-main">
        <h1>Ready to start investing?</h1>
        <h4>Run a custom scenario now:</h4>
        <form className="calc-inputs">
          <div className="row justify-content-center">
            <div className="col-md-4 ">
              <div className="input-group mb-2 input-field">
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

            <div className="col-md-2 ">
              <div className="input-group mb-2 input-field">
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

            <div className="col-md-2">
              <input
                type="number"
                className="form-control input-field"
                placeholder="Year started"
                min="1990"
                max="2022"
                name="startYear"
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-2">
              <input
                type="number"
                className="form-control input-field"
                placeholder="End year"
                min="1990"
                name="endYear"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
      </div>

      <div className="results-section">
        <div className="flex-container">
          <div className="result-box">
            <div className="big-number">
              ${numberWithCommas(getInvestment(data.monthly, data.startYear, data.endYear, data.rate))}
            </div>
            <div className="box-title">Custom scenario</div>
            <div className="results">
              {" "}
              Had you started investing ${data.monthly} every month since{" "}
              {data.startYear} with {data.rate}% interest rate, you would have $
              {numberWithCommas(getInvestment(data.monthly, data.startYear, data.endYear, data.rate))} by {data.endYear}.
            </div>
          </div>
          <div className="result-box">
            <div className="big-number">${numberWithCommas(getSP(data.monthly, data.startYear, data.endYear))}</div>
            <div className="box-title">S&P500 scenario</div>
            <div className="results">
              {" "}
              Had you started investing ${data.monthly} every month since{" "}
              {data.startYear} in S&P500, you would have $
              {numberWithCommas(getSP(data.monthly, data.startYear, data.endYear))} by {data.endYear}.
            </div>
          </div>
          <div className="result-box">
            <div className="big-number">
              ${numberWithCommas(data.monthly * 12 * (data.endYear - data.startYear))}
            </div>
            <div className="box-title">Savings scenario</div>
            <div className="results">
              {" "}
              Had you started saving up ${data.monthly} every month since{" "}
              {data.startYear}, you would have $
              {numberWithCommas(data.monthly * 12 * (data.endYear - data.startYear))} by {data.endYear}.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
