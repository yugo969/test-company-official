import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <h2 className="section-title">お問い合わせ</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>連絡先情報</h3>
            <address>
              <p><i className="fas fa-map-marker-alt"></i> 000-0000 東京都サンプル区サンプル1-1-1</p>
              <p><i className="fas fa-phone"></i> 00-0000-0000</p>
              <p><i className="fas fa-fax"></i> 00-0000-0000</p>
              <p><i className="fas fa-envelope"></i> info@example.com</p>
            </address>
            <div className="map">
              <div className="map-placeholder">地図表示エリア</div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">お名前</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="company">会社名</label>
              <input type="text" id="company" />
            </div>
            <div className="form-group">
              <label htmlFor="email">メールアドレス</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">電話番号</label>
              <input type="tel" id="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">お問い合わせ内容</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">送信する</button>
          </form>
        </div>
      </div>
    </div>
  )
}
