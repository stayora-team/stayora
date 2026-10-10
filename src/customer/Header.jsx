
import "./Header.css";

function Header({
  currentUser,
  onHome,
  onExplore,
  onMyBookings,
  onFavorites,
  onLogin,
  onRegister,
  onAccount,
  onLogout,
}) {
  return (
    <header className="header">
      {/* LOGO */}
      <button
        type="button"
        className="logo header-logo-button"
        onClick={onHome}
        aria-label="STAYORA - Trang chủ"
      >
        <span>✦</span>
        STAYORA
      </button>

      {/* MENU */}
      <nav className="nav" aria-label="Điều hướng chính">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onHome?.();
          }}
        >
          Trang chủ
        </a>

        <a
          href="#explore"
          onClick={(e) => {
            e.preventDefault();
            onExplore?.();
          }}
        >
          Khám phá
        </a>

        <a
          href="#bookings"
          onClick={(e) => {
            e.preventDefault();
            onMyBookings?.();
          }}
        >
          Đặt phòng của tôi
        </a>

        <a
          href="#favorite"
          onClick={(e) => {
            e.preventDefault();
            onFavorites?.();
          }}
        >
          ♡ Yêu thích
        </a>
      </nav>

      {/* TÀI KHOẢN */}
      <div className="header-actions">
        {currentUser ? (
          <>
            <button
              type="button"
              className="header-account-btn"
              onClick={onAccount}
            >
              Xin chào,{" "}
              <strong>{currentUser.fullName || "Bạn"}</strong>
            </button>

            <button
              type="button"
              className="login-btn"
              onClick={onLogout}
            >
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="login-btn"
              onClick={onLogin}
            >
              Đăng nhập
            </button>

            <button
              type="button"
              className="signup-btn"
              onClick={onRegister}
            >
              Đăng ký
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;