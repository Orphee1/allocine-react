import React, { useState, useEffect } from "react";
import Logo from "./icons/logo.svg";

import Card from "./components/Card";

import "./App.css";
import Axios from "axios";

function App() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("popular");

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        "https://api-allocine.herokuapp.com/api/movies/" + selectedTab
      );
      setMovies(response.data.results);
      setLoading(false);
    } catch (e) {
      alert("An error occured");
    }
  };

  useEffect(() => {
    fetchData(selectedTab);
  }, [selectedTab]);

  return (
    <header className="yellow">
      <div className="container yellow header pv-32">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <section className="grey">
        <div className="top-bar grey">
          <div className="container">
            <ul className="menu">
              <li
                className={
                  selectedTab === "popular" ? "selected" : "unselected"
                }
                onClick={() => {
                  setSelectedTab("popular");
                }}
              >
                Popular Movies
              </li>
              <li
                className={
                  selectedTab === "upcoming" ? "selected" : "unselected"
                }
                onClick={() => {
                  setSelectedTab("upcoming");
                }}
              >
                Upcoming Movies
              </li>
              <li
                className={
                  selectedTab === "top_rated" ? "selected" : "unselected"
                }
                onClick={() => {
                  setSelectedTab("top_rated");
                }}
              >
                Top Rated Movies
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom grey">
          {loading === true ? (
            <div class="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <div className="container card-container">
              {movies.map((movie, index) => {
                return (
                  <Card
                    key={index}
                    src={movie.poster_path}
                    title={movie.title}
                    date={movie.release_date}
                    story={movie.overview}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </header>
  );
}

export default App;
