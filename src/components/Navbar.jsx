import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  Menu, X, ChevronDown, PhoneCall, ArrowRight, ShieldCheck, ChevronRight, 
  DoorClosed, Cpu, Sliders, Zap, Sparkles 
} from "lucide-react";

export const PRODUCT_NAV_DATA = [
  {
    title: "Cửa Cuốn",
    categoryKey: "cuacuon",
    icon: <DoorClosed size={16} />,
    items: [
      { name: "Cửa cuốn khe thoáng Đức", tag: "Đức", query: "Khe thoáng Đức" },
      { name: "Cửa cuốn Đài Loan tôn mạ", tag: "Giá tốt", query: "Đài Loan" },
      { name: "Cửa cuốn tấm liền Colorbond", tag: "Úc", query: "Tấm liền Úc" },
      { name: "Cửa cuốn song ngang - mắc võng", tag: "Gara", query: "Song ngang" },
      { name: "Cửa cuốn BossDoor cao cấp AI", tag: "Vip", query: "Cao cấp" },
    ]
  },
  {
    title: "Phụ Kiện Cửa Cuốn",
    categoryKey: "phukien",
    icon: <Cpu size={16} />,
    items: [
      { name: "Mô tơ cửa cuốn lõi đồng 100%", tag: "Lõi đồng", query: "Mô tơ" },
      { name: "Bình lưu điện UPS dự phòng 72h", tag: "UPS 72h", query: "Bình lưu điện" },
      { name: "Bộ điều khiển Smart Wi-Fi 4G", tag: "App Wi-Fi", query: "Điều khiển qua điện thoại" },
      { name: "Tay remote & hộp mã nhảy Rolling Code", tag: "Chống dò", query: "Tay điều khiển" },
    ]
  },
  {
    title: "Cửa Kéo & Cổng Tự Động",
    categoryKey: "cuakeo",
    icon: <Sliders size={16} />,
    items: [
      { name: "Cửa kéo CN Đức sơn AkzoNobel", tag: "CN Đức", query: "Cửa kéo CN Đức" },
      { name: "Cửa kéo Đài Loan có/không lá", tag: "Bán chạy", query: "Cửa kéo Đài Loan" },
      { name: "Cửa kéo Inox 304 nguyên chất", tag: "Inox 304", query: "Cửa kéo Inox" },
      { name: "Cổng mở tự động âm sàn Italia IP67", tag: "Ý IP67", query: "Cổng tự động" },
      { name: "Cửa trượt tự động Kaba/Nabco Nhật", tag: "Nhật Bản", query: "Cửa tự động" },
      { name: "Cửa kính thủy lực lề sàn Häfele Đức", tag: "Häfele Đức", query: "Cửa kính lề sàn" },
    ]
  }
];

