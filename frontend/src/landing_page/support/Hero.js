import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-primary">
      <div className="row p-5 m-3 text-white">
        <div className="col-1"></div>
        <div className="col-5 p-3">
          <h4 className="mb-5">Support Portal</h4>
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="mb-3 mt-4 p-3" style={{width: "80%", borderRadius: "8px", border: "none"}} placeholder="Eg. how do I activate F&O, why my orders getting rejected." />
          <br />
            <a className="text-white" href="">Track account opening</a><br />
            <a className="text-white" href="">Track segment activation</a><br />
            <a className="text-white" href="">Intraday margins</a><br />
            <a className="text-white" href="">Kite user manual</a><br />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-3">
        <a  className="text-white text-end" style={{marginLeft: "55%"}} href="">Track Tickets</a>
          <h1 className="fs-3 mt-5">Featured</h1>
          <ol>
            <li>
              <a className="text-white" href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a className="text-white" href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;