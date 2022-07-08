import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [view, setView] = useState('')

  useEffect(() => {
    axios('http://localhost:8080/post').then(({ data }) => setPosts(data))
  }, [])

  return (
    <>
      <div className='posts-grid'>
        {posts
          .filter((item, i) => (view.length === 0 ? i < 8 : item))
          .map(({ category, info, author, imageUrl, id }) => (
            <div className='post-item' key={id}>
              <div className='post-img-block'>
                <img className='post-item-img' src={imageUrl} alt='' />
              </div>

              <h5 className='post-item-subject'>{category}</h5>
              <h2 className='post-item-desc'>{info}</h2>
              <h5 className='post-item-author'>{author}</h5>
            </div>
          ))}
      </div>
      <div className='posts-btn-block'>
        <button
          type='button'
          className='posts-btn'
          onClick={() => {
            view.length ? setView('') : setView('all')
          }}
          style={{ backgroundColor: view ? 'green' : 'transparent' }}>
          {view ? 'less' : 'view all tatest posts'}
        </button>
      </div>
    </>
  )
}

export default Posts
