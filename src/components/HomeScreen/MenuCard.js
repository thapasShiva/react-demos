import React from "react";
import PropTypes from "prop-types";

const MenuCard = (props) => {
  const { cardTitle, cardSubtitle, cardDesc, bgColor } = props;

  return (
    <section>
      <div className={`card shadow ${bgColor}`}>
        <div className="card-body">
          <h3 className="card-title">{cardTitle}</h3>
          <h6 className="card-subtitle mb-2 text-muted">{cardSubtitle}</h6>
          <p className="card-text">{cardDesc}</p>
          <ul class="list-group list-group-flush">
    <li class="list-group-item"><a class="card-link">Admin Dashboard</a></li>
    <li class="list-group-item"><a class="card-link">Admin Dashboard</a></li>
    <li class="list-group-item"><a class="card-link">Admin Dashboard</a></li>
    <li class="list-group-item"><a class="card-link">Admin Dashboard</a></li>
  </ul>
        </div>
      </div>
    </section>
  );
};

MenuCard.propTypes = {};

export default MenuCard;
