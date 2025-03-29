import React from 'react'
import './News.css'

export default function News() {
  const newsItems = [
    {
      date: '2023.10.01',
      title: '新工場が完成しました',
      category: 'お知らせ'
    },
    {
      date: '2023.09.15',
      title: '展示会に出展します',
      category: 'イベント'
    },
    {
      date: '2023.08.20',
      title: '夏季休業のお知らせ',
      category: 'お知らせ'
    },
    {
      date: '2023.07.10',
      title: '新製品発表会を開催',
      category: 'イベント'
    }
  ]

  return (
    <div className="news-page">
      <div className="container">
        <h2 className="section-title">ニュース</h2>
        <div className="news-list">
          {newsItems.map((item, index) => (
            <div className="news-item" key={index}>
              <div className="news-date">{item.date}</div>
              <div className="news-category">{item.category}</div>
              <div className="news-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
