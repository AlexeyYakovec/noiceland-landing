import React from 'react'

import slide from '../assets/image/slide.png'

const MainCategory = () => {
  return (
    <div className='main-category'>
      <div className='main-item main-category-img'>
        <img src={slide} alt='' />
      </div>
      <div className='main-item main-category-desc'>
        <h5 className='Illustration'>Illustration</h5>
        <h1 className='main-category-desc-title'>Japan House opens in mountainside to foster peak creativity.</h1>
        <p className='main-category-desc-text'>
          Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam accusata, hinc justo falli id eum, ferri
          novum molestie eos cu.
        </p>
        <h5 className='main-category-desc-author'>By Reta Torphy</h5>
      </div>
    </div>
  )
}

export default MainCategory
