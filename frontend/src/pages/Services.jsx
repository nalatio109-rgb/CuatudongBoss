import React, { useState } from 'react';
import { 
  Phone, Wrench, Shield, Clock, MapPin, ArrowRight, CheckCircle2, 
  Settings, Smartphone, Cpu, ShieldAlert, Send, FileText,
  Star, Award, Check, Headphones, Zap, Sparkles
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDistrict, setActiveDistrict] = useState('haichau');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: 'Quận Hải Châu',
    service: 'Sửa Cửa Cuốn Khẩn Cấp 24/7',
    note: ''
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          productCategory: `Dịch Vụ: ${formData.service} (${formData.district})`,
          message: formData.note || 'Yêu cầu tư vấn dịch vụ tận nơi'
        })
      });
      const data = await res.json();
      if (data.success) {
        setFormSubmitted(true);
      }
    } catch (err) {
      console.error('Submit service form error:', err);
    }
  };

  // Services Catalog
  const servicesList = [
    {
      id: 1,
      category: 'lapdat',
      badge: 'BÁN CHẠY NHẤT',
      badgeClass: 'badge-gold',
      title: 'Lắp Đặt Cửa Cuốn Khe Thoáng Đức & Úc',
      subtitle: 'Austdoor, BossDoor, Titadoor, S68 cao cấp chính hãng 100%',
      img: '/service_technician.png',
      desc: 'Khảo sát đo đạc tận nơi miễn phí 100%, tư vấn mẫu nan cửa phù hợp kiến trúc và ngân sách. Tích hợp cảm biến tự dừng khi gặp vật cản, còi báo động an toàn chống trộm.',
      features: [
        'Khảo sát, thiết kế & báo giá tận nhà trong 30 phút',
        'Cung cấp linh kiện chính hãng đủ chứng nhận CO/CQ',
        'Thợ kỹ thuật >10 năm kinh nghiệm thi công chuẩn xác',
        'Bảo hành chính hãng nan cửa & motor lên tới 5 năm'
      ],
      price: 'Từ 1.100.000đ / m²'
    },
    {
      id: 2,
      category: 'suachua',
      badge: 'CỨU HỘ 24/7 - CÓ MẶT TRONG 15 PHÚT',
      badgeClass: 'badge-red',
      title: 'Sửa Cửa Cuốn Khẩn Cấp Tại Đà Nẵng 24/7',
      subtitle: 'Khắc phục triệt để kẹt lá, hỏng mô tơ, lệch hành trình, đứt xích',
      img: '/service_repair_247.png',
      desc: 'Đội cứu hộ sự cố cửa cuốn BOSS Đà Nẵng túc trực 24/7 tại 7 quận huyện. Xử lý tức thì cửa bị kẹt nan, hỏng tụ mô tơ, trôi cửa nguy hiểm, không mở được bằng remote.',
      features: [
        'Cứu hộ tận nơi siêu tốc sau 15 - 30 phút gọi',
        'Chẩn đoán đúng bệnh, báo giá công khai trước khi sửa',
        'Thay thế linh kiện chính hãng sẵn kho tại Đà Nẵng',
        'Bảo hành vết sửa & linh kiện thay mới từ 6 - 24 tháng'
      ],
      price: 'Chỉ từ 250.000đ'
    },
    {
      id: 3,
      category: 'congcudong',
      badge: 'SANG TRỌNG & HIỆN ĐẠI',
      badgeClass: 'badge-emerald',
      title: 'Thi Công Cổng & Cửa Tự Động Biệt Thự & Showroom',
      subtitle: 'Động cơ âm sàn, cánh tay đòn nhập khẩu Italy/Đức cao cấp',
      img: '/project_1.png',
      desc: 'Cung cấp và thi công hệ thống cổng trượt tự động, cổng mở cánh âm sàn thông minh cho biệt thự, showroom, tòa nhà. Vận hành êm ái, chống nước IP68, điều khiển qua điện thoại.',
      features: [
        'Động cơ âm sàn / tay đòn nhập khẩu Italy, Đức',
        'Độ bền vượt trội, chịu tải cổng tới 1500kg / cánh',
        'Mắt thần mở cửa kính tự động cho Showroom, Ngân hàng',
        'Bảo hành hệ thống truyền động 36 tháng tận nhà'
      ],
      price: 'Khảo sát báo giá'
    },
    {
      id: 4,
      category: 'phukien',
      badge: 'LINH KIỆN CHÍNH HÃNG',
      badgeClass: 'badge-blue',
      title: 'Cài Remote Mã Nhảy & Thay Bình Lưu Điện (UPS)',
      subtitle: 'Cài chìa điều khiển từ xa, thay pin, ắc quy chính hãng lấy ngay',
      img: '/hero_bg.png',
      desc: 'Thay bình lưu điện (UPS) dung lượng cao giúp cửa vận hành bình thường khi mất điện đột ngột. Cài thêm chìa remote mã nhảy (Rolling Code) chống sao chép phá mã.',
      features: [
        'Cài đặt remote mã nhảy chống trộm sao chép chìa',
        'Lắp bộ điều khiển đóng mở cửa từ xa qua Wi-Fi / 4G',
        'Thay ắc quy lưu điện khô chính hãng bảo hành 12-24 tháng',
        'Sửa bo mạch điều khiển, thay hành trình mô tơ lấy liền'
      ],
      price: 'Chỉ từ 150.000đ'
    },
    {
      id: 5,
      category: 'baotri',
      badge: 'DOANH NGHIỆP',
      badgeClass: 'badge-purple',
      title: 'Bảo Trì & Bảo Dưỡng Định Kỳ Hệ Thống Cửa',
      subtitle: 'Gói bảo trì chuyên nghiệp cho Ngân hàng, Nhà máy, Cửa hàng',
      img: '/factory_worker.png',
      desc: 'Dịch vụ bảo trì định kỳ giúp tầm soát nguy cơ hư hỏng, tra mỡ bôi trơn rãnh ray, kiểm tra cảm biến an toàn, gia cố nan cửa giúp tăng tuổi thọ thiết bị gấp 3 lần.',
      features: [
        'Kiểm tra định kỳ hệ thống điện & phanh hãm an toàn',
        'Ưu tiên xử lý sự cố khẩn cấp trong vòng 15 phút',
        'Chiết khấu 20% khi thay mới linh kiện trong hợp đồng',
        'Cấp sổ nhật ký bảo trì kỹ thuật cho doanh nghiệp'
      ],
      price: 'Theo hợp đồng'
    }
  ];

  // District Coverage Data
  const districtsMap = {
    haichau: {
      name: 'Quận Hải Châu',
      tagline: 'Trực ca trung tâm - Có mặt sau 15 phút',
      hotline: '0904.678.323',
      address: 'Trạm kỹ thuật: Tuyến Bạch Đằng & Nguyễn Văn Linh, Q. Hải Châu',
      streets: ['Nguyễn Văn Linh', 'Bạch Đằng', 'Lê Duẩn', 'Trần Phú', '3 Tháng 2', 'Châu Thị Vĩnh Tế', 'Phan Châu Trinh']
    },
    sontra: {
      name: 'Quận Sơn Trà',
      tagline: 'Trụ sở chính BOSS - Có mặt sau 10-15 phút',
      hotline: '0904.678.323',
      address: 'Trụ sở chính: 647 Ngô Quyền, P. An Hải Bắc, Q. Sơn Trà',
      streets: ['Ngô Quyền', 'Phạm Văn Đồng', 'Võ Nguyên Giáp', 'Trần Hưng Đạo', 'Nguyễn Văn Thoại', 'Lê Đức Thọ']
    },
    thanhkhe: {
      name: 'Quận Thanh Khê',
      tagline: 'Trực ca Điện Biên Phủ - Có mặt sau 15 phút',
      hotline: '0904.678.323',
      address: 'Trạm kỹ thuật: Điện Biên Phủ, Q. Thanh Khê',
      streets: ['Điện Biên Phủ', 'Hà Huy Tập', 'Lê Độ', 'Nguyễn Tất Thành', 'Trần Cao Vân', 'Nguyễn Tri Phương']
    },
    lienchieu: {
      name: 'Quận Liên Chiểu',
      tagline: 'Showroom 2 Tô Hiệu - Có mặt sau 15 phút',
      hotline: '0904.678.323',
      address: 'Showroom 2: 267 Tô Hiệu, P. Hòa Minh, Q. Liên Chiểu',
      streets: ['Tô Hiệu', 'Tôn Đức Thắng', 'Nguyễn Lương Bằng', 'Hoàng Thị Loan', 'Nguyễn An Ninh', 'KCN Hòa Khánh']
    },
    nguhanhson: {
      name: 'Quận Ngũ Hành Sơn',
      tagline: 'Trực ca Lê Văn Hiến - Có mặt sau 20 phút',
      hotline: '0904.678.323',
      address: 'Trạm kỹ thuật: Lê Văn Hiến, Q. Ngũ Hành Sơn',
      streets: ['Lê Văn Hiến', 'Nam Kỳ Khởi Nghĩa', 'Võ Chí Công', 'Trường Sa', 'Minh Mạng']
    },
    camle: {
      name: 'Quận Cẩm Lệ',
      tagline: 'Trực ca CM Tháng 8 - Có mặt sau 20 phút',
      hotline: '0904.678.323',
      address: 'Trạm kỹ thuật: Cách Mạng Tháng 8, Q. Cẩm Lệ',
      streets: ['Cách Mạng Tháng 8', 'Nguyễn Hữu Thọ', 'Lê Đại Hành', 'Trường Chinh', 'Phạm Hùng']
    },
    hoavang: {
      name: 'Huyện Hòa Vang',
      tagline: 'Trực ca QL 1A - Có mặt sau 25 phút',
      hotline: '0904.678.323',
      address: 'Trạm kỹ thuật: Quốc lộ 1A, H. Hòa Vang',
      streets: ['Quốc Lộ 1A', 'Bà Nà Suối Mơ', 'Nam Cao', 'Tuyến Hòa Tiến', 'Hòa Nhơn']
    }
  };

  // Price Reference List
  const priceList = [
    { title: 'Sửa kẹt cửa cuốn / Đứt nan lá', desc: 'Chỉnh nan, cân bằng hành trình, vệ sinh rãnh ray', price: 'Từ 250.000đ', warranty: '6 tháng' },
    { title: 'Cài Remote cửa cuốn mã nhảy', desc: 'Cài tay điều khiển Rolling Code chống sao chép chính hãng', price: 'Từ 150.000đ', warranty: '12 tháng' },
    { title: 'Thay Bình lưu điện (UPS) 800kg - 1200kg', desc: 'Lưu điện tích hợp ắc quy khô chính hãng dung lượng cao', price: 'Từ 1.850.000đ', warranty: '24 tháng' },
    { title: 'Sửa / Thay mô tơ cửa cuốn chính hãng', desc: 'Động cơ lõi đồng 100%, có xích kéo tay cứu hộ khi mất điện', price: 'Từ 2.200.000đ', warranty: '24 - 36 tháng' },
    { title: 'Bộ điều khiển qua Smartphone (Wi-Fi/4G)', desc: 'Đóng mở cửa từ xa qua Wi-Fi / 4G bảo mật mã hóa cao', price: 'Từ 950.000đ', warranty: '24 tháng' },
    { title: 'Thi công Cửa Cuốn Khe Thoáng Đức', desc: 'Nhôm hợp kim 6063-T5 sơn CHLB Đức, tích hợp cảm biến tự dừng', price: 'Từ 1.100.000đ/m²', warranty: '5 năm' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === activeCategory);

  return (
    <div className="boss-services-page">
      
      {/* 1. HERO HEADER SECTION */}
      <header className="svc-hero-header">
        <div className="svc-hero-overlay"></div>
        <div className="container relative-z">
          <div className="svc-hero-wrapper">
            <div className="svc-live-status-tag">
              <span className="live-dot"></span>
              <span>CỨU HỘ SỬA CỬA TẬN NƠI 24/7 TẠI ĐÀ NẴNG</span>
            </div>

            <h1 className="svc-hero-heading">
              Dịch Vụ Thi Công & Sửa Chữa <br />
              <span className="gold-text-glow">CỬA CUỐN & CỔNG TỰ ĐỘNG</span> <br />
              Chuyên Nghiệp Tận Nơi 24/7
            </h1>

            <p className="svc-hero-subheading">
              Có mặt siêu tốc sau <strong>15 - 30 phút</strong> tại 7 quận huyện Đà Nẵng. Đội ngũ thợ kinh nghiệm &gt;10 năm, cam kết linh kiện chính hãng 100%, bảo hành dài hạn đến 5 năm.
            </p>

            <div className="svc-hero-buttons">
              <a href="tel:0904678323" className="btn-brand btn-red-pulse">
                <Phone size={18} /> GỌI THỢ CỨU HỘ: 0904.678.323
              </a>
              <a href="#quote-form-section" className="btn-brand btn-gold-outline">
                <FileText size={18} /> NHẬN BÁO GIÁ DỊCH VỤ
              </a>
            </div>

            {/* Hero Quick Highlights */}
            <div className="svc-hero-highlights">
              <div className="hl-item">
                <Clock size={20} className="hl-icon" />
                <div>
                  <strong>15 - 30 Phút</strong>
                  <span>Có mặt cứu hộ tận nhà</span>
                </div>
              </div>
              <div className="hl-item">
                <Shield size={20} className="hl-icon" />
                <div>
                  <strong>Báo Giá Niêm Yết</strong>
                  <span>Không phát sinh chi phí</span>
                </div>
              </div>
              <div className="hl-item">
                <Wrench size={20} className="hl-icon" />
                <div>
                  <strong>100% Chính Hãng</strong>
                  <span>Bảo hành dài lâu đến 5 năm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. STATS BANNER */}
      <section className="svc-stats-bar-section">
        <div className="container">
          <div className="svc-stats-grid-card">
            <div className="svc-stat-box">
              <div className="stat-icon-wrap gold"><Zap size={28} /></div>
              <div>
                <h3>15 - 30 Phút</h3>
                <p>Có mặt cứu hộ khẩn cấp tại Đà Nẵng</p>
              </div>
            </div>
            <div className="svc-stat-box">
              <div className="stat-icon-wrap green"><CheckCircle2 size={28} /></div>
              <div>
                <h3>10.000+</h3>
                <p>Công trình & dự án thi công thành công</p>
              </div>
            </div>
            <div className="svc-stat-box">
              <div className="stat-icon-wrap red"><Shield size={28} /></div>
              <div>
                <h3>100%</h3>
                <p>Linh phụ kiện nhập khẩu chính hãng</p>
              </div>
            </div>
            <div className="svc-stat-box">
              <div className="stat-icon-wrap blue"><Headphones size={28} /></div>
              <div>
                <h3>24/7</h3>
                <p>Hỗ trợ kỹ thuật kể cả Ngày Lễ & CN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES CATALOG */}
      <section className="svc-catalog-section section-space">
        <div className="container">
          <div className="svc-section-header text-center">
            <span className="brand-sub-tag">DANH MỤC DỊCH VỤ TRỌNG TÂM</span>
            <h2 className="brand-main-title">DỊCH VỤ CỬA TỰ ĐỘNG CHUYÊN NGHIỆP</h2>
            <p className="brand-desc-text">Giải pháp thi công lắp mới & sửa chữa cứu hộ tận nhà tại Đà Nẵng</p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="svc-tabs-bar">
            <button 
              className={`svc-tab-item ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Tất Cả Dịch Vụ
            </button>
            <button 
              className={`svc-tab-item ${activeCategory === 'lapdat' ? 'active' : ''}`}
              onClick={() => setActiveCategory('lapdat')}
            >
              Lắp Đặt Cửa Cuốn
            </button>
            <button 
              className={`svc-tab-item ${activeCategory === 'suachua' ? 'active' : ''}`}
              onClick={() => setActiveCategory('suachua')}
            >
              Sửa Cửa Cuốn 24/7
            </button>
            <button 
              className={`svc-tab-item ${activeCategory === 'congcudong' ? 'active' : ''}`}
              onClick={() => setActiveCategory('congcudong')}
            >
              Cổng & Cửa Tự Động
            </button>
            <button 
              className={`svc-tab-item ${activeCategory === 'phukien' ? 'active' : ''}`}
              onClick={() => setActiveCategory('phukien')}
            >
              Remote & Phụ Kiện
            </button>
            <button 
              className={`svc-tab-item ${activeCategory === 'baotri' ? 'active' : ''}`}
              onClick={() => setActiveCategory('baotri')}
            >
              Bảo Trì Doanh Nghiệp
            </button>
          </div>

          {/* Services Cards Grid */}
          <div className="svc-cards-container">
            {filteredServices.map((service) => (
              <div className="svc-card-box" key={service.id}>
                {service.badge && (
                  <span className={`svc-card-badge ${service.badgeClass}`}>
                    {service.badge}
                  </span>
                )}
                <div className="svc-card-thumb-wrap">
                  <img src={service.img} alt={service.title} />
                  <div className="thumb-overlay"></div>
                </div>

                <div className="svc-card-content">
                  <h3 className="svc-card-heading">{service.title}</h3>
                  <p className="svc-card-subheading">{service.subtitle}</p>
                  <p className="svc-card-description">{service.desc}</p>

                  <ul className="svc-bullet-list">
                    {service.features.map((feat, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="bullet-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="svc-card-bottom-bar">
                    <div className="price-tag-wrap">
                      <span className="price-label-small">Giá dịch vụ:</span>
                      <span className="price-val-highlight">{service.price}</span>
                    </div>

                    <a href="tel:0904678323" className="btn-brand btn-red-sm">
                      <Phone size={14} /> GỌI THỢ NGAY
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DISTRICT SPEED NETWORK */}
      <section className="svc-district-section section-space dark-green-bg">
        <div className="container">
          <div className="svc-section-header text-center">
            <span className="brand-sub-tag text-yellow">MẠNG LƯỚI PHỤC VỤ CẤP TỐC</span>
            <h2 className="brand-main-title text-white">CỨU HỘ SỬA CỬA TẠI 7 QUẬN HUYỆN ĐÀ NẴNG</h2>
            <p className="brand-desc-text text-light-green">Chọn khu vực của bạn để kết nối trực tiếp với trạm kỹ thuật có mặt sau 15-20 phút</p>
          </div>

          {/* District Selector Pills */}
          <div className="district-tabs-pills">
            {Object.keys(districtsMap).map((key) => (
              <button
                key={key}
                className={`district-pill-btn ${activeDistrict === key ? 'active' : ''}`}
                onClick={() => setActiveDistrict(key)}
              >
                <MapPin size={16} />
                <span>{districtsMap[key].name}</span>
              </button>
            ))}
          </div>

          {/* District Details Showcase */}
          <div className="district-details-card">
            <div className="district-details-left">
              <span className="district-time-tag">⚡ Có mặt sau {districtsMap[activeDistrict].time}</span>
              <h3>Đội Kỹ Thuật Trực Ca {districtsMap[activeDistrict].name}</h3>
              <p className="district-address-text">📍 {districtsMap[activeDistrict].address}</p>

              <div className="district-streets-group">
                <span>Tuyến đường thợ túc trực có mặt siêu tốc:</span>
                <div className="street-tags-wrap">
                  {districtsMap[activeDistrict].streets.map((street, idx) => (
                    <span key={idx} className="street-tag-item">✓ {street}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="district-details-right">
              <div className="district-call-box">
                <span>Hotline cứu hộ {districtsMap[activeDistrict].name}:</span>
                <h4 className="hotline-number">{districtsMap[activeDistrict].hotline}</h4>
                <a href={`tel:${districtsMap[activeDistrict].hotline}`} className="btn-brand btn-red-full">
                  <Phone size={18} /> GỌI TRẠM {districtsMap[activeDistrict].name.toUpperCase()}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-STEP WORKFLOW SECTION */}
      <section className="svc-workflow-section section-space">
        <div className="container">
          <div className="svc-section-header text-center">
            <span className="brand-sub-tag">QUY TRÌNH MINH BẠCH</span>
            <h2 className="brand-main-title">4 BƯỚC PHỤC VỤ CHUẨN KỸ THUẬT</h2>
            <p className="brand-desc-text">Nhanh chóng - Đúng giá - An toàn - Bảo hành chu đáo</p>
          </div>

          <div className="workflow-cards-grid">
            <div className="wf-card-item">
              <div className="wf-step-num">01</div>
              <div className="wf-icon-box"><Phone size={24} /></div>
              <h4>Tiếp Nhận Thông Tin</h4>
              <p>Tổng đài 0904.678.323 tiếp nhận yêu cầu, lắng nghe tình trạng và điều thợ kỹ thuật trạm gần nhất đến tận nhà trong 15-30 phút.</p>
            </div>

            <div className="wf-card-item">
              <div className="wf-step-num">02</div>
              <div className="wf-icon-box"><Clock size={24} /></div>
              <h4>Khảo Sát & Báo Giá</h4>
              <p>Kỹ thuật viên chẩn đoán chính xác nguyên nhân hỏng hóc, tư vấn giải pháp tối ưu và báo giá niêm yết trước khi tiến hành sửa.</p>
            </div>

            <div className="wf-card-item">
              <div className="wf-step-num">03</div>
              <div className="wf-icon-box"><Wrench size={24} /></div>
              <h4>Thi Công Sửa Chữa</h4>
              <p>Tiến hành thi công lắp mới hoặc thay thế linh kiện chính hãng sẵn kho chuẩn xác kỹ thuật và đảm bảo an toàn cao nhất.</p>
            </div>

            <div className="wf-card-item">
              <div className="wf-step-num">04</div>
              <div className="wf-icon-box"><Shield size={24} /></div>
              <h4>Nghiệm Thu & Bảo Hành</h4>
              <p>Chạy thử vận hành, kiểm tra cảm biến tự dừng an toàn và cấp phiếu bảo hành tận nhà từ 6 tháng đến 5 năm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRANSPARENT PRICE REFERENCE SECTION */}
      <section className="svc-pricing-section section-space dark-green-bg">
        <div className="container">
          <div className="svc-section-header text-center">
            <span className="brand-sub-tag text-yellow">BẢNG GIÁ NIÊM YẾT</span>
            <h2 className="brand-main-title text-white">BẢNG GIÁ DỊCH VỤ THAM KHẢO</h2>
            <p className="brand-desc-text text-light-green">Cam kết không phát sinh chi phí ẩn - Báo giá trước khi thực hiện</p>
          </div>

          <div className="pricing-list-wrapper">
            {priceList.map((item, index) => (
              <div className="price-card-row" key={index}>
                <div className="price-row-left">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className="price-row-right">
                  <span className="price-highlight-val">{item.price}</span>
                  <span className="warranty-badge">BH {item.warranty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOOKING FORM SECTION */}
      <section className="svc-booking-section section-space" id="quote-form-section">
        <div className="container">
          <div className="booking-split-card">
            <div className="booking-card-left">
              <span className="brand-sub-tag text-yellow">TƯ VẤN 0 ĐỒNG</span>
              <h2 className="text-white">ĐẮNG KÝ TƯ VẤN HOẶC ĐẶT THỢ SỬA CỬA</h2>
              <p className="text-light-green">Điền thông tin bên dưới, kỹ thuật viên BOSS Đà Nẵng sẽ liên hệ lại ngay trong <strong>3 phút</strong>!</p>

              <div className="hotline-banner-dark">
                <Phone size={24} className="banner-phone-icon" />
                <div>
                  <span className="hotline-sub">Hotline Cứu Hộ 24/7 (Zalo):</span>
                  <h3 className="hotline-val">0904.678.323</h3>
                </div>
              </div>

              <div className="address-info-list">
                <p>📍 <strong>Trụ sở chính:</strong> 647 Ngô Quyền, P. An Hải Bắc, Q. Sơn Trà, Đà Nẵng</p>
                <p>📍 <strong>Showroom 2:</strong> 267 Tô Hiệu, P. Hòa Minh, Q. Liên Chiểu, Đà Nẵng</p>
              </div>
            </div>

            <div className="booking-card-right">
              {formSubmitted ? (
                <div className="booking-success-box text-center">
                  <CheckCircle2 size={56} className="text-emerald" style={{ margin: '0 auto 1rem' }} />
                  <h3>GỬI YÊU CẦU THÀNH CÔNG!</h3>
                  <p>Kỹ thuật viên BOSS Đà Nẵng sẽ gọi điện hỗ trợ cho bạn ngay lập tức.</p>
                  <button className="btn-brand btn-red-full" onClick={() => setFormSubmitted(false)}>
                    GỬI YÊU CẦU KHÁC
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="booking-real-form">
                  <div className="form-group-item">
                    <label>Họ và tên của bạn *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Ví dụ: Anh Hoàng - Hải Châu"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group-item">
                    <label>Số điện thoại liên hệ *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="Nhập SĐT của bạn..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-row-grid-2">
                    <div className="form-group-item">
                      <label>Quận/Huyện tại Đà Nẵng</label>
                      <select 
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      >
                        <option value="Quận Hải Châu">Quận Hải Châu</option>
                        <option value="Quận Thanh Khê">Quận Thanh Khê</option>
                        <option value="Quận Sơn Trà">Quận Sơn Trà</option>
                        <option value="Quận Ngũ Hành Sơn">Quận Ngũ Hành Sơn</option>
                        <option value="Quận Liên Chiểu">Quận Liên Chiểu</option>
                        <option value="Quận Cẩm Lệ">Quận Cẩm Lệ</option>
                        <option value="Huyện Hòa Vang">Huyện Hòa Vang</option>
                      </select>
                    </div>

                    <div className="form-group-item">
                      <label>Dịch vụ cần làm</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Sửa Cửa Cuốn Khẩn Cấp 24/7">Sửa Cửa Cuốn Khẩn Cấp 24/7</option>
                        <option value="Lắp Đặt Cửa Cuốn Mới">Lắp Đặt Cửa Cuốn Mới</option>
                        <option value="Lắp Cổng / Cửa Tự Động">Lắp Cổng / Cửa Tự Động</option>
                        <option value="Thay Remote / Bình UPS">Thay Remote / Bình UPS</option>
                        <option value="Bảo Trì Định Kỳ Doanh Nghiệp">Bảo Trì Định Kỳ Doanh Nghiệp</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group-item">
                    <label>Ghi chú hoặc mô tả sự cố</label>
                    <textarea 
                      rows="3" 
                      placeholder="Nhập tình trạng hỏng cửa hoặc yêu cầu tư vấn..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-brand btn-red-full">
                    <Send size={18} /> GỬI YÊU CẦU TƯ VẤN NGAY
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. STICKY EMERGENCY CALL BAR */}
      <div className="svc-sticky-phone-bar">
        <div className="sticky-bar-text">
          <span className="live-pulse-dot"></span>
          <span>Cứu Hộ Sửa Cửa Cuốn Đà Nẵng 24/7:</span>
        </div>
        <a href="tel:0904678323" className="btn-sticky-red">
          <Phone size={18} className="phone-pulse-icon" />
          <span>0904.678.323 (Bấm Gọi Ngay)</span>
        </a>
      </div>

    </div>
  );
};

export default Services;
