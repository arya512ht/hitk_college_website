import React, { useState } from "react";
import Food from "./Food";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeHero from "./HomeHero";
import "./Food.css";

const Canteen = () => {
  const [data, setItem] = useState(Food);

  const filterItem = (cateelemt) => {
    const updateItem = Food.filter((currelem) => {
      return currelem.category === cateelemt;
    });

    setItem(updateItem);
  };

  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg="images/canteen0.avif"
        title="Canteen"
        btnClass="hide"
      />
      <div className="container-fluid">
        <div className="row" id="res">
          <div className="col-12">
            <navbar className="navbar navbar-expand-lg navbar-light bg-light">
              <h1 className="navbar-brand">Today's Menu</h1>
              <button
                className="navbar-toggler btn btn-warning"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                    <button className="btn btn-warning" onClick={() => setItem(Food)}>All Food</button>
                  </li>
                  <li className="nav-item active">
                    <button className="btn btn-warning" onClick={() => filterItem("Break Fast")}>BreakFast</button>
                  </li>
                  <li className="nav-item active">
                    <button className="btn btn-warning" onClick={() => filterItem("Snacks")}>Snacks</button>
                  </li>
                  <li className="nav-item active">
                    <button className="btn btn-warning" onClick={() => filterItem("Fast Food")}>FastFood</button>
                  </li>
                  <li className="nav-item active">
                    <button className="btn btn-warning" onClick={() => filterItem("Lunch Veg")}>Lunch Veg</button>
                  </li>
                  <li className="nav-item active">
                    <button className="btn btn-warning" onClick={() => filterItem("Lunch NonVeg")}>Lunch NonVeg</button>
                  </li>
                  <li className="nav-item active">
                    <button className="btn btn-warning" onClick={() => filterItem("Drinks")}>Drinks</button>
                  </li>
                </ul>
              </div>
            </navbar>
          </div>
        </div>

        <div className="row mt-3">
          {data.map((elem) => {
            const { name, category, img, price } = elem;

            return (
              <div className="col-12 col-lg-3 col-md-4 col-sm-12 mt-3">
                <div className="menu-item">
                  <div className="left-area">
                    <img
                      src={img}
                      alt={img}
                      height={"140px"}
                      width={"100%"}
                    ></img>
                  </div>

                  <div className="right-area">
                    <h3>{name}</h3>
                    <span>{category}</span>

                    <div className="order d-flex">
                      <h6>Price : {price} </h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Canteen;

