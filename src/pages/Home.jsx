import React from 'react'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import './Home.css'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">会社概要</h2>
          <div className="about-content">
            <div className="about-text">
              <p>株式会社サンプル工業は1950年創業の精密部品メーカーです。</p>
              <p>高い技術力と品質管理で、自動車部品から医療機器部品まで、多様な分野に部品を供給しています。</p>
              <a href="/about" className="btn">詳しく見る</a>
            </div>
            <div className="about-image">
              <div className="image-placeholder">工場外観イメージ</div>
            </div>
          </div>
        </div>
      </section>
      <Feature />
    </>
  )
}
