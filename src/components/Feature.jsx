import React from 'react'
import './Feature.css'

export default function Feature() {
  const features = [
    {
      icon: 'fa-certificate',
      title: '高品質',
      description: 'ISO9001認証取得の品質管理システム'
    },
    {
      icon: 'fa-cogs',
      title: '高度な技術',
      description: '精密加工から組立まで一貫生産'
    },
    {
      icon: 'fa-clock',
      title: '短納期',
      description: '緊急対応可能な生産体制'
    }
  ]

  return (
    <section className="feature-section">
      <div className="container">
        <h2 className="section-title">当社の特徴</h2>
        <div className="features">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
