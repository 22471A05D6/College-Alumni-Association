import React from "react";
import "./Events.css";
import Footer from "../Footer/Footer";

const Events = () => {
  const counselors = [
    {
      name: "Alumni Events",
      image: "https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/05/image037.jpg?resize=1170%2C780&ssl=1",
      description: "Narasaraopeta Engineering College (NEC) places a strong emphasis on fostering connections with its alumni by organizing various events .",
    },
    {
      name: "Campus Placements",
      image: "https://i0.wp.com/www.nrtec.in/wp-content/uploads/2018/05/clg.jpg?fit=1350%2C900&ssl=1",
      description:
        "The college regularly conducts training programs, mock interviews, and pre-placement talks to prepare students for recruitment.",
    },
    {
      name: "Mechanical Projects",
      image: "https://i0.wp.com/www.nrtec.in/wp-content/uploads/2021/03/Me-project-expo.jpeg?fit=1152%2C768&ssl=1",
      description:
       "The Department of Mechanical Engineering offers a robust platform for students to engage in a variety of projects, fostering both academic and practical skills.Wind Mill",
    },
    {
      name: "NCC Cadets",
      image: "https://i0.wp.com/www.nrtec.in/wp-content/uploads/2022/05/image001-1.jpg?fit=1421%2C850&ssl=1",
      description: "Narasaraopeta Engineering College (NEC) actively supports students with opportunities to develop leadership skills.NEC's NCC cadets excelled at the ATC-VI NCC camp held in Bapatla Suryalanka, securing awards in categories such as Group Dance, Ballet, Flag Area,"
    },
    {
      name: "Graduation",
      image: "https://i0.wp.com/www.nrtec.in/wp-content/uploads/2019/11/MAR1756.jpg?resize=1024%2C683&ssl=1",
      description: "NEC celebrated its 7th Graduation Day, honoring graduates from various departments. The event featured insights from industry veterans, encouraging graduates to embrace resilience, continuous learning, and uphold the NEC legacy.",
    },
    {
      name: "Career ",
      image: "https://www.nrtec.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-07-at-1.10.38-PM1.jpeg",
      description: "Narasaraopeta Engineering College (NEC) offers a range of career opportunities for both prospective employees and its graduates.Professor in departments like Computer Science and Engineering, Information Technology, Civil Engineering,",
    },
  ];

  return (
    <>
    <div className="Gallerypage">
      <section className="services">
        <h2>NEC Events</h2>
        <div className="service-cards">
        {counselors.map((counselor, index) => (
            <div className="card" key={index}>
              <img
                src={counselor.image}
                alt={`${counselor.name}'s profile`}
                className="counselor-image"/>
              <h3>{counselor.name}</h3>
              <p>{counselor.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Events;