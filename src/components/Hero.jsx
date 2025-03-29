import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>精密部品製造のパイオニア</h2>
          <p>70年以上の歴史と確かな技術で、高品質な部品を提供しています</p>
          <a href="/contact" className="btn">お問い合わせ</a>
        </div>
      </div>
    </section>
  )
}
