import React from "react";
import FotoRS from "../assets/images/bg rs fix.jpg";

const Home = () => {
  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundImage: `url('${FotoRS}')`,
      }}
    >
      <div className="text-center w-4/5">
        <h1 className="py-3">
          <a className="text-3xl text-blue-900" href="">
           
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Home;
