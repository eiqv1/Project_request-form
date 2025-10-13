import './Header.css';
import logo from '../assets/logo.png';
import seal from '../assets/seal.png';

function Header() {
  return (
    <>

    <header className="header">
      <div className="header-left">
        <img src={seal} alt="ตรา RMUTTO" className="seal" />
        <img src={logo} alt="RMUTTO Logo" className="logo" />
        {}<div className="title">{}
        </div>
      </div>

      <nav className="header-nav">
        <a href="/">หน้าหลัก</a>
        <a href="/request-form">ส่งแบบคำร้อง</a>
        <a href="/">ติดต่อ</a>
      </nav>

      <div className="login-section">
        <p>ยินดีต้อนรับ</p>
        <a href="/login">ลงชื่อเข้าใช้</a>
      </div>
    </header>

    </>
  );
}

export default Header