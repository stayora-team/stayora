import React, { useState } from "react";
import BookingConfirmation from "./BookingConfirmation.jsx";

function Booking({ stay, selectedRoom, onBack }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(false);

  // =========================
  // GIÁ PHÒNG
  // =========================
  const roomPrices = {
    "Phòng Standard": 650000,
    "Phòng Deluxe View Đồi": 850000,
    "Phòng Family": 1200000,
    "Phòng Deluxe": 850000,
    "Villa nguyên căn": 1450000,
  };

  /*
    Nếu phòng có trong danh sách roomPrices
    thì lấy giá riêng.

    Nếu không có thì dùng giá cơ bản của stay.
  */
  const pricePerNight =
    roomPrices[selectedRoom] || stay?.price || 650000;

  // =========================
  // TÍNH SỐ ĐÊM
  // =========================
  function calculateNights() {
    if (!checkIn || !checkOut) {
      return 0;
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const difference = end - start;

    const nights =
      difference / (1000 * 60 * 60 * 24);

    return nights > 0 ? nights : 0;
  }

  const nights = calculateNights();

  const totalPrice =
    nights * pricePerNight;

  // =========================
  // FORMAT GIÁ
  // =========================
  function formatPrice(price) {
    return price.toLocaleString("vi-VN") + "đ";
  }

  // =========================
  // XÁC NHẬN ĐẶT PHÒNG
  // =========================
  function handleBooking() {
    if (!fullName || !phone || !email) {
      alert(
        "Vui lòng nhập đầy đủ thông tin khách hàng."
      );
      return;
    }

    if (!checkIn || !checkOut) {
      alert(
        "Vui lòng chọn ngày nhận và ngày trả phòng."
      );
      return;
    }

    if (nights <= 0) {
      alert(
        "Ngày trả phòng phải sau ngày nhận phòng."
      );
      return;
    }

    setShowConfirmation(true);
  }

  // =========================
  // TRANG XÁC NHẬN
  // =========================
  if (showConfirmation) {
    return (
      <BookingConfirmation
        stay={stay}
        fullName={fullName}
        phone={phone}
        email={email}
        selectedRoom={selectedRoom}
        checkIn={checkIn}
        checkOut={checkOut}
        guests={guests}
        nights={nights}
        totalPrice={totalPrice}
        note={note}
      />
    );
  }

  // =========================
  // BOOKING PAGE
  // =========================
  return (
    <div className="booking-page">
      {/* =========================
          HEADER
      ========================== */}
      <header className="search-header">
        <div className="search-logo">
          ✦ STAYORA
        </div>

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

      {/* =========================
          MAIN
      ========================== */}
      <main className="booking-container">
        {/* QUAY LẠI */}
        <button
          type="button"
          className="booking-back"
          onClick={() => {
            if (onBack) {
              onBack();
            }
          }}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: onBack ? "pointer" : "default",
          }}
        >
          ← Quay lại chi tiết chỗ nghỉ
        </button>

        <div className="booking-title">
          <p className="eyebrow">
            STAYORA · ĐÀ LẠT
          </p>

          <h1>Đặt phòng</h1>

          <p>
            Hoàn tất thông tin để xác nhận đặt phòng
            của bạn.
          </p>
        </div>

        <div className="booking-layout">
          {/* =========================
              FORM THÔNG TIN
          ========================== */}
          <section className="booking-form">
            {/* THÔNG TIN LƯU TRÚ */}
            <div className="booking-section">
              <h2>Thông tin lưu trú</h2>

              <div className="form-row">
                <div className="form-group">
                  <label>Nhận phòng</label>

                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) =>
                      setCheckIn(e.target.value)
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Trả phòng</label>

                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) =>
                      setCheckOut(e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Số khách</label>

                <select
                  value={guests}
                  onChange={(e) =>
                    setGuests(
                      Number(e.target.value)
                    )
                  }
                >
                  <option value={1}>
                    1 khách
                  </option>

                  <option value={2}>
                    2 khách
                  </option>

                  <option value={3}>
                    3 khách
                  </option>

                  <option value={4}>
                    4 khách
                  </option>
                </select>
              </div>
            </div>

            {/* THÔNG TIN KHÁCH HÀNG */}
            <div className="booking-section">
              <h2>Thông tin khách hàng</h2>

              <div className="form-group">
                <label>Họ và tên</label>

                <input
                  type="text"
                  placeholder="Nhập họ và tên"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    Số điện thoại
                  </label>

                  <input
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>

                  <input
                    type="email"
                    placeholder="Nhập email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Ghi chú</label>

                <textarea
                  placeholder="Yêu cầu đặc biệt (không bắt buộc)"
                  value={note}
                  onChange={(e) =>
                    setNote(e.target.value)
                  }
                />
              </div>
            </div>

            {/* THANH TOÁN */}
            <div className="booking-section">
              <h2>
                Phương thức thanh toán
              </h2>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />

                <span>
                  <strong>
                    Thanh toán khi nhận phòng
                  </strong>

                  <small>
                    Thanh toán trực tiếp tại
                    chỗ nghỉ.
                  </small>
                </span>
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                />

                <span>
                  <strong>
                    Thanh toán online
                  </strong>

                  <small>
                    Thanh toán qua thẻ hoặc ví
                    điện tử.
                  </small>
                </span>
              </label>
            </div>
          </section>

          {/* =========================
              TÓM TẮT ĐẶT PHÒNG
          ========================== */}
          <aside className="booking-summary">
            <div className="summary-card">
              <p className="eyebrow">
                CHỖ NGHỈ CỦA BẠN
              </p>

              {/* DỮ LIỆU ĐỘNG */}
              <h2>
                {stay?.name ||
                  "Chưa xác định chỗ nghỉ"}
              </h2>

              <p className="summary-location">
                📍{" "}
                {stay?.area ||
                  stay?.location ||
                  "Đà Lạt"}
              </p>

              <div className="summary-room">
                <strong>
                  {selectedRoom ||
                    "Chưa chọn phòng"}
                </strong>

                <span>
                  {formatPrice(pricePerNight)}
                  {" / đêm"}
                </span>
              </div>

              <div className="summary-line">
                <span>Nhận phòng</span>

                <strong>
                  {checkIn || "Chưa chọn"}
                </strong>
              </div>

              <div className="summary-line">
                <span>Trả phòng</span>

                <strong>
                  {checkOut || "Chưa chọn"}
                </strong>
              </div>

              <div className="summary-line">
                <span>Số khách</span>

                <strong>
                  {guests} khách
                </strong>
              </div>

              <div className="summary-line">
                <span>Số đêm</span>

                <strong>
                  {nights} đêm
                </strong>
              </div>

              <div className="summary-total">
                <span>Tổng cộng</span>

                <strong>
                  {formatPrice(totalPrice)}
                </strong>
              </div>

              <button
                type="button"
                className="confirm-booking-button"
                onClick={handleBooking}
              >
                Xác nhận đặt phòng
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Booking;