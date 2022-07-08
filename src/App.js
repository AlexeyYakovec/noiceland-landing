import React from 'react'

// components
import Header from './Layout/Header'

import MainCategory from './components/MainCategory'
import Posts from './components/Posts/Posts'
import News from './components/News/News'
import Footer from './Layout/Footer'
import Featured from './components/FeaturedPosts/Featured'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <main className='main'>
          <MainCategory />
          <News />
          <Posts />
          <Featured />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
