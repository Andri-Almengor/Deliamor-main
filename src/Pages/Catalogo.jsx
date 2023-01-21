import React, { useState } from "react";
import { Link } from "react-router-dom";
import queques from "../Data/Data";
import Header from "../Components/Header";
import "../Styles/catalogo.css";
import "../Styles/navstyle.css";
//BootStrap
import "bootstrap/dist/css/bootstrap.min.css";

//Librerias para Slider
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Footer } from "./Home/Footer";

const Catalogo = ({ title }) => {
  const [data, setData] = useState(queques);
  const filterResult = (cakeItem) => {
    const result = queques.filter((curDate) => {
      return curDate.categoria === cakeItem;
    });
    setData(result);
  };
  //FILTRADO FIESTA
  const fiesta = queques
    .filter(function (queque) {
      return queque.categoria === "Fiestas";
    })
    .map(function ({ name, desc, id, imagen, categoria, precio }) {
      return (
        <queque className="imagen">
          <div
            className="card d-flex justify-content-center align-items-center mb-1"
            key={id}
          >
            <img className="product-image" src={imagen} alt="Product-image" />
            <h2 className="m-0 text-center">{name}</h2>
            <p className="text-center p-1">{desc}</p>
            <p className="text-center p-1">{precio}</p>
            <Link to={`/cake/${id}`} className="card-btn">
              pedir
            </Link>
          </div>
        </queque>
      );
    });
  console.log(fiesta);

  //FILTRADO FIESTA
  const infantil = queques
    .filter(function (queque) {
      return queque.categoria === "Infantil";
    })
    .map(function ({ name, desc, id, imagen, categoria, precio }) {
      return (
        <queque className="imagen">
          <div
            className="card d-flex justify-content-center align-items-center mb-1"
            key={id}
          >
            <img className="product-image" src={imagen} alt="Product-image" />
            <h2 className="m-0 text-center">{name}</h2>
            <p className="text-center p-1">{desc}</p>
            <p className="text-center p-1">{precio}</p>
            <Link to={`/cake/${id}`} className="card-btn">
              pedir
            </Link>
          </div>
        </queque>
      );
    });

    //FILTRADO Bodas
  const boda = queques
  .filter(function (queque) {
    return queque.categoria === "Boda";
  })
  .map(function ({ name, desc, id, imagen, categoria, precio }) {
    return (
      <queque className="imagen">
        <div
          className="card d-flex justify-content-center align-items-center mb-1"
          key={id}
        >
          <img className="product-image" src={imagen} alt="Product-image" />
          <h2 className="m-0 text-center">{name}</h2>
          <p className="text-center p-1">{desc}</p>
          <p className="text-center p-1">{precio}</p>
          <Link to={`/cake/${id}`} className="card-btn">
            pedir
          </Link>
        </div>
      </queque>
    );
  });

  //Responsive Slider CONFIG
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Header title={"Catalogo"} images={"https://imgur.com/SWjGdZ6.jpeg"} />
      {/* Componente FIESTA */}
      <h1 className="d-flex justify-content-center align-items-center mb-1 mt-1">
        Fiesta
      </h1>
      <Carousel
        responsive={responsive}
        className="slider"
        showDots={true}
        infinite={true}
      >
        {fiesta}
      </Carousel>

      <h1 className="d-flex justify-content-center align-items-center mb-1 mt-1">
        Infantil
      </h1>
      <Carousel
        responsive={responsive}
        className="slider"
        showDots={true}
        infinite={true}
      >
        {infantil}
      </Carousel>

      <h1 className="d-flex justify-content-center align-items-center mb-1 mt-1">
        Bodas
      </h1>
      <Carousel
        responsive={responsive}
        className="slider"
        showDots={true}
        infinite={true}
      >
        {boda}
      </Carousel>

      <Footer />
    </div>
  );
};

export default Catalogo;
