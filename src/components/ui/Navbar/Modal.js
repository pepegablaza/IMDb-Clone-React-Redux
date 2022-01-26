import React from "react";
import { Link } from "react-router-dom";
import ModalLink from "./ModalLink";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="nav">
          <ModalLink handleClick={setShowModal} to={"/"}>
            <span className="logo">IMDb</span>
          </ModalLink>

          <span className="close" onClick={() => setShowModal(false)}>
            <i className="fas fa-times"></i>
          </span>
        </div>
        <div className="menu">
          <div className="item">
            <div className="icon">
              <i className="fas fa-film"></i>
            </div>
            <div className="data">
              <h3>Movies</h3>
              <ModalLink handleClick={setShowModal} to={"/movies/coming-soon"}>
                <p>Coming Soon</p>
              </ModalLink>
              <ModalLink handleClick={setShowModal} to={"/movies/top-rated"}>
                <p>Top Movies</p>
              </ModalLink>
              <ModalLink handleClick={setShowModal} to={"/movies/most-popular"}>
                <p>Most Popular</p>
              </ModalLink>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <i className="fas fa-tv"></i>
            </div>
            <div className="data">
              <h3>TV Shows</h3>
              <ModalLink
                handleClick={setShowModal}
                to={"/tv-shows/coming-soon"}
              >
                <p>Coming Soon</p>
              </ModalLink>
              <ModalLink handleClick={setShowModal} to={"/tv-shows/top-rated"}>
                <p>Top TV Shows</p>
              </ModalLink>
              <ModalLink
                handleClick={setShowModal}
                to={"/tv-shows/most-popular"}
              >
                <p>Most Popular</p>
              </ModalLink>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <i className="fas fa-user-friends"></i>
            </div>

            <div className="data">
              <h3>Celebs</h3>

              <ModalLink handleClick={setShowModal} to={"/people/latest"}>
                <p>Latest</p>
              </ModalLink>
              <ModalLink handleClick={setShowModal} to={"/people/popular"}>
                <p>Most Popular Celebs</p>
              </ModalLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
