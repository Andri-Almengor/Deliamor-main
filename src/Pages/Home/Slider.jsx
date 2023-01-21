export function Slider() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide shadow "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={'https://i.imgur.com/FIIMwSb.png'}
            alt="Slide1"
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src={'https://i.imgur.com/QJ9aZQO.png'}
            alt="Slide2"
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <img src={"https://i.imgur.com/Hp8onyh.png"} alt="Slide2" className="d-block w-100" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon me-5" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <div className="carousel-caption ">
        <h1>DeliAmor</h1>
        <p>Consiente tu paladar</p>
      </div>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon ms-5" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
