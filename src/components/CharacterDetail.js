import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import home from "../stylesheets/img/home.jpg";

const CharacterDetail = (props) => {
  if (props.item === undefined) {
    return <h1>Ups! Wrong path</h1>;
  } else {
    console.log(props.item);
    return (
      <>
        <Link to="/" className="home_link" title="Home l">
          <img className="home_link__img" src={home} alt="Home img" />
          <p className="home_link__text">Home </p>
        </Link>
        <div className="card_detail">
          <div className="card_detail__container">
            <img
              className="card_detail__img"
              src={props.item.photo}
              alt={props.item.name}
            />
            <div className="card_text">
              <div className="card_title">
                <h2>{props.name}</h2>
              </div>
              <ul className="card_detail__list">
                <li>{`Status: ${props.item.status}`}</li>
                {props.item.status === "Alive" ? (
                  <i className="fas fa-heartbeat"></i>
                ) : (
                  <i className="fas fa-skull"></i>
                )}
                <li>{`Specie: ${props.item.species}`}</li>
                {props.item.species === "Human" ? (
                  <i className="fas fa-user"></i>
                ) : (
                  <i className="fas fa-rocket"></i>
                )}

                <li>{`Origin: ${props.item.origin}`}</li>
                <li>{`Episodes Nº: ${props.item.episodes.length}`}</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
};

CharacterDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  episodes: PropTypes.number,
};

export default CharacterDetail;
