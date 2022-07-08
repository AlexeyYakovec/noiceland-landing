import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Featured = () => {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    axios('http://localhost:8080/featured').then(({ data }) => setFeatured(data))
  }, [])

  return (
    <div className='featured-grid'>
      {featured.map(({ category, info, author, imageUrl, id }) => (
        <div className='featured-item' key={id}>
          <div className='featured-img-block'>
            <img className='featured-item-img' src={imageUrl} alt='' />
          </div>
          <h5 className='featured-item-subject'>{category}</h5>
          <h2 className='featured-item-desc'>{info}</h2>
          <h5 className='featured-item-author'>{author}</h5>
        </div>
      ))}
    </div>
  )
}

export default Featured
