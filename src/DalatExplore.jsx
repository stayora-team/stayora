import React from "react";

function DalatExplore({ onBack, onSearchStay }) {
  return (
    <div className="dalat-page">
      {/* =========================
          HEADER
      ========================== */}
      <header className="dalat-header">
        <div className="dalat-header-logo">
          <span>✦</span>
          STAYORA
        </div>

        <nav className="dalat-header-nav">
          <button type="button" onClick={onBack}>
            Trang chủ
          </button>

          <button type="button" className="active">
            Khám phá
          </button>

          <button type="button">
            Đặt phòng của tôi
          </button>

          <button type="button">
            ♡ Yêu thích
          </button>
        </nav>

        <div className="dalat-header-actions">
          <button type="button">Đăng nhập</button>
          <button type="button">Đăng ký</button>
        </div>
      </header>

      {/* =========================
          HERO
      ========================== */}
      <section className="dalat-hero">
        <div className="dalat-hero-overlay"></div>

        <div className="dalat-hero-content">
          <p className="dalat-eyebrow">
            STAYORA · KHÁM PHÁ ĐÀ LẠT
          </p>

          <h1>
            Một Đà Lạt
            <br />
            <em>để thương, để nhớ.</em>
          </h1>

          <p className="dalat-hero-description">
            Đà Lạt không chỉ là một điểm đến.
            <br />
            Đó là những khoảnh khắc khiến bạn muốn quay lại.
          </p>

          <button
            type="button"
            className="dalat-primary-button"
            onClick={onSearchStay}
          >
            Tìm chỗ nghỉ tại Đà Lạt
            <span>→</span>
          </button>
        </div>
      </section>

      {/* =========================
          INTRO
      ========================== */}
      <section className="dalat-section dalat-intro-section">
        <div className="dalat-intro-grid">
          <div className="dalat-intro-title">
            <p className="dalat-section-label">
              VỀ ĐÀ LẠT
            </p>

            <h2>
              Mỗi góc nhỏ
              <br />
              một câu chuyện.
            </h2>
          </div>

          <div className="dalat-intro-text">
            <p>
              Đà Lạt mang trong mình một vẻ đẹp rất riêng.
              Không quá ồn ào, không quá vội vã, thành phố
              này khiến người ta muốn chậm lại để tận hưởng
              từng khoảnh khắc.
            </p>

            <p>
              Một buổi sáng se lạnh, một tách cà phê nóng,
              những con đường quanh co giữa rừng thông hay
              một căn homestay nhỏ đủ để chuyến đi trở nên
              đáng nhớ.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          PLACES
      ========================== */}
      <section className="dalat-section">
        <div className="dalat-section-heading">
          <div>
            <p className="dalat-section-label">
              KHÁM PHÁ
            </p>

            <h2>Đà Lạt có gì đặc biệt?</h2>
          </div>

          <p>
            Mỗi khu vực mang đến một cách
            <br />
            trải nghiệm Đà Lạt khác nhau.
          </p>
        </div>

        <div className="dalat-place-grid">
          {/* CARD 1 */}
          <article className="dalat-place-card">
            <div className="dalat-place-image dalat-place-center">
              <span>01</span>
            </div>

            <div className="dalat-place-info">
              <h3>Trung tâm Đà Lạt</h3>

              <p>
                Gần chợ, hồ Xuân Hương và nhiều địa điểm
                quen thuộc của thành phố. Phù hợp cho những
                ai muốn thuận tiện khám phá Đà Lạt.
              </p>

              <button
                type="button"
                onClick={onSearchStay}
              >
                Xem chỗ nghỉ →
              </button>
            </div>
          </article>

          {/* CARD 2 */}
          <article className="dalat-place-card">
            <div className="dalat-place-image dalat-place-trai-mat">
              <span>02</span>
            </div>

            <div className="dalat-place-info">
              <h3>Trại Mát</h3>

              <p>
                Một không gian yên bình với rừng thông,
                khí hậu dễ chịu và nhịp sống chậm hơn.
              </p>

              <button
                type="button"
                onClick={onSearchStay}
              >
                Xem chỗ nghỉ →
              </button>
            </div>
          </article>

          {/* CARD 3 */}
          <article className="dalat-place-card">
            <div className="dalat-place-image dalat-place-ta-nung">
              <span>03</span>
            </div>

            <div className="dalat-place-info">
              <h3>Tà Nung</h3>

              <p>
                Nơi dành cho những ai yêu thiên nhiên,
                không gian rộng mở và những chuyến nghỉ
                dưỡng nhẹ nhàng.
              </p>

              <button
                type="button"
                onClick={onSearchStay}
              >
                Xem chỗ nghỉ →
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* =========================
          EXPERIENCE
      ========================== */}
      <section className="dalat-story-section">
        <div className="dalat-story-inner">
          <div className="dalat-story-heading">
            <p className="dalat-story-label">
              MỘT NGÀY Ở ĐÀ LẠT
            </p>

            <h2>
              Chậm lại một chút,
              <br />
              để cảm nhận nhiều hơn.
            </h2>
          </div>

          <div className="dalat-story-list">
            <div className="dalat-story-item">
              <span>01</span>

              <div>
                <h3>Buổi sáng</h3>

                <p>
                  Thức dậy trong không khí se lạnh,
                  thưởng thức một ly cà phê và bắt đầu
                  ngày mới thật chậm.
                </p>
              </div>
            </div>

            <div className="dalat-story-item">
              <span>02</span>

              <div>
                <h3>Buổi chiều</h3>

                <p>
                  Đi qua những con đường nhỏ, ngắm rừng
                  thông và tìm một góc bình yên cho riêng mình.
                </p>
              </div>
            </div>

            <div className="dalat-story-item">
              <span>03</span>

              <div>
                <h3>Buổi tối</h3>

                <p>
                  Trở về căn phòng ấm áp, nghỉ ngơi và
                  tận hưởng cảm giác không cần phải vội vàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="dalat-final-section">
        <p className="dalat-section-label">
          STAYORA · ĐÀ LẠT
        </p>

        <h2>
          Và biết đâu,
          <br />
          bạn sẽ muốn ở lại lâu hơn.
        </h2>

        <button
          type="button"
          className="dalat-primary-button"
          onClick={onSearchStay}
        >
          Khám phá chỗ nghỉ
          <span>→</span>
        </button>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="dalat-footer">
        <div className="dalat-footer-top">
          <div>
            <div className="dalat-footer-logo">
              ✦ STAYORA
            </div>

            <p>
              Một nơi để ở.
              <br />
              Một lý do để trở lại Đà Lạt.
            </p>
          </div>

          <div className="dalat-footer-column">
            <h4>STAYORA</h4>
            <span>Về chúng tôi</span>
            <span>Điều khoản</span>
            <span>Chính sách bảo mật</span>
          </div>

          <div className="dalat-footer-column">
            <h4>HỖ TRỢ</h4>
            <span>Trung tâm trợ giúp</span>
            <span>Liên hệ</span>
            <span>Câu hỏi thường gặp</span>
          </div>
        </div>

        <div className="dalat-copyright">
          © 2026 STAYORA. Nền tảng đặt phòng Đà Lạt.
        </div>
      </footer>
    </div>
  );
}

export default DalatExplore;