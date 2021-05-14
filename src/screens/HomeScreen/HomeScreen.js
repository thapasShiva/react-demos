import React from "react";
import PropTypes from "prop-types";

import NavBar from "../../components/Common/NavBar";
import MenuCardList from "../../components/HomeScreen/MenuCardList"

const HomeScreen = (props) => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <aside className="col-2 vh-100 d-inline-block bg-primary">
            <h3>Side Nav</h3>
          </aside>
          <main className="col-10">
            <header>
              <NavBar />
            </header>
            <section className="mt-4">
                <MenuCardList/>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
