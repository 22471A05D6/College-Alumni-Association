import React from 'react';
import './Home.css';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
    <div className="home-container">
      <marquee>welcome to our college alumni association.. be in contact for more queries</marquee>
        <div class="img-slider">
    <div class="slider-container">
      
      
      
      <div class="slide">
        <img src="https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/05/image027.jpg?resize=1170%2C780&ssl=1"/>
      </div>
      <div class="slide">
        <img src="https://media.istockphoto.com/id/2153037703/vector/mortarboard.jpg?s=612x612&w=0&k=20&c=J-1wan1z4n9xpxlkix2m-ZZN4Xu2IeS2HBHx1gE6_kw="/>
      </div>
      <div class="slide">
        <img src="https://i0.wp.com/www.nrtec.in/wp-content/uploads/2021/11/Alumni-Events_html_7dbfea955bf7579c.jpg?resize=683%2C635&ssl=1"   />
      </div>
  
      
      
      
    </div>
    </div>
    <div className='events'>
        <h2>Alumni Affairs </h2>
        <div className='eventii'>
        <p>NEC has a registered Directorate of University Alumni Affairsto address the long felt need for a platform and cherished aspirations of its Alumni.  The directorate of University alumni affairs have been established to take up alumni connect drives, explore and connect the present stakeholders with the illustrious alumni for  opportunities leading to mutual growth and raise funding for various development activities including human resources and infrastructure.</p>
        <p>The Directorate of college alumni affairs acts as a link between the “Alma Mater” and the “Alumni”. It is moving ahead, with selfless intentions for the growth and development of the institute and the students. The Directorate of University alumni affairs provides a platform for interaction between alumni, present students, faculty of the institute and institute administration. It has contributed significantly through financial and non-financial means to improve the facilities and infrastructure of the University with the help of the active participation of the alumni.</p>
        <a href=''>click here for complete view</a>
      </div>
      </div>
   
      
      
     

      {/* Upcoming Events Section */}
      <div className="events">
        <h2>Upcoming Events</h2>
        <ul className="event-list">
          <li className="event-item">
            <h3>Annual Alumni Meet</h3>
            <p>Date: February 20, 2025</p>
            <p>Location: Main Seminar Hall</p>
          </li>
          <li className="event-item">
            <h3>Career Networking Event</h3>
            <p>Date: March 15, 2025</p>
            <p>Location: College Conference Hall</p>
          </li>
        </ul>
      </div>
      

      
    </div>
   
    </>
    
  );
};

export default Home;
