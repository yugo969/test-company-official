import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>株式会社サンプル工業</h3>
            <p>〒103-0027 東京都中央区日本橋1-5-1</p>
            <p>TEL: 03-1234-5678</p>
            <p>FAX: 03-1234-5679</p>
            <p>Email: info@samplekogyo.co.jp</p>
          </div>
          <div className="footer-links">
            <div className="footer-nav">
              <h4>メニュー</h4>
              <ul>
                <li><a href="/">ホーム</a></li>
                <li><a href="/products">製品紹介</a></li>
                <li><a href="/process">製造工程</a></li>
                <li><a href="/news">ニュース</a></li>
                <li><a href="/contact">お問い合わせ</a></li>
              </ul>
            </div>
            <div className="footer-policy">
              <h4>ポリシー</h4>
              <ul>
                <li><a href="#">プライバシーポリシー</a></li>
                <li><a href="#">サイトマップ</a></li>
                <li><a href="#">採用情報</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} 株式会社サンプル工業 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
