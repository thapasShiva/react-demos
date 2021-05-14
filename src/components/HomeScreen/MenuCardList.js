import React from "react";
import PropTypes from "prop-types";

import MenuCard from "./MenuCard";
import { HomeCardData } from "../../mockdata/HomeCardData";

const MenuCardList = (props) => {
  console.log(
    "%c%s",
    "color: #48ff00",
    "------------------------------------------"
  );
  console.log(HomeCardData?.length);

  const generateList =  HomeCardData.map((item, index) => 
    <div className="col-4">
          <MenuCard 
    cardTitle = {item.cardTitle}
    cardSubtitle = {item.cardSubtitle}
    cardDesc = {item.cardDesc}
    bgColor = {item.bgColor}
    />
    </div>
  );

  return (
    <section>
      <div className="row gx-3 gy-3">{generateList}</div>
    </section>
  );
};

MenuCardList.propTypes = {};

export default MenuCardList;
