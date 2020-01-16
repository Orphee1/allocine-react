import React, { useState, useEffect } from "react";
import "../App.css";

const Card = props => {
      return (
            <div className="card">
                  <div className="bloc-image">
                        <img
                              src={
                                    "https://image.tmdb.org/t/p/w370_and_h556_bestv2" +
                                    props.src
                              }
                              alt="poster"
                        />
                  </div>
                  <div className="bloc-news m-10">
                        <div className="bloc-title m-5">
                              <div className="title m-5">{props.title}</div>
                              <div className="date m-5">{props.date}</div>
                        </div>
                        <div className="bloc-text">{props.story}</div>
                  </div>
            </div>
      );
};

export default Card;
