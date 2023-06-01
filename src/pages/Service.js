import React from "react";
import FotoRS from "../assets/images/bg rs fix.jpg";

const Service = () => {
  return (
  <div className="container h-screen w-full flex flex-col items-center justify-center"style={{
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundImage: `url('${FotoRS}')`,
  }}>
      <h1 className="text-4xl font-bold mb-8 bg-grey p-3">Our Servises</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-xl font-bold text-black-700">Daftar Periksa</p>
        </div>
        <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-xl font-bold text-black-700">Fisio Terapi</p>
        </div>
        <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-xl font-bold text-black-700">Jadwal Dokter</p>
        </div>
        <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-xl font-bold text-black-700">Medical Check Up</p>
        </div>
        <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-xl font-bold text-black-700">Laboratorium</p>
        </div>
        <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-xl font-bold text-black-700">Klinik Estetika Medis</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
