import React from "react";
import "./AboutUs.css";
import Footer from "../Footer/Footer";

function AboutUs() {
  return (
    <>
      <div className="events-container">
        {/* Image Slider */}
        <div className="carousel">
          <div className="carousel-inner">
            <div className="carousel-item">
              <img
                src="https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/05/image017.jpg?resize=1170%2C781&ssl=1"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/05/image007.jpg?resize=1170%2C781&ssl=1"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/05/image009.jpg?resize=1170%2C781&ssl=1"
                alt="Slide 3"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="events-content">
          <p>
            Established in 1998, Narasaraopeta Engineering College, the first
            technical education institution in the region, has been excelling
            in research and entrepreneurship ever since its inception. NEC is
            sponsored by the Gayatri Educational Development Society (GEDS) and
            approved by the AICTE, New Delhi, with NBA and NAAC accreditations.
            It also has permanent affiliation to JNTU-Kakinada. At NEC, we are
            not just teaching technology but also teaching aspirants to
            influence the future of the world and make it a better place.
          </p>
          <p>
            The college has constituted an Alumni Association with a view to
            establishing and strengthening a close relation of its alumni with
            the college. The association enables the alumni to continue their
            association in a variety of ways such as enabling them to be the
            stakeholders in revising the vision and mission of the college and
            to participate in various activities such as graduation ceremonies,
            technical fests, and exhibitions.
          </p>
        </div>

        {/* Alumni Association Section */}
        <h2 className="association-title">Alumni Association Members</h2>
        <div className="members-grid">
          <div className="member-card">
            <img
              src="https://i0.wp.com/www.nrtec.in/wp-content/uploads/2021/11/Executive-Body_html_4d1a29d3f9e25685.jpg?resize=224%2C291&ssl=1"
              alt="Dr. S.Siva Nageswara Rao"
            />
            <div className="card-content">
              <h3>Dr. S.Siva Nageswara Rao</h3>
              <p>President</p>
            </div>
          </div>
          <div className="member-card">
            <img
              src="https://i0.wp.com/www.nrtec.in/wp-content/uploads/2021/11/Executive-Body_html_62e91e9c8f28e044.jpg?resize=220%2C281&ssl=1"
              alt="Dr. K.Lakshminadh"
            />
            <div className="card-content">
              <h3>Dr. K.Lakshminadh</h3>
              <p>Vice-President</p>
            </div>
          </div>
          <div className="member-card">
            <img
              src="https://i0.wp.com/www.nrtec.in/wp-content/uploads/2021/11/Executive-Body_html_172eeccd888c6228.jpg?resize=233%2C291&ssl=1"
              alt="Mr. M.Venkaiah"
            />
            <div className="card-content">
              <h3>Mr. M.Venkaiah</h3>
              <p>Joint-Secretary</p>
            </div>
          </div>
        </div>

        {/* Alumni Speaks */}
        <div className="alumni-speaks">
          <h2>Alumni Speaks</h2>
          <p>
            Every moment in life teaches you something, the best of learning
            from the moments keeps you inspired for the next big moment. The
            big moment has come. The big moment is now. We the NECians, are
            coming together for our annual celebration of our beloved alumnus.
            It’s the time to meet your loved pals, next bench buddies, and
            faculty friends.
          </p>
          <h2>Alumni Web Portal</h2>
          <p>
            An alumni website is the cornerstone of strong alumni relations.
            Every institution with a robust alumni network places a heavy
            emphasis on developing an interactive alumni portal and reaping
            significant benefits from it. Here, at the NEC Alumni Association,
            we are closer than ever to creating an online community of our
            alumni from every chapter – the Alumni Web Portal will be launched
            soon.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AboutUs;
