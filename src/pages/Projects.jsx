import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Cửa Trượt Siêu Thị Lotte', category: 'Cửa Trượt', img: '/project_1.png' },
    { id: 2, title: 'Cổng Biệt Thự Euro Village', category: 'Cổng Tự Động', img: '/hero_bg.png' },
    { id: 3, title: 'Cửa Xoay Khách Sạn 5 Sao', category: 'Cửa Xoay', img: '/project_1.png' },
    { id: 4, title: 'Barie Tự Động Khu Công Nghiệp', category: 'Barie', img: '/hero_bg.png' },
    { id: 5, title: 'Cửa Mở Cánh Bệnh Viện Vinmec', category: 'Cửa Bệnh Viện', img: '/project_1.png' },
    { id: 6, title: 'Hệ Thống Kiểm Soát Ra Vào', category: 'Access Control', img: '/hero_bg.png' },
  ];

  return (
    <div className="projects-page">
      <section className="page-header" style={{
        background: 'linear-gradient(135deg, #0a2e20 0%, var(--color-primary) 100%)',
        padding: '6rem 0 4rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="hero-title" style={{fontSize: '3.5rem'}}>Dự Án <span className="text-gradient">Tiêu Biểu</span></h1>
          <p className="hero-subtitle" style={{margin: '0 auto'}}>Những công trình khẳng định chất lượng và uy tín của BOSS Đà Nẵng.</p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((proj) => (
              <div key={proj.id} className="portfolio-card">
                <div className="portfolio-img-wrapper">
                  <img src={proj.img} alt={proj.title} className="portfolio-img" />
                  <div className="portfolio-overlay">
                    <button className="portfolio-link-btn"><ArrowUpRight size={28} /></button>
                  </div>
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-category">{proj.category}</span>
                  <h3>{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
