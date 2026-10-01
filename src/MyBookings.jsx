import React from "react";

function MyBookings({ onBack }) {
  const bookings = JSON.parse(
    localStorage.getItem("stayoraBookings") || "[]"
  );

  function formatPrice(price) {
    return Number(price || 0).toLocaleString("vi-VN") + "đ";
  }

  function formatDate(date) {
    if (!date) return "Chưa có";
    return new Date(date + "T00:00:00").toLocaleDateString("vi-VN");
  }

  return (
    <div className="my-bookings-page">
      <header className="search-header">
        <div className="search-logo">✦ STAYORA</div>

        <nav>
          <span>Trang chủ</span>
          <span>Khám phá</span>
          <span>Đặt phòng của tôi</span>
          <span>♡ Yêu thích</span>
        </nav>

        <div className="header-actions">
          <button>Đăng nhập</button>
          <button>Đăng ký</button>
        </div>
      </header>

      <main className="my-bookings-container">
        <button className="booking-back-button" onClick={onBack}>
          ← Quay lại
        </button>

        <div className="my-bookings-title">
          <p className="eyebrow">STAYORA · ĐÀ LẠT</p>
          <h1>Đặt phòng của tôi</h1>
          <p>Quản lý và xem lại những đặt phòng của bạn.</p>
        </div>

        {bookings.length === 0 ? (
          <div className="empty-bookings">
            <div className="empty-icon">⌂</div>

            <h2>Bạn chưa có đặt phòng nào</h2>

            <p>
              Những đặt phòng của bạn sẽ xuất hiện ở đây sau khi hoàn tất
              đặt phòng.
            </p>

            <button className="confirm-booking-button" onClick={onBack}>
              Khám phá chỗ nghỉ
            </button>
          </div>
        ) : (
          <div className="bookings-list">
            {bookings.map((booking) => {
              // Booking mới có booking.stay
              // Booking cũ chưa có thì dùng thông tin mặc định
              const stayName =
                booking.stay?.name || "The Pine House";

              const stayLocation =
                booking.stay?.area ||
                booking.stay?.location ||
                "Trung tâm Đà Lạt";

              return (
                <div
                  className="booking-history-card"
                  key={booking.bookingCode}
                >
                  <div className="booking-history-top">
                    <div>
                      <p className="eyebrow">MÃ ĐẶT PHÒNG</p>
                      <h2>{booking.bookingCode}</h2>
                    </div>

                    <span className="booking-status">
                      {booking.status || "Đã xác nhận"}
                    </span>
                  </div>

                  <div className="booking-history-main">
                    {/* CHỖ NGHỈ */}
                    <div>
                      <p className="history-label">Chỗ nghỉ</p>

                      <strong>{stayName}</strong>

                      <span>📍 {stayLocation}</span>
                    </div>

                    {/* PHÒNG */}
                    <div>
                      <p className="history-label">Phòng</p>

                      <strong>{booking.selectedRoom}</strong>
                    </div>

                    {/* THỜI GIAN */}
                    <div>
                      <p className="history-label">
                        Thời gian lưu trú
                      </p>

                      <strong>
                        {formatDate(booking.checkIn)} →{" "}
                        {formatDate(booking.checkOut)}
                      </strong>

                      <span>{booking.nights} đêm</span>
                    </div>

                    {/* SỐ KHÁCH */}
                    <div>
                      <p className="history-label">Số khách</p>

                      <strong>{booking.guests} khách</strong>
                    </div>

                    {/* TỔNG TIỀN */}
                    <div>
                      <p className="history-label">Tổng tiền</p>

                      <strong className="history-price">
                        {formatPrice(booking.totalPrice)}
                      </strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

export default MyBookings;