import { useState } from "react";
import Booking from "./Booking";

function StayDetail({ stay, onBack }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  if (!stay) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Không tìm thấy chỗ nghỉ</h2>

        <button
          type="button"
          onClick={onBack}
          style={{
            marginTop: "20px",
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          ← Quay lại
        </button>
      </div>
    );
  }

  function handleSelectRoom(roomName) {
    setSelectedRoom(roomName);
    setShowBooking(true);
  }

  if (showBooking) {
    return (
      <Booking
        stay={stay}
        selectedRoom={selectedRoom}
        onBack={() => setShowBooking(false)}
      />
    );
  }

  return (
    <div className="stay-detail-page">
      {/* NÚT QUAY LẠI */}
      <button
        type="button"
        onClick={onBack}
        style={{
          margin: "20px",
          padding: "10px 18px",
          border: "1px solid #222",
          borderRadius: "8px",
          background: "#fff",
          cursor: "pointer",
        }}
      >
        ← Quay lại danh sách
      </button>

      {/* ẢNH */}
      <div className="stay-detail-image">
        <img
          src={stay.image}
          alt={stay.name}
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* THÔNG TIN */}
      <div className="stay-detail-content">
        <span>{stay.type}</span>

        <h1>{stay.name}</h1>

        <p>
          📍 {stay.area}
        </p>

        <p>
          ⭐ {stay.rating} ({stay.reviews} đánh giá)
        </p>

        <p>
          Khám phá không gian lưu trú tại {stay.name},
          mang đến trải nghiệm phù hợp cho chuyến đi
          của bạn tại Đà Lạt.
        </p>

        {/* TIỆN NGHI */}
        <div>
          <h2>Tiện nghi</h2>

          <div>
            {stay.amenities?.map((amenity) => (
              <span
                key={amenity}
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  marginBottom: "10px",
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* PHÒNG */}
        <div style={{ marginTop: "30px" }}>
          <h2>Chọn phòng</h2>

          <div>
            {stay.rooms?.map((room, index) => {
              let roomPrice = stay.price;

              if (room === "Phòng Deluxe View Đồi") {
                roomPrice = stay.price + 200000;
              }

              if (room === "Phòng Family") {
                roomPrice = stay.price + 550000;
              }

              if (room === "Villa nguyên căn") {
                roomPrice = stay.price;
              }

              return (
                <div
                  key={room}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    padding: "20px",
                    marginBottom: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                  }}
                >
                  <div>
                    <h3>{room}</h3>

                    <p>
                      {new Intl.NumberFormat(
                        "vi-VN"
                      ).format(roomPrice)}
                      đ / đêm
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleSelectRoom(room)
                    }
                    style={{
                      padding: "10px 18px",
                      border: "none",
                      borderRadius: "8px",
                      background: "#111",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Chọn phòng
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StayDetail;