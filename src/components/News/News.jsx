import React, { useState, useEffect } from 'react'
import axios from 'axios'

const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios('http://localhost:8080/news').then(({ data }) => setNews(data))
  }, [])

  return (
    <div className='news-grid'>
      {news.map(({ category, info, author, imageUrl, id }) => (
        <div className='news-item' key={id}>
          <img className='news-item-img' src={imageUrl} alt='' />
          <h5 className='news-item-subject'>{category}</h5>
          <h2 className='news-item-desc'>{info}</h2>
          <h5 className='news-item-author'>{author}</h5>
        </div>
      ))}
    </div>
  )
}

export default News
