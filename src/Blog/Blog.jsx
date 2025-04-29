import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Alumni Success Story: Sarah Lee – Leading Architect in the USA',
      content: 'Sarah Lee, class of 2010, shares her journey from college to becoming a renowned architect. From designing top-tier buildings to impacting urban planning in major cities...',
      date: 'January 3, 2025',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Sarah+Lee',
    },
    {
      id: 2,
      title: '10th Annual Alumni Homecoming – March 2025',
      content: 'Join us for a special alumni reunion with an exciting lineup of events and activities. From meet-ups to panel discussions, this is an event you won’t want to miss...',
      date: 'December 20, 2024',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Homecoming',
    },
    {
      id: 3,
      title: 'Our New Computer Science Program – What You Need to Know',
      content: 'The college has announced the launch of a new program in Computer Science starting in Fall 2025. This blog details everything you need to know about the program, admissions, and faculty...',
      date: 'December 15, 2024',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=CS+Program',
    },
  ];

  return (
    <div className="blog-container">
      <h2>Alumni News & Blog</h2>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p><i>{blog.date}</i></p>
              <p>{blog.content}</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
