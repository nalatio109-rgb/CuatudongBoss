import React from 'react';
import { Settings, ShieldCheck, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Services Header */}
      <section className="page-header" style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, #0a2e20 100%)',
        padding: '6rem 0 4rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="hero-title" style={{fontSize: '3.5rem'}}>Dịch Vụ <span className="text-gradient">Chuyên Nghiệp</span></h1>
          <p className="hero-subtitle" style={{margin: '0 auto'}}>Cung cấp giải pháp toàn diện về hệ thống cửa tự động cho mọi công trình.</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container">
          <div className="services-list">
            
            {/* Service 1 */}
            <div className="service-row">
              <div className="service-img-wrapper">
                <div className="glass-blob"></div>
                <img src="/project_1.png" alt="Lắp đặt mới" className="service-img" />
              </div>
              <div className="service-content">
                <div className="service-icon"><Settings size={32} /></div>
                <h2>Tư Vấn & Lắp Đặt Mới</h2>
                <p>Khảo sát tận nơi, tư vấn giải pháp phù hợp nhất với kiến trúc và ngân sách của khách hàng. Chúng tôi cung cấp đa dạng các dòng cửa trượt, cửa mở cánh, barie tự động từ các thương hiệu hàng đầu thế giới.</p>
                <ul className="service-features">
                  <li><ShieldCheck size={18} className="text-secondary"/> Lắp đặt chuẩn xác, nhanh gọn</li>
                  <li><ShieldCheck size={18} className="text-secondary"/> Sản phẩm chính hãng 100%</li>
                  <li><ShieldCheck size={18} className="text-secondary"/> Bàn giao hướng dẫn sử dụng chi tiết</li>
                </ul>
                <Link to="/bao-gia" className="btn btn-primary" style={{marginTop: '1.5rem'}}>Nhận Báo Giá <ArrowRight size={18}/></Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-row reverse">
              <div className="service-img-wrapper">
                <div className="glass-blob" style={{background: 'rgba(255, 214, 0, 0.2)'}}></div>
                <img src="/hero_bg.png" alt="Bảo trì sửa chữa" className="service-img" />
              </div>
              <div className="service-content">
                <div className="service-icon"><Wrench size={32} /></div>
                <h2>Bảo Trì & Sửa Chữa</h2>
                <p>Khắc phục nhanh chóng mọi sự cố kỹ thuật của hệ thống cửa tự động. Cung cấp gói bảo trì định kỳ giúp tăng tuổi thọ thiết bị và đảm bảo an toàn tuyệt đối cho người sử dụng.</p>
                <ul className="service-features">
                  <li><ShieldCheck size={18} className="text-secondary"/> Đội ngũ kỹ thuật viên 24/7</li>
                  <li><ShieldCheck size={18} className="text-secondary"/> Thay thế linh kiện chính hãng</li>
                  <li><ShieldCheck size={18} className="text-secondary"/> Bảo hành dịch vụ 6-12 tháng</li>
                </ul>
                <Link to="/lien-he" className="btn btn-secondary" style={{marginTop: '1.5rem'}}>Gọi Kỹ Thuật <ArrowRight size={18}/></Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
