import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <h1 className="logo">
            <Link to="/">株式会社サンプル工業</Link>
          </h1>
          <nav className="nav">
            <ul>
              <li><Link to="/">ホーム</Link></li>
              <li><Link to="/products">製品紹介</Link></li>
              <li><Link to="/process">製造工程</Link></li>
              <li><Link to="/news">ニュース</Link></li>
              <li><Link to="/contact">お問い合わせ</Link></li>
            </ul>
          </nav>
          <button className="mobile-menu-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  )
}
