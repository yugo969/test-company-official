import React from 'react'
import './Products.css'

export default function Products() {
  const products = [
    {
      name: '自動車部品',
      description: 'エンジン周辺部品からシャシー部品まで',
      image: 'car-parts'
    },
    {
      name: '医療機器部品',
      description: '手術器具から診断機器部品まで',
      image: 'medical-parts'
    },
    {
      name: '産業機械部品',
      description: '工作機械用精密部品',
      image: 'machine-parts'
    }
  ]

  return (
    <div className="products-page">
      <div className="container">
        <h2 className="section-title">製品紹介</h2>
        <div className="products">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <div className="image-placeholder">{product.image}</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
