
import React from "react";
import "../MyBookings.css";

function MyBookings({ onBack, currentUser }) {
  // LẤY DANH SÁCH ĐẶT PHÒNG
  let allBookings = [];

  try {
    const savedBookings = localStorage.getItem("stayoraBookings");

    allBookings = savedBookings ? JSON.parse(savedBookings) : [];

    if (!Array.isArray(allBookings)) {
      allBookings = [];
    }
  } catch (error) {
    console.error("Không thể đọc danh sách đặt phòng:", error);
    allBookings = [];
  }

  // CHỈ HIỂN THỊ ĐẶT PHÒNG CỦA NGƯỜI DÙNG HIỆN TẠI
  const bookings = currentUser?.id
    ? allBookings.filter(
        (booking) =>
          String(booking.userId) === String(currentUser.id)
      )
    : [];

  // ĐỊNH DẠNG GIÁ
  function formatPrice(price) {
    return Number(price || 0).toLocaleString("vi-VN") + "đ";
  }

  // ĐỊNH DẠNG NGÀY
  function formatDate(date) {
    if (!date) return "Chưa có";

    const parsedDate = new Date(date + "T00:00:00");

    if (Number.isNaN(parsedDate.getTime())) {
      return "Chưa có";
    }

    return parsedDate.toLocaleDateString("vi-VN");
  }

  return (
    <div className="my-bookings-page">
      <main className="my-bookings-container">
        <button
          type="button"
          className="booking-back-button"
          onClick={onBack}
        >
          ← Quay lại
        </button>

        <div className="my-bookings-title">
          <p className="eyebrow">STAYORA · ĐÀ LẠT</p>

          <h1>Đặt phòng của tôi</h1>

          <p>
            Quản lý và xem lại những đặt phòng của bạn.
          </p>
        </div>

        {bookings.length === 0 ? (
          <div className="empty-bookings">
            <div className="empty-icon">⌂</div>

            <h2>Bạn chưa có đặt phòng nào</h2>

            <p>
              Những đặt phòng của bạn sẽ xuất hiện ở đây
              sau khi hoàn tất đặt phòng.
            </p>

            <button
              type="button"
              className="confirm-booking-button"
              onClick={onBack}
            >
              Khám phá chỗ nghỉ
            </button>
          </div>
        ) : (
          <div className="bookings-list">
            {bookings.map((booking, index) => {
              const stayName =
                booking.stay?.name || "The Pine House";

              const stayLocation =
                booking.stay?.area ||
                booking.stay?.location ||
                "Trung tâm Đà Lạt";

              return (
                <div
                  className="booking-history-card"
                  key={booking.bookingCode || `${booking.userId}-${index}`}
                >
                  <div className="booking-history-top">
                    <div>
                      <p className="eyebrow">MÃ ĐẶT PHÒNG</p>
                      <h2>
                        {booking.bookingCode || "Chưa có mã"}
                      </h2>
                    </div>
                  </div>

                  <div className="booking-history-main">
                    <div className="booking-stay-section">
                      <div className="booking-stay-image">
                        {booking.stay?.image ? (
                          <img
                            src={booking.stay.image}
                            alt={stayName}
                          />
                        ) : (
                          <div className="booking-image-placeholder">
                            ⌂
                          </div>
                        )}
                      </div>

                      <div className="booking-stay-info">
                        <p className="history-label">Chỗ nghỉ</p>
                        <strong>{stayName}</strong>
                        <span>📍 {stayLocation}</span>
                      </div>
                    </div>

                    <div className="booking-info-item">
                      <p className="history-label">Phòng</p>
                      <strong>
                        {booking.selectedRoom || "Chưa có thông tin"}
                      </strong>
                    </div>

                    <div className="booking-info-item">
                      <p className="history-label">
                        Thời gian lưu trú
                      </p>

                      <strong>
                        {formatDate(booking.checkIn)} →{" "}
                        {formatDate(booking.checkOut)}
                      </strong>

                      <span>{booking.nights || 0} đêm</span>
                    </div>

                    <div className="booking-info-item">
                      <p className="history-label">Số khách</p>
                      <strong>{booking.guests || 0} khách</strong>
                    </div>

                    <div className="booking-price-section">
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