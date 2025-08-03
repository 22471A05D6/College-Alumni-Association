import React from 'react';
import './Gallery.css';
import Footer from '../Footer/Footer';

const Gallery = () => {
  const images = [
    { src: 'https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/05/image017.jpg?resize=1170%2C781&ssl=1', alt: 'Alumni Event 1' },
    { src: 'https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/05/image013.jpg?resize=1170%2C781&ssl=1', alt: 'Alumni Event 2' },
    { src: 'https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/05/image001-1.jpg?resize=818%2C1280&ssl=1', alt: 'Alumni Event 4' },
    { src: 'https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/05/image007.jpg?resize=1170%2C781&ssl=1', alt: 'Alumni Event 3' },
    { src: 'https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/05/image003-1.jpg?resize=1149%2C766&ssl=1', alt: 'Alumni Event 4' },
    
    { src: 'https://i0.wp.com/www.nrtec.in/wp-content/uploads/2021/11/Alumni-Events_html_dd2a78caff2cb30f.jpg?resize=926%2C996&ssl=1', alt: 'Alumni Event 4' },
    { src: 'https://i0.wp.com/www.nrtec.in/wp-content/uploads/2021/11/Alumni-Events_html_6e8d4f4fae3c8aa6.jpg?resize=704%2C614&ssl=1', alt: 'Alumni Event 4' },
    { src: 'https://i0.wp.com/www.nrtec.in/wp-content/uploads/2021/11/Alumni-Events_html_7dbfea955bf7579c.jpg?resize=683%2C635&ssl=1', alt: 'Alumni Event 4' },
    { src: 'https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/05/image033.jpg?resize=1170%2C780&ssl=1', alt: 'Alumni Event 4' },
   
    { src: 'https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/06/DSC09918.jpg?fit=337%2C226&ssl=1', alt: 'Alumni Event 4' },
    { src: 'https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/05/image021.jpg?resize=1170%2C781&ssl=1', alt: 'Alumni Event 4' },
    { src: 'https://i0.wp.com/www.nrtec.in/wp-content/uploads/2023/05/image019.jpg?resize=1170%2C781&ssl=1', alt: 'Alumni Event 4' },
    // Add more image objects here
  ];

  return (
    <>
    <div className="gallery-container">
      <h2 className="gallery-title">College Alumni Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Gallery;
