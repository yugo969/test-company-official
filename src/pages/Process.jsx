import React from 'react'
import './Process.css'

export default function Process() {
  const processes = [
    {
      step: '1',
      title: '設計',
      description: 'お客様の要求仕様に基づいた設計'
    },
    {
      step: '2',
      title: '材料調達',
      description: '選された材料の調達'
    },
    {
      step: '3',
      title: '加工',
      description: '高精度な加工技術'
    },
    {
      step: '4',
      title: '検査',
      description: '格な品質検査'
    },
    {
      step: '5',
      title: '出荷',
      description: '迅速な出荷体制'
    }
  ]

  return (
    <div className="process-page">
      <div className="container">
        <h2 className="section-title">製造工程</h2>
        <div className="process-steps">
          {processes.map((process, index) => (
            <div className="process-step" key={index}>
              <div className="step-number">{process.step}</div>
              <h3>{process.title}</h3>
              <p>{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