export const FEATURED_SPOTLIGHT_PRODUCT = {
  title: "CỬA CUỐN KHE THOÁNG BOSSDOOR",
  subtitle: "Công Nghệ CHLB Đức • Tự Động Đảo Chiều AI",
  badge: "NỔI BẬT NHẤT",
  image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=600&q=80",
  link: "/san-pham?search=Khe%20tho%C3%A1ng%20%C4%90%E1%BB%A9c",
  tag: "BẢO HÀNH 5 NĂM"
};

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileProdExpanded, setMobileProdExpanded] = useState(false);

  const navRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on route changes
  useEffect(() => {
    setMegaOpen(false);
    setMenu(false);
  }, [location]);

  useEffect(() => {
    const updatePill = () => {
      if (navRef.current) {
        const activeLink = navRef.current.querySelector("a.nav-link-item.active");
        if (activeLink) {
          const navRect = navRef.current.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();
          setPillStyle({
            left: `${linkRect.left - navRect.left}px`,
            width: `${linkRect.width}px`,
            opacity: 1,
          });
        } else {
          setPillStyle((prev) => ({ ...prev, opacity: 0 }));
        }
      }
    };

    updatePill();
    window.addEventListener("resize", updatePill);
    const timeout = setTimeout(updatePill, 50);
    return () => {
      window.removeEventListener("resize", updatePill);
      clearTimeout(timeout);
    };
  }, [location.pathname, megaOpen]);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setMegaOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 200);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">

        <Link className="logo" to="/" onClick={() => setMenu(false)}>
          <img src="/logo.png" alt="BOSS Đà Nẵng" className="logo-img" />
          <span className="logo-badge-dot"></span>
        </Link>

        <button
          className="mobile-menu"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle Navigation"
        >
          {menu ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${menu ? "open" : ""}`} ref={navRef}>
          {/* Smooth Sliding Pill Indicator */}
          <div
            className="nav-sliding-pill"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
              opacity: pillStyle.opacity,
            }}
          />

          <NavLink 
            to="/" 
            onClick={() => setMenu(false)} 
            end 
            className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
          >
            <span>TRANG CHỦ</span>
          </NavLink>

          <NavLink 
            to="/gioi-thieu" 
            onClick={() => setMenu(false)} 
            className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
          >
            <span>GIỚI THIỆU</span>
          </NavLink>

          {/* SẢN PHẨM WITH MEGA DROPDOWN MENU */}
          <div 
            className={`nav-dropdown-wrapper ${megaOpen ? "is-active" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink 
              to="/san-pham" 
              onClick={() => setMenu(false)} 
              className={({ isActive }) => (isActive ? "nav-link-item active has-dropdown" : "nav-link-item has-dropdown")}
            >
              <span>SẢN PHẨM</span>
              <ChevronDown size={14} className={`nav-arrow ${megaOpen ? "rotate" : ""}`} />
            </NavLink>

            <button 
              className="mobile-expand-btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMobileProdExpanded(!mobileProdExpanded);
              }}
              aria-label="Expand products list"
            >
              <ChevronDown size={16} className={mobileProdExpanded ? "rotate" : ""} />
            </button>

            {/* DESKTOP MEGA MENU */}
            <div className={`mega-dropdown-menu ${megaOpen ? "show" : ""}`}>
              <div className="mega-menu-inner">

                <div className="mega-menu-topbar">
                  <div className="mega-title-badge">
                    <Sparkles size={15} className="gold-sparkle" />
                    <strong>DANH MỤC SẢN PHẨM CHÍNH HÃNG BOSS ĐÀ NẴNG</strong>
                  </div>
                  <Link 
                    to="/san-pham" 
                    className="mega-view-all-btn"
                    onClick={() => setMegaOpen(false)}
                  >
                    Xem tất cả sản phẩm <ArrowRight size={13} />
                  </Link>
                </div>

                <div className="mega-layout-grid">
                  {/* 3 Categories Columns */}
                  <div className="mega-categories-wrap">
                    {PRODUCT_NAV_DATA.map((cat, cIdx) => (
                      <div key={cIdx} className="mega-cat-col">
                        <div className="mega-cat-header">
                          <div className="mega-icon-badge">{cat.icon}</div>
                          <Link 
                            to={`/san-pham?cat=${cat.categoryKey}`}
                            onClick={() => setMegaOpen(false)}
                            className="mega-cat-title"
                          >
                            {cat.title}
                          </Link>
                        </div>

                        <div className="mega-col-divider"></div>

                        <ul className="mega-sub-list">
                          {cat.items.map((sub, sIdx) => (
                            <li key={sIdx}>
                              <Link 
                                to={`/san-pham?search=${encodeURIComponent(sub.query)}`}
                                onClick={() => setMegaOpen(false)}
                                className="mega-sub-item"
                              >
                                <ChevronRight size={13} className="sub-arrow" />
                                <span className="sub-name">{sub.name}</span>
                                {sub.tag && <span className="sub-pill-tag">{sub.tag}</span>}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* 1 Visual Spotlight Featured Product Card */}
                  <div className="mega-spotlight-card">
                    <div className="spotlight-img-box">
                      <img src={FEATURED_SPOTLIGHT_PRODUCT.image} alt={FEATURED_SPOTLIGHT_PRODUCT.title} />
                      <span className="spotlight-badge-gold">{FEATURED_SPOTLIGHT_PRODUCT.badge}</span>
                      <span className="spotlight-tag-dark">{FEATURED_SPOTLIGHT_PRODUCT.tag}</span>
                    </div>
                    <div className="spotlight-details">
                      <h4>{FEATURED_SPOTLIGHT_PRODUCT.title}</h4>
                      <p>{FEATURED_SPOTLIGHT_PRODUCT.subtitle}</p>
                      <Link 
                        to={FEATURED_SPOTLIGHT_PRODUCT.link} 
                        onClick={() => setMegaOpen(false)}
                        className="btn-spotlight-action"
                      >
                        Khám phá ngay <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                </div>

                <div className="mega-menu-footer">
                  <div className="mega-guarantee">
                    <ShieldCheck size={16} className="gold-icon" />
                    <span>Lắp đặt & Bảo hành chính hãng BossDoor lên đến 5 năm tại Đà Nẵng</span>
                  </div>
                  <a href="tel:0904678323" className="mega-call-chip">
                    <PhoneCall size={13} /> Hotline tư vấn: <strong>0904 678 323</strong>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* MOBILE ACCORDION SUBLIST */}
          {mobileProdExpanded && (
            <div className="mobile-sub-accordion">
              {PRODUCT_NAV_DATA.map((cat, cIdx) => (
                <div key={cIdx} className="mobile-acc-group">
                  <div className="mobile-acc-title">{cat.title}</div>
                  <div className="mobile-acc-items">
                    {cat.items.map((sub, sIdx) => (
                      <Link 
                        key={sIdx}
                        to={`/san-pham?search=${encodeURIComponent(sub.query)}`}
                        onClick={() => {
                          setMenu(false);
                          setMobileProdExpanded(false);
                        }}
                        className="mobile-acc-link"
                      >
                        • {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <NavLink 
            to="/du-an" 
            onClick={() => setMenu(false)} 
            className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
          >
            <span>DỰ ÁN</span>
          </NavLink>

          <NavLink 
            to="/dich-vu" 
            onClick={() => setMenu(false)} 
            className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
          >
            <span>DỊCH VỤ</span>
          </NavLink>

          <NavLink 
            to="/tin-tuc" 
            onClick={() => setMenu(false)} 
            className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
          >
            <span>TIN TỨC</span>
          </NavLink>

          <NavLink 
            to="/lien-he" 
            onClick={() => setMenu(false)} 
            className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
          >
            <span>LIÊN HỆ</span>
          </NavLink>

        </nav>

        <a className="call-btn" href="tel:0904678323">
          <span className="call-btn-pulse"></span>
          <PhoneCall size={17} className="call-icon" />
          <span className="call-number">0904 678 323</span>
        </a>

      </div>
    </header>
  );
}


