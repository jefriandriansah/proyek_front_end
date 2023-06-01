import React from "react";
import FotoRS from "../assets/images/bg rs fix.jpg";

const About = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100"style={{
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      backgroundImage: `url('${FotoRS}')`,
    }}>
      
      <h1 className="text-5xl font-bold mb-8">Tentang Layanan Kami</h1>
      <p className="text-xl text-justify max-w-lg">

      Dear valued patients and community members<br/>
We are delighted to introduce you to Fantasia International Hospital - a state-of-the-art healthcare facility dedicated to providing exceptional medical care and services to our patients.<br/>
At Fantasia International Hospital, we prioritize your health and well-being above all else. We are proud to offer a wide range of medical specialties and services, including advanced diagnostic and treatment options, as well as personalized care from our team of highly skilled and compassionate medical professionals.<br/>
Our commitment to patient satisfaction and safety is reflected in everything we do, from our cutting-edge medical technology to our comfortable and welcoming patient rooms. We strive to provide a seamless and stress-free healthcare experience for each and every one of our patients.<br/>
Whether you are seeking routine medical care or specialized treatment, we invite you to visit Fantasia International Hospital and experience the highest level of medical care available. Our doors are always open to welcome you and your loved ones.
Thank you for choosing Fantasia International Hospital for your healthcare needs.<br/>

Sincerely,<br/>

The Fantasia International Hospital Team
      </p>
    </div>
  );
};

export default About;
